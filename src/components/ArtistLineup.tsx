import { useState, useEffect } from 'react';
import { Music, FileText, ChevronDown, Check, Users } from 'lucide-react';
import { artists } from '../data/portfolioData';

export default function ArtistLineup() {
  const [expandedArtistId, setExpandedArtistId] = useState<string>('blue-not-rue');
  const [activeTab, setActiveTab] = useState<'bio' | 'setlist' | 'contract'>('bio');

  const [posterSrc, setPosterSrc] = useState<string>('/poster_blue-not-rue.jpg');
  const [posterError, setPosterError] = useState<boolean>(false);

  useEffect(() => {
    setPosterSrc(`/poster_${expandedArtistId}.jpg`);
    setPosterError(false);
  }, [expandedArtistId]);

  const handlePosterError = () => {
    if (posterSrc === `/poster_${expandedArtistId}.jpg`) {
      setPosterSrc(`/poster_${expandedArtistId}.png`);
    } else if (posterSrc === `/poster_${expandedArtistId}.png`) {
      setPosterSrc(`/poster_${expandedArtistId}.jpeg`);
    } else if (posterSrc === `/poster_${expandedArtistId}.jpeg`) {
      setPosterSrc(`/poster_${expandedArtistId}.webp`);
    } else {
      setPosterError(true);
    }
  };

  const selectedArtist = artists.find(a => a.id === expandedArtistId) || artists[1];

  return (
    <section id="line-up" className="py-24 px-4 md:px-8 bg-[#0a0a0c] border-b border-grit-gray relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-3 mb-16 max-w-3xl text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-neon-pink flex items-center gap-1.5">
            <Music className="w-4 h-4 text-neon-pink" />
            Curated Line-up & Performance Agreements / 艺人阵容与合同对账清算
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
            THE STAGE <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-rose-400 font-light lowercase">performers</span>
          </h2>
          <p className="text-xs text-neutral-500 font-sans mt-2">
            Hear Her Roar 音乐现场聚集了四档风格迥异但气场强大的独立音乐人。我们与每组参演嘉宾均签署了正式合规的 **《艺人现场出场劳务保障协议》**。通过差异化利润分成比例，既照顾到了个人单兵创作人（Solo Busker）的基本劳务，也充分激励了多人编制的大乐组和摇滚独立乐团。
          </p>
        </div>

        {/* Master Column Grid: Left Artist Selectors, Right Focused Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Card Selectors - Left Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {artists.map((artist) => {
              const isActive = artist.id === expandedArtistId;
              
              return (
                <button
                  key={artist.id}
                  onClick={() => {
                    setExpandedArtistId(artist.id);
                    setActiveTab('bio');
                  }}
                  className={`w-full text-left p-6 border transition-all relative overflow-hidden cursor-pointer ${
                    isActive 
                      ? 'bg-card-dark border-neon-pink shadow-lg shadow-neon-pink/5' 
                      : 'bg-[#121215]/45 border-neutral-800 hover:border-neutral-700/60'
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-neon-pink"></div>
                  )}
                  
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                      {artist.type} / {artist.origin}
                    </span>
                    <span className={`text-[9px] font-mono px-2 py-0.5 border ${
                      artist.id === 'runa' ? 'text-amber-400 border-amber-500/20 bg-amber-500/5' :
                      artist.id === 'baby-blue' ? 'text-sky-400 border-sky-500/20 bg-sky-500/5' :
                      artist.id === 'blue-not-rue' ? 'text-rose-400 border-rose-500/20 bg-rose-500/5' :
                      'text-emerald-400 border-emerald-500/20 bg-emerald-500/5'
                    }`}>
                      {artist.genre.split(' / ')[0]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">{artist.name}</h3>
                  <p className="text-xs text-neutral-400 mt-2 font-sans truncate pr-4">{artist.bio}</p>
                </button>
              );
            })}
          </div>

          {/* Focused Deck Viewer - Right Column */}
          <div className="lg:col-span-8 bg-card-dark border border-neutral-800 p-8 relative text-left">
            
            {/* Ambient indicator */}
            <div className="absolute top-0 right-0 mt-8 mr-10 font-mono text-[9px] text-neutral-500 hidden md:block border border-white/5 bg-black px-2 py-1">
              FOCUS_CORPUS: {selectedArtist.id.toUpperCase()}
            </div>

            {/* Title / Header of focussed model */}
            <div className="mb-6">
              <span className="text-[10px] font-mono text-neon-pink uppercase tracking-widest">立卷对决卡片 / ACTIVE SHEET</span>
              <h3 className="text-3xl font-black text-white uppercase tracking-tight mt-1">
                {selectedArtist.name}
              </h3>
              <p className="text-xs text-neutral-400 mt-1 font-mono">
                发源地: {selectedArtist.origin} | 核心风格: {selectedArtist.genre}
              </p>
            </div>

            {/* Split layout inside the Active Sheet */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Core content, Tabs & Details (xl:col-span-8) */}
              <div className="xl:col-span-8 flex flex-col">
                {/* Inner selectors tabs */}
                <div className="flex border-b border-neutral-800 gap-4 mb-6">
                  <button
                    onClick={() => setActiveTab('bio')}
                    className={`py-2 text-xs font-mono uppercase border-b-2 transition-all cursor-pointer ${
                      activeTab === 'bio' ? 'border-neon-pink text-white font-bold' : 'border-transparent text-neutral-400 hover:text-white'
                    }`}
                  >
                    1. 艺人生平与成员
                  </button>
                  <button
                    onClick={() => setActiveTab('setlist')}
                    className={`py-2 text-xs font-mono uppercase border-b-2 transition-all cursor-pointer ${
                      activeTab === 'setlist' ? 'border-neon-pink text-white font-bold' : 'border-transparent text-neutral-400 hover:text-white'
                    }`}
                  >
                    2. 演出现场歌单 ({selectedArtist.setlist.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('contract')}
                    className={`py-2 text-xs font-mono uppercase border-b-2 transition-all cursor-pointer ${
                      activeTab === 'contract' ? 'border-neon-pink text-white font-bold animate-pulse' : 'border-transparent text-neutral-400 hover:text-white'
                    }`}
                  >
                    3. 出场劳务保障契约 (分账 10%-20%)
                  </button>
                </div>

                {/* TAB CONTENTS RENDER */}
                
                {activeTab === 'bio' && (
                  <div className="flex flex-col gap-6">
                    <div>
                      <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2 font-black">艺术特写与自传描述</h4>
                      <p className="text-neutral-300 text-sm leading-relaxed font-sans">{selectedArtist.bio}</p>
                    </div>

                    <div className="bg-[#000] border border-neutral-900 p-5 font-sans leading-relaxed text-xs text-neon-pink italic border-l-2 border-l-neon-pink">
                      {selectedArtist.quoteSelection}
                    </div>

                    {selectedArtist.members && (
                      <div>
                        <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3 font-semibold flex items-center gap-1.5">
                          <Users className="w-4 h-4 text-neon-pink" />
                          乐队花名册与分工细节 / Roster Details
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {selectedArtist.members.map((member, i) => (
                            <div key={i} className="p-4 bg-[#121215] border border-neutral-900 text-left">
                              <div className="flex justify-between font-mono text-xs font-bold text-white mb-1">
                                <span>{member.name}</span>
                                <span className="text-neon-pink">{member.role}</span>
                              </div>
                              <p className="text-[11px] text-neutral-500 font-sans leading-tight">{member.bio}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'setlist' && (
                  <div className="flex flex-col gap-4">
                    <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1 font-semibold">当晚现场敲定曲目轨道</h4>
                    <div className="flex flex-col gap-3">
                      {selectedArtist.setlist.map((track, i) => (
                        <div key={i} className="p-4 bg-[#0a0a0c] border border-neutral-900 flex gap-4 items-start hover:border-white/5 transition-all text-left">
                          <div className="w-6 h-6 rounded-full bg-neutral-900 text-[10px] text-neutral-400 font-mono border border-neutral-800 flex items-center justify-center shrink-0">
                            {i + 1}
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-sm font-bold text-white uppercase italic">{track.title}</span>
                            <span className="text-xs text-neutral-400 font-sans leading-relaxed">{track.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'contract' && (
                  <div className="bg-neutral-900 border border-neutral-800 p-6 flex flex-col gap-6 text-xs text-neutral-300 text-left">
                    <div className="flex items-start gap-3 border-b border-white/5 pb-4">
                      <FileText className="w-6 h-6 text-neon-pink shrink-0" />
                      <div>
                        <h4 className="font-bold text-white uppercase font-mono">《现场驻唱演出分配契约协议（范本）》</h4>
                        <p className="text-[10px] font-mono text-neutral-500 text-left">存底档案索引: HHR-{selectedArtist.id.toUpperCase()}-CONTRACT</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 font-mono text-[11px] border-b border-white/5 pb-4">
                      <div>
                        <strong className="text-neutral-500 uppercase block">立契约承办方 (PROMOTER)</strong>
                        <span className="text-white">Hear Her Roar 现场制作委员会 / UoL Leeds</span>
                      </div>
                      <div>
                        <strong className="text-neutral-500 uppercase block">立契约表演人 (PERFORMER)</strong>
                        <span className="text-neon-pink font-semibold">{selectedArtist.name} ({artistTitleHelper(selectedArtist.type)})</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <h5 className="font-bold text-white uppercase font-mono text-xs">执行核心条款与劳动作酬细节:</h5>
                      <div className="flex gap-2 items-start text-[11px] font-sans">
                        <Check className="w-4 h-4 stroke-[3px] text-emerald-400 shrink-0 mt-0.5" />
                        <p>
                          <strong>门票纯余款分成分配比率 (Net profit split)</strong>：演出人可依据其多人乐手到场统筹难度，结算其总体的演出红利。其享有本次音乐会全场门票最终净结余款（£676.09）的 **{selectedArtist.type === '独唱歌手' || selectedArtist.type === 'Solo' ? '10%' : '20%'}** 的出场红利结算转出。
                        </p>
                      </div>
                      <div className="flex gap-2 items-start text-[11px] font-sans">
                        <Check className="w-4 h-4 stroke-[3px] text-emerald-400 shrink-0 mt-0.5" />
                        <p>
                          <strong>已经平账汇出劳务平款 (Resolved payment)</strong>：在 TicketSource 票仓清算完结、提现进入统筹账户 of 7 个工作日内公对公打入其注册银行（已于2025年6月12日全盘出纳记账清算完毕）。结存金额为：**£{selectedArtist.type === '独唱歌手' || selectedArtist.type === 'Solo' ? '67.60' : '135.22'}**。
                        </p>
                      </div>
                      <div className="flex gap-2 items-start text-[11px] font-sans">
                        <Check className="w-4 h-4 stroke-[3px] text-emerald-400 shrink-0 mt-0.5" />
                        <p>
                          <strong>宿卫与硬件物流支持条款 (Rider)</strong>：除上述分账之外，全额包揽乐手运载重型硬件乐器（爵士架、贝司镲片）打车报销费；后台全时间提供免息食膳软饮，并特全赠 Lush 送定制定制的素食洗护伴手手礼。
                        </p>
                      </div>
                    </div>

                    {/* Simulated signature segment */}
                    <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono">
                      <div className="flex flex-col text-left">
                        <span className="text-neutral-600 uppercase">承办方立签署（盖记）</span>
                        <span className="text-white font-serif italic mt-1 text-sm font-semibold">Roman Luo (罗曼)</span>
                        <span className="text-[8px] text-neutral-500">日期: 2025年5月10日</span>
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="text-neutral-600 uppercase">演职方代表确认签收</span>
                        <span className="text-neon-pink font-serif italic mt-1 text-sm font-semibold">{selectedArtist.name === 'Blue Not Rue' ? 'Wenjing Huang' : selectedArtist.name === 'Baby Blue' ? 'Xinyu Dai' : selectedArtist.name === 'RUNA' ? 'Rossella Scotti' : 'Katerina E.'}</span>
                        <span className="text-[8px] text-neutral-500">已电子签名验证并轧账核销</span>
                      </div>
                    </div>

                  </div>
                )}
              </div>

              {/* Right Column: Artist Poster & Verification Frame */}
              <div className="xl:col-span-4 flex flex-col gap-4">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block text-left">艺人专题海报 / ART_POSTER</span>
                
                <div className="relative aspect-[3/4] bg-[#121215] border border-neutral-800 flex flex-col justify-between overflow-hidden shadow-lg rounded">
                  {!posterError && posterSrc ? (
                    <img 
                      src={posterSrc} 
                      alt={`${selectedArtist.name} 专属海报`}
                      className="w-full h-full object-cover select-none animate-fade-in"
                      onError={handlePosterError}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="absolute inset-0 p-5 flex flex-col justify-between text-left bg-[#0c0c0e]">
                      <div>
                        <div className="w-8 h-8 rounded-full bg-neon-pink/10 border border-neon-pink/20 flex items-center justify-center mb-3">
                          <Music className="w-4 h-4 text-neon-pink" />
                        </div>
                        <h4 className="text-xs font-black text-white uppercase tracking-tight">{selectedArtist.name}</h4>
                        <p className="text-[9px] text-[#ff007f] font-mono mb-3">EXCLUSIVE DESIGN</p>
                        
                        <p className="text-[10px] text-neutral-400 font-sans leading-relaxed">
                          图片未检测到。请在左侧文件栏 
                          <code className="text-neon-pink bg-neutral-950 px-1 py-0.5 font-mono ml-1">/public/</code> 
                          目录下，点击上传或拖入名为:
                          <code className="text-neon-pink font-mono block mt-1 p-1 bg-black border border-white/5 rounded-xs text-[9px]">
                            poster_{selectedArtist.id}.jpg
                          </code>
                          或 <code className="text-neon-pink font-mono">poster_{selectedArtist.id}.png / .webp</code> 的专属艺人海报。
                        </p>
                      </div>

                      <div className="border-t border-white/5 pt-2 mt-2 text-[8px] font-mono text-neutral-600 flex justify-between">
                        <span>{selectedArtist.genre.split(' / ')[0]}</span>
                        <span>{selectedArtist.origin}</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Glowing Overlay Indicator */}
                  {!posterError && (
                    <div className="absolute top-2.5 right-2.5 bg-black/80 border border-white/10 px-1.5 py-0.5 text-[7px] font-mono text-neon-pink select-none tracking-wider uppercase">
                      LOCKED / {selectedArtist.id.toUpperCase()}
                    </div>
                  )}
                </div>
                
                <p className="text-[9px] text-neutral-500 font-sans leading-relaxed text-left">
                  注：每幅艺人海报均由官方设计团队依据其学理曲目情感精心订制，可拖入自定义图片完成线上预览切换。
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

function artistTitleHelper(typeString: string) {
  if (typeString === 'Solo' || typeString === '独唱歌手') return '独唱歌手';
  return '多人乐队编制';
}
