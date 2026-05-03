import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ventures from './components/Ventures';
import Research from './components/Research';
import Experience from './components/Experience';
import Skills from './components/Skills';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

function CursorDot() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;
        let rafId: number;

        const onMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (dotRef.current) {
                dotRef.current.style.left = `${mouseX}px`;
                dotRef.current.style.top = `${mouseY}px`;
            }
        };

        const animate = () => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            if (ringRef.current) {
                ringRef.current.style.left = `${ringX}px`;
                ringRef.current.style.top = `${ringY}px`;
            }
            rafId = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', onMove);
        rafId = requestAnimationFrame(animate);
        return () => {
            window.removeEventListener('mousemove', onMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot hidden md:block" />
            <div ref={ringRef} className="cursor-ring hidden md:block" />
        </>
    );
}

function ScrollProgress() {
    useEffect(() => {
        const onScroll = () => {
            const scrolled = window.scrollY;
            const total = document.documentElement.scrollHeight - window.innerHeight;
            const pct = total > 0 ? (scrolled / total) * 100 : 0;
            const el = document.getElementById('scroll-progress');
            if (el) el.style.width = `${pct}%`;
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return null;
}

export default function App() {
    return (
        <div className="min-h-screen bg-[#2A2A2A] text-white selection:bg-[#b8ff00] selection:text-black">
            <CursorDot />
            <ScrollProgress />
            <Navbar />
            <main>
                <Hero />
                <Ventures />
                <Research />
                <Experience />
                <Skills />
                <News />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
