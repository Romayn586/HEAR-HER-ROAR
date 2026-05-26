import { useState } from 'react';
import { Camera } from 'lucide-react';

export default function MediaGallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'show' | 'ops' | 'social'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<{ url: string; title: string; desc: string } | null>(null);

  const photosList = [
    { 
      id: 'ph-1', 
      category: 'show', 
      emoji: '🎸',
      title: 'RUNA 乐队现场爆烈摇滚高光', 
      desc: '在 Hyde Park Book Club (HPBC) 爆满的地下一层現場，另类独立摇滚旋律直击乐迷耳膜。',
      details: '在压轴登场的精彩时刻，Rossella Scotti 领衔主弦琴音和情感起伏，将现场气氛烘托至燃点。'
    },
    { 
      id: 'ph-2', 
      category: 'show', 
      emoji: '🎤',
      title: 'Baby Blue 歌手深情吟唱特写', 
      desc: '戴心怡 (Xinyu Dai) 在定制的暖融氛围灯下，献唱了极具感性美感的波萨诺瓦 (Bossa Nova) 原创编曲。',
      details: '一场直抵心灵深处的、对柔弱和女性内敛本初自我觉醒的诉说。'
    },
    { 
      id: 'ph-3', 
      category: 'ops', 
      emoji: '📦',
      title: '重型乐器硬件自驾托运与体力突击', 
      desc: '项目制作人（罗曼）亲自带队，将连夜向利兹大学借入的整套爵士架打车重型乐器硬件肩扛搬运。',
      details: '这完全凸显了活动策划执行中不走过场、亲自协调的‘硬执行力’作风。'
    },
    { 
      id: 'ph-4', 
      category: 'ops', 
      emoji: '🎟️',
      title: '地堡检票点与门票快捷扫码扫账对齐', 
      desc: '罗曼在入口玄关处使用 TicketSource 联合检票系统快速扫算入场者手机上电子二维码门票。',
      details: '在短短 30 分钟的高压重流内快速扫对 98 人进账，实现零失误零拥堵高能核销。'
    },
    { 
      id: 'ph-5', 
      category: 'social', 
      emoji: '🌸',
      title: '联合慈善受邀及女权宣发纪实', 
      desc: '音乐会顺利闭幕后，制作人及登台艺人与 Getaway Girls 基金会负责人一行开展联合官方公关宣发拍摄。',
      details: '定格了“用力量致敬音乐，将艺术反哺社会”的闪光片刻，同步全盘分发各社媒渠道。'
    },
    { 
      id: 'ph-6', 
      category: 'ops', 
      emoji: '📋',
      title: '乐迷数字化心声意见与问卷搜集', 
      desc: '在通道处设置数字化反馈二维码和小礼物派发，获取最真实的到店满意度调研反馈。',
      details: '高能斩获了 98% 乐迷的高度推荐与赞誉，完美呼应了 Lloyds 财务审计中优越的票房奇迹。'
    }
  ];

  const filteredPhotos = activeFilter === 'all' 
    ? photosList 
    : photosList.filter(ph => ph.category === activeFilter);

  return (
    <section id="gallery" className="py-24 px-4 md:px-8 bg-pure-black border-b border-grit-gray relative text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Header elements */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neon-pink flex items-center gap-1.5">
              <Camera className="w-4 h-4 text-neon-pink" />
              Documentary Media Room / 演出现场与执行影像实录
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none font-sans">
              VISUAL <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-rose-400 font-light lowercase">memories</span>
            </h2>
            <p className="text-xs text-neutral-500 font-sans max-w-xl">
              极简、高对比度黑白美学的视觉画板，凝练台前的炫目、后台物流搬运的艰辛及观众的狂热心声。点击任意图片呼起高清案桌透视。
            </p>
          </div>

          {/* Filter bars */}
          <div className="flex border border-neutral-800 p-1 bg-card-dark font-mono text-xs rounded-none shrink-0 self-start md:self-auto">
            {(['all', 'show', 'ops', 'social'] as const).map((key) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`px-4 py-2 uppercase transition-all whitespace-nowrap cursor-pointer ${activeFilter === key ? 'bg-neon-pink text-white font-bold' : 'text-neutral-500 hover:text-white'}`}
              >
                {key === 'all' ? '全部纪实' : key === 'show' ? '现场Live震撼' : key === 'ops' ? '执行搬运物流' : '社会回馈公关'}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((ph) => (
            <div 
              key={ph.id} 
              onClick={() => setSelectedPhoto({ url: ph.emoji, title: ph.title, desc: `${ph.desc} ${ph.details}` })}
              className="bg-[#121215] border border-neutral-800 hover:border-neon-pink/40 transition-all duration-300 group cursor-zoom-in relative overflow-hidden text-left"
            >
              {/* Virtual Photo representation with beautiful vector boxes */}
              <div className="aspect-[4/3] bg-[#020202] flex items-center justify-center border-b border-neutral-800 relative z-10">
                {/* Large responsive emoji / icon layer representing photo action */}
                <div className="text-5xl group-hover:scale-125 transition-transform duration-500">
                  {ph.emoji}
                </div>
                
                {/* Visual grid watermark representing analog viewfinders */}
                <div className="absolute inset-4 border border-white/[0.03] pointer-events-none"></div>
                <div className="absolute top-2 left-2 font-mono text-[7px] text-neutral-600 font-bold">RAW-VIEWFINDER-CH-A</div>
                <div className="absolute bottom-2 right-2 font-mono text-[7px] text-neon-pink font-bold">REC ●</div>
              </div>

              {/* Lower description body */}
              <div className="p-6">
                <span className="text-[10px] font-mono text-neon-pink uppercase tracking-widest mb-1 block">镜头代码 #{ph.id.toUpperCase()} • {ph.category.toUpperCase()}</span>
                <h3 className="text-base font-bold text-white uppercase font-sans mb-2 group-hover:text-neon-pink transition-colors">
                  {ph.title}
                </h3>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {ph.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Zoom Lightbox */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pure-black/95 backdrop-blur-xl">
          <div className="relative w-full max-w-xl bg-card-dark border border-neutral-800 p-8 shadow-2xl flex flex-col items-center text-center">
            <button 
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-xs font-mono text-neutral-500 hover:text-white uppercase transition-colors cursor-pointer"
            >
              [ 移离聚焦 ]
            </button>

            <div className="w-24 h-24 rounded-full bg-black border border-neutral-800 flex items-center justify-center text-4xl mb-6 shadow-inner pulse-ring-pink">
              {selectedPhoto.url}
            </div>

            <h4 className="text-lg font-bold font-mono text-white uppercase mb-2">{selectedPhoto.title}</h4>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed text-center">{selectedPhoto.desc}</p>
          </div>
        </div>
      )}

    </section>
  );
}
