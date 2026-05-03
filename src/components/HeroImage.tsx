import { useState } from 'react';

export default function HeroImage() {
    return (
        <div className="relative w-full h-full group cursor-crosshair perspective-1000">
            {/* Animated Background Highlight - Larger & Brighter */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#b8ff00]/10 rounded-full blur-[120px] group-hover:bg-[#b8ff00]/20 transition-all duration-1000 animate-pulse" />
            
            <div className="relative w-full h-full transition-all duration-700 ease-out transform-gpu group-hover:scale-[1.05] group-hover:rotate-y-6">
                {/* Default: Cartoon Image */}
                <img 
                    src="/assets/me_cartoon.png" 
                    alt="Kazi Mahathir Rahman (Cartoon)" 
                    className="absolute inset-0 w-full h-full object-contain object-top transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:rotate-3 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
                
                {/* Hover: Real Image */}
                <img 
                    src="/assets/me_real.png" 
                    alt="Kazi Mahathir Rahman (Real)" 
                    className="absolute inset-0 w-full h-full object-contain object-top opacity-0 -rotate-3 transition-all duration-500 group-hover:opacity-100 group-hover:scale-95 group-hover:rotate-0 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />

                {/* Comic-style Speech Bubble Callout */}
                <div className="absolute top-[35%] -right-8 group-hover:-right-12 transition-all duration-500 z-30">
                    <div className="relative bg-[#ff0066] border-4 border-black px-6 py-2 shadow-[6px_6px_0px_0_rgba(0,0,0,1)] transform rotate-2 group-hover:-rotate-2 transition-transform duration-500">
                        <span className="text-white font-bangers text-2xl tracking-widest uppercase block">REALITY SHIFT!</span>
                        
                        {/* Speech Bubble Tail / Arrow pointing to face */}
                        <div className="absolute top-1/2 -left-4 w-6 h-6 bg-[#ff0066] border-l-4 border-b-4 border-black transform -translate-y-1/2 rotate-45"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
