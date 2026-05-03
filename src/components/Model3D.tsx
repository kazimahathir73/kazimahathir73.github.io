import { Suspense, useRef, useMemo, useEffect } from 'react';
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
                        // Matte but bright skin
                        mesh.material.roughness = 0.5;
                        mesh.material.metalness = 0;
                        // Brighter emissive to counter the faded look
                        mesh.material.emissive = new THREE.Color("#221100");
                        mesh.material.emissiveIntensity = 0.2;
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
            // Nudged down slightly as requested (0.05 decrease from -2.85 to -2.90)
            position={[0, -2.90, 0]} 
            scale={1.85} 
            rotation={[0, 0.4, 0]} 
        />
    );
}

export default function Model3D() {
    return (
        <div className="w-full h-full min-h-[400px] lg:min-h-[600px] relative overflow-hidden bg-transparent">
            <Canvas 
                shadows 
                onCreated={({ gl }) => {
                    gl.setClearAlpha(0);
                }}
                gl={{ 
                    antialias: true, 
                    toneMapping: THREE.ACESFilmicToneMapping,
                    toneMappingExposure: 1.2,
                    powerPreference: "high-performance",
                    alpha: true,
                    preserveDrawingBuffer: true
                }}
                dpr={[1, 2]}
            >
                {/* Much more zoom (fov 27 -> 20) */}
                <PerspectiveCamera makeDefault position={[0, 2.3, 2.35]} fov={20} />
                
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

                    {/* BRIGHT STUDIO LIGHTING SETUP */}
                    <Environment preset="apartment" intensity={1.5} />
                    
                    <ambientLight intensity={0.8} />
                    
                    {/* Powerful Key Light for high-impact professional look */}
                    <spotLight 
                        position={[6, 5, 5]} 
                        angle={0.4} 
                        penumbra={1} 
                        intensity={4.0} 
                        color="#ffffff" 
                        castShadow 
                        shadow-mapSize={[2048, 2048]}
                    />
                    
                    {/* Balanced Fill Light */}
                    <directionalLight 
                        position={[-5, 2, 2]} 
                        intensity={1.2} 
                        color="#ffffff" 
                    />
                    
                    {/* Sharp Rim Light */}
                    <pointLight 
                        position={[0, 2, -5]} 
                        intensity={2.0} 
                        color="#ffffff" 
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
