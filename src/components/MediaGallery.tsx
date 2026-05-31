import { useState, useEffect } from 'react';
import { Camera, Play, ExternalLink, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'show' | 'ops' | 'social';
  emoji: string;
  title: string;
  desc: string;
  details: string;
  videoUrl?: string;
  fallbackVideoUrl?: string;
  externalUrl?: string;
  imageUrls?: string[];
  imageUrl?: string;
}

export default function MediaGallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'show' | 'ops' | 'social'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [isUsingFallback, setIsUsingFallback] = useState<boolean>(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [assetAvailability, setAssetAvailability] = useState<Record<string, 'live' | 'empty' | 'loading'>>({});

  useEffect(() => {
    const assetsToCheck = [
      '/runa_live.mp4',
      '/katerina_live.mp4',
      '/ops_transport_1.jpg',
      '/ops_tickets_2.jpg',
      '/ops_materials_3.jpg',
      '/ops_feedback_1-1.jpg',
      '/ops_feedback_1.jpg',
      '/intermission_raffle_live-1.mp4',
      '/intermission_raffle_live.mp4',
      '/group_photo.jpg'
    ];

    assetsToCheck.forEach(async (path) => {
      try {
        const res = await fetch(path, { method: 'GET' });
        if (!res.ok) {
          setAssetAvailability(prev => ({ ...prev, [path]: 'empty' }));
          return;
        }
        const contentLength = res.headers.get('content-length');
        if (contentLength === '0') {
          setAssetAvailability(prev => ({ ...prev, [path]: 'empty' }));
          return;
        }
        if (contentLength === null) {
          const blob = await res.blob();
          if (blob.size === 0) {
            setAssetAvailability(prev => ({ ...prev, [path]: 'empty' }));
            return;
          }
        }
        setAssetAvailability(prev => ({ ...prev, [path]: 'live' }));
      } catch (e) {
        setAssetAvailability(prev => ({ ...prev, [path]: 'empty' }));
      }
    });
  }, []);

  const isAssetEmpty = (path: string) => {
    return assetAvailability[path] === 'empty' || failedImages[path];
  };

  const getImageSrc = (path: string) => {
    if (isAssetEmpty(path)) {
      if (path.includes('transport')) return '/poster_draft.jpg';
      if (path.includes('tickets')) return '/setlist_blue-not-rue.jpg';
      if (path.includes('materials')) return '/poster_final.jpg';
      if (path.includes('feedback')) return '/setlist_baby-blue.jpg';
      if (path.includes('group_photo')) return '/poster_final.jpg';
      return '/poster_draft.jpg';
    }
    return path;
  };

  const getFeedbackImageSrc = () => {
    if (assetAvailability['/ops_feedback_1.jpg'] === 'live') {
      return '/ops_feedback_1.jpg';
    }
    if (assetAvailability['/ops_feedback_1-1.jpg'] === 'live') {
      return '/ops_feedback_1-1.jpg';
    }
    if (isAssetEmpty('/ops_feedback_1-1.jpg') || isAssetEmpty('/ops_feedback_1.jpg')) {
      return '/setlist_baby-blue.jpg';
    }
    return '/ops_feedback_1-1.jpg';
  };

  const getVideoSrc = (item: GalleryItem) => {
    if (!item.videoUrl) return '';
    // If the primary raffle file is empty, check if other is live
    if (item.videoUrl === '/intermission_raffle_live-1.mp4') {
      if (assetAvailability['/intermission_raffle_live.mp4'] === 'live') {
        return '/intermission_raffle_live.mp4';
      }
    }
    return item.videoUrl;
  };

  useEffect(() => {
    if (selectedPhoto) {
      const activeVideoPath = getVideoSrc(selectedPhoto);
      let activeImagePath = '';
      if (selectedPhoto.imageUrl) {
        activeImagePath = selectedPhoto.id === 'ph-5' ? getFeedbackImageSrc() : selectedPhoto.imageUrl;
      } else if (selectedPhoto.imageUrls && selectedPhoto.imageUrls.length > 0) {
        activeImagePath = selectedPhoto.imageUrls[activeImageIndex];
      }

      const isEmpty = activeVideoPath 
        ? isAssetEmpty(activeVideoPath) 
        : (activeImagePath ? isAssetEmpty(activeImagePath) : false);

      setIsUsingFallback(isEmpty);
    } else {
      setIsUsingFallback(false);
    }
  }, [selectedPhoto, activeImageIndex, assetAvailability, failedImages]);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [selectedPhoto]);

  const photosList: GalleryItem[] = [
    { 
      id: 'ph-1', 
      category: 'show', 
      emoji: '🎸',
      title: 'RUNA 乐队现场爆烈摇滚高光', 
      desc: '在 Hyde Park Book Club (HPBC) 爆满的地下一层現場，另类独立摇滚旋律直击乐迷耳膜。',
      details: '在压轴登场的精彩时刻，Rossella Scotti 领衔主弦琴音和情感起伏，将现场气氛烘托至燃点。',
      videoUrl: '/runa_live.mp4',
      fallbackVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-rock-band-performing-on-stage-with-smoky-lights-42512-large.mp4'
    },
    { 
      id: 'ph-2', 
      category: 'show', 
      emoji: '🎤',
      title: 'Katerina 歌手深情吟唱特写', 
      desc: 'Katerina 在定制的暖融氛围灯下，献唱了极具感性美感的原创编曲。',
      details: '一场直抵心灵深处的、对柔弱和女性内敛本初自我觉醒的诉说。',
      videoUrl: '/katerina_live.mp4',
      fallbackVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-girl-singing-into-a-microphone-40615-large.mp4'
    },
    { 
      id: 'ph-3', 
      category: 'ops', 
      emoji: '🚀',
      title: '后勤物资奔袭与检票联合纪实', 
      desc: '项目制作人（罗曼）亲自带队连夜完成利兹大学重型爵士鼓鼓组肩扛运转，并配合地堡入口 TicketSource 系统半小时快速扫码核销 98 张电子票，确保高效畅通。',
      details: '这不仅生动体现了独立演出现场重型物料调度的硬执行作风，也依靠数字化工具确保了超密人流下的票房精准核验。本组画幅支持多张高保真照片连帧检阅。',
      imageUrls: [
        '/ops_transport_1.jpg',
        '/ops_tickets_2.jpg',
        '/ops_materials_3.jpg'
      ]
    },
    { 
      id: 'ph-4', 
      category: 'social', 
      emoji: '🌸',
      title: '联合慈善受邀及女权宣发纪实', 
      desc: '音乐会顺利闭幕后，制作人及登台艺人与 Getaway Girls 基金会负责人一行开展联合官方公关宣发拍摄。',
      details: '定格了“用力量致敬音乐，将艺术反哺社会”的闪光片刻，同步全盘分发各社媒渠道。',
      externalUrl: 'https://www.instagram.com/p/DKt4ywrs1RV/?img_index=1'
    },
    { 
      id: 'ph-5', 
      category: 'ops', 
      emoji: '📋',
      title: '乐迷数字化心声意见与问卷搜集', 
      desc: '在通道处设置数字化反馈二维码和小礼物派发，获取最真实的到店满意度调研反馈。',
      details: '这一前瞻数字回音机制高能斩获了 98% 乐迷的高度推荐与赞誉，完美呼应了 Lloyds 财务审计中优越的口碑反馈。',
      imageUrl: '/ops_feedback_1-1.jpg'
    },
    { 
      id: 'ph-6', 
      category: 'show', 
      emoji: '🎁',
      title: '中场限定抽奖与全场热烈沸腾时刻', 
      desc: '中场休息期间设立 of 惊喜盲盒抽奖环节，制作人现场派送联名周边，引发全场地堡观众热情欢呼。',
      details: '这一暖场策动不仅缩短了演出间隙的枯燥，更强力拉近了乐迷与创作者距离。请点选播放现场沸腾的实录视频！',
      videoUrl: '/intermission_raffle_live-1.mp4',
      fallbackVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-audience-raising-hands-at-a-music-festival-42519-large.mp4'
    },
    { 
      id: 'ph-7', 
      category: 'show', 
      emoji: '📸',
      title: '全体演职人员与主创团队谢幕大合照', 
      desc: '演出落幕后，所有参演的四组主打艺人、乐队乐手与幕后项目主创、志愿者们在 HPBC 地下舞台留下了温暖的合影。',
      details: '这一瞬间不仅定格了“听她咆哮”现场会的满场温热，亦是罗曼（Man Luo）及全体音乐管理项目团队（姜欣姚、金玉洁）毕业操盘实践画上的完满句号。您可以随时拖拽或上传合照文件至 `/public/group_photo.jpg` 来完美点亮实况！',
      imageUrl: '/group_photo.jpg'
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
              onClick={() => setSelectedPhoto(ph)}
              className="bg-[#121215] border border-neutral-800 hover:border-neon-pink/40 transition-all duration-300 group cursor-zoom-in relative overflow-hidden text-left"
            >
              {/* Virtual Photo representation with beautiful vector boxes */}
              <div className="aspect-[4/3] bg-[#020202] flex items-center justify-center border-b border-neutral-800 relative z-10 overflow-hidden">
                {/* Background image if exists */}
                {ph.imageUrls && ph.imageUrls.length > 0 ? (
                  <img 
                    src={getImageSrc(ph.imageUrls[0])} 
                    alt={ph.title}
                    onError={() => {
                      const firstUrl = ph.imageUrls![0];
                      setFailedImages(prev => ({ ...prev, [firstUrl]: true }));
                    }}
                    className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-45 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
                  />
                ) : ph.imageUrl ? (
                  <img 
                    src={getImageSrc(ph.imageUrl)} 
                    alt={ph.title}
                    onError={() => {
                      setFailedImages(prev => ({ ...prev, [ph.imageUrl!]: true }));
                    }}
                    className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-45 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
                  />
                ) : null}

                {/* Top Right emoji badge if has image, or large central emoji if no image */}
                {ph.imageUrls || ph.imageUrl ? (
                  <div className="absolute top-3 right-3 bg-black/85 border border-neutral-800 w-9 h-9 rounded-full flex items-center justify-center text-lg shadow-lg z-20 group-hover:border-neon-pink/50 transition-colors">
                    {ph.emoji}
                  </div>
                ) : (
                  <div className="text-5xl group-hover:scale-125 transition-transform duration-500 z-10">
                    {ph.emoji}
                  </div>
                )}

                {/* Pulse play overlay for video */}
                {ph.videoUrl && (
                  <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center opacity-85 group-hover:opacity-100 transition-opacity z-20">
                    <div className="w-14 h-14 rounded-full bg-neon-pink text-white flex items-center justify-center shadow-[0_0_20px_rgba(255,46,140,0.6)] group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
                    </div>
                    <span className="text-[10px] font-mono text-neon-pink bg-black/80 px-2 py-0.5 mt-2 border border-neon-pink/20 uppercase tracking-widest rounded">
                      [点击播放现场实录]
                    </span>
                  </div>
                )}

                {/* External link overlay */}
                {ph.externalUrl && (
                  <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center opacity-85 group-hover:opacity-100 transition-opacity z-20">
                    <div className="w-14 h-14 rounded-full bg-neon-pink text-white flex items-center justify-center shadow-[0_0_20px_rgba(255,46,140,0.6)] group-hover:scale-110 transition-transform duration-300 animate-pulse">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[10px] font-mono text-white bg-black/90 px-2.5 py-1 mt-2 border border-neon-pink/30 uppercase tracking-widest rounded-full shadow-lg">
                      [点击查看官方社媒]
                    </span>
                  </div>
                )}

                {/* Visual indicators overlay for multi-images */}
                {ph.imageUrls && ph.imageUrls.length > 0 && (
                  <div className="absolute bottom-3 left-3 bg-neon-pink px-2.5 py-0.5 border border-neon-pink/30 text-[8px] font-mono text-white flex items-center gap-1 uppercase rounded-none z-20 shadow-lg">
                    <ImageIcon className="w-3 h-3" />
                    {ph.imageUrls.length} 张现场摄录
                  </div>
                )}
                
                {/* Visual grid watermark representing analog viewfinders */}
                <div className="absolute inset-4 border border-white/[0.03] pointer-events-none"></div>
                <div className="absolute top-2 left-2 font-mono text-[7px] text-neutral-600 font-bold">RAW-VIEWFINDER-CH-A</div>
                <div className="absolute bottom-2 right-2 font-mono text-[7px] text-neon-pink font-bold">
                  {ph.videoUrl ? 'VIDEO PLAY ●' : (ph.imageUrls || ph.imageUrl) ? 'RE-COLLECTION ▩' : ph.externalUrl ? 'EXTERNAL FEED ↗' : 'REC ●'}
                </div>
              </div>

              {/* Lower description body */}
              <div className="p-6">
                <span className="text-[10px] font-mono text-neon-pink uppercase tracking-widest mb-1 block">
                  镜头代码 #{ph.id.toUpperCase()} • {ph.category.toUpperCase()} {ph.videoUrl && '• 现场视频'} {(ph.imageUrls || ph.imageUrl) && '• 独家图集'} {ph.externalUrl && '• 官方联合纪实'}
                </span>
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

            {selectedPhoto.videoUrl ? (
              <div className="w-full aspect-video bg-black border border-neutral-800 relative mb-6 shadow-2xl rounded overflow-hidden group/video">
                <video 
                  src={isUsingFallback ? (selectedPhoto.fallbackVideoUrl || null) : (selectedPhoto.videoUrl || null)}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  loop
                  muted
                  onError={() => {
                    if (!isUsingFallback) {
                      setIsUsingFallback(true);
                    }
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-black/80 px-2 py-1 border border-neutral-800 text-[9px] font-mono text-neon-pink flex items-center gap-1.5 rounded uppercase z-10">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></span>
                  {isUsingFallback ? 'DEMO BACKUP FEED' : 'LIVE HI-FI FEED'}
                </div>
              </div>
            ) : selectedPhoto.imageUrls && selectedPhoto.imageUrls.length > 0 ? (
              <div className="w-full aspect-video bg-black border border-neutral-800 relative mb-6 shadow-2xl rounded overflow-hidden flex items-center justify-center group/carousel">
                <img 
                  src={getImageSrc(selectedPhoto.imageUrls[activeImageIndex])} 
                  alt={`${selectedPhoto.title} - ${activeImageIndex + 1}`}
                  onError={() => {
                    const currentUrl = selectedPhoto.imageUrls![activeImageIndex];
                    setFailedImages(prev => ({ ...prev, [currentUrl]: true }));
                  }}
                  className="w-full h-full object-contain"
                />
                {failedImages[selectedPhoto.imageUrls[activeImageIndex]] && (
                  <div className="absolute top-3 left-3 bg-black/90 px-3 py-1.5 border border-neon-pink/40 text-[9px] font-mono text-neon-pink rounded z-10 select-none animate-pulse">
                    ⚠️ 0字节图片自动重定向
                  </div>
                )}
                {selectedPhoto.imageUrls.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex((prev) => (prev - 1 + selectedPhoto.imageUrls!.length) % selectedPhoto.imageUrls!.length);
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/85 hover:bg-neon-pink border border-neutral-800 text-white rounded transition-all duration-300 transform hover:scale-105 cursor-pointer z-20"
                    >
                      <ChevronLeft className="w-4 h-4 text-white" />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex((prev) => (prev + 1) % selectedPhoto.imageUrls!.length);
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/85 hover:bg-neon-pink border border-neutral-800 text-white rounded transition-all duration-300 transform hover:scale-105 cursor-pointer z-20"
                    >
                      <ChevronRight className="w-4 h-4 text-white" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/90 px-3 py-1.5 rounded border border-neutral-800 z-20 animate-fade-in">
                      {selectedPhoto.imageUrls.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveImageIndex(idx);
                          }}
                          className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${idx === activeImageIndex ? 'bg-neon-pink w-3' : 'bg-neutral-600'}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : selectedPhoto.imageUrl ? (
              <div className="w-full aspect-video bg-black border border-neutral-800 relative mb-6 shadow-2xl rounded overflow-hidden flex items-center justify-center">
                <img 
                  src={getImageSrc(selectedPhoto.imageUrl)} 
                  alt={selectedPhoto.title}
                  onError={() => {
                    setFailedImages(prev => ({ ...prev, [selectedPhoto.imageUrl!]: true }));
                  }}
                  className="w-full h-full object-contain"
                />
                {failedImages[selectedPhoto.imageUrl] && (
                  <div className="absolute top-3 left-3 bg-black/90 px-3 py-1.5 border border-neon-pink/40 text-[9px] font-mono text-neon-pink rounded z-10 select-none animate-pulse">
                    ⚠️ 0字节图片自动重定向
                  </div>
                )}
              </div>
            ) : (
              <div className="w-24 h-24 rounded-full bg-black border border-neutral-800 flex items-center justify-center text-4xl mb-6 shadow-inner pulse-ring-pink">
                {selectedPhoto.emoji}
              </div>
            )}

            {((selectedPhoto.imageUrls && failedImages[selectedPhoto.imageUrls[activeImageIndex]]) || (selectedPhoto.imageUrl && failedImages[selectedPhoto.imageUrl])) && (
              <div className="w-full bg-[#0d070a] border border-neon-pink/20 rounded p-4 mb-4 text-left font-sans animate-fade-in">
                <span className="text-[10px] font-mono text-neon-pink uppercase tracking-widest block mb-1 font-semibold">
                  ⚠️ 图片资源载入提示 / IMAGE PLACEHOLDER NOTICE
                </span>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  检测到包含在此纪实内的图片文件路径目前是一个 <strong>0 字节的空文件</strong>，您的浏览器无法拉取并解析真实的视觉。
                </p>
                <p className="text-xs text-neutral-400 leading-relaxed mt-2">
                  系统已为您<strong>自动无缝、高保真地加载了活动备选海报/原装物料备份</strong>作为演示。您只需随时将真实的 JPEG/PNG 图片拖拽或上传到 `/public` 对应的路径下覆盖空文件，该处便会原样完美呈献您的精彩图集！
                </p>
              </div>
            )}

            {selectedPhoto.videoUrl && (
              <div className="w-full bg-[#0a0a0c] border border-neutral-900 rounded p-4 mb-4 text-left font-sans">
                {isUsingFallback ? (
                  <>
                    <span className="text-[10px] font-mono text-neon-pink uppercase tracking-widest block mb-1 font-semibold">
                      ⚠️ 现场实况载入提示 / LIVE FEED FALLBACK ACTIVE
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      检测到您刚刚在左侧文件栏创建的 <code className="text-neon-pink font-mono bg-black/40 px-1.5 py-0.5 rounded">/public{selectedPhoto.videoUrl}</code> 路径是一个 <strong>0 字节的空文件</strong>（或者视频格式损坏），浏览器无法直接解析播放。
                    </p>
                    <p className="text-xs text-neutral-400 leading-relaxed mt-2">
                      系统已为您<strong>自动、无缝切换至高保真演出视频 demo</strong> 供您感受爆棚氛围！一旦您上传/拖入一个真实的视频文件来替换它，这里将会完美自动播映您的专属实录。
                    </p>
                  </>
                ) : (
                  <>
                    <span className="text-[10px] font-mono text-neon-pink uppercase tracking-widest block mb-1">
                      视频自定义扩展指示 / CUSTOM FEED NOTE
                    </span>
                    <p className="text-xs text-neutral-400 leading-normal">
                      系统已优先加载专属于 {selectedPhoto.title.includes('RUNA') ? 'RUNA' : selectedPhoto.title.includes('Katerina') ? 'Katerina' : '中场限定抽奖'} Live 现场视频 <code className="text-neon-pink font-mono bg-black/40 px-1 py-0.5 rounded">/public{selectedPhoto.videoUrl}</code> 路径。如该视频暂未上传，我们将自动平滑播放现场灯光实录视频作为高保真演示备选，不影响演出集章的宏伟展现。
                    </p>
                  </>
                )}
              </div>
            )}

            <h4 className="text-lg font-bold font-mono text-white uppercase mb-2">{selectedPhoto.title}</h4>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed text-center mb-6">{selectedPhoto.desc} {selectedPhoto.details}</p>

            {selectedPhoto.externalUrl && (
              <div className="w-full bg-[#0a060d] border border-neon-pink/20 rounded p-5 mb-2 text-center font-sans">
                <span className="text-[10px] font-mono text-neon-pink uppercase tracking-widest block mb-2 font-bold">
                  📸 官方宣发发布渠道已锁定 / INSTAGRAM FEED
                </span>
                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  此慈善联席及女权宣发内容已正式受邀并发布于官方社媒。
                  您可以点击下方按钮，直接在新标签页中打开官方 Instagram 原声带图文贴：
                </p>
                <a 
                  href={selectedPhoto.externalUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-neon-pink hover:bg-neon-pink/90 text-white text-xs font-bold font-mono tracking-wider uppercase px-6 py-3 rounded shadow-[0_0_15px_rgba(255,46,140,0.45)] hover:shadow-[0_0_25px_rgba(255,46,140,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                  [ 打开官方 Instagram 帖子 / OPEN LINK ]
                </a>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
}
