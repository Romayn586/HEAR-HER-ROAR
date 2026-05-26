import { Flame, ShieldAlert, HeartHandshake, Map, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 md:px-8 bg-pure-black border-b border-grit-gray overflow-hidden">
      {/* Editorial Decorative text in bg */}
      <div className="absolute top-0 right-0 text-[10vw] font-black tracking-tighter text-white/[0.02] select-none uppercase pointer-events-none leading-none">
        EMPOWERED
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Left column: Heavy Big title with layout variation */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <span className="text-xs font-mono uppercase tracking-widest text-neon-pink flex items-center gap-2">
            <Flame className="w-4 h-4 text-neon-pink" />
            BACKGROUND & IDEOLOGY / 项目背景与意识形态
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
            WHY <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-rose-400 font-light lowercasepr-2">hear her</span> ROAR?
          </h2>
          <div className="h-1.5 w-20 bg-neon-pink mb-4"></div>
          
          <p className="text-neutral-300 font-sans leading-relaxed text-base border-l-2 border-neon-pink pl-4 py-1">
            希望通过现场音乐演出、女性音乐人的表达以及观众之间的情感连接，创造一个能够让更多女性声音被听见、被关注、被支持的空间。
          </p>
          
          <p className="text-neutral-400 font-sans leading-relaxed text-sm">
            项目不仅关注音乐本身，也强调音乐背后的社会意义，希望借由独立音乐文化、公益合作与社区参与，建立艺术表达与现实关怀之间的联系。与此同时，Hear Her Roar 也希望通过与本地慈善机构 Getaway Girls 的合作，将音乐活动转化为真实的社会支持与行动。
          </p>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="p-4 bg-card-dark border border-neutral-800 rounded-none hover:border-neon-pink/30 transition-all text-left">
              <span className="text-3xl font-bold text-white block">04</span>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">2025年6月</span>
            </div>
            <div className="p-4 bg-card-dark border border-neutral-800 rounded-none hover:border-emerald-500/30 transition-all text-left">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300 block">40%</span>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">门票净收益转账善款</span>
            </div>
          </div>
        </div>

        {/* Right column: Editorial grid cards mapping the pillars */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Social Cause */}
          <div className="p-8 bg-card-dark border border-neutral-800 relative group overflow-hidden text-left">
            <div className="absolute right-0 bottom-0 w-24 h-24 bg-neon-pink/5 rounded-full blur-2xl group-hover:bg-neon-pink/15 transition-all"></div>
            <ShieldAlert className="w-8 h-8 text-neon-pink mb-4" />
            <h3 className="text-lg font-bold uppercase text-white tracking-wide font-mono flex justify-between items-center mb-2">
              <span>SOCIAL ADVOCACY</span>
              <span className="text-[10px] text-neutral-500 font-normal">01</span>
            </h3>
            <div className="text-xs font-semibold text-neon-pink/80 mb-3 font-mono">女性大赋权与性别平等倡导</div>
            <p className="text-neutral-400 text-xs leading-relaxed">
              我们不单单是简单邀请艺人登场，更将极具启发意义的女性主义、无偏见叙事融汇于视觉艺术、先导访谈片、休息室装配及歌单（Setlist）企划之中。这有力重塑了 Leeds 当地现场演出界中常带有男性主导的结构态势，为边缘化酷儿与女性音乐人开辟了一座有温度的大环境“安全仓”。
            </p>
          </div>

          {/* Card 2: Charity Backup */}
          <div className="p-8 bg-card-dark border border-neutral-800 relative group overflow-hidden text-left">
            <div className="absolute right-0 bottom-0 w-24 h-24 bg-rose-500/5 rounded-full blur-2xl group-hover:bg-rose-500/15 transition-all"></div>
            <HeartHandshake className="w-8 h-8 text-rose-400 mb-4" />
            <h3 className="text-lg font-bold uppercase text-white tracking-wide font-mono flex justify-between items-center mb-2">
              <span>THE CHARITY LINK</span>
              <span className="text-[10px] text-neutral-500 font-normal">02</span>
            </h3>
            <div className="text-xs font-semibold text-rose-400/80 mb-3 font-mono">Getaway Girls 联合慈善落地</div>
            <p className="text-neutral-400 text-xs leading-relaxed">
              我们定向选择支持 <span className="text-white">Getaway Girls Leeds</span>，这是一所专注于扶持 11-25 岁弱势年轻女童和女领袖建立人生自豪感并敢于发声的资深官方机构。我们签署了具有约束力的配额捐赠契约，定格将通票 40% 的实际净门票收益拨付汇入其救援储备金钱包中。
            </p>
          </div>

          {/* Card 3: Local Roots */}
          <div className="p-8 bg-card-dark border border-neutral-800 relative group overflow-hidden text-left">
            <div className="absolute right-0 bottom-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/15 transition-all"></div>
            <Map className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold uppercase text-white tracking-wide font-mono flex justify-between items-center mb-2">
              <span>LOCAL ROOTS</span>
              <span className="text-[10px] text-neutral-500 font-normal">03</span>
            </h3>
            <div className="text-xs font-semibold text-blue-400/80 mb-3 font-mono">Leeds 本土音乐网络与学群文化</div>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Leeds 是底蕴丰厚的后朋克、DIY 美学以及学运与留学生热心聚集地。我们将主战场择地于 Headingley 著名 UoL 学子朝圣地 <span className="text-white">Hyde Park Book Club</span> 的 Basement，使 Leeds 大学的 LUU FemSoc 等优秀先锋社团能与本土民营演艺地标发生最亲密的碰撞。
            </p>
          </div>

          {/* Card 4: Project Rigor */}
          <div className="p-8 bg-card-dark border border-neutral-800 relative group overflow-hidden text-left">
            <div className="absolute right-0 bottom-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/15 transition-all"></div>
            <Award className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold uppercase text-white tracking-wide font-mono flex justify-between items-center mb-2">
              <span>PROJECT RIGOR</span>
              <span className="text-[10px] text-neutral-500 font-normal">04</span>
            </h3>
            <div className="text-xs font-semibold text-emerald-400/80 mb-3 font-mono">商业项目管理履历调性</div>
            <p className="text-neutral-400 text-xs leading-relaxed">
              这里摒弃了流于泛泛的课程流水账，而是作为一个可以被深度验证的实操成果集。在这里您不仅能审判公对公转入资金记录，还能审阅设计商业 PPT 赞助大纲、多维渠道新媒体推广指数和全方位的会后项目运营反思，最大化验证音乐产业高端人才的就业资质。
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
