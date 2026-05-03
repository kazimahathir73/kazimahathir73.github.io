import { useEffect, useRef } from 'react';
import { ArrowRight, Github, Mail, MapPin } from 'lucide-react';
import { person } from '../data';
import Model3D from './Model3D';

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null);

    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-16">
                <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
                    {/* Left: Text */}
                    <div className="space-y-8 animate-fadeInUp">
                        {/* Name */}
                        <h1 ref={titleRef} className="text-6xl sm:text-7xl lg:text-8xl font-bangers leading-[0.9] tracking-widest text-white uppercase drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] relative z-10">
                            KAZI<br />
                            <span className="text-[#b8ff00] comic-text-stroke">MAHATHIR</span><br />
                            RAHMAN
                        </h1>

                        {/* Title Box */}
                        <div className="bg-white border-4 border-black p-4 inline-block transform rotate-1 shadow-[6px_6px_0px_0_rgba(184,255,0,1)]">
                            <p className="text-black text-lg sm:text-xl font-bold tracking-widest uppercase">
                                Entrepreneur · AI Researcher · Tech Founder
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-white text-xl leading-relaxed max-w-lg font-medium hand-marker">
                            // CEO of <span className="text-[#b8ff00] font-black underline decoration-4 underline-offset-4">Zynotech Intelligence</span> & CTO of <span className="text-[#00e5ff] font-black underline decoration-4 underline-offset-4">TalkSign</span>. Building AI-driven futures from Dhaka to the world.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-6 pt-4">
                            <a
                                href="https://www.crunchbase.com/person/kazi-mahathir-rahman"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-comic-action bg-[#b8ff00] text-black hover:bg-white flex items-center justify-center gap-3 text-xl"
                            >
                                CRUNCHBASE PROFILE <ArrowRight className="w-6 h-6 border-2 border-transparent rounded-full" />
                            </a>
                            <button
                                onClick={() => scrollTo('#contact')}
                                className="btn-comic-action bg-white text-black hover:bg-[#ff0066] hover:text-white flex items-center justify-center text-xl"
                            >
                                COLLABORATE
                            </button>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-6 pt-6">
                            <a href={person.github} target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center transform hover:scale-110 hover:-rotate-6 transition-all shadow-[4px_4px_0px_0_rgba(0,0,0,1)]">
                                <Github size={24} className="text-black" />
                            </a>
                            <a href={`mailto:${person.email}`}
                                className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center transform hover:scale-110 hover:rotate-6 transition-all shadow-[4px_4px_0px_0_rgba(0,0,0,1)]">
                                <Mail size={24} className="text-black" />
                            </a>
                            <div className="flex items-center gap-2 bg-white border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0_rgba(0,0,0,1)] font-bangers text-xl text-black">
                                <MapPin size={20} className="text-[#ff0066]" />
                                DHAKA, BD
                            </div>
                        </div>
                    </div>

                    {/* Right: 3D Model */}
                    <div className="relative w-full h-[600px] lg:h-[800px] animate-fadeIn flex items-center justify-center z-20" style={{ animationDelay: '0.2s' }}>
                        <Model3D />
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce z-10">
                <span className="font-bangers text-2xl text-white tracking-widest drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">SCROLL DOWN</span>
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-[#b8ff00] drop-shadow-[0_4px_0_rgba(0,0,0,1)]" />
            </div>
        </section>
    );
}
