import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
    { label: 'HOME', href: '#home' },
    { label: 'VENTURES', href: '#ventures' },
    { label: 'RESEARCH', href: '#research' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'NEWS', href: '#news' },
    { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('home');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
            const sections = links.map(l => l.href.slice(1));
            for (const id of [...sections].reverse()) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActive(id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (href: string) => {
        setOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b-4 border-black shadow-[0_8px_0_0_rgba(0,0,0,1)]">
                {/* Scroll progress line */}
                <div className="absolute bottom-0 left-0 h-[4px] bg-[#ff0066] transition-all duration-100 z-10" id="scroll-progress" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <button
                        onClick={() => scrollTo('#home')}
                        className="font-bangers text-4xl tracking-widest drop-shadow-[2px_2px_0px_rgba(184,255,0,1)] hover:scale-105 transition-all text-black"
                    >
                        KMR<span className="text-[#ff0066]">.</span>
                    </button>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map(link => {
                            const isActive = active === link.href.slice(1);
                            return (
                                <button
                                    key={link.href}
                                    onClick={() => scrollTo(link.href)}
                                    className={`font-bangers text-2xl tracking-widest px-3 py-1 transition-all duration-200 border-2 ${
                                        isActive 
                                            ? 'bg-[#b8ff00] text-black border-black transform -rotate-2 shadow-[2px_2px_0px_0_rgba(0,0,0,1)]' 
                                            : 'bg-transparent text-black border-transparent hover:border-black hover:bg-black/5 hover:-translate-y-1'
                                        }`}
                                >
                                    {link.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 border-2 border-black bg-white text-black shadow-[2px_2px_0px_0_rgba(0,0,0,1)]"
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={`fixed inset-0 z-40 bg-[#d1d5db] flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${open ? 'translate-x-0' : 'translate-x-full'
                }`}>
                {/* Halftone background */}
                <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(black 2px, transparent 0)', backgroundSize: '30px 30px' }} />

                {links.map((link, i) => {
                    const isActive = active === link.href.slice(1);
                    return (
                        <button
                            key={link.href}
                            onClick={() => scrollTo(link.href)}
                            className={`font-bangers text-5xl tracking-widest px-8 py-2 border-4 border-black transition-all transform ${
                                isActive 
                                    ? 'bg-[#ff0066] text-white -rotate-3 shadow-[8px_8px_0px_0_rgba(0,0,0,1)]' 
                                    : 'bg-white text-black hover:-translate-y-2 shadow-[4px_4px_0px_0_rgba(0,0,0,1)]'
                            }`}
                            style={{ transitionDelay: `${i * 50}ms` }}
                        >
                            {link.label}
                        </button>
                    );
                })}
            </div>
        </>
    );
}
