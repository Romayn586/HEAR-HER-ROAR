import { useState } from 'react';
import { TrendingUp, DollarSign, Award, Ticket, CheckCircle2, Receipt, Coins } from 'lucide-react';
import { metrics } from '../data/portfolioData';

export default function Metrics() {
  const [activeTab, setActiveTab] = useState<'kpis' | 'cashflow' | 'bank-audit'>('kpis');

  // Ledger matching the Lloyds Bank Statements exactly, translated for extreme clarity
  const ledgerItems = [
    { date: '2025年3月10日', desc: 'HYDEPARKBOOKCLUB - 场地预订锁定定金转出 (借记款)', type: '执行支出', amount: -180.00 },
    { date: '2025年5月15日', desc: '淘宝中国 - 后台闪粉与环保手作模具物料 (折合 65.49 人民币)', type: '执行支出', amount: -6.75 },
    { date: '2025年5月19日', desc: 'GIRAFFE VISA (长颈鹿签证) - 联合宣发第一笔款项记账 (贷记款)', type: '收入', amount: 100.00 },
    { date: '2025年5月24日', desc: '罗曼 (浙江珍琦护理用品有限公司旗下品牌 MOLLIS 赞助 500元人民币折英镑)', type: '收入', amount: 51.20 },
    { date: '2025年5月26日', desc: '秦非凡 - 后台搭建软装及手作画架报销 (借记款)', type: '执行支出', amount: -5.00 },
    { date: '2025年6月04日', desc: 'UBER *TRIP - 托运校区学院沉重爵士鼓架车辆费用支出', type: '执行支出', amount: -13.23 },
    { date: '2025年6月04日', desc: 'ONE STOP 1630 - 前台签到点及后台乐手手礼软饮支出', type: '执行支出', amount: -8.75 },
    { date: '2025年6月05日', desc: 'UBER *TRIP - 演出完结连夜将租借镲片硬件送回校区车辆费', type: '执行支出', amount: -10.18 },
    { date: '2025年6月11日', desc: 'TICKETSOURCE LTD - 线上检票完毕最终票房款项提现划归', type: '收入', amount: 849.50 },
    { date: '2025年6月12日', desc: '李心怡 - Xinyi 视觉插画海报设计劳务买断款 (借记款)', type: '执行支出', amount: -100.00 },
    { date: '2025年6月12日', desc: '戴心怡 - 登台劳务费清核分配分账 Baby Blue (占10%纯利)', type: '结算转出', amount: -67.60 },
    { date: '2025年6月12日', desc: 'Katerina - 独立登台劳务费清核分配分账 (占10%纯利)', type: '结算转出', amount: -67.60 },
    { date: '2025年6月12日', desc: '黄文静 - Blue Not Rue 乐队代表劳务费全盘结付 (占20%纯利)', type: '结算转出', amount: -135.22 },
    { date: '2025年6月15日', desc: 'Rossella - RUNA 乐队代表登台演出劳务分账结付 (占20%纯利)', type: '结算转出', amount: -135.22 },
    { date: '2025年6月17日', desc: 'GETAWAY GIRLS - 面向官方基金会公对公全款慈善转账 (占40%纯利)', type: '结算转出', amount: -270.44 }
  ];

  const totalRevenue = 1000.70;
  const totalCost = 323.91;
  const netProfit = 676.09;

  return (
    <section id="metrics" className="py-24 px-4 md:px-8 bg-pure-black border-b border-grit-gray relative">
      
      {/* Structural layout limits */}
      <div className="max-w-7xl mx-auto text-left">
        
        {/* Title elements */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neon-pink flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-neon-pink" />
              Campaign Statistics / 数字化成果与预算核算
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
              DATA-DRIVEN <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-rose-400 font-light lowercase">impact</span>
            </h2>
          </div>
          
          {/* Magazine navigation tabs */}
          <div className="flex border border-neutral-800 p-1 bg-card-dark font-mono text-xs rounded-none">
            <button
              onClick={() => setActiveTab('kpis')}
              className={`px-4 py-2 uppercase transition-all cursor-pointer ${activeTab === 'kpis' ? 'bg-neon-pink text-white font-bold' : 'text-neutral-400 hover:text-white'}`}
            >
              核心指标 (KPIs)
            </button>
            <button
              onClick={() => setActiveTab('cashflow')}
              className={`px-4 py-2 uppercase transition-all cursor-pointer ${activeTab === 'cashflow' ? 'bg-neon-pink text-white font-bold' : 'text-neutral-400 hover:text-white'}`}
            >
              现金流向图
            </button>
            <button
              onClick={() => setActiveTab('bank-audit')}
              className={`px-4 py-2 uppercase transition-all cursor-pointer ${activeTab === 'bank-audit' ? 'bg-neon-pink text-white font-bold' : 'text-neutral-400 hover:text-white'}`}
            >
              Lloyds 银行对账流水
            </button>
          </div>
        </div>

        {/* Content Render Condition */}

        {activeTab === 'kpis' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Cards generated iteratively */}
            {metrics.map((m) => {
              const getIcon = (id: string) => {
                switch(id) {
                  case 'm1': return <Ticket className="w-5 h-5 text-neon-pink" />;
                  case 'm2': return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
                  case 'm3': return <Coins className="w-5 h-5 text-amber-400" />;
                  case 'm4': return <Receipt className="w-5 h-5 text-rose-400" />;
                  case 'm5': return <DollarSign className="w-5 h-5 text-sky-400" />;
                  default: return <Award className="w-5 h-5 text-rose-400" />;
                }
              };

              const getAccentClass = (id: string) => {
                switch(id) {
                  case 'm1': return 'text-neon-pink border-neon-pink/20';
                  case 'm2': return 'text-emerald-400 border-emerald-500/20';
                  case 'm3': return 'text-amber-400 border-amber-500/20';
                  case 'm4': return 'text-rose-400 border-rose-500/20';
                  case m.id.includes('5') ? m.id : '': return 'text-sky-400 border-sky-400/20';
                  default: return 'text-rose-400 border-rose-400/20';
                }
              };

              return (
                <div key={m.id} className="p-8 bg-card-dark border border-neutral-800 hover:border-white/10 transition-all flex flex-col justify-between text-left">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-2.5 bg-[#000] border border-neutral-800 rounded-none">
                        {getIcon(m.id)}
                      </div>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">{m.id.toUpperCase()}</span>
                    </div>
                    <span className="text-xs font-mono text-neutral-400 block mb-1 uppercase tracking-wide">{m.label}</span>
                    <span className={`text-4xl md:text-5xl font-black ${getAccentClass(m.id)} tracking-tighter block my-2`}>
                      {m.prefix}{m.value.toLocaleString()}{m.suffix}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-4 leading-relaxed font-sans">{m.desc}</p>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'cashflow' && (
          <div className="bg-card-dark border border-neutral-800 p-8">
            <h3 className="text-lg font-bold font-mono text-white mb-6 uppercase flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-neon-pink rounded-full"></span>
              项目资金流向脉络图（现金周转与分配比率分析）
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Visual Vector Pipeline */}
              <div className="lg:col-span-8 flex justify-center overflow-x-auto">
                <svg viewBox="0 0 800 350" className="w-full min-w-[650px] max-w-3xl h-auto font-mono text-[10px] text-neutral-400 fill-current">
                  {/* Grid Lines background */}
                  <g stroke="#222" strokeWidth="1" strokeDasharray="4 4">
                    <line x1="50" y1="50" x2="750" y2="50" />
                    <line x1="50" y1="175" x2="750" y2="175" />
                    <line x1="50" y1="300" x2="750" y2="300" />
                    <line x1="200" y1="20" x2="200" y2="330" />
                    <line x1="450" y1="20" x2="450" y2="330" />
                  </g>

                  {/* SANKY ACCENT GRAPHIC LINES */}
                  {/* Revenue to Gross */}
                  <path d="M 170 80 Q 280 80 280 160" fill="none" stroke="#FF4D00" strokeWidth="16" opacity="0.3" />
                  <path d="M 170 175 Q 280 175 280 185" fill="none" stroke="#ffb900" strokeWidth="6" opacity="0.3" />
                  <path d="M 170 270 Q 280 270 280 200" fill="none" stroke="#10b981" strokeWidth="10" opacity="0.3" />

                  {/* Gross to Costs & Net */}
                  <path d="M 330 180 L 460 180" fill="none" stroke="#ffffff" strokeWidth="26" opacity="0.15" />
                  <path d="M 310 170 Q 360 130 520 130" fill="none" stroke="#ff3333" strokeWidth="12" opacity="0.3" />
                  
                  {/* Net Profit Splits */}
                  <path d="M 640 180 Q 680 140 700 120" fill="none" stroke="#38bdf8" strokeWidth="12" opacity="0.3" />
                  <path d="M 640 200 Q 680 240 700 260" fill="none" stroke="#f43f5e" strokeWidth="16" opacity="0.3" />

                  {/* NODES / BLOCKS */}
                  
                  {/* INFLOW BRACKETS */}
                  {/* TicketSource Box office */}
                  <rect x="50" y="55" width="120" height="50" fill="#111" stroke="#FF4D00" strokeWidth="1.5" />
                  <text x="60" y="75" fill="#ffffff" fontWeight="bold">TicketSource 票房</text>
                  <text x="60" y="93" fill="#FF4D00">£849.50 (84.9%)</text>

                  {/* Sunkiss Health Care */}
                  <rect x="50" y="150" width="120" height="50" fill="#111" stroke="#ffb900" strokeWidth="1.5" />
                  <text x="60" y="170" fill="#ffffff" fontWeight="bold">MOLLIS</text>
                  <text x="60" y="188" fill="#ffb900">£51.20 (5.1%)</text>

                  {/* Giraffe Visa */}
                  <rect x="50" y="245" width="120" height="50" fill="#111" stroke="#10b981" strokeWidth="1.5" />
                  <text x="60" y="265" fill="#ffffff" fontWeight="bold">长颈鹿签证赞助</text>
                  <text x="60" y="283" fill="#10b981">£100.00 (10.0%)</text>

                  {/* CONSOLIDATED POOL */}
                  <rect x="280" y="140" width="90" height="85" fill="#0A0A0A" stroke="#ffffff" strokeWidth="2" />
                  <text x="290" y="165" fill="#ffffff" fontWeight="bold" textAnchor="start">项目收益总盘</text>
                  <text x="290" y="185" fill="#ffffff" fontSize="14" fontWeight="black" textAnchor="start">£1,000.70</text>
                  <text x="290" y="210" fill="#neutral-400" textAnchor="start">总毛收益</text>

                  {/* OPERATIONS DEDUCTION */}
                  <rect x="490" y="90" width="120" height="60" fill="#0A0A0A" stroke="#ff3333" strokeWidth="1.5" />
                  <text x="500" y="110" fill="#ff3333" fontWeight="bold">硬性执行成本</text>
                  <text x="500" y="128" fill="#ffffff" fontSize="11" fontWeight="bold">£323.91 (32.4%)</text>
                  <text x="500" y="142" fill="#neutral-500">场地、外包、跑腿运输</text>

                  {/* SURPLUS NET PROFIT */}
                  <rect x="490" y="165" width="125" height="60" fill="#020202" stroke="#38bdf8" strokeWidth="2" />
                  <text x="500" y="185" fill="#38bdf8" fontWeight="bold">项目净剩余结余</text>
                  <text x="500" y="203" fill="#ffffff" fontSize="12" fontWeight="black">£676.09 (67.6%)</text>
                  <text x="500" y="217" fill="#neutral-400">划拨分配红利</text>

                  {/* BENEFICIARIES OUTFLOW */}
                  {/* Charity donation */}
                  <rect x="670" y="80" width="120" height="65" fill="#111" stroke="#f43f5e" strokeWidth="1.5" />
                  <text x="680" y="100" fill="#f43f5e" fontWeight="bold">GETAWAY GIRLS</text>
                  <text x="680" y="118" fill="#ffffff" fontWeight="black">£270.44</text>
                  <text x="680" y="132" fill="#neutral-500">40% 纯收入定向捐赠</text>

                  {/* Performer fees */}
                  <rect x="670" y="225" width="120" height="85" fill="#111" stroke="#38bdf8" strokeWidth="1.5" />
                  <text x="680" y="245" fill="#38bdf8" fontWeight="bold">参演艺人劳动分账</text>
                  <text x="680" y="263" fill="#ffffff" fontWeight="black">£405.65</text>
                  <text x="680" y="278" fill="#neutral-400">60% 演出劳务分账</text>
                  <text x="680" y="295" fill="#neutral-500" fontSize="8">Baby / Kat / B.N.Rue / Runa</text>
                </svg>
              </div>

              {/* Right Column: Key insights */}
              <div className="lg:col-span-4 flex flex-col gap-6 text-left">
                <div className="border border-white/5 bg-[#000] p-6">
                  <span className="text-[10px] font-mono text-neon-pink uppercase font-bold">资金周转深度分析</span>
                  <h4 className="text-sm font-semibold text-white mt-1 mb-3">极高的运营结余比率</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    由于对固定开销执行了自律刚性约束——成功买断了专业视觉插画海报版权（仅支付一次性费用 £100），并向母校音乐系借调了高保真爵士鼓设备，使得核心制作成本被死死压制在总票房进账款的 **32.4%** 绝佳水位内。
                  </p>
                </div>
                
                <div className="border border-white/5 bg-[#000] p-6">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">慈善流转高效率</span>
                  <h4 className="text-sm font-semibold text-white mt-1 mb-3">真正的文创社会化载体</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    最终汇聚的项目纯结余溢价达到 **£676.09**。借由此款，我们向 Getaway Girls Leeds 女性帮扶慈善会转出了厚实的 **£270.44**，圆满践行了学术研究与赋能边缘化生命体的完美自洽。
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

        {activeTab === 'bank-audit' && (
          <div className="bg-card-dark border border-neutral-800 overflow-x-auto text-left">
            <div className="min-w-[800px] p-8">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-grit-gray">
                <div>
                  <h3 className="text-lg font-bold font-mono text-white uppercase">
                    Lloyds 商业账户银行流水审计与对账
                  </h3>
                  <p className="text-xs text-neutral-500 font-sans mt-1">
                    以下每一笔银行流出与进账，均完全对齐并穿透 Lloyds Bank 商业账户账单存盘档案（2025年3月 – 2025年6月）。
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-neutral-500 block">银行往来平账结论</span>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1">账目全线轧平并完全核销</span>
                </div>
              </div>

              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-neutral-800 text-neutral-400 pb-2">
                    <th className="py-3 px-2">银行记账日期</th>
                    <th className="py-3 px-2">交易发票明细与对付对象附言</th>
                    <th className="py-3 px-2">会计资产科目</th>
                    <th className="py-3 px-2 text-right">流动金额 (英镑)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/50">
                  {ledgerItems.map((item, index) => (
                    <tr key={index} className="hover:bg-white/[0.02] transition-all">
                      <td className="py-3 px-2 text-neutral-400">{item.date}</td>
                      <td className="py-3 px-2 text-white font-medium">{item.desc}</td>
                      <td className="py-3 px-2">
                        <span className={`px-2 py-0.5 text-[9px] font-bold ${
                          item.type === '收入' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/15' : 
                          item.type === '执行支出' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/15' :
                          'bg-sky-500/10 text-sky-400 border border-sky-500/15'
                        }`}>
                          {item.type}
                        </span>
                      </td>
                      <td className={`py-3 px-2 text-right font-bold ${item.amount > 0 ? 'text-emerald-400' : 'text-[#f4f4f5]'}`}>
                        {item.amount > 0 ? `+£${item.amount.toFixed(2)}` : `-£${Math.abs(item.amount).toFixed(2)}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Total Summary Footer of Ledger */}
              <div className="mt-8 pt-6 border-t border-neutral-800 grid grid-cols-3 gap-6 text-center text-xs">
                <div className="p-4 bg-black border border-neutral-900">
                  <span className="text-neutral-500 uppercase block text-[10px]">累计总资金进气</span>
                  <span className="text-xl font-bold font-mono text-emerald-400 mt-1 block">£{totalRevenue.toFixed(2)}</span>
                </div>
                <div className="p-4 bg-black border border-neutral-900">
                  <span className="text-neutral-500 uppercase block text-[10px]">累计支出硬件成本</span>
                  <span className="text-xl font-bold font-mono text-rose-400 mt-1 block">-£{totalCost.toFixed(2)}</span>
                </div>
                <div className="p-4 bg-black border border-neutral-900">
                  <span className="text-neutral-500 uppercase block text-[10px]">轧平清转纯流出结余</span>
                  <span className="text-xl font-bold font-mono text-sky-400 mt-1 block">£{netProfit.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
