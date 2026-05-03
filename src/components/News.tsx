import { news } from '../data';
import { ExternalLink, ArrowRight } from 'lucide-react';

const tagColor: Record<string, string> = {
    'Company Launch': '#b8ff00',
    'Company Milestone': '#00e5ff',
    Research: '#ff0066',
    Career: '#a78bfa',
};

export default function News() {
    return (
        <section id="news" className="relative py-32 bg-[#2A2A2A] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-2 bg-white border-2 border-black" />
                        <span className="text-white font-bangers text-3xl tracking-widest drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">PRESS & MILESTONES</span>
                    </div>
                    <h2 className="section-title">LATEST NEWS</h2>
                </div>

                {/* News grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {news.map((item, i) => {
                        const color = tagColor[item.tag] || '#b8ff00';
                        return (
                            <div
                                key={item.title}
                                className="news-card group animate-fadeInUp flex flex-col h-full"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden border-b-4 border-black">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                    {/* Tag Sticker */}
                                    <div 
                                        className="absolute top-4 left-4 font-bangers text-xl text-black px-4 py-1 border-2 border-black transform -rotate-2 shadow-[2px_2px_0px_0_rgba(0,0,0,1)] z-10"
                                        style={{ backgroundColor: color }}
                                    >
                                        {item.tag.toUpperCase()}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                        <span className="text-white font-bangers text-lg tracking-widest flex items-center gap-2">
                                            VIEW STORY <ExternalLink size={16} />
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 h-full flex flex-col bg-white flex-1">
                                    {/* Date Sticker */}
                                    <div className="mb-4">
                                        <span className="text-black/50 font-black text-[10px] tracking-[0.3em] uppercase bg-black/5 px-2 py-1">
                                            RELEASED: {item.date}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bangers text-black leading-[1.1] uppercase tracking-wide mb-6 group-hover:text-[#ff0066] transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>

                                    {/* Body */}
                                    <p className="text-black/70 font-medium leading-relaxed flex-1 italic border-l-4 border-black/10 pl-4 mb-8">
                                        "{item.body}"
                                    </p>

                                    {/* Action Button */}
                                    <a 
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto w-full py-3 bg-black text-white font-bangers text-xl tracking-widest flex items-center justify-center gap-3 hover:bg-[#ff0066] transition-colors border-2 border-black"
                                    >
                                        READ ARTICLE <ArrowRight size={20} />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
