import React from 'react';

export default function Impact() {
  const stats = [
    {
      value: "100+",
      label: "PROJECTS DELIVERED"
    },
    {
      value: "30+",
      label: "BRAND PARTNERSHIPS"
    },
    {
      value: "5+",
      label: "YEARS EXPERIENCE"
    }
  ];

  return (
    <section className="w-full bg-[#050505] text-white py-24 px-8 md:px-16 lg:px-24 border-b border-white/[0.02]">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Subtitle Indicator */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-zinc-400">
            THE IMPACT
          </span>
          <div className="w-10 h-px bg-[#FF453A]/80" />
        </div>

        {/* Responsive Flex / Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12 lg:gap-x-24 items-start">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-start select-none group"
            >
              {/* Metric Accent Value */}
              <div className="text-[72px] sm:text-[90px] lg:text-[110px] font-black tracking-tighter leading-none mb-4 text-white group-hover:text-[#FF453A] transition-colors duration-300">
                {stat.value}
              </div>
              
              {/* Metric Label */}
              <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-500 font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}