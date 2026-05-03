import { useEffect, useRef } from 'react';
import { ArrowRight, Github, Mail, MapPin } from 'lucide-react';
import { person } from '../data';
import HeroImage from './HeroImage';

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null);

    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="relative flex items-start justify-center overflow-visible pt-20"
        >
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-16 pb-0 overflow-visible">
                <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                    {/* Left: Text */}
                    <div className="order-2 lg:order-1 lg:w-[45%] space-y-6 sm:space-y-8 animate-fadeInUp">
                        {/* Name */}
                        <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-7xl font-bangers leading-[1] tracking-widest text-white uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] lg:drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] relative z-10 break-words">
                            KAZI<br />
                            <span className="text-[#b8ff00] comic-text-stroke">MAHATHIR</span><br />
                            RAHMAN
                        </h1>

                        {/* Title Box */}
                        <div className="bg-white border-4 border-black p-3 sm:p-4 inline-block transform rotate-1 shadow-[4px_4px_0px_0_rgba(184,255,0,1)] lg:shadow-[6px_6px_0px_0_rgba(184,255,0,1)] max-w-full">
                            <p className="text-black text-sm sm:text-base lg:text-lg font-bold tracking-widest uppercase break-words">
                                Entrepreneur · AI Researcher · Tech Founder
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-white text-base sm:text-lg lg:text-lg leading-relaxed max-w-lg font-medium hand-marker break-words">
                            // CEO of <span className="text-[#00e5ff] font-black underline decoration-4 underline-offset-4">ZynoTech Intelligence</span> & CTO of <span className="text-[#00e5ff] font-black underline decoration-4 underline-offset-4">TalkSign</span>. Building AI-driven futures from Dhaka to the world.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2 sm:pt-4">
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

                    {/* Right: Interactive Image */}
                    <div className="order-1 lg:order-2 relative w-full h-[500px] sm:h-[650px] lg:h-[800px] lg:w-[55%] mx-auto animate-fadeIn flex items-start justify-center z-20 overflow-visible lg:-mt-10" style={{ animationDelay: '0.2s' }}>
                        <HeroImage />
                    </div>
                </div>
            </div>

        </section>
    );
}
