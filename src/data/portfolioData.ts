import { Artist, TimelineEvent, Sponsor, MetricItem, ReflectionItem } from '../types';

export const artists: Artist[] = [
  {
    id: 'baby-blue',
    name: 'Baby Blue',
    type: '独唱歌手',
    origin: 'China / London',
    genre: '巴萨诺瓦 (Bossa Nova) / 迪斯科 (Disco) / 放克 (Funk) / R&B / 爵士 (Jazz)',
    bio: '嗨，我是 Baby Blue——一位来自中国的创作歌手，目前在伦敦生活和创作。我热衷于谱写旋律，将情感转化为声音是我与世界对话的方式。我的音乐融合了巴萨诺瓦的温柔、迪斯科和放克的律动，以及 R&B 和爵士的温暖。作为一名女性艺术家，我相信脆弱与坚韧并存的力量。通过这次演出，我希望能向所有敢于同时展现力量、温柔与细腻的女性致敬。',
    quoteSelection: '“脆弱并非软弱；它是创造力最极致的表达。”',
    members: [
      { name: 'Baby Blue', role: '主唱 / 键盘手 / 创作人', bio: '来自中国的唱作歌手，目前在伦敦生活和创作。精通木吉他与电子琴，以细腻唯温婉的唱腔见长。', avatar: '/poster_baby-blue.jpg' }
    ],
    setlist: [
      { title: 'Let There Be Love (原创)', desc: '一首送给自己的温柔道歉，提醒自己即使在迷茫时也要好好爱自己。' },
      { title: 'Blue Waves (原创)', desc: '一首关于释怀与放手的歌——不再执着，随风而去。' },
      { title: 'I Love You More (原创)', desc: '融合波萨诺瓦吉他与浪漫旋律，向每个有爱的心灵传递温暖意象。' }
    ],
    posterTitle: 'Baby Blue 个人海报'
  },
  {
    id: 'blue-not-rue',
    name: 'Blue Not Rue',
    type: '乐队',
    origin: 'Leeds, UK',
    genre: '独立摇滚 (Indie Rock) / 替代摇滚 (Alternative Rock) / 暴女朋克 (Punk Grrrl)',
    bio: 'Blue Not Rue 是一支来自 Leeds 的独立摇滚乐队，深受替代摇滚风格影响。乐队由主唱、吉他手、贝斯手、键盘手和鼓手五位充满激情的女性艺术家组成，擅长以充满张力的表演带来深沉律动和原始能量。通过坦率而狂野 of 音乐表达，她们旨在展现独立音乐人、尤其是女性艺术家的蓬勃生机和力量。在这次演出中，她们希望能用动感律动引起观众的共鸣。',
    quoteSelection: '“五个女孩，五种声音，筑起一堵坚韧的声墙。真实的音乐，纯粹的力量。”',
    members: [
      { name: 'Hannah', role: '主唱', bio: '带来纯真情感、极具掌控力的舞台张力以及充满爆发力的嗓音。', avatar: '/avatar_hannah.jpg' },
      { name: 'Irene', role: '吉他手', bio: '编织复杂的吉他独奏和扎实的独立摇滚律动。', avatar: '/avatar_irene.jpg' },
      { name: 'Eloise', role: '贝斯手', bio: '带来沉稳如磐石般的低音铺垫与充满灵性的切分律动。', avatar: '/avatar_eloise.jpg' },
      { name: 'Tilly', role: '键盘手', bio: '点缀变幻莫测的复古电声织体、合成器音色与和声支持。', avatar: '/avatar_tilly.jpg' },
      { name: 'Lucas', role: '鼓手', bio: '精准把控全场节奏呼吸，以充满力量的重击注入摇滚之魂。', avatar: '/avatar_lucas.jpg' }
    ],
    setlist: [
      { title: 'Bruises', desc: '原唱：Chairlift。对现代都市女性身份的独特替代视角。' },
      { title: 'Don’t Wake Me Up', desc: '原唱：The Hush Sound。一首梦幻且忧郁的曲子，探索停留在内部安全空间的渴望。' },
      { title: 'Duvet', desc: '原唱：bôa。对现代女性特质的含蓄而深情的表达。' }
    ],
    posterTitle: 'Blue Not Rue 乐队海报'
  },
  {
    id: 'katerina',
    name: 'Katerina',
    type: '独唱歌手',
    origin: 'Leeds / UK',
    genre: '深情民谣摇滚 (Soulful Folk-Rock) / 融合世界音乐 (World Music Influence)',
    bio: 'Katerina 是一 位活跃于 UK 的充满激情的音乐人，在创作、街头漫唱和现场表演中不断探索。她深情动人的嗓音与极具节奏感的吉他交织在一起，既能抚慰心灵，也能让人随之律动，创造出融合了灵魂乐、民谣摇滚和世界音乐元素的独特乐音。深受 Madison Cunningham、Izzy Ray 和 Bonnie Raitt 等艺术家的启发。Katerina 曾登上 Headrow House、Forty Five Vinyl Cafe 和 HEART Centre 等多个舞台，她全心全意地用音乐分享真实自我，期盼能与每个人连接。',
    quoteSelection: '“音乐不仅是在歌唱——它通过声音表达，在寻找心灵的联结。”',
    members: [
      { name: 'Katerina E.', role: '主唱 / 主音吉他手', bio: '深情民谣摇滚独奏家。擅长灵巧的指弹吉他，带来极具渗透力和叙事张力的厚重女声力量。', avatar: '/poster_katerina.jpg' }
    ],
    setlist: [
      { title: 'Shadow Walk (原创)', desc: '一首充满氛围感、温婉而动人的民谣摇滚，讲述走向光明的历程。' },
      { title: 'Under the Skin (原创)', desc: '通过富有打击节奏感的吉他与高亢的歌声，探寻内心最真实的本色。' },
      { title: 'Madison Skies (翻唱)', desc: '致敬 Madison Cunningham，将学术民谣和弦与世界音乐节奏完美融合。' }
    ],
    posterTitle: 'Katerina 个人海报'
  },
  {
    id: 'runa',
    name: 'RUNA',
    type: '乐队',
    origin: 'Italy / South Italy roots',
    genre: 'BBC 推荐的酷儿独立流行 (Queer Indie Pop) 与暗黑民谣 (Dark Folk)',
    bio: 'RUNA 是一位极具魅力的艺术家，她从意大利南部小镇走到充满活力的 Leeds 街头，这段旅程将她塑造成了独立音乐界一股不可忽视的力量。BBC Introducing Leeds 贴切地形容她的乐音“令人陶醉而难以忘怀”，完美诠释了她将原始情感注入每个音符的独特能力。她的歌词灵感来源于丰富的个人经历与文化传承。作为一名酷儿女性，RUNA 在每首歌里倾注了关于身份认同、爱和憧憬的复杂心路。她的歌声承载着意大利南部根基的厚重感——深植于异教传统，并充满历史与情感。这种过去与现在的融合创造出一种既超越时代又极度亲密的乐音，打动着每一个曾感到被边缘化或在传统与自我表达间寻找平衡的人。',
    quoteSelection: '“我的酷儿身份与意大利文化根源在舞台上碰撞，以此放大那些常常被忽视和沉默的声音。”',
    members: [
      { name: 'RUNA (Rossella Scotti)', role: '主唱 / 节奏吉他', bio: '南意背景的酷儿唱作人，BBC推荐。她倾注其关于身份认同、爱、对少数及移民人群憧憬的心路历程。', avatar: '/poster_runa.jpg' }
    ],
    setlist: [
      { title: 'Mesmerised (原创)', desc: '一首令人着迷的替代民谣，带有暗黑合成器织体和铿锵鼓点节奏。' },
      { title: 'Pagan Ground (原创)', desc: '将古典南意圣歌与充满力量感的现代独立摇滚吉他深度融合。' },
      { title: 'Outsider Pulse (原创)', desc: '一首节奏轻快、反映酷儿及移民群体寻找归属感与社群的颂歌。' }
    ],
    posterTitle: 'RUNA 个人海报'
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'milestone-1',
    date: '02/11/2024',
    title: '项目启动与规划脑暴',
    category: 'coordination',
    description: '我们在 University of Leeds 进行了首次线下碰头，初步规划了以女性赋权为主题的现场音乐会日程。讨论了可能邀请的女性艺术家、学生会架构以及预订场地的约束。',
    notes: '初步拟定了演出日期、候选场地，并成立了由罗曼（Man Luo）、姜欣姚、金玉洁组成的发起人。',
    artifact: {
      type: 'chat',
      title: '一、讨论活动主题',
      englishTitle: '1. Topic Discussion & Title Conception',
      sender: 'Man Luo & 团队成员',
      details: `Man Luo: "Shal we first decide on the theme?"\nMan Luo: "1. Her Roars / 'Hear Her Roar' (pun on 'Hero'). 'Hear Her Roar'... conveying the power of women. In male-dominated fields like rock, it implies women can succeed."\nMan Luo: "2. SHEroes in Harmony / 'Shero Symphonies'. 'Shero' is 'she' + 'hero', highlighting female heroes... hinting at resonance with women's situations."\nMan Luo: "3. Harmony & Her-story. 'Herstory' - 'her' + 'history' emphasizing history from a female perspective..."\n\nYujie Jin: "I vote for 1."\nXinyao Jiang: "With 1, we can do more activities."\nMan Luo: "Actually, concert uses 2, workshop uses 1."\nMan Luo: "Haha, works for me—this way we can use them all."`,
      translation: `罗曼："我们要先把主题定下来。"\n罗曼："1. 'Hear Her Roar'（听她咆哮），传达女性力量。在摇滚等男性主导领域，体现女性也能拥有一席之地。"\n罗曼："2. SHEroes in Harmony（她们的和鸣），shero is she+hero。"\n罗曼："3. Harmony & Her-story（和声与她的故事）。"\n\n金玉洁："我选第一个！"\n姜欣姚： "投1一票。这样的话我们可以做更多周边/延展开。"\n罗曼："好，那就定下 'Hear Her Roar' 听她咆哮了！"`
    }
  },
  {
    id: 'milestone-2',
    date: '04/11/2024',
    title: '场地咨询与碰壁筛选',
    category: 'coordination',
    description: '开始根据我们预估的 100-300 人容量限制，向 Leeds 当地场地发送场地租赁咨询。由于场地容量限制在 70 人而遭到 Seven Arts 的婉拒，而 Santiago 也因空间局限而拒绝。',
    notes: '拟定了标准的场地咨询模板。随后 Wharf Chambers 成为我们的首要目标，但后续沟通进度变得异常缓慢。',
    artifact: {
      type: 'email',
      title: '场地咨询邮件模板与回复',
      englishTitle: 'Enquiry Template & Venue Responses',
      sender: 'Man Luo',
      recipient: 'Seven Arts & Santiago Leeds',
      details: `Dear manager, My name is Roman, and I am a postgraduate student in Music Management at the University of Leeds...\nWe expect to accommodate an audience of around 100-300 people...\n\n---\n*Seven Arts Reply*:\n"Hi Pat, I'm afraid that our venue will not be suitable for your event as we can only host up to 70 people. Good luck in finding somewhere to host your activity. Best, Pat"\n\n---\n*Santiago Reply*:\n"No worries I hope you find a venue! Kind regards, Jim McDonnell (Santiago)"`,
    }
  },
  {
    id: 'milestone-3',
    date: '05/11/2024',
    title: '灵感采风：参与 LUU 女权协会活动',
    category: 'coordination',
    description: '参加了由 Leeds 大学学生会 (LUU) 女权协会举办的“历代女性主义与手作杂志 (Zine)”活动。观察了社群互动、女性先行的安全空间，并建立了初步的联系。',
    notes: '参与了手工作品、聆听了演讲，并验证了当地有强大的、热衷于女性在创意领域代表性的潜在受众基础。',
    artifact: {
      type: 'moments',
      title: '前往 LUU 女权协会寻求合作灵感',
      englishTitle: 'Attending LUU Feminist Society for Collaboration Inspiration',
      details: `我们发现 LUU 的 Femsoc 俱乐部有一个与我们主题相关的活动。所以为了获得一些灵感并寻找合作机会，我们前去观摩。在活动中我们仔细聆听了发言，同时参与了手工 Zine、女性徽章、互助胸章的设计和制作。`
    }
  },
  {
    id: 'milestone-4',
    date: '10/11/2024',
    title: '与海报设计师敲定视觉调性',
    category: 'marketing',
    description: '开启与海报设计师李心怡的合作。探讨了“复古拼贴 zine / 经典演出”的美学，旨在用深色画布点缀高亮霓虹粉，兼顾柔和与前卫视觉。',
    notes: '设计师分享了早期草图。我们调整了排版元素，将乐器修改为更契合独立摇滚现场的现代乐组配置。',
    artifact: {
      type: 'chat',
      title: '与设计师李心怡进行视觉调性对齐',
      englishTitle: 'Visual Direction Alignment with Designer Xinyi Li',
      sender: 'Man Luo & 设计师',
      details: `Designer: "Please take a look at the retro concept. Because I think bright neon pinks and retro elements will definitely steal the show!"\nMan Luo: "This should be the main poster! But it doesn't feel that impressive right away with classical instruments."\nMan Luo: "Then, regarding the instruments on this poster, we are doing a live music gig. Clarinet and violin are classical instruments, which are not quite suitable."\nMan Luo: "You can put guitars and basses in it."\nDesigner: "OK, got it! Will update to band gear."`,
      translation: `设计师："看看这个复古粉色。我觉得明亮的复古霓虹粉极具冲击力。"\n罗曼："主题很好，但海报上的乐器是单簧管和小提琴，这是古典乐器，不适合摇滚Indie现场。"\n罗曼："可以改成吉力和贝斯。"\n设计师："OK！换成吉他贝斯摇滚配置。"`
    }
  },
  {
    id: 'milestone-5',
    date: '18/11/2024',
    title: '社媒渠道上线与艺人招募公告',
    category: 'marketing',
    description: '在 Instagram、TikTok 和小红书正式上线 `@sheroesinharmony`。发布了首张双语公开招募海报，招募女性歌手、小众乐队以及支持女性力量的品牌方。',
    notes: '招募重点面向 Leeds 学生群体 and 当地独立艺术家网络，收到了非常多热情的回应。',
    artifact: {
      type: 'moments',
      title: '社交媒体公开招募艺人与赞助商',
      englishTitle: 'Social Media Callout for Artists & Sponsors',
      details: `发布招募博文: "加入我们在 Leeds 举办的 'Hear Her Roar' 慈善独立现场音乐会，为了女性的声量勇敢开唱！我们正在寻找优秀的女性主唱歌手、乐队代表、以及价值观契合的品牌赞助人加盟我们在 2025 年 6 月的这场热血大戏！"\n#womeninmusic #livemusic #charitygig #HearHerRoar`
    }
  },
  {
    id: 'milestone-6',
    date: '07/12/2024',
    title: '现场挖掘艺人：敲定 RUNA 的登台合作',
    category: 'coordination',
    description: '在 Leeds 当地的 Crash Records 现场观看了 BBC 推荐的酷儿意大利艺术家 RUNA 的演出。演出结束后，我们带着双语项目策划书上前进行了诚挚的沟通。',
    notes: 'RUNA 对非营利演出和女性主义主题表达了高度赞赏，并当场成为了我们确定的第一位主打艺人。',
    artifact: {
      type: 'contract',
      title: '演出后台首次接触并敲定艺人 RUNA',
      englishTitle: 'First On-Site Pitch to Artist RUNA',
      details: '在 Leeds 观看了 RUNA 的现场后，我们向她展示了赞助方案与公益联名策划案。根据行业净收益划分规则，正式签署了 20% Net Profit 的分配意向（符合独立慈善演出标准）。'
    }
  },
  {
    id: 'milestone-7',
    date: '25/01/2025',
    title: '敲定公益慈善端背书：Getaway Girls Leeds',
    category: 'coordination',
    description: '获得了 Leeds 当当地深耕 30 余年的女性慈善机构 Getaway Girls 的正式授权支持。商定了将演出 40% 的门票净利润进行捐赠的方案。',
    notes: '她们为我们提供了宝贵的行业建议，并推荐了 Leeds 当地享有盛誉的传奇女性音乐人 Christella Litras 担任我们的专业行业导师。',
    artifact: {
      type: 'email',
      title: '与 Getaway Girls 达成公益端合作与导师举荐',
      englishTitle: 'Getaway Girls Partnership and Recommendation',
      sender: 'getawaygirlsleeds (Instagram DM)',
      recipient: 'Man Luo / Team "Hear Her Roar"',
      details: `Getaway Girls: "Hello, thank you for your message. We are open to partnership working... We can recommend getting in touch with Christella Litras as a local woman with a lot of experience working in music: christellamusical@gmail.com... to point you in the right direction."`
    }
  },
  {
    id: 'milestone-8',
    date: '20/02/2025',
    title: '正式敲定演出场地：Hyde Park Book Club (HPBC)',
    category: 'coordination',
    description: '在 Wharf Chambers 打太极无果后（这也是我们项目管理中最重要的一课：敏锐识别英国文化中的“委婉拒绝”），我们迅速变阵，成功锁定并签下了 Hyde Park Book Club (HPBC) 的 Basement 舞台。',
    notes: '支付了 180 英镑的场地定金。该地下室可容纳 150 人，配备了极其专业的独立功放与混音台调音系统。',
    artifact: {
      type: 'receipt',
      title: 'Hyde Park Book Club (HPBC) 场地定金收据',
      englishTitle: 'Hyde Park Book Club Deposit Reciept',
      details: `Receipt #1732-4101\nHYDEPARKBOOKCLUB, Mon, 10 Mar 2025\nAMOUNT PAID: £180.00\nPayment for invoice INV-3020\nConfirmed date: Wednesday, 4 June 2025`
    }
  },
  {
    id: 'milestone-9',
    date: '26/02/2025',
    title: '品牌方达成合作：Lush White Rose',
    category: 'sponsorship',
    description: '与 Lush 护肤（Leeds White Rose 分店）进行了价值观契合度的合作商讨。成功促成赞助：为乐手及现场志愿者提供精美的定制素食纯植物洗护礼包。',
    notes: '这些精美的手礼专供艺人与后台志愿者，带去了极致的现场人文主义关怀。',
    artifact: {
      type: 'email',
      title: 'Lush White Rose 礼包赞助邮件确认',
      englishTitle: 'Lush White Rose Sponsorship Confirmation',
      sender: 'Lush White Rose 团队 (white.rose@lush.co.uk)',
      recipient: 'Man Luo',
      details: `Lush: "Hello Roman, Thank you for reaching out... We'd love to support your event. We can provide sample packs of our self-care bath products for your artists and volunteers... We can arrange a pick-up on March 20 from our White Rose store."`
    }
  },
  {
    id: 'milestone-10',
    date: '08/03/2025',
    title: '妇女节声量闪击：首条宣发视频出炉',
    category: 'marketing',
    description: '借助国际妇女节的大势流量，在 TikTok、小红书和 Instagram 上同步推出了我们首支演出宣发短片。展现了受邀艺人极具张力的舞台瞬间。',
    notes: '发布 48 小时内累计播放量突破 1200+，有效增加了早鸟门票的发售预约量。',
    artifact: {
      type: 'moments',
      title: '国际妇女节品牌短片及宣发闪击',
      englishTitle: 'IWD Promotional Video Campaign Launch',
      details: `视频附言: "问题一: 作为女性，你如何看待女性在音乐产业中的位置和地位？我们走心采访了优秀的合作女音乐人 RUNA 和 Katerina，听听她们对于女性在现场演艺空间中发出真实声音的看法。 #HearHerRoar #WomenInMusic #IWD"`
    }
  },
  {
    id: 'milestone-11',
    date: '30/03/2025',
    title: '获得首笔资金赞助：长颈鹿签证（Giraffe Visa）',
    category: 'sponsorship',
    description: '成功说服广州乐游云路信息咨询有限公司（长颈鹿签证/Giraffe Visa）。其大客户经理 Harold 批准并拨付了 100 英镑的直接成本赞助金。',
    notes: '作为置换，我们确保在面对 Leeds 广大中国留学生群体的小红书推送中提供其品牌联合曝光，实现了精妙的跨国社群营销置换。',
    artifact: {
      type: 'chat',
      title: '企业资金赞助协议签署：长颈鹿签证 (Giraffe Visa)',
      englishTitle: 'Corporate Sponsorship Signed: Giraffe Visa',
      sender: 'Man Luo & Harold',
      details: `Man Luo: "Hello Harold, can Giraffe Visa provide a sponsorship for our graduation project? It supports a local young women's charity..."\nHarold: "Our initial idea is to provide a cash sponsorship of £100. We hope you promote our brand on Xiaohongshu to target Chinese international students in Leeds."\nMan Luo: "That's fantastic! Thank you so much! We will create dedicated visual integrations."`,
      translation: `罗曼："您好Harold，请问长颈鹿签证可以赞助我们的毕业音乐会项目吗？该项目40%利润将捐赠给本地女性慈善机构。"\nHarold："我们可以提供100英镑的直接资金赞助。作为回报，希望你们在小红书宣传我们的留学签证服务，吸引利兹的中国留学生。"\n罗曼："太棒了，这完美符合我们中英双语受众的定位！"`
    }
  },
  {
    id: 'milestone-12',
    date: '05/05/2025',
    title: '礼物合作伙伴：利兹一盒手作甜品',
    category: 'sponsorship',
    description: '与本地华人烘焙工作室“一盒手作甜品”达成抽奖与票务置换。为中场休息筹集了5个高档巴斯克手作蛋糕以及全场85折优惠券。',
    notes: '通过精致甜品提高了现场观众的参与度，促成了极佳的“协同价值”现场体验。',
    artifact: {
      type: 'chat',
      title: '手作甜品赞助：利兹暖心下午茶合作',
      englishTitle: 'Artisan Bakery Partnership: Leeds Sweets Box',
      sender: 'Man Luo & 店主',
      details: `Man Luo: "Hello! Our event is on 4 June at Hyde Park Book Club. We'd love to explore coupon or dessert partnerships..."\nSweets Box: "No problem. We can provide 5 deluxe dessert boxes for the on-site raffle, plus 10 custom vouchers for 15% off for other audience members!"\nMan Luo: "Oh my goodness! You are too kind!"`,
      translation: `罗曼："您好！我们在海德公园书吧举办女权演唱会，40%票务净利润将捐献。请问能提供合作赞助吗？"\n一盒手作甜品："可以的，我们提供5个高档甜品盒子用作现场抽奖，并且提供10张85折优惠券发给观众。"\n罗曼："太感谢了，真是太甜了！"`
    }
  },
  {
    id: 'milestone-13',
    date: '21/05/2025',
    title: '价值观品牌深度契合：浙江珍琦旗下品牌 MOLLIS',
    category: 'sponsorship',
    description: '获得了来自浙江珍琦护理用品有限公司旗下品牌 MOLLIS 的深度支持。包括 500 元人民币（约合 £51.20）宣发资金赞助和多箱纯棉有机草本卫生巾。',
    notes: '活动主题与女性关怀完美重合，我们将这些高阶卫生棉置于 HPBC 的 female 盥洗室，打造出有温度的 complimentary self-care 体验。',
    artifact: {
      type: 'moments',
      title: '女性力量深度赋权：浙江珍琦旗下品牌 MOLLIS 社媒联合宣发',
      englishTitle: 'Feminist Aligned Sponsorship: MOLLIS x Hear Her Roar',
      details: `Instagram Hook: "Hear Her Roar x MOLLIS 🌸 We’re proud to be supported by MOLLIS, a organic feminine care brand under Zhejiang Janeqi that champions women's biological safety, soft strength, and natural resilience. Support women, support hygiene. Complimentary packs available in restrooms tonight!"`
    }
  },
  {
    id: 'milestone-14',
    date: '04/06/2025',
    title: 'HEAR HER ROAR 演出日 - 盛大执行！',
    category: 'execution',
    description: '具有里程碑意义的演出现场！协调了全校乐器等重型硬件的跨系运送，通过扫描枪有条不紊地完成了 106 张票务检录，指挥了严格的声试（Soundcheck）与中场休息日程，并主持了现场赞助手礼抽奖。',
    notes: '演出于晚上 10:15 在漫天掌声中圆满落幕。全场赠送了 Lush 礼包和一盒手作的高奢甜点。',
    artifact: {
      type: 'stats',
      title: '现场票务及设备扫码最终统计汇总',
      englishTitle: 'Consolidated Live Show Gate Statistics',
      details: `TICKETSOURCE LTD SUMMARY:\nHear Her Roar Wed 04/06/2025, 9:30PM\nTOTAL SOLD: 106 Tickets\nSCANNED GATES: 98 Scanned\nUNSCANNED: 8 Scanned\nTotal Gross Box Office: £849.50`
    }
  },
  {
    id: 'milestone-15',
    date: '17/06/2025',
    title: '财务清算审计与慈善款转账',
    category: 'wrapup',
    description: '完成了大账目清算核对。将门票净利润的 40%（即 £270.44）直接公对公汇款给 Getaway Girls 基金会，并将剩余 60%（即 £405.65）按份额平分给所有登台参演的独立艺人。',
    notes: '实现了完全的非营利财务透明，最终我们的 Leeds 个人毕业履历集以极高的优等学分圆满收官。',
    artifact: {
      type: 'receipt',
      title: '银行款项转出单与 Getaway Girls 慈善会收讫单',
      englishTitle: 'Bank Outflow and Official Donation Receipt',
      details: `Total Gross Profit: £676.09 (Total Rev: £1000.70 - Costs: £323.91)\nDonation Outflow: -£270.44 (GETAWAY GIRLS)\nBaby Blue split: £67.60\nKaterina split: £67.60\nBlue Not Rue band split: £135.22\nRUNA band split: £135.22`
    }
  }
];

export const sponsors: Sponsor[] = [
  {
    id: 'getaway-girls',
    name: 'Getaway Girls Leeds',
    type: '联合慈善伙伴',
    logoText: 'GG',
    logoBg: 'bg-rose-950 border-rose-500 text-rose-400',
    contribution: '女性主义领导力背书、Leeds 当地女性社群资源、庇护所与困境女性救援宣传。',
    alignedValue: '女性大赋权 (帮助、赋能年轻女孩及女性同胞，建立自信并勇敢对外发声)。',
    description: '我们的核心捐赠受益对象。Getaway Girls 在 Leeds 已专注支持弱势女性和女权女领袖长达三十余年。'
  },
  {
    id: 'giraffe-visa',
    name: 'Giraffe Visa (长颈鹿签证)',
    type: '联合现金赞助商',
    logoText: 'GV',
    logoBg: 'bg-amber-950 border-amber-500 text-amber-400',
    contribution: '提供 100 英镑的直接赞助，用于填补海报精印、设计师稿件置换及现场装卸硬开销。',
    alignedValue: '跨文化交融 (全力扶植少数族裔在 UK 发声和中国留学生群体音乐梦的孵化)。',
    description: '专注为泛人群提供欧洲及全球多国极速留学、商考及旅游签证一站式通道的旗舰签证机构。'
  },
  {
    id: 'mollis-sunkiss',
    name: 'MOLLIS (浙江珍琦护理用品有限公司旗下品牌)',
    type: '品牌联名赞助商',
    logoText: 'MS',
    logoBg: 'bg-emerald-950 border-emerald-500 text-emerald-400',
    contribution: '提供约 500 元资金赞助 + 赞助多箱 MOLLIS 有机竹纤维柔密夜用与日用卫生用品。',
    alignedValue: '女性生殖及心理健康自我接纳 (用舒适轻薄呵护每个真实的女性生理周期，回归身心愉周期)。',
    description: '浙江珍琦护理用品有限公司旗下品牌 MOLLIS，提倡自然轻柔力量与身心健康。'
  },
  {
    id: 'lush-white-rose',
    name: 'Lush Cosmetics (White Rose Leeds)',
    type: '礼品赞助商',
    logoText: 'LC',
    logoBg: 'bg-sky-950 border-sky-500 text-sky-400',
    contribution: '全额赞助15套 Lush 经典明星款纯植物素食浴爆手作起泡盒及身体死皮嫩滑磨砂护理礼物。',
    alignedValue: '纯真环保与动物无伤害伦理美妆 (倡导零浪费、无动物试验、无添加的轻盈洗护艺术方式)。',
    description: '全球著名的英国手工无防腐天然美护商店，一直站在环保、反活体实验和低碳先锋前线。'
  },
  {
    id: 'dessert-box',
    name: 'Leeds Handmade Sweets Box (一盒手作甜品)',
    type: '伴手礼与抽奖伙伴',
    logoText: 'HS',
    logoBg: 'bg-violet-950 border-violet-500 text-violet-400',
    contribution: '全权赞助5份超高人气双层巴斯克爆浆芝士盒（供中场进行大抽奖）以及全场 15% 门票折扣码卷。',
    alignedValue: '本地国际留学生自主创业扶持 (全力推荐 Leeds 华人留学生及年轻女性创意烘焙微企)。',
    description: 'Leeds 人气极高的国人纯手作烘焙工作室，以细腻的日韩低糖、高颜值定制蛋糕风靡华人群体。'
  }
];

export const metrics: MetricItem[] = [
  { id: 'm1', label: '售出门票数', value: 106, suffix: ' 张', desc: '通过早鸟、常规以及最后现场门票的猛推开票，全数售完了原定的全部安全票数指标。' },
  { id: 'm2', label: '实到出席人数', value: 98, suffix: ' 人', desc: '在海德公园地下室 (HPBC) 高效完成了高精度的入场检票扫描（折合 92.4% 的超高到场转化率）。' },
  { id: 'm3', label: '项目总收益金额', value: 1000.70, prefix: '£', desc: '票务平台 TicketSource 主票房收入 (£849.50) + MOLLIS 赞助金额 (£51.20) + 长颈鹿签证赞助金额 (£100.00)。' },
  { id: 'm4', label: '硬性执行成本支出', value: 323.91, prefix: '£', desc: 'HPBC 场地租赁定金 (£180) + Xinyi 视觉海报及排版外包 (£100) + 打车托运沉重架子鼓乐器跑腿 (£23.41) + 道具及基础饮品支出。' },
  { id: 'm5', label: '项目实际净门票收益', value: 676.09, prefix: '£', desc: '全余款透明、阳光公允结算：40% 直接捐赠给女权及困境女性组织，其余 60% 由主要登台演出的 4 组艺人凭账平分。' },
  { id: 'm6', label: '最终捐款转移额度', value: 270.44, prefix: '£', desc: '全数转给 Getaway Girls 并在官网取得官方免息捐款收据存盘，全力扶助贫困社区年轻女性自主自立项目。' }
];

export const reflections: ReflectionItem[] = [
  {
    id: 'ref-1',
    title: '反思场地沟通：破译英式文化中的“委婉拒绝”',
    theory: '音乐演出设计中场地谈判的学术话语规范',
    problem: '我们起初重点锁定在 Wharf Chambers 进行合作演出。然而在拉锯数封电子邮件后，对方始终未能明确锁档。这正是因为我们没有敏锐解构英式传统组织“言辞极度礼貌但实质无限推拖”的制度拒绝风格，导致浪费了超过3周的关键时间，全盘压缩了前期筹备窗。',
    impact: '被迫在极度逼仄的档期内慌忙折返签下 Hyde Park Book Club，急付场地定金，这极度压缩了多位艺人的联合宣发生命期。',
    resolution: '未来在 UK 及跨文化音乐活动操盘中，我们必须将场地遴选计划提前 1.5 个月启动；多用电话直联破除文字烟幕，在任何意向延误3个工作日未果后，必须无条件强力激活B计划（Contingency Options）。',
    learning: '学到了身为职业性、跨文化的幕后制作人和演出经理人，必须学会在高度客套的字里行间精准扒出无情的、实质性的物流及流程拒绝（Logistic Refusals）。'
  },
  {
    id: 'ref-2',
    title: '商务端破壁：重组价值观双向咬合的“定向匹配”以代替“海投”',
    theory: '资金众筹拓展学：慈善品牌价值观联合矩阵理论 (Sargeant & Shang)',
    problem: '在商务拓展的第一个月，我们误入了纯海投盲区的怪圈。在未深入调研跨国巨头财年及地方 UK 预算分布的前提下，泛泛地向 SHEIN、喜茶、海南航空、饭团外卖投递了普通合作书，招致了接近九成九的拒信，极大地折损了队内的执行士气。',
    impact: '白白空耗了接近18个小时 of 公关办公时间，撰写的合作案完全没有考虑地理和目标圈层的高度重叠互补率。',
    resolution: '我们痛定思痛，转攻主打小而美和核心态度一致的垂类品牌：浙江珍琦旗下品牌 MOLLIS 高度契合女性卫生特护与安全主题，一盒手作深度绑定本校留学生画像，而 Lush 则自带反实验和扶持 Leeds 社区底色。',
    learning: '学会通过由海报及包装露出置换的定向定制案，一击斩获4家具有极高度互补力量的品牌巨擘的联合承载。'
  },
  {
    id: 'ref-3',
    title: '临场人力资源困局：志愿力量延迟召集的教训',
    theory: '人力资源与重大型音乐会现场干系人矩阵部署论 (Bowdin)',
    problem: '在整个演出落地执行日，我们高估了项目发起人以及三位主理人的纯粹肉体力气。我们甚至没有建立好志愿者的储备池并提前集结，直到开演前24小时才在微信和 WhatsApp 上手忙脚乱地发布了紧急求助通告。',
    impact: '这在晚间黄金入场期造成了戏剧性的、严峻的检票断档。原定在现场由专人组织的女权主题闪粉绘画、留言树打卡互动在最拥挤的 soundcheck 尾声全盘搁浅，因为大家都跑去卸物资了。',
    resolution: '最终全员一专多能地疯狂扑上。罗曼（Man Luo）不仅亲身打出租去拉学校的沉重爵士鼓架配件，还在现场兼顾检票与应对突发的乐手后台需要。',
    learning: '音乐演出的落地运行必须在开场前2周确定一个详尽而精密的志愿者点位值班轮换表（Volunteer Shift Map），并指派确定的设备负总、前门检票首领与后勤总厨分摊领导职权。'
  },
  {
    id: 'ref-4',
    title: '声光硬伤反思：舞台灯光前置调测的脱节漏洞',
    theory: '现场演出声光电全线技术制作规范与舞台 Rider 校阅体系',
    problem: '这是一个极易被忽视的后台漏洞。我们错误地将极度重要的演出舞台灯光（Lighting Cues）全部甩手默认会由参演艺人们自行与 HPBC 的驻场调音师沟通，导致我们三位项目核心策划人员在前一晚的灯光设备资产单校核上全然缺位。',
    impact: '这致使全场最终的暗黑现场舞台灯光的纵深和彩色追光相对单调简陋，后续生成的宣发胶片和摄影作品也因环境欠彩色烘托，不及该场馆往常的主打现场。',
    resolution: '未来承做类似规格的演出，我们团队必须在前期筹备阶段起草一份由我们全盘对齐和监督、极为专业的《现场技术硬核（Technical Riders）清单》，最少提前14天将其和灯光分场景要求（Cue Sheet）死锁在合同范例中。',
    learning: '出色的演出主理人不会把质量交给直觉和运气——每一项声、光、电的技术参数必须百分百亲历白纸黑字地落实并死卡在每次 pre-production 的检查表中。'
  }
];
