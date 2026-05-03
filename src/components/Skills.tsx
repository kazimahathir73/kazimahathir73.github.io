import { skills } from '../data';

export default function Skills() {
    return (
        <section className="relative py-6 bg-[#c0c4cc] overflow-hidden border-y-4 border-black">
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(black 2px, transparent 0)', backgroundSize: '30px 30px' }} />
            
            <div className="overflow-hidden relative flex items-center">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#c0c4cc] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#c0c4cc] to-transparent z-10 pointer-events-none" />
                
                <div className="marquee-track flex gap-12 text-3xl sm:text-4xl font-bangers tracking-wider text-black/40 uppercase italic">
                    {[...skills, ...skills, ...skills].map((skill, i) => (
                        <div key={i} className="flex items-center gap-12">
                            <span className="whitespace-nowrap hover:text-black transition-colors duration-300">
                                {skill}
                            </span>
                            <span className="w-5 h-5 rounded-full bg-black/20" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
