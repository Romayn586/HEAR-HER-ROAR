import { useState } from 'react';
import { Newspaper, Instagram, MessageCircle, Building, Trophy, Pin, ShoppingBag, Heart } from 'lucide-react';
import { sponsors } from '../data/portfolioData';

export default function MarketingSponsors() {
  const [activeChannel, setActiveChannel] = useState<'marketing' | 'sponsors'>('marketing');

  const socialStats = [
    { channel: 'Instagram (@sheroesinharmony)', followers: '22 位关注者', views: '1,450+ 次曝光', engagements: '18% 互动率', strategy: '艺人高光介绍、双语宣发文案、倒计时视频、后台搭建幕后花絮。' },
    { channel: '小红书 (Rednote)', followers: '130 位关注者', views: '4,450+ 次曝光', engagements: '24% 互动率', strategy: 'Leeds 华人新生社群裂变精准推送、留学生签证合作博文定向曝光、社群下午茶抽奖门票。' },
    { channel: 'TikTok / 微信朋友圈', followers: '社群网络分发', views: '2,200+ 次曝光', engagements: '15% 互动率', strategy: '妇女节特别选划采访短片宣发、团队微信动态更新、LUU Femsoc 女权社群私域流量分享。' }
  ];

  const promotionalPhases = [
    {
      phase: '阶段一：前期预热（Acoustic Spark 蓄势）',
      date: '2024年11月 – 2025年2月',
      focus: '发布乐手及合作伙伴双语公开招募海报，上线 @sheroesinharmony 宣发渠道，甄选适合的艺人。',
      outcome: '吸引并登记了 35 组歌手及乐队，锁定了最终的梦幻首发阵容 (Baby Blue, RUNA, Katerina)。'
    },
    {
      phase: '阶段二：宣发攻坚（倒计时狂热）',
      date: '2025年2月 – 2025年5月',
      focus: '在三八妇女节大促节点发布走心艺人生平专访短视频，官宣 Hyde Park Book Club 演出舞台，解锁 Lush 和一盒手作甜品伴手礼赞助。',
      outcome: '在微信及 WhatsApp 私域宣发后的 72 小时内，全数售罄了首批 38 张限量早鸟票（票价 £7.00）。'
    },
    {
      phase: '阶段三：总攻冲刺（演出前夕）',
      date: '2025年5月 – 2025年6月',
      focus: '推出长颈鹿签证（Giraffe Visa）和浙江珍琦旗下品牌 MOLLIS 联合冠名博文，发布最终入场时刻表，分享 Leeds 传媒学子共创评价纪录片。',
      outcome: '全账目清算核对 106 张售出门票，确保 6 月 4 日当晚 98 名检票观众有序按时到位。'
    }
  ];

  return (
    <section id="marketing-and-sponsors" className="py-24 px-4 md:px-8 bg-pure-black border-b border-grit-gray relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigations */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-neutral-800 pb-8 text-left">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff007f] flex items-center gap-1.5">
              <Newspaper className="w-4 h-4 text-neon-pink" />
              Promotion & Collaborations / 市场宣传与赞助合作
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
              MARKETING & <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-rose-400 font-light lowercase">alliances</span>
            </h2>
          </div>

          <div className="flex border border-neutral-800 p-1 bg-card-dark font-mono text-xs rounded-none shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveChannel('marketing')}
              className={`px-5 py-2 uppercase transition-all whitespace-nowrap cursor-pointer ${activeChannel === 'marketing' ? 'bg-neon-pink text-white font-bold' : 'text-neutral-500 hover:text-white'}`}
            >
              社媒运营与宣发节点
            </button>
            <button
              onClick={() => setActiveChannel('sponsors')}
              className={`px-5 py-2 uppercase transition-all whitespace-nowrap cursor-pointer ${activeChannel === 'sponsors' ? 'bg-neon-pink text-white font-bold' : 'text-neutral-500 hover:text-white'}`}
            >
              赞助品牌价值观矩阵
            </button>
          </div>
        </div>

        {/* Content Render Conditional */}

        {activeChannel === 'marketing' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
            
            {/* Left side: Tactic cards */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <h3 className="text-xl font-bold font-mono text-white tracking-widest uppercase">
                PHASED PUBLICITY TIMELINES / 三阶段宣传节奏
              </h3>
              
              <div className="relative border-l border-neutral-800 pl-6 flex flex-col gap-8">
                {promotionalPhases.map((phase, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-neon-pink rounded-full border border-black shadow-[0_0_10px_rgba(255,0,127,1)]"></div>
                    <div className="text-xs font-mono text-neon-pink font-bold mb-1">{phase.date}</div>
                    <h4 className="text-base font-bold text-white uppercase font-sans mb-2">{phase.phase}</h4>
                    <p className="text-neutral-300 text-xs md:text-sm leading-relaxed mb-3 font-sans">{phase.focus}</p>
                    <div className="text-[11px] font-mono text-neutral-500 italic bg-[#121215]/50 border border-neutral-900/60 p-2 border-l-2 border-l-neutral-600">
                      <strong>战役取得战果:</strong> {phase.outcome}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Channels stats */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left">
              <h3 className="text-xl font-bold font-mono text-white tracking-widest uppercase mb-2">
                METRICS OUTCOMES / 社交媒体表现数据
              </h3>

              {socialStats.map((stat, idx) => (
                <div key={idx} className="p-6 bg-card-dark border border-neutral-800 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    {stat.channel.includes('Instagram') && <Instagram className="w-16 h-16 text-white" />}
                    {stat.channel.includes('Rednote') && <MessageCircle className="w-16 h-16 text-white" />}
                  </div>

                  <h4 className="text-sm font-bold text-white uppercase font-mono mb-4 flex justify-between items-center">
                    <span>{stat.channel}</span>
                    <span className="text-[10px] text-neon-pink font-sans">真实数据记录</span>
                  </h4>

                  <div className="grid grid-cols-3 gap-4 border-b border-dashed border-neutral-800 pb-4 mb-4 text-center">
                    <div>
                      <span className="text-[9px] font-mono text-neutral-500 block">社群覆盖人数</span>
                      <span className="text-lg font-black font-mono text-white mt-0.5">{stat.followers}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-neutral-500 block">自发总曝光次</span>
                      <span className="text-lg font-black font-mono text-neon-pink mt-0.5">{stat.views}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-neutral-500 block">粉丝交互比率</span>
                      <span className="text-lg font-black font-mono text-white mt-0.5">{stat.engagements}</span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                    <strong>核心动作和思路:</strong> {stat.strategy}
                  </p>
                </div>
              ))}
            </div>

          </div>
        )}

        {activeChannel === 'sponsors' && (
          <div className="flex flex-col gap-8 text-left animate-fade-in">
            <div className="flex flex-col gap-2 max-w-4xl">
              <h3 className="text-xl font-bold font-mono text-white tracking-widest uppercase">
                BRAND VALUE-MATCHING MATRIX / 赞助合作品牌矩阵
              </h3>
              <p className="text-xs text-neutral-500 font-sans leading-normal">
                通过为利兹 (Leeds) 本校留学生和本土年轻人定向企划极具说服力的“双赢赞助文案”，我们成功取得了 £151.20 的公对公直接资金赞助和价值超过 £150+ 的全奢植物洗护盒，大幅拉升了现场来客和登台嘉宾的惊喜体验。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sponsors.map((sp) => {
                const getIcon = (id: string) => {
                  switch(id) {
                    case 'getaway-girls': return <Trophy className="w-5 h-5 text-rose-400" />;
                    case 'giraffe-visa': return <Building className="w-5 h-5 text-amber-400" />;
                    case 'mollis-sunkiss': return <Heart className="w-5 h-5 text-emerald-400 font-bold" />;
                    case 'lush-white-rose': return <ShoppingBag className="w-5 h-5 text-sky-400" />;
                    default: return <Pin className="w-5 h-5 text-violet-400" />;
                  }
                };

                return (
                  <div key={sp.id} className="p-8 bg-[#121215] border border-neutral-800 hover:border-neutral-700/60 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className={`p-2.5 rounded-none border border-white/5`}>
                          {getIcon(sp.id)}
                        </div>
                        <span className="p-1 px-2.5 font-mono text-[9px] bg-black border border-neutral-800 text-neutral-400">
                          {sp.id.toUpperCase()}
                        </span>
                      </div>

                      <h4 className="text-lg font-black text-white uppercase tracking-tight mb-1">{sp.name}</h4>
                      <span className="text-[10px] font-mono text-neon-pink block mb-4 uppercase">{sp.type}</span>
                      
                      <div className="border-t border-dashed border-neutral-800 pt-4 mb-4 flex flex-col gap-3">
                        <div>
                          <span className="text-[9px] font-mono text-neutral-500 block">赞助细节贡献 / CONTRIBUTION DETAILS:</span>
                          <p className="text-xs text-neutral-300 font-sans mt-0.5">{sp.contribution}</p>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-neutral-500 block">联合战略价值观 / ALIGNED STRATEGIC VALUE:</span>
                          <p className="text-xs text-neutral-400 font-sans mt-0.5 leading-relaxed italic">{sp.alignedValue}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-[11px] text-neutral-500 font-sans leading-relaxed border-t border-neutral-800/45 pt-3 mt-4">
                      {sp.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
