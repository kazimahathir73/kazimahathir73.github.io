import { FileText, ArrowRight, BookOpen } from 'lucide-react';
import { research } from '../data';

export default function Research() {
    return (
        <section id="research" className="relative py-32 bg-[#2A2A2A] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-2 bg-[#ff0066] border-2 border-black" />
                        <span className="text-[#ff0066] font-bangers text-3xl tracking-widest drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">PUBLICATIONS</span>
                    </div>
                    <h2 className="section-title">RESEARCH</h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {research.map((paper, i) => (
                        <div 
                            key={paper.title} 
                            className="research-card group animate-fadeInUp"
                            style={{ animationDelay: `${i * 0.15}s` }}
                        >
                            <div className="p-6 sm:p-8 flex flex-col h-full">
                                <div className="flex items-start justify-between mb-5">
                                    <div className="p-3 bg-black border-4 border-black -rotate-6 group-hover:rotate-0 transition-transform">
                                        <BookOpen className="text-[#ff0066] w-6 h-6" />
                                    </div>
                                    <span className="font-bangers text-lg text-black/40 tracking-widest">
                                        {paper.year}
                                    </span>
                                </div>

                                <div className="space-y-3 flex-1">
                                    <h3 className="text-xl sm:text-2xl font-bangers text-black leading-[1.1] uppercase tracking-wide break-words">
                                        {paper.title}
                                    </h3>
                                    <p className="text-[#ff0066] font-bold tracking-widest text-xs uppercase break-words">
                                        {paper.subtitle}
                                    </p>
                                    <p className="text-black/80 font-medium italic border-l-4 border-black/10 pl-3 leading-snug text-sm break-words line-clamp-4">
                                        "{paper.summary}"
                                    </p>
                                </div>

                                <div className="mt-6 pt-5 border-t-4 border-black/5 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
                                    <div className="flex flex-wrap gap-2">
                                        {paper.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="text-[10px] font-black tracking-widest px-2 py-1 bg-black text-white">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a 
                                        href={paper.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-comic-action text-sm py-2 px-4 bg-[#ff0066] hover:bg-black hover:text-[#ff0066] transition-colors w-full xl:w-auto text-center"
                                    >
                                        READ PAPER
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
