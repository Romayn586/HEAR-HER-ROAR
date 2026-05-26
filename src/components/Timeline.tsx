import { useState } from 'react';
import { Calendar, FileText, CheckCircle, MessageSquare, Mail, Layers, Eye } from 'lucide-react';
import { timelineEvents } from '../data/portfolioData';
import { TimelineEvent } from '../types';

export default function Timeline() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeEvent, setActiveEvent] = useState<TimelineEvent | null>(null);

  const categories = [
    { id: 'all', label: '全部项目节点' },
    { id: 'coordination', label: '场地与乐手预订' },
    { id: 'marketing', label: '视觉插画与社宣' },
    { id: 'sponsorship', label: '商业赞助谈判' },
    { id: 'execution', label: '现场落地执行' },
    { id: 'wrapup', label: '收尾结算与财务' }
  ];

  const getCategoryLabel = (id: string) => {
    switch (id) {
      case 'coordination': return '场地与乐手预订';
      case 'marketing': return '视觉插画与社宣';
      case 'sponsorship': return '商业赞助谈判';
      case 'execution': return '现场落地执行';
      case 'wrapup': return '收尾结算与财务';
      default: return '里程碑点';
    }
  };

  const filteredEvents = selectedCategory === 'all'
    ? timelineEvents
    : timelineEvents.filter(e => e.category === selectedCategory);

  return (
    <section id="timeline" className="py-24 px-4 md:px-8 bg-[#0a0a0c] border-b border-grit-gray relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-neon-pink/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 text-left">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff007f] flex items-center gap-2">
              <Calendar className="w-4 h-4 text-neon-pink animate-pulse" />
              Project Chronology / 互动推进时间轴 (2024.11 – 2025.06)
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
              STRATEGIC <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-rose-400 font-light lowercase">evolution</span>
            </h2>
            <p className="text-xs text-neutral-500 max-w-xl font-sans mt-1">
              按阶段筛选和回溯项目的全生命周期推进。凡标有 **[ 调阅项目档案案卷 ]** 的关键节点，您均可以点击呼起电子机要柜，深度查验当时对公合同、活动收据、微信谈合原图以及与外方的邮件信函往来。
            </p>
          </div>

          {/* Filter Rails */}
          <div className="flex flex-wrap gap-2 border border-white/5 p-1 bg-[#121215] max-w-full">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-[10px] font-mono whitespace-nowrap uppercase transition-all cursor-pointer ${
                  selectedCategory === cat.id ? 'bg-neon-pink text-white font-bold' : 'text-neutral-500 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative border-l border-neutral-800 ml-4 md:ml-32 pl-8 py-4 flex flex-col gap-12 text-left">
          
          {filteredEvents.map((event) => {
            return (
              <div key={event.id} className="relative group">
                
                {/* Date Side tag - visible on desktop */}
                <div className="hidden md:block absolute -left-40 top-1 text-right w-28">
                  <span className="text-xs font-mono font-bold text-neutral-500 group-hover:text-neon-pink transition-colors">
                    {event.date}
                  </span>
                  <span className="block text-[9px] font-mono text-neutral-600 mt-1 uppercase tracking-widest">
                    {getCategoryLabel(event.category)}
                  </span>
                </div>

                {/* Vertical node anchor dot */}
                <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-[#0a0a0c] border-2 border-neutral-800 rounded-full group-hover:border-neon-pink group-hover:bg-neon-pink/10 transition-all flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-neutral-600 group-hover:bg-neon-pink rounded-full"></div>
                </div>

                {/* Timeline Card */}
                <div className="bg-card-dark border border-neutral-800 hover:border-neutral-700/60 transition-all p-6 md:p-8 relative">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex flex-col gap-1">
                      {/* Mobile Date indicator */}
                      <span className="md:hidden text-xs font-mono font-bold text-neon-pink">
                        {event.date} • {getCategoryLabel(event.category).toUpperCase()}
                      </span>
                      <h3 className="text-lg font-bold text-white tracking-wide uppercase">
                        {event.title}
                      </h3>
                    </div>

                    {/* Category Label Pin */}
                    <span className="hidden md:inline-block px-2 py-1 bg-neutral-900 border border-neutral-800 text-[9px] font-mono text-neutral-400 capitalize">
                      {getCategoryLabel(event.category)}
                    </span>
                  </div>

                  <p className="text-neutral-300 text-xs md:text-sm leading-relaxed mb-4 max-w-4xl font-sans">
                    {event.description}
                  </p>

                  {event.notes && (
                    <div className="bg-[#020202] border-l-2 border-neutral-700 p-3 mb-4 text-xs font-sans text-neutral-500">
                      <strong>制作执行日志记录：</strong> {event.notes}
                    </div>
                  )}

                  {/* Attachment Call Link */}
                  {event.artifact && (
                    <button
                      onClick={() => setActiveEvent(event)}
                      className="inline-flex items-center gap-2 text-xs font-mono text-neon-pink hover:text-white font-medium bg-neon-pink/5 hover:bg-neon-pink/15 border border-neon-pink/20 px-3 py-1.5 transition-all cursor-pointer"
                    >
                      {event.artifact.type === 'chat' && <MessageSquare className="w-3.5 h-3.5" />}
                      {event.artifact.type === 'email' && <Mail className="w-3.5 h-3.5" />}
                      {event.artifact.type === 'receipt' && <FileText className="w-3.5 h-3.5" />}
                      {event.artifact.type === 'stats' && <Layers className="w-3.5 h-3.5" />}
                      {event.artifact.type === 'moments' && <Eye className="w-3.5 h-3.5" />}
                      <span>[ 调阅项目档案案卷 ]</span>
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Artifact Modal Drawer - Bilingual Screen representation */}
      {activeEvent && activeEvent.artifact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pure-black/95 backdrop-blur-xl">
          <div className="relative w-full max-w-3xl bg-[#f4f4f4] text-neutral-900 border-2 border-neutral-900 shadow-2xl overflow-hidden font-sans text-left">
            
            {/* Header stylized like a photocopied audit log */}
            <div className="bg-neutral-900 text-white p-4 font-mono text-xs flex justify-between items-center border-b border-black">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-neon-pink animate-pulse" />
                <span className="uppercase text-neutral-300 font-bold tracking-widest">项目承办委员档柜 — 档案代码：FILE #{activeEvent.id.toUpperCase()}</span>
              </div>
              <button 
                onClick={() => setActiveEvent(null)}
                className="text-neutral-400 hover:text-white uppercase text-[10px] bg-white/5 border border-white/10 px-2 py-1 hover:border-red-500 hover:text-red-400 transition-all font-mono cursor-pointer"
              >
                [ 移离案桌 ]
              </button>
            </div>

            {/* Folder Tabs / Metadata bar */}
            <div className="bg-neutral-200 border-b border-neutral-300 p-4 font-mono text-[10px] text-neutral-600 grid grid-cols-2 md:grid-cols-4 gap-2 border-dashed border-b-2">
              <div>
                <strong>立卷日期:</strong>
                <span className="block mt-0.5 font-bold text-neutral-800">{activeEvent.date}</span>
              </div>
              <div>
                <strong>卷宗属性:</strong>
                <span className="block mt-0.5 font-bold text-neutral-800 uppercase">{activeEvent.artifact.type}</span>
              </div>
              <div>
                <strong>会商起草主体:</strong>
                <span className="block mt-0.5 font-bold text-neutral-800 truncate">{activeEvent.artifact.sender || '官方录存卷'}</span>
              </div>
              <div>
                <strong>核对及接收主体:</strong>
                <span className="block mt-0.5 font-bold text-neutral-800 truncate">{activeEvent.artifact.recipient || '项目审计公开'}</span>
              </div>
            </div>

            {/* The actual bilingual log content - printed styled like papers */}
            <div className="p-8 max-h-[60vh] overflow-y-auto bg-neutral-50 border-b border-neutral-200">
              <div className="mb-6">
                <span className="text-[10px] font-mono font-black text-neon-pink tracking-widest block mb-1">ORIGINAL ARTIFACT TRANSCRIPT</span>
                <h4 className="text-xl font-serif font-black tracking-tight text-neutral-900 italic border-b border-neutral-300 pb-2">
                  {activeEvent.artifact.englishTitle}
                </h4>
              </div>

              {/* Chat dialog or letter */}
              <div className="text-xs md:text-sm font-mono leading-relaxed whitespace-pre-wrap text-neutral-800 border-l-2 border-neutral-300 pl-4 py-1 italic mb-6 text-left">
                {activeEvent.artifact.details}
              </div>

              {/* Translation module (for WeChat screen conversion) */}
              {activeEvent.artifact.translation && (
                <div className="mt-8 border-t border-dashed border-neutral-300 pt-6">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-3">中文对照及原始释义</span>
                  <div className="text-xs bg-white text-neutral-700 p-4 border border-neutral-200 leading-relaxed font-sans whitespace-pre-wrap text-left">
                    {activeEvent.artifact.translation}
                  </div>
                </div>
              )}
            </div>

            {/* Footer paper notation */}
            <div className="p-4 bg-neutral-100 flex flex-col md:flex-row justify-between items-start md:items-center text-[10px] font-mono text-neutral-500 border-t border-neutral-300">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                本档案经由项目承办及 UoL 音乐学系综合评审真实无误
              </span>
              <span className="mt-2 md:mt-0">页码索引：Leeds 毕业履历集（第九卷卷底）</span>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
