import { useState } from 'react';
import { RefreshCw } from 'lucide-react';

export default function PosterEvolution() {
  const [activeStep, setActiveStep] = useState<'draft' | 'final'>('final');

  // Dynamic image source paths with automatic fallback chain (.jpg -> .png -> .jpeg)
  const [draftSrc, setDraftSrc] = useState('/poster_draft.jpg');
  const [finalSrc, setFinalSrc] = useState('/poster_final.jpg');
  const [draftError, setDraftError] = useState(false);
  const [finalError, setFinalError] = useState(false);

  const handleDraftError = () => {
    if (draftSrc === '/poster_draft.jpg') {
      setDraftSrc('/poster_draft.png');
    } else if (draftSrc === '/poster_draft.png') {
      setDraftSrc('/poster_draft.jpeg');
    } else if (draftSrc === '/poster_draft.jpeg') {
      setDraftSrc('/poster_draft.webp');
    } else {
      setDraftError(true);
    }
  };

  const handleFinalError = () => {
    if (finalSrc === '/poster_final.jpg') {
      setFinalSrc('/poster_final.png');
    } else if (finalSrc === '/poster_final.png') {
      setFinalSrc('/poster_final.jpeg');
    } else if (finalSrc === '/poster_final.jpeg') {
      setFinalSrc('/poster_final.webp');
    } else {
      setFinalError(true);
    }
  };

  const revisionPoints = [
    {
      id: 'rev-1',
      title: '主视觉乐器重构（弃古典返摇滚）',
      desc: '合作设计师在最初绘制了偏美声管弦乐器（单簧管和小提琴）。制作总监迅速发现这与当晩独立/摇滚 Livehouse 的能量气场严重背离，因此力主重构，替换为电现场、电吉他与迷幻键盘，彻底拉满乐迷对现场演出的幻想。',
      status: '已彻底修改落地'
    },
    {
      id: 'rev-2',
      title: '场地档期的强力敲定',
      desc: '在旧稿海报中因为沟通迟滞，只能写待定“Wharf Chambers (TBC)”草稿。一旦场地锁定出现卡顿，制作总监当机立断转向，在终稿上精准合入了已安全签约并合规的“Hyde Park Book Club (利兹，地下现场)”时间和门牌号。',
      status: '已彻底修改落地'
    },
    {
      id: 'rev-3',
      title: '商业赞助品牌厂徽合入',
      desc: '在商务赞助合同谈判全面达成对签后，迅速将真实的合作品牌厂徽（Lush 英国白玫瑰分店、MOLLIS、Giraffe Visa 长颈鹿签证、Leeds 大学手作甜品盒）完美合入最下方的赞助金栏中。',
      status: '已彻底修改落地'
    },
    {
      id: 'rev-4',
      title: '中英双语阶梯票价公示',
      desc: '在海报空白处精准开辟价格阶梯信息（早鸟票 £7.00、常规票 £9.90、现场票 £13.00）并添加中英双向引流字样，最大幅吸引中国和利兹本地的主流学生群体。',
      status: '已彻底修改落地'
    }
  ];

  return (
    <section id="poster-evolution" className="py-24 px-4 md:px-8 bg-pure-black border-b border-grit-gray relative text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Title details */}
        <div className="flex flex-col gap-3 mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-neon-pink flex items-center justify-center gap-1.5">
            <RefreshCw className="w-4 h-4 text-neon-pink animate-spin" style={{ animationDuration: '6s' }} />
            Visual Evolution / 宣传视觉演化 (比对初版 vs 终版)
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
            POSTER <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-rose-400 font-light lowercase">evolution</span>
          </h2>
          <p className="text-xs text-neutral-500 font-sans mt-2">
            点击右侧切换，直接载入和参阅设计演变中的对应海报大图。
          </p>
        </div>

        {/* Layout Grid columns: Left revisions, Right Interactive Posters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Revisions list - Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <h3 className="text-xl font-bold font-mono text-white tracking-widest uppercase border-b border-dashed border-neutral-800 pb-4">
              视觉修改图注说明
            </h3>

            <div className="flex flex-col gap-4">
              {revisionPoints.map((rev) => (
                <div 
                  key={rev.id} 
                  className="p-5 bg-card-dark border border-neutral-800 hover:border-neutral-700/60 transition-all text-left"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-mono text-neon-pink font-bold">{rev.id.toUpperCase()}</span>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 uppercase">
                      {rev.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase font-sans mb-2">{rev.title}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">{rev.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-xs font-mono text-neutral-505 text-center lg:text-left mt-2 text-neutral-500">
              *所有视觉修正均为罗曼担任制作总监把关，携手设计师李心怡于 Adobe Illustrator 精制完成。
            </div>
          </div>

          {/* Interactive Rendering - Right Column */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* View selectors */}
            <div className="flex border border-neutral-800 p-1 bg-card-dark font-mono text-xs mb-8 rounded-none">
              <button
                onClick={() => setActiveStep('draft')}
                className={`px-6 py-2 uppercase transition-all cursor-pointer ${activeStep === 'draft' ? 'bg-neutral-800 text-white font-bold' : 'text-neutral-500 hover:text-white'}`}
              >
                1. 概念草图稿 (2024年11月)
              </button>
              <button
                onClick={() => setActiveStep('final')}
                className={`px-6 py-2 uppercase transition-all cursor-pointer ${activeStep === 'final' ? 'bg-neon-pink text-white font-bold animate-pulse' : 'text-neutral-500 hover:text-white'}`}
              >
                2. 当晩最终海报 (2025年5月)
              </button>
            </div>

            {/* Poster Holder - Direct Image Render without HTML simulation */}
            <div className="relative w-full max-w-[380px] aspect-[1/1.41] bg-[#020202] border border-neutral-850 shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between text-left">
              
              {/* Outer light glow border */}
              <div className={`absolute inset-0 border transition-all duration-500 ${activeStep === 'final' ? 'border-neon-pink/30 shadow-[0_0_20px_rgba(255,0,127,0.1)]' : 'border-neutral-850'}`}></div>

              {activeStep === 'draft' ? (
                <div className="relative w-full h-full flex items-center justify-center bg-[#070708]">
                  {!draftError ? (
                    <img 
                      src={draftSrc} 
                      alt="早期概念海报草图 (2024.11)" 
                      className="w-full h-full object-cover select-none"
                      onError={handleDraftError}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="border border-dashed border-neutral-800 h-full w-full flex flex-col items-center justify-center p-6 text-center">
                        <span className="text-4xl mb-4">🎨</span>
                        <p className="text-xs text-neutral-300 font-mono mb-2">概念海报草稿图</p>
                        <p className="text-[10px] text-neutral-500 font-sans max-w-[240px] leading-relaxed">
                          图片未检测到。请在左侧文件栏 
                          <code className="text-neon-pink bg-neutral-900 px-1 py-0.5 font-mono ml-1">/public/</code> 
                          目录下点击上传或拖入名为 
                          <code className="text-neon-pink font-mono block mt-1">poster_draft.jpg</code>
                          或 <code className="text-neon-pink font-mono">poster_draft.png / .webp</code> 的图片。
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center bg-[#070708]">
                  {!finalError ? (
                    <img 
                      src={finalSrc} 
                      alt="当晚最终官方海报 (2025.5)" 
                      className="w-full h-full object-cover select-none"
                      onError={handleFinalError}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="border border-dashed border-neutral-800 h-full w-full flex flex-col items-center justify-center p-6 text-center">
                        <span className="text-4xl mb-4">✨</span>
                        <p className="text-xs text-neutral-300 font-mono mb-2">当晩最终官方海报</p>
                        <p className="text-[10px] text-neutral-500 font-sans max-w-[240px] leading-relaxed">
                          图片未检测到。请在左侧文件栏 
                          <code className="text-neon-pink bg-neutral-900 px-1 py-0.5 font-mono ml-1">/public/</code> 
                          目录下点击上传或拖入名为 
                          <code className="text-neon-pink font-mono block mt-1">poster_final.jpg</code>
                          或 <code className="text-neon-pink font-mono">poster_final.png / .webp</code> 的图片。
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
