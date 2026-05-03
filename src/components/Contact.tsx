import { useState } from 'react';
import { Send, Mail, MapPin, Github, ArrowRight, CheckCircle } from 'lucide-react';
import { person } from '../data';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        // Simulate send delay
        await new Promise(r => setTimeout(r, 1200));
        setSending(false);
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="relative py-32 bg-[#2A2A2A] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-2 bg-[#b8ff00] border-2 border-black" />
                        <span className="text-[#b8ff00] font-bangers text-3xl tracking-widest drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">COLLABORATE</span>
                    </div>
                    <h2 className="section-title">LET'S CONNECT</h2>
                    <p className="text-white/80 mt-6 max-w-xl text-xl leading-relaxed font-medium hand-marker">
                        // Looking for partners, investors, and enterprise clients.
                    </p>
                </div>

                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
                    {/* Left: Info */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <a
                                href={`mailto:${person.email}`}
                                className="comic-panel group flex items-center gap-6 p-4 bg-white"
                            >
                                <div className="w-12 h-12 bg-[#b8ff00] border-2 border-black flex items-center justify-center transform -rotate-3 group-hover:rotate-0 transition-transform">
                                    <Mail size={24} className="text-black" />
                                </div>
                                <div>
                                    <div className="font-bangers text-xl text-black/50 tracking-wider">EMAIL</div>
                                    <div className="text-lg font-bold text-black">{person.email}</div>
                                </div>
                                <ArrowRight size={20} className="ml-auto text-black transform group-hover:translate-x-2 transition-transform" />
                            </a>

                            <div className="comic-panel flex items-center gap-6 p-4 bg-white">
                                <div className="w-12 h-12 bg-[#00e5ff] border-2 border-black flex items-center justify-center transform rotate-3">
                                    <MapPin size={24} className="text-black" />
                                </div>
                                <div>
                                    <div className="font-bangers text-xl text-black/50 tracking-wider">LOCATION</div>
                                    <div className="text-lg font-bold text-black">{person.location}</div>
                                </div>
                            </div>

                            <a
                                href={person.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="comic-panel group flex items-center gap-6 p-4 bg-white"
                            >
                                <div className="w-12 h-12 bg-[#ff0066] border-2 border-black flex items-center justify-center transform -rotate-3 group-hover:rotate-0 transition-transform">
                                    <Github size={24} className="text-black" />
                                </div>
                                <div>
                                    <div className="font-bangers text-xl text-black/50 tracking-wider">GITHUB</div>
                                    <div className="text-lg font-bold text-black">kazimahathir73</div>
                                </div>
                                <ArrowRight size={20} className="ml-auto text-black transform group-hover:translate-x-2 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="comic-panel p-8 md:p-12 bg-white relative">
                        {/* Decorative tape corners */}
                        <div className="absolute -top-3 -left-3 w-16 h-8 bg-[#b8ff00]/60 -rotate-45" />
                        <div className="absolute -bottom-3 -right-3 w-16 h-8 bg-[#ff0066]/60 -rotate-45" />

                        {sent ? (
                            <div className="flex flex-col items-center justify-center py-16 text-center space-y-6">
                                <CheckCircle size={64} className="text-[#b8ff00]" />
                                <h3 className="font-bangers text-5xl text-black">MESSAGE SENT!</h3>
                                <p className="text-black/60 font-medium text-lg">I'll be in touch soon.</p>
                                <button
                                    onClick={() => setSent(false)}
                                    className="btn-comic-action text-lg py-2 px-8 mt-4"
                                >
                                    SEND ANOTHER
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="form-field">
                                        <label className="font-bangers text-xl text-black tracking-wider">NAME</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your name"
                                            className="w-full p-3 border-2 border-black focus:outline-none focus:ring-4 focus:ring-[#b8ff00]/50 bg-black/5 text-black font-medium"
                                        />
                                    </div>
                                    <div className="form-field">
                                        <label className="font-bangers text-xl text-black tracking-wider">EMAIL</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your@email.com"
                                            className="w-full p-3 border-2 border-black focus:outline-none focus:ring-4 focus:ring-[#b8ff00]/50 bg-black/5 text-black font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="form-field">
                                    <label className="font-bangers text-xl text-black tracking-wider">PURPOSE</label>
                                    <select
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 border-2 border-black focus:outline-none focus:ring-4 focus:ring-[#b8ff00]/50 bg-black/5 text-black font-medium"
                                    >
                                        <option value="">Select a purpose...</option>
                                        <option value="Partnership">Strategic Partnership</option>
                                        <option value="Investment">Investment Discussion</option>
                                        <option value="Enterprise">Enterprise AI Project</option>
                                        <option value="Research">Research Collaboration</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="form-field">
                                    <label className="font-bangers text-xl text-black tracking-wider">MESSAGE</label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Tell me about what you're building..."
                                        className="w-full p-3 border-2 border-black focus:outline-none focus:ring-4 focus:ring-[#b8ff00]/50 bg-black/5 text-black font-medium resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="btn-comic-action w-full flex items-center justify-center gap-3 disabled:opacity-50"
                                >
                                    {sending ? (
                                        <>SENDING...</>
                                    ) : (
                                        <>SEND MESSAGE <Send size={24} /></>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
