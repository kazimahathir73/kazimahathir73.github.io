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

                <div className="grid lg:grid-cols-2 gap-12">
                    {research.map((paper, i) => (
                        <div 
                            key={paper.title} 
                            className="research-card group animate-fadeInUp"
                            style={{ animationDelay: `${i * 0.15}s` }}
                        >
                            <div className="p-8 sm:p-10 flex flex-col h-full">
                                <div className="flex items-start justify-between mb-8">
                                    <div className="p-4 bg-black border-4 border-black -rotate-6 group-hover:rotate-0 transition-transform">
                                        <BookOpen className="text-[#ff0066] w-8 h-8" />
                                    </div>
                                    <span className="font-bangers text-xl text-black/40 tracking-widest">
                                        {paper.year}
                                    </span>
                                </div>

                                <div className="space-y-4 flex-1">
                                    <h3 className="text-2xl sm:text-3xl font-bangers text-black leading-[1.1] uppercase tracking-wide break-words">
                                        {paper.title}
                                    </h3>
                                    <p className="text-[#ff0066] font-bold tracking-widest text-xs sm:text-sm uppercase break-words">
                                        {paper.subtitle}
                                    </p>
                                    <p className="text-black/80 font-medium italic border-l-4 border-black/10 pl-4 leading-relaxed text-sm sm:text-base break-words">
                                        "{paper.summary}"
                                    </p>
                                </div>

                                <div className="mt-12 pt-8 border-t-4 border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                    <div className="flex flex-wrap gap-3">
                                        {paper.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="text-[10px] font-black tracking-widest px-3 py-1 bg-black text-white">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a 
                                        href={paper.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-comic-action text-lg py-2 px-6 bg-[#ff0066] hover:bg-black hover:text-[#ff0066] transition-colors w-full sm:w-auto text-center"
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
