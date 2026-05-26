import { useState, useEffect } from 'react';
import { Play, ArrowDownRight, Volume2, Calendar, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigateToSection: (sectionId: string) => void;
}

export default function Hero({ onNavigateToSection }: HeroProps) {
  const [isPlayingTeaser, setIsPlayingTeaser] = useState(false);
  const [tickerText, setTickerText] = useState('');

  // Ticker text animation representing live feeds / indie music bulletin in Chinese and English
  useEffect(() => {
    const text = " ★ HEAR HER ROAR：女性声音的盛大庆典 ★ 为 GETAWAY GIRLS 筹集善款 £270.44 ★ 106 张门票售罄 ★ 独立音乐文化与女性赋权项目 ★ HYDE PARK BOOK CLUB, LEEDS, UK ★ ";
    let idx = 0;
    const interval = setInterval(() => {
      setTickerText((prev) => text.slice(idx) + text.slice(0, idx));
      idx = (idx + 1) % text.length;
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero-section" className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-28 pb-10 px-4 md:px-8 bg-pure-black border-b border-grit-gray">
      {/* Cinematic Ambient Glowing Lights */}
      <div className="absolute top-1/4 left-1/3 w-[30vw] h-[30vw] rounded-full bg-neon-pink opacity-20 blur-[130px] animate-float-1 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[25vw] h-[25vw] rounded-full bg-blue-500 opacity-10 blur-[110px] animate-float-2 pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/12 w-[20vw] h-[20vw] rounded-full bg-neon-magenta opacity-15 blur-[120px] animate-float-3 pointer-events-none"></div>

      {/* Grid Pattern overlay for tech-journalism vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      {/* Upper header note - Editorial magazine citation */}
      <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs font-mono tracking-widest text-[#f4f4f5] border-b border-white/10 pb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-neon-pink animate-pulse"></div>
          <span className="text-neon-pink font-bold">现场活动圆满落幕</span>
          <span className="text-neutral-500">|</span>
          <span>2025年6月4日 星期三</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Hear Her Roar｜从概念到现实</span>
          <span className="text-neutral-500">/</span>
          <span className="text-neon-pink">LEEDS, UK</span>
        </div>
      </div>

      {/* Main Hero Header */}
      <div className="relative z-10 my-auto py-12 flex flex-col items-start max-w-6xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-pink/10 border border-neon-pink/30 rounded-full text-neon-pink text-xs font-mono font-medium tracking-wide mb-6">
          <Sparkles className="w-3.5 h-3.5 animate-spin" />
          <span>现场演艺行业的女性大赋权项目</span>
        </div>

        {/* Big editorial heading */}
        <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter text-white uppercase select-none leading-none">
          HEAR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-magenta to-rose-400 font-serif italic font-light lowercase pr-2">her</span> 
          ROAR
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-neutral-400 font-sans max-w-3xl leading-relaxed">
          A feminist live music project celebrating female voices through music and community.
        </p>

        {/* Bilingual slogan call */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 font-mono border-l-2 border-neon-pink pl-4 py-1">
          <div>
            <span className="text-xs text-neutral-500 block">口号呼吁</span>
            <span className="text-sm font-semibold tracking-wide text-white">Where music becomes a voice for empowerment.</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-neutral-800"></div>
          <div>
            <span className="text-xs text-neutral-500 block">核心使命</span>
            <span className="text-sm text-neon-pink font-semibold tracking-wide">By bringing together artists, audiences, and charitable collaboration, the project transforms live music into a space for expression, connection, and collective empowerment.</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4 w-full">
          <button
            onClick={() => onNavigateToSection('timeline')}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-neon-pink text-white rounded-none hover:bg-neon-magenta shadow-lg shadow-neon-pink/20 transition-all duration-300 font-medium tracking-wider text-sm uppercase font-mono cursor-pointer"
          >
            启动项目推进时间轴
            <ArrowDownRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </button>
          
          <button
            onClick={() => onNavigateToSection('metrics')}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white border border-white/20 hover:border-neon-pink hover:bg-white/5 transition-all duration-300 font-medium tracking-wider text-sm uppercase font-mono cursor-pointer"
          >
            查证项目核算与大指标
            <span className="text-neon-pink font-bold group-hover:translate-x-1 transition-transform">£1,000.70</span>
          </button>

          <button
            onClick={() => setIsPlayingTeaser(true)}
            className="inline-flex items-center gap-2.5 px-6 py-4 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all duration-300 font-mono text-xs uppercase cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current text-neon-pink" />
            观赏现场回顾纪录片
          </button>
        </div>
      </div>

      {/* Interactive Soundboard Waveform & Footer Indicator */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-end border-t border-white/10 pt-8 mt-12">
        <div className="md:col-span-4 flex flex-col gap-1.5">
          <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">活动总策划人详情</span>
          <div className="flex gap-2 text-sm font-semibold text-white">
            <span>罗曼 (Man Luo)</span>
            <span className="text-neon-pink">/</span>
            <span className="text-neutral-400 font-normal font-sans">现场音乐会策划、制作与执行人</span>
          </div>
          <p className="text-xs text-neutral-500">
            University of Leeds 音乐管理（MA Music Management）硕士毕业生。全面负责端到端的赞助拓展、艺人招募、多方订场、预算控制以及中双语宣发风暴。
          </p>
        </div>

        {/* Simulated live decibel analyzer bar */}
        <div className="md:col-span-5 flex flex-col gap-2">
          <div className="flex justify-between text-[10px] font-mono text-neutral-500">
            <span className="flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5 text-neon-pink" />
              音频音波动态均衡器
            </span>
            <span className="text-neon-pink">HPBC_BASEMENT_现场激活</span>
          </div>
          <div className="flex items-end gap-1 h-8">
            {[20, 60, 40, 80, 50, 95, 30, 70, 45, 85, 60, 100, 35, 75, 50, 90, 40, 65, 30, 70, 20].map((h, i) => (
              <div 
                key={i} 
                className="flex-1 bg-neon-pink/40 hover:bg-neon-pink rounded-t transition-all duration-300" 
                style={{ 
                  height: `${h}%`,
                  animation: `float-slow ${1 + (i % 3) * 0.4}s ease-in-out infinite alternate`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 flex flex-col items-start md:items-end gap-2 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-neon-pink" />
            <span>Hyde Park Book Club, Leeds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-neon-pink" />
            <span>2025届硕士毕业音乐会案例</span>
          </div>
        </div>
      </div>

      {/* Decorative Slide Ticker */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap bg-neon-pink/10 border-t border-neon-pink/20 py-2">
        <div className="text-[10px] uppercase font-mono tracking-widest text-[#fff] opacity-60">
          {tickerText}
        </div>
      </div>

      {/* Retrospective Video Modal Filter Overlay */}
      {isPlayingTeaser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pure-black/95 backdrop-blur-xl transition-all">
          <div className="relative w-full max-w-4xl bg-card-dark border border-neutral-800 rounded-none overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-grit-gray flex justify-between items-center bg-black">
              <span className="text-xs font-mono tracking-widest text-neon-pink font-bold flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-neon-pink pulse-ring-pink rounded-full p-0.5" />
                官方演出现场实录纪录短片
              </span>
              <button
                onClick={() => setIsPlayingTeaser(false)}
                className="text-xs font-mono text-neutral-400 hover:text-white uppercase transition-colors"
              >
                [ 关闭 ]
              </button>
            </div>
            
            {/* Embedded YouTube Player for http://www.youtube.com/watch?v=ICrR5aFpfVQ */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/ICrR5aFpfVQ?autoplay=1" 
                title="Hear Her Roar Short Film Teaser" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            <div className="p-5 bg-card-dark border-t border-grit-gray">
              <h4 className="font-serif italic text-lg text-white mb-2">"Hear Her Roar - 现场纪录片与反思实操预览"</h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                这是一段完整记录 Hear Her Roar 演出现场的影像资料，涵盖了观众入场、四组艺人的现场表演、中场抽奖互动，以及观众情绪被现场氛围不断点燃的真实瞬间。同时，影片也记录了 Leeds 本地 Livehouse 独有的独立音乐文化与文艺氛围，呈现出一场关于音乐、情感与女性表达的现场纪实。
              </p>
              <div className="mt-4 flex gap-4 text-[10px] font-mono text-neon-pink">
                <span>策划制作：Team Hear Her Roar</span>
                <span>•</span>
                <span>片长：约 3 个小时26分钟（正式演出从29分钟左右开始）</span>
                <span>•</span>
                <span>取景：Hyde Park Book Club, Leeds, UK</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
