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
                <div className="absolute top-[18%] right-8 lg:-right-8 transform scale-[0.75] lg:scale-100 z-30 pointer-events-none origin-right">
                    <div className="relative group/bubble">
                        <div className="bg-[#ff0066] text-white font-bangers text-sm lg:text-2xl px-2 lg:px-6 py-1 lg:py-2 border-2 lg:border-4 border-black shadow-[2px_2px_0px_0_rgba(0,0,0,1)] lg:shadow-[4px_4px_0px_0_rgba(0,0,0,1)] relative animate-pulse">
                            REALITY SHIFT!
                            {/* Speech bubble tail */}
                            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[10px] border-r-black lg:border-t-[10px] lg:border-b-[10px] lg:border-r-[15px]" />
                            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-r-[8px] border-r-[#ff0066] lg:border-t-[7px] lg:border-b-[7px] lg:border-r-[12px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
