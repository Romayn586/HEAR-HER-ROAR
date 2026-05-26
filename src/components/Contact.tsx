import { useState } from 'react';
import { Mail, Instagram, MessageCircle, Check, Copy, Sparkles, MapPin, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = '18757183668romayn@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { name: 'Instagram', handle: '@sheroesinharmony', icon: <Instagram className="w-5 h-5 text-neon-pink" />, link: 'https://instagram.com/sheroesinharmony' },
    { name: '国内自媒体小红书', handle: 'ID: 1068001434 (Hear Her Roar)', icon: <MessageCircle className="w-5 h-5 text-neon-pink" />, link: '#' },
    { name: 'TikTok', handle: '@hear.her.roar', icon: <MessageCircle className="w-5 h-5 text-neutral-400" />, link: '#' }
  ];

  return (
    <footer id="contact" className="py-24 px-4 md:px-8 bg-[#020202] text-neutral-400 border-t border-grit-gray relative overflow-hidden text-left">
      
      {/* Moving Ambient spots */}
      <div className="absolute bottom-0 left-1/4 w-[200px] h-[200px] rounded-full bg-neon-pink/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Left column: Brand/Identities */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex items-center gap-1.5 text-white font-black uppercase text-xl font-mono tracking-tighter">
            <span>HEAR HER ROAR</span>
            <span className="text-neon-pink font-serif italic font-light font-sans lowercase">portfolio</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
            <MapPin className="w-3.5 h-3.5 text-neon-pink" />
            <span>Leeds (英国利兹) 联络点</span>
          </div>

          {/* Copyright line */}
          <div className="text-[10px] font-mono text-neutral-600 border-t border-neutral-900 pt-6 mt-4">
            &copy; {new Date().getFullYear()} 罗曼 (Roman Luo). 版权所有。<br />
            本作品集专为音乐节策划、艺人统筹及线下执行高管、创意企划行业人才考核选拔而量身定制。
          </div>
        </div>

        {/* Right column: Channels */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-left">
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#fff]">
            SOCIAL CONNECT SHEETS / 社交关系通道
          </h3>

          <div className="flex flex-col gap-3">
            {socialLinks.map((soc, idx) => (
              <a 
                key={idx} 
                href={soc.link} 
                target="_blank" 
                rel="noreferrer"
                className="p-4 bg-card-dark border border-neutral-800 hover:border-neon-pink/30 flex justify-between items-center group transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  {soc.icon}
                  <div>
                    <span className="text-[10px] font-mono text-neutral-500 block uppercase leading-none mb-1">{soc.name}</span>
                    <span className="text-xs font-bold text-white tracking-wide font-sans">{soc.handle}</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-600 group-hover:text-neon-pink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
