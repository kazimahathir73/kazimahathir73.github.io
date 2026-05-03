import { Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import { experience } from '../data';

export default function Experience() {
    return (
        <section id="experience" className="relative py-32 bg-[#2A2A2A] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-2 bg-[#b8ff00] border-2 border-black" />
                        <span className="text-[#b8ff00] font-bangers text-3xl tracking-widest drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">JOURNEY</span>
                    </div>
                    <h2 className="section-title">EXPERIENCE</h2>
                </div>

                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-20">
                    {/* Work */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-4 mb-8">
                            <Briefcase className="text-[#b8ff00] w-10 h-10" />
                            <h3 className="font-bangers text-4xl text-white tracking-widest">WORK HISTORY</h3>
                        </div>
                        <div className="space-y-8">
                            {experience.map((exp, i) => (
                                <div 
                                    key={exp.company} 
                                    className="exp-card group flex flex-col sm:flex-row animate-fadeInUp"
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                >
                                    <div className="sm:w-32 p-6 bg-black flex flex-col items-center justify-center border-b-4 sm:border-b-0 sm:border-r-4 border-black">
                                        <span className="font-bangers text-2xl text-[#b8ff00]">{exp.period.split(' - ')[0]}</span>
                                        <div className="w-4 h-1 bg-[#b8ff00] my-1" />
                                        <span className="font-bangers text-lg text-white/50">{exp.period.split(' - ')[1]}</span>
                                    </div>
                                    <div className="flex-1 p-8">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                            <div>
                                                <h4 className="text-3xl font-bangers text-black uppercase tracking-wide">{exp.role}</h4>
                                                <p className="text-[#b8ff00] font-black tracking-widest text-xs bg-black px-2 py-1 inline-block mt-2">
                                                    {exp.company}
                                                </p>
                                            </div>
                                            <span className="bg-[#b8ff00] text-black font-black text-[10px] sm:text-xs tracking-widest px-3 py-1 border-2 border-black transform rotate-1 inline-block">
                                                {exp.location}
                                            </span>
                                        </div>
                                        <p className="text-black/70 font-medium">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-4 mb-8">
                            <GraduationCap className="text-[#b8ff00] w-10 h-10" />
                            <h3 className="font-bangers text-4xl text-white tracking-widest">EDUCATION</h3>
                        </div>
                        <div className="exp-card p-10 space-y-6">
                            <div>
                                <h4 className="text-3xl font-bangers text-black uppercase tracking-wide leading-none">BSc in Computer Science</h4>
                                <p className="text-black/50 font-bold tracking-widest text-xs mt-2 italic">Daffodil International University</p>
                            </div>
                            <p className="text-black/70 font-medium">Focused on Artificial Intelligence, Software Engineering, and Human-Computer Interaction.</p>
                            <div className="pt-6 border-t-4 border-black/5 flex items-center gap-4">
                                <span className="w-12 h-1 bg-black" />
                                <span className="font-bangers text-2xl text-black">CLASS OF 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
