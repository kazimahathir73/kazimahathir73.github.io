import { Suspense, useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
    useGLTF, 
    Environment, 
    ContactShadows, 
    Html, 
    useProgress,
    PerspectiveCamera,
    useAnimations,
    OrbitControls
} from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, ToneMapping, BrightnessContrast, SSAO } from '@react-three/postprocessing';
import * as THREE from 'three';

function Loader() {
    const { progress } = useProgress();
    return (
        <Html center>
            <div className="flex flex-col items-center justify-center w-[300px] gap-6">
                <div className="w-full flex flex-col items-start gap-2">
                    <div className="flex justify-between w-full">
                        <span className="text-[10px] text-[#b8ff00] font-black tracking-[0.5em] uppercase">
                            LOADING ASSETS
                        </span>
                        <span className="text-[10px] text-[#b8ff00] font-black tracking-[0.1em]">
                            {Math.round(progress)}%
                        </span>
                    </div>
                    <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden border border-white/5">
                        <div 
                            className="h-full bg-gradient-to-r from-[#b8ff00] to-[#00e5ff] shadow-[0_0_15px_#b8ff00] transition-all duration-300 ease-out" 
                            style={{ width: `${progress}%` }} 
                        />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#b8ff00] animate-ping" />
                    <span className="text-[8px] text-gray-500 font-bold tracking-[0.3em] uppercase">
                        Compiling Shaders & Materials
                    </span>
                </div>
            </div>
        </Html>
    );
}

function Model({ url }: { url: string }) {
    const { scene, animations } = useGLTF(url);
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
        if (actions && Object.keys(actions).length > 0) {
            const idleAction = actions[Object.keys(actions)[0]] || Object.values(actions)[0];
            if (idleAction) {
                idleAction.reset().fadeIn(0.5).play();
            }
        }
    }, [actions]);
    
    useMemo(() => {
        scene.traverse((obj) => {
            if ((obj as THREE.Mesh).isMesh) {
                const mesh = obj as THREE.Mesh;
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                
                if (mesh.material instanceof THREE.MeshStandardMaterial) {
                    // Refined for natural realism, not glossiness
                    mesh.material.envMapIntensity = 1.0;
                    if (mesh.material.map) {
                        mesh.material.map.anisotropy = 16;
                        mesh.material.map.encoding = THREE.sRGBEncoding;
                    }
                    
                    if (mesh.name.toLowerCase().includes('skin') || mesh.name.toLowerCase().includes('head')) {
                        // Natural skin texture - rougher to prevent plastic shine
                        mesh.material.roughness = 0.65;
                        mesh.material.metalness = 0;
                        // Subsurface scattering simulation (warmer skin tone)
                        mesh.material.emissive = new THREE.Color("#2a1205");
                        mesh.material.emissiveIntensity = 0.1;
                    }
                    if (mesh.name.toLowerCase().includes('hair')) {
                        // Deep black matte hair
                        mesh.material.roughness = 0.7;
                        mesh.material.metalness = 0;
                        mesh.material.color = new THREE.Color("#050505");
                    }
                    if (mesh.name.toLowerCase().includes('eye')) {
                        mesh.material.roughness = 0.05;
                        mesh.material.envMapIntensity = 2.5;
                    }
                }
            }
        });
    }, [scene]);

    return (
        <primitive 
            object={scene} 
            // Slid down based on zoom to keep head-to-chest framing
            position={[0, -2.90, 0]} 
            scale={1.85} 
            rotation={[0, 0.4, 0]} 
        />
    );
}

export default function Model3D() {
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full h-full relative overflow-hidden bg-transparent">
            <Canvas 
                shadows 
                onCreated={({ gl }) => {
                    gl.setClearAlpha(0);
                }}
                gl={{ 
                    antialias: true, 
                    toneMapping: THREE.ACESFilmicToneMapping,
                    toneMappingExposure: 0.85,
                    powerPreference: "high-performance",
                    alpha: true,
                    preserveDrawingBuffer: true
                }}
                dpr={[1, 2]}
            >
                {/* Super Zoom for Mobile: FOV 16 to cover only chest and face */}
                <PerspectiveCamera 
                    makeDefault 
                    position={typeof window !== 'undefined' && window.innerWidth < 768 ? [0, 2.55, 3.2] : [0, 2.3, 2.35]} 
                    fov={typeof window !== 'undefined' && window.innerWidth < 768 ? 16 : 20} 
                />
                
                <Suspense fallback={<Loader />}>
                    <Model url="/assets/me.glb" />
                    
                    <OrbitControls 
                        enableZoom={false} 
                        enablePan={false} 
                        minPolarAngle={Math.PI / 2} 
                        maxPolarAngle={Math.PI / 2} 
                        minAzimuthAngle={-Math.PI / 2} 
                        maxAzimuthAngle={Math.PI / 2}
                        target={[0, 0, 0]}
                        makeDefault
                    />

                    {/* CINEMATIC DRAMATIC LIGHTING */}
                    <Environment preset="city" intensity={0.2} />
                    
                    <ambientLight intensity={0.2} color="#ffd2a6" />
                    
                    {/* Strong Key Light from the LEFT */}
                    <directionalLight 
                        position={[-6, 2, 4]} 
                        intensity={3.0} 
                        color="#ffcc99" 
                        castShadow 
                        shadow-mapSize={[1024, 1024]}
                    />
                    
                    {/* Weak Fill Light from the RIGHT to allow shadows */}
                    <directionalLight 
                        position={[6, 0, 2]} 
                        intensity={0.4} 
                        color="#ffffff" 
                    />
                    
                    {/* Rim Light - Highlighting the silhouette */}
                    <pointLight 
                        position={[0, 5, -5]} 
                        intensity={2.0} 
                        color="#fff" 
                    />
                    
                    {/* Bounce Light from below to soften jawline */}
                    <pointLight 
                        position={[0, -2, 2]} 
                        intensity={0.8} 
                        color="#ffcc99" 
                    />

                    <ContactShadows 
                        position={[0, -2.90, 0]}
                        opacity={0.2} 
                        scale={12} 
                        blur={2.5} 
                        far={5} 
                    />


                    <EffectComposer multisampling={4}>
                        {/* Removed SSAO and Bloom to prevent boundary artifacts with transparency */}
                        <BrightnessContrast brightness={0.05} contrast={0.25} />
                        <ToneMapping mode={THREE.ACESFilmicToneMapping} />
                    </EffectComposer>
                </Suspense>
            </Canvas>
        </div>
    );
}

useGLTF.preload('/assets/me.glb');
