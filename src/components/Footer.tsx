import { person } from '../data';
import { Github, Mail, ExternalLink, Linkedin, Facebook, BookOpen, GraduationCap } from 'lucide-react';

const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
    return (
        <footer className="relative bg-[#d1d5db] border-t-8 border-black overflow-hidden font-sans">
            <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(black 2px, transparent 0)', backgroundSize: '30px 30px' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 relative z-10">
                <div className="comic-panel p-8 md:p-12 bg-white mb-8">
                    <div className="grid sm:grid-cols-3 gap-12">
                        {/* Brand */}
                        <div className="space-y-4">
                            <div className="text-5xl font-bangers tracking-widest text-black">
                                KMR<span className="text-[#ff0066]">.</span>
                            </div>
                            <p className="text-black/80 font-medium text-lg leading-relaxed max-w-xs italic border-l-4 border-black/10 pl-4">
                                {person.title}<br />
                                {person.tagline}
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <p className="font-bangers text-2xl tracking-widest text-black mb-4">NAVIGATION</p>
                            <div className="space-y-2">
                                {[
                                    { label: 'Home', href: '#home' },
                                    { label: 'Ventures', href: '#ventures' },
                                    { label: 'Research', href: '#research' },
                                    { label: 'Experience', href: '#experience' },
                                    { label: 'News', href: '#news' },
                                    { label: 'Contact', href: '#contact' },
                                ].map(link => (
                                    <button
                                        key={link.href}
                                        onClick={() => scrollTo(link.href)}
                                        className="block text-black font-bold uppercase tracking-wider hover:text-[#b8ff00] transition-colors"
                                    >
                                        <span className="hover:bg-black hover:text-[#b8ff00] px-2 py-1 transition-all">{link.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Ventures */}
                        <div>
                            <p className="font-bangers text-2xl tracking-widest text-black mb-4">VENTURES</p>
                            <div className="space-y-3">
                                <a href="https://www.zynotech.io/" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-black font-bold uppercase tracking-wider hover:text-[#b8ff00] group transition-colors">
                                    <span className="group-hover:bg-black group-hover:text-[#b8ff00] px-2 py-1 transition-all">Zynotech Intelligence</span> <ExternalLink size={14} className="text-black group-hover:text-[#b8ff00]" />
                                </a>
                                <a href="https://www.talksign.co/" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-black font-bold uppercase tracking-wider hover:text-[#00e5ff] group transition-colors">
                                    <span className="group-hover:bg-black group-hover:text-[#00e5ff] px-2 py-1 transition-all">TalkSign</span> <ExternalLink size={14} className="text-black group-hover:text-[#00e5ff]" />
                                </a>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 mt-8 border-t-4 border-black/10 pt-6">
                                <a href={person.github} target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 bg-black flex items-center justify-center transform hover:scale-110 hover:-rotate-6 transition-all group">
                                    <Github size={20} className="text-[#b8ff00] group-hover:text-[#ff0066]" />
                                </a>
                                <a href={person.linkedin} target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 bg-black flex items-center justify-center transform hover:scale-110 hover:rotate-6 transition-all group">
                                    <Linkedin size={20} className="text-[#b8ff00] group-hover:text-[#00e5ff]" />
                                </a>
                                <a href={person.researchgate} target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 bg-black flex items-center justify-center transform hover:scale-110 hover:-rotate-6 transition-all group">
                                    <BookOpen size={20} className="text-[#b8ff00] group-hover:text-[#ff0066]" />
                                </a>
                                <a href={person.googlescholar} target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 bg-black flex items-center justify-center transform hover:scale-110 hover:rotate-6 transition-all group">
                                    <GraduationCap size={20} className="text-[#b8ff00] group-hover:text-[#00e5ff]" />
                                </a>
                                <a href={person.facebook} target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 bg-black flex items-center justify-center transform hover:scale-110 hover:-rotate-6 transition-all group">
                                    <Facebook size={20} className="text-[#b8ff00] group-hover:text-[#ff0066]" />
                                </a>
                                <a href={`mailto:${person.email}`}
                                    className="w-10 h-10 bg-black flex items-center justify-center transform hover:scale-110 hover:rotate-6 transition-all group">
                                    <Mail size={20} className="text-[#b8ff00] group-hover:text-[#00e5ff]" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-bangers text-xl text-black">
                    <span className="tracking-widest drop-shadow-[1px_1px_0px_rgba(255,255,255,1)]">
                        © 2026 KAZI MAHATHIR RAHMAN · ALL RIGHTS RESERVED
                    </span>
                    <span className="bg-[#b8ff00] text-black px-4 py-1 border-2 border-black transform -rotate-1 tracking-widest">
                        DHAKA, BANGLADESH
                    </span>
                </div>
            </div>
        </footer>
    );
}
