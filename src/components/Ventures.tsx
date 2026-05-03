import { ExternalLink, MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { ventures } from '../data';

export default function Ventures() {
    return (
        <section id="ventures" className="relative py-32 bg-[#2A2A2A] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Section header */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-2 bg-[#b8ff00] border-2 border-black" />
                        <span className="text-[#b8ff00] font-bangers text-3xl tracking-widest drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">FEATURED</span>
                    </div>
                    <h2 className="section-title">VENTURES</h2>
                    <p className="text-white/80 mt-6 max-w-xl text-xl leading-relaxed font-medium hand-marker">
                        // BUILDING THE FUTURE OF INTELLIGENT SYSTEMS
                    </p>
                </div>

                {/* Venture cards */}
                <div className="grid gap-12">
                    {ventures.map((venture, i) => (
                        <div 
                            key={venture.name} 
                            className="venture-card group flex flex-col md:flex-row animate-fadeInUp"
                            style={{ animationDelay: `${i * 0.15}s` }}
                        >
                            {/* Left Side: Visual / Accent */}
                            <div className="w-full md:w-16 flex items-center justify-center p-4 border-b-4 md:border-b-0 md:border-r-4 border-black" style={{ backgroundColor: venture.accent }}>
                                <span className="font-bangers text-4xl text-black -rotate-90 hidden md:block whitespace-nowrap">
                                    {venture.type}
                                </span>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 p-8 sm:p-10 flex flex-col md:flex-row gap-10">
                                <div className="flex-1 space-y-6">
                                    <div className="flex items-center gap-6">
                                        <div className="w-20 h-20 bg-black p-2 border-4 border-black flex items-center justify-center flex-shrink-0 transform -rotate-3 group-hover:rotate-0 transition-transform">
                                            <img
                                                src={venture.logo}
                                                alt={venture.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bangers text-black tracking-wider uppercase mb-1 break-words">
                                                {venture.name}
                                            </h3>
                                            <div className="flex flex-wrap items-center gap-4 text-[10px] sm:text-xs font-bold tracking-widest text-black/60 uppercase">
                                                <span className="flex items-center gap-2">
                                                    <Calendar size={14} className="text-black" /> {venture.since}
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <MapPin size={14} className="text-black" /> {venture.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-black text-lg leading-relaxed font-medium border-l-4 border-black/10 pl-6 italic">
                                        "{venture.description}"
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        {venture.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-black tracking-widest px-4 py-1.5 bg-black text-white transform hover:scale-110 transition-transform">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Link / Action */}
                                <div className="flex items-end justify-between md:flex-col md:justify-center border-t-4 md:border-t-0 md:border-l-4 border-black/5 pt-6 md:pt-0 md:pl-10">
                                    <a
                                        href={venture.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-comic-action text-xl py-3 px-8"
                                        style={{ backgroundColor: venture.accent }}
                                    >
                                        VISIT SITE
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
