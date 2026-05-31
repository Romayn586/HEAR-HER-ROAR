import React, { useState, useEffect } from 'react';
import { Camera, Image as ImageIcon, Upload, ZoomIn, X, Sparkles, User, Users, Maximize, Minimize } from 'lucide-react';

interface PhotoItem {
  id: string;
  title: string;
  engTitle: string;
  desc: string;
  defaultPath: string;
  storageKey: string;
  gridSpan: string;
  imgAspect: string;
  icon: any;
}

export default function GroupPhotos() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [localPreviews, setLocalPreviews] = useState<Record<string, string>>({});
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  
  // Fit modes: 'contain' displays the complete photo without cropping; 'cover' crops/zooms to fill the container.
  const [fitModes, setFitModes] = useState<Record<string, 'contain' | 'cover'>>({
    group_photo: 'contain',
    organizers_1: 'contain',
    organizers_2: 'contain'
  });

  const photos: PhotoItem[] = [
    {
      id: 'group_photo',
      title: '全体演职人员与主创大合影',
      engTitle: 'Cast, Crew & Artists Reunion Photo',
      desc: '演出落幕后，四组主音歌手、乐队乐手（RUNA、Katerina、Blue Not Rue、Baby Blue）及制作组织者、志愿者的世纪大同框，定格了在 HPBC 地下舞台的最高潮温热。此大合合照已重构为大画幅宽荧幕，默认完整显示不裁切左右。',
      defaultPath: '/group_photo.jpg',
      storageKey: 'hhr_group_photo_file',
      gridSpan: 'lg:col-span-4 md:col-span-2 col-span-1',
      imgAspect: 'aspect-video md:aspect-[21/9]',
      icon: Users
    },
    {
      id: 'organizers_1',
      title: '主创团队合影 I：幕后筹划',
      engTitle: 'Project Co-founders Frame I',
      desc: '项目发起人罗曼（Man Luo）及核心筹备团队（姜欣姚、金玉洁）在策划初期的脑暴与多方沟通节点合纪念。',
      defaultPath: '/organizers_1.jpg',
      storageKey: 'hhr_organizers_1_file',
      gridSpan: 'lg:col-span-2 md:col-span-1 col-span-1',
      imgAspect: 'aspect-video md:aspect-[16/10]',
      icon: User
    },
    {
      id: 'organizers_2',
      title: '主创团队合影 II：现场凯旋',
      engTitle: 'Project Co-founders Frame II',
      desc: '罗曼、姜欣姚、金玉洁在 106 张票务扫清且全场爆发性好评、完成 Getaway Girls 公益捐助划款后的胜利合照。',
      defaultPath: '/organizers_2.jpg',
      storageKey: 'hhr_organizers_2_file',
      gridSpan: 'lg:col-span-2 md:col-span-1 col-span-1',
      imgAspect: 'aspect-video md:aspect-[16/10]',
      icon: Sparkles
    }
  ];

  // Load saved local uploads from localStorage if available (as Base64 to survive reload)
  useEffect(() => {
    const loaded: Record<string, string> = {};
    photos.forEach(item => {
      const saved = localStorage.getItem(item.storageKey);
      if (saved) {
        loaded[item.id] = saved;
      }
    });
    setLocalPreviews(loaded);
  }, []);

  const handleFileChange = (id: string, storageKey: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("图片文件过大，请选择 2MB 以下的图片进行上传预览。");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        try {
          localStorage.setItem(storageKey, base64String);
          setLocalPreviews(prev => ({ ...prev, [id]: base64String }));
          setImageErrors(prev => ({ ...prev, [id]: false }));
        } catch (error) {
          console.warn('Storage quota limit reached, saving to session preview instead.', error);
          const memoryUrl = URL.createObjectURL(file);
          setLocalPreviews(prev => ({ ...prev, [id]: memoryUrl }));
          setImageErrors(prev => ({ ...prev, [id]: false }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const clearPhoto = (id: string, storageKey: string, e: React.MouseEvent) => {
    e.stopPropagation();
    localStorage.removeItem(storageKey);
    setLocalPreviews(prev => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
    setImageErrors(prev => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  return (
    <div className="relative z-10 w-full border-t border-dashed border-white/10 pt-12 mt-12 text-left">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neon-pink block mb-1">
            Visual Memory / 视觉记忆留存
          </span>
          <h3 className="text-2xl md:text-3xl font-black uppercase text-white font-mono tracking-tight flex items-center gap-2">
            <Camera className="w-6 h-6 text-neon-pink" />
            演职人员大合照 & 主创合影集
          </h3>
          <p className="text-xs text-neutral-400 mt-2 font-sans max-w-3xl">
            此区域呈现团队的核心纪实，大合照已重构为<span className="text-white font-semibold">大画幅宽荧幕比例</span>布局。您可以在每个卡片上点击右上角上传真实高清晰度大合照，网页将即刻以完整尺寸（不裁切）渲染。若要在代码库中永久保存，请将图片重命名为 
            <code className="text-neon-pink px-1.5 py-0.5 bg-neutral-900 mx-1">group_photo.jpg</code>、
            <code className="text-neon-pink px-1.5 py-0.5 bg-neutral-900 mx-1">organizers_1.jpg</code>、
            <code className="text-neon-pink px-1.5 py-0.5 bg-neutral-900 mx-1">organizers_2.jpg</code> 并保存至项目的 <code className="text-white">/public</code> 文件夹下。
          </p>
        </div>
        <div className="flex items-center gap-2 bg-neutral-900/50 border border-neutral-800 px-3 py-1.5 text-[9px] font-mono text-neutral-500 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          支持即时本地拖放与实时预览
        </div>
      </div>

      {/* Grid container combining group photos - Restructured for massive horizontal space */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {photos.map((item) => {
          const previewUrl = localPreviews[item.id] || item.defaultPath;
          const isUploaded = !!localPreviews[item.id];
          const hasError = !!imageErrors[item.id];
          const fitMode = fitModes[item.id] || 'contain';
          const IconComponent = item.icon;

          return (
            <div
              key={item.id}
              className={`group flex flex-col justify-between bg-card-dark border border-neutral-800 transition-all duration-300 hover:border-neon-pink/50 overflow-hidden relative text-left ${item.gridSpan}`}
            >
              {/* Image preview area - Dynamic aspect matching */}
              <div 
                className={`relative w-full overflow-hidden flex items-center justify-center cursor-zoom-in bg-neutral-950 ${item.imgAspect}`}
                onClick={() => {
                  if (!hasError) {
                    setSelectedPhoto(previewUrl);
                    setSelectedTitle(item.title);
                  }
                }}
              >
                {/* Fallback pattern overlay shown when no real photo exists in public and not uploaded yet */}
                <div className="absolute inset-0 bg-[radial-gradient(#1f1f23_20%,transparent_20%)] [background-size:12px_12px] opacity-15 pointer-events-none"></div>

                {/* Styled Image. Fits fully on screen if fitMode is contain */}
                {!hasError && (
                  <img
                    src={previewUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className={`absolute inset-0 w-full h-full transition-all duration-500 ${
                      fitMode === 'cover' 
                        ? 'object-cover hover:scale-105' 
                        : 'object-contain p-1.5 group-hover:scale-[1.01]'
                    }`}
                    onError={() => {
                      setImageErrors(prev => ({ ...prev, [item.id]: true }));
                    }}
                  />
                )}

                {/* Fallback layout if the image fails to load or is an empty placeholder */}
                {hasError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-b from-neutral-900 to-neutral-950 text-center select-none">
                    <div className="p-3 bg-neutral-950/80 rounded-none border border-neutral-800 mb-2 text-neon-pink">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase block mb-1">
                      {isUploaded ? 'UPLOADED LINK ERROR' : '待上传 / WAIT FOR PHOTO'}
                    </span>
                    <p className="text-xs text-neutral-300 font-sans max-w-[200px] leading-relaxed">
                      请将真实的合影放置在项目中的
                      <code className="text-neon-pink font-mono block bg-black/50 px-1 py-0.5 mt-1 text-[10px] break-all">
                        {item.defaultPath}
                      </code>
                    </p>
                    <div className="mt-3">
                      <label className="cursor-pointer px-2.5 py-1 bg-neutral-900 hover:bg-neon-pink text-white rounded-none border border-neutral-800 hover:border-transparent transition-all flex items-center gap-1 text-[9.5px] font-mono">
                        <Upload className="w-3 h-3" />
                        <span>点此上传</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleFileChange(item.id, item.storageKey, e)}
                        />
                      </label>
                    </div>
                  </div>
                )}

                {/* Persistent overlay mode toggle - allows switching uncropped displays on the fly */}
                {!hasError && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setFitModes(prev => ({
                        ...prev,
                        [item.id]: prev[item.id] === 'cover' ? 'contain' : 'cover'
                      }));
                    }}
                    className="absolute bottom-3 left-3 z-30 px-2 py-0.5 bg-black/80 hover:bg-neutral-900 border border-neutral-800 text-[9px] font-mono text-neutral-400 hover:text-neon-pink transition-all flex items-center gap-1 hover:border-neon-pink/30"
                    title="缩放比例切换"
                  >
                    <span>{fitMode === 'cover' ? '🔍 完整图幅' : '✂️ 裁剪铺满'}</span>
                  </button>
                )}

                {/* Subtle dark gradient overlay at top for controls visibility when not hovered */}
                <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-10 transition-opacity duration-300 group-hover:opacity-0"></div>

                {/* Aesthetic HUD hover overlay & triggers. Directly transparent when not hovered! */}
                <div className="absolute inset-0 bg-neutral-950/65 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center p-4 transition-all duration-300 text-center select-none z-20">
                  {/* Inside card upload handler */}
                  <label 
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-3 right-3 z-30 cursor-pointer p-1.5 bg-black/80 hover:bg-neon-pink/90 text-white rounded-none border border-neutral-800 hover:border-transparent transition-all flex items-center gap-1 text-[9px] font-mono"
                    title="上传真实合影照片"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>上传照片</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileChange(item.id, item.storageKey, e)}
                    />
                  </label>

                  {isUploaded && (
                    <button
                      onClick={(e) => clearPhoto(item.id, item.storageKey, e)}
                      className="absolute top-3 left-3 z-30 p-1.5 bg-black/80 hover:bg-rose-600 text-white border border-neutral-800 hover:border-transparent transition-all text-[9px] font-mono"
                      title="重置为初始配置"
                    >
                      [ 重置 ]
                    </button>
                  )}

                  {/* Centered Camera Overlay details */}
                  {!hasError && (
                    <div className="flex flex-col items-center pointer-events-none">
                      <div className="p-2.5 bg-neutral-900/90 rounded-none border border-neutral-800 mb-1.5 transform group-hover:scale-105 transition-transform">
                        <IconComponent className="w-4.5 h-4.5 text-neon-pink" />
                      </div>
                      <span className="text-[9.5px] font-mono tracking-widest text-[#f4f4f5]/60">
                        {isUploaded ? '✨ CUSTOM PREVIEW' : '📸 COMPLIMENTARY VIEW'}
                      </span>
                      <div className="mt-2.5 inline-flex items-center gap-1 px-2 py-0.5 bg-white/[0.04] border border-white/10 rounded-full text-[10px] text-white">
                        <ZoomIn className="w-3 h-3 text-neon-pink animate-pulse" />
                        <span>点击放大查看全图</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tech specifications watermark in corner */}
                <div className="absolute bottom-3 right-3 z-10 px-1 py-0.5 bg-black/60 border border-neutral-800 text-[8px] tracking-widest font-mono text-neutral-500 uppercase pointer-events-none">
                  LOC: HPBC / TEAM_HHR
                </div>
              </div>

              {/* Title descriptions */}
              <div className="p-5 border-t border-neutral-900 bg-neutral-950 flex flex-col justify-between h-[150px]">
                <div>
                  <h4 className="text-white font-bold text-sm leading-tight tracking-wide font-mono hover:text-neon-pink transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-[10px] font-mono text-neutral-500 block uppercase tracking-wider mt-0.5">
                    {item.engTitle}
                  </span>
                  <p className="text-xs text-neutral-400 mt-2 line-clamp-3 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pure-black/95 backdrop-blur-xl transition-all animate-fade-in"
          onClick={() => {
            setSelectedPhoto(null);
            setSelectedTitle(null);
          }}
        >
          <div 
            className="relative max-w-5xl w-full bg-card-dark border border-neutral-800 overflow-hidden shadow-2xl transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-grit-gray flex justify-between items-center bg-black">
              <span className="text-xs font-mono tracking-widest text-neon-pink uppercase font-bold flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-neon-pink" />
                {selectedTitle} ｜ 极清视觉大画幅
              </span>
              <button
                onClick={() => {
                  setSelectedPhoto(null);
                  setSelectedTitle(null);
                }}
                className="text-xs font-mono text-neutral-400 hover:text-white uppercase transition-colors p-1"
              >
                [ 关闭 CLOSE ]
              </button>
            </div>

            <div className="p-1 bg-[#0b0c10] flex justify-center items-center overflow-auto max-h-[70vh]">
              <img 
                src={selectedPhoto} 
                alt="Highlight View" 
                referrerPolicy="no-referrer"
                className="w-full max-h-[65vh] object-contain select-none"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <div className="p-4 bg-card-dark border-t border-grit-gray text-xs text-neutral-400 leading-relaxed font-sans text-center">
              使用鼠标中键可缩放或右键保存，完美的端到端印证了“听她咆哮 Hear Her Roar”不可复制的里程碑！
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
