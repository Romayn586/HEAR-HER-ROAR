import { ScrollText } from 'lucide-react';
import { reflections } from '../data/portfolioData';

export default function Reflection() {
  return (
    <section id="reflection" className="py-24 px-4 md:px-8 bg-[#0a0a0c] border-b border-grit-gray relative overflow-hidden text-left">
      <div className="absolute top-1/2 left-1/2 animate-float-3 w-[250px] h-[250px] rounded-full bg-neon-pink/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-3 mb-16 max-w-3xl text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ff007f] flex items-center gap-1.5">
            <ScrollText className="w-4 h-4 text-neon-pink" />
            Project Evaluations & Critical Reflections / 项目学术反思与自我总结
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
            ACADEMIC <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-rose-400 font-light lowercase">criticality</span>
          </h2>
          <p className="text-xs text-neutral-500 font-sans mt-2">
            任何在真实生活里落地的创意企划，均无法避免突发摩擦。在下文中，我以极具批判性的严肃评估态度，拆解和反思我们在承办该音乐会过程中的重大管理短板。结合了国际演出策划与非营利慈善领域的前沿学术文献，交出一份极具实践指导意义的个人成长曲线。
          </p>
        </div>

        {/* Big stacked magazine layout columns */}
        <div className="flex flex-col gap-12 text-left">
          {reflections.map((ref, idx) => {
            return (
              <div 
                key={ref.id} 
                className="bg-[#121215] border border-neutral-800 p-8 md:p-10 relative overflow-hidden group text-left"
              >
                {/* Visual Number background */}
                <div className="absolute right-6 top-6 text-7xl md:text-9xl font-black text-white/[0.01] select-none pointer-events-none font-mono">
                  {idx + 1}
                </div>

                {/* Left Line Accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-neutral-800 group-hover:bg-neon-pink transition-colors"></div>

                {/* Upper Metadata header */}
                <div className="flex flex-wrap items-center gap-2 mb-4 text-left">
                  <span className="text-[10px] font-mono text-neon-pink font-bold uppercase p-1 bg-neon-pink/5 border border-neon-pink/15">
                    项目自我反思剖析 / CASE STUDY
                  </span>
                  <span className="text-neutral-600 font-mono text-xs hidden md:inline">|</span>
                  <span className="text-xs font-mono text-neutral-400">
                    引入学术核心理论框架: <strong className="text-white">{ref.theory}</strong>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-black tracking-tight text-white uppercase mb-6 font-sans text-left">
                  {ref.title}
                </h3>

                {/* Layout Inner Grid: Problem vs Solution */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-dashed border-neutral-800 pt-6 text-left">
                  
                  {/* Left Column: Problem */}
                  <div className="lg:col-span-6 flex flex-col gap-2.5 text-left">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block font-bold text-left">遇到的实际阻碍与突发状况：</span>
                    <p className="text-neutral-300 text-xs md:text-sm leading-relaxed font-sans text-left">
                      {ref.problem}
                    </p>
                    {ref.impact && (
                      <div className="mt-2 text-xs font-sans text-red-400 bg-red-400/5 p-3.5 border border-red-400/15 text-left">
                        <strong className="block font-mono text-[9px] text-red-400 uppercase tracking-wide mb-1 text-left">负面影响与损失评估 (Impact Outcome):</strong>
                        {ref.impact}
                      </div>
                    )}
                  </div>

                  {/* Right Column: Resolution */}
                  <div className="lg:col-span-6 flex flex-col gap-2.5 border-t lg:border-t-0 lg:border-l border-neutral-800/80 pt-6 lg:pt-0 lg:pl-8 text-left">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-bold text-left">紧急应对预案及解决方案：</span>
                    <p className="text-neutral-300 text-xs md:text-sm leading-relaxed font-sans text-left">
                      {ref.resolution}
                    </p>
                    <div className="mt-2 text-xs font-sans text-emerald-400 bg-emerald-500/5 p-3.5 border border-emerald-500/15 text-left">
                      <strong className="block font-mono text-[9px] text-emerald-400 uppercase tracking-wide mb-1 text-left">管理方法论学成提炼 (Key Takeaway):</strong>
                      {ref.learning}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
