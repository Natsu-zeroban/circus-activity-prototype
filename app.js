const WORLD = { width: 3840, height: 1280 };
const CAMERA_ANCHOR_RATIO = 0.30;

const days = [
  { id: 1, name: "潮湿序幕", subtitle: "谣言从画布背后醒来", background: "assets/days/day-1-street-loop.webp", mainIds: ["01", "02", "03", "04"], sideIds: ["S-1"], infoIds: ["I-1", "I-2", "I-3"], finalId: "04", gate: { after: "02", info: "I-3" }, start: { x: 140, y: 700 } },
  { id: 2, name: "幕后迷宫", subtitle: "每一根绳索都牵着秘密", background: "assets/days/day-2-street-loop.webp", mainIds: ["05", "06", "07", "08"], sideIds: ["S-2"], infoIds: ["I-4", "I-5", "I-6", "I-7"], finalId: "08", gate: { after: "06", info: "I-7" }, start: { x: 140, y: 650 } },
  { id: 3, name: "红幕终场", subtitle: "笑声越响，真相越近", background: "assets/days/day-3-street-loop.webp", mainIds: ["09", "10", "11", "12", "13"], sideIds: ["S-3", "S-4"], infoIds: ["I-8", "I-9", "I-10"], finalId: "13", gate: { after: "11", info: "I-10" }, start: { x: 140, y: 650 } }
];

const mainNodes = [
  { id: "01", day: 1, name: "潮湿传闻", type: "story", x: 450, y: 670, via: { x: 300, y: 690 }, text: "街区把墙面画成永不散场的舞台。局长循着狂厄反应进入布景般的窄巷，关于神奇马戏团的传言正从每一扇假窗后传来。" },
  { id: "02", day: 1, name: "失踪者名单", type: "story", x: 1120, y: 650, via: { x: 780, y: 590 }, text: "名单上的人互不相识，却都收到过没有署名的门票。三个熟悉街区暗路的线人愿意协助调查。" },
  { id: "03", day: 1, name: "破棚下的笑声", type: "story", x: 1900, y: 570, via: { x: 1510, y: 530 }, text: "破棚里的居民用木箱搭起小舞台，笑声压过巡逻队的靴声。" },
  { id: "04", day: 1, final: true, name: "第一夜散场", type: "story", x: 2700, y: 660, via: { x: 2310, y: 700 }, text: "当日线索全部归档，临时线人从不同巷口离开。局长追随一辆无灯篷车，进入马戏团的幕后区域。" },
  { id: "05", day: 2, name: "褪色的门票", type: "story", x: 450, y: 620, via: { x: 300, y: 630 }, text: "第二日，街区像换景般改变。后台的旧票根写着每位团员曾经献出的东西，但其中几行被人故意倒印。" },
  { id: "06", day: 2, name: "献出之物", type: "story", x: 1120, y: 700, via: { x: 790, y: 735 }, text: "绳索、镜面和配重构成新的街道。三名熟悉后台规则的线人先后回应了局长的联络。" },
  { id: "07", day: 2, name: "幕布之后", type: "story", x: 1900, y: 580, via: { x: 1510, y: 640 }, text: "台前的笑声穿过幕布，演员们却拒绝说出团长真正的名字。" },
  { id: "08", day: 2, final: true, name: "第二夜换幕", type: "battle", x: 2700, y: 690, via: { x: 2310, y: 730 }, text: "当日支线与情报已经闭合。笼车突围后，所有后台线人切断联络；红幕后的主帐篷在第三日开启。" },
  { id: "09", day: 3, name: "笑声之下", type: "story", x: 400, y: 650, via: { x: 270, y: 640 }, text: "第三日的街区不再伪装成现实：红幕、面具与聚光灯覆盖了一切，笑声像命令一样从高处落下。" },
  { id: "10", day: 3, name: "墙缝暗号", type: "story", x: 1000, y: 620, via: { x: 700, y: 580 }, text: "地下反抗组织把路线藏进布景接缝。新的线人只在终场前现身一次，他们知道主舞台下方还有一层机关室。" },
  { id: "11", day: 3, name: "无声证词", type: "story", x: 1650, y: 650, via: { x: 1320, y: 690 }, text: "一段没有声音的证词指向舞台下的献祭名册。要靠近那里，必须同时应对药雾、配重与监听。" },
  { id: "12", day: 3, name: "团长的邀请", type: "story", x: 2300, y: 620, via: { x: 1980, y: 580 }, text: "团长邀请局长成为最后一位贵宾。红幕后的真相，正等待一个愿意笑着走进去的人。" },
  { id: "13", day: 3, final: true, name: "盛大谢幕", type: "battle", x: 3000, y: 650, via: { x: 2660, y: 700 }, text: "三日获得的主线、支线与情报在红幕前汇合。所有可调查内容已完成，局长走向最后的谢幕。" }
];

const sideNodes = [
  { id: "S-1", day: 1, name: "缺席的杂耍演员", unlockAfter: "02", x: 1420, y: 400, via: { x: 1260, y: 520 }, text: "追查一名没有登台的演员。她的住处只留下一只剪断的鞋带和写给纸鸢的镜字便笺。" },
  { id: "S-2", day: 2, name: "墙后的传单", unlockAfter: "06", x: 1180, y: 980, via: { x: 1140, y: 830 }, text: "拆开一块活动布景板，找到地下反抗者传递假账页的暗格，并确认墨针的真实身份。" },
  { id: "S-3", day: 3, name: "没有署名的地图", unlockAfter: "10", x: 1320, y: 360, via: { x: 1160, y: 500 }, text: "沿屋脊标记还原治安局的包围路线，确认“鸦”究竟替谁望风。" },
  { id: "S-4", day: 3, name: "最后一场免费演出", unlockAfter: "12", x: 2780, y: 900, via: { x: 2640, y: 770 }, text: "居民在终场前搭起一座没有门票的小舞台。开怀大笑，是他们对痛苦最直接的反抗。" }
];

const informants = [
  { id: "L-1", day: 1, name: "苔生", joinAt: "01", archiveAt: "I-1", age: 11, origin: "洗衣巷锅炉房", portrait: "assets/informants/taisheng.webp", trait: "辨味识药", observation: "能从煤烟和染料里分出极淡的药味。", caution: "浓烈香水会让他眩晕。", profile: "曾替地下诊所清洗绷带，因此记得常见药剂的气味。他提供线索，不是为了当英雄，而是不愿再看见有人被悄悄带走。" },
  { id: "L-2", day: 1, name: "铃", joinAt: "02", archiveAt: "I-2", age: 12, origin: "钟表铺后巷", portrait: "assets/informants/ling.webp", trait: "听声记路", observation: "能用回声判断墙后空腔，并记住机械运转的节拍。", caution: "突如其来的尖响会打乱她的判断。", profile: "她曾靠替店铺报时换取食物，不爱说话，却会把每个人的脚步声牢牢记住。" },
  { id: "L-3", day: 1, name: "纸鸢", joinAt: "02", archiveAt: "S-1", age: 13, origin: "旧剧院屋顶", portrait: "assets/informants/zhiyuan.webp", trait: "镜写速记", observation: "习惯从倒影里读字，也能快速临摹复杂符号。", caution: "左膝有旧伤，不适合跳跃或负重。", profile: "他在被拆掉的剧院里学会倒着看台词，相信写下来的东西终会替沉默的人作证。" },
  { id: "L-4", day: 2, name: "灰炭", joinAt: "05", archiveAt: "I-4", age: 14, origin: "北街锅炉站", portrait: "assets/informants/huitan.webp", trait: "机械直觉", observation: "熟悉滑轮、齿轮和配重，能凭震动判断故障。", caution: "不识字，无法独立辨认文书。", profile: "他从小替锅炉工搬煤，把复杂机器看作不会撒谎的伙伴。" },
  { id: "L-5", day: 2, name: "小满", joinAt: "06", archiveAt: "I-5", age: 10, origin: "流动默剧班", portrait: "assets/informants/xiaoman.webp", trait: "无声戏语", observation: "熟悉后台手势，能隔着很远准确传递行动指令。", caution: "怕火，见到明火容易僵住。", profile: "默剧班解散后，她仍保留着整套手势。她觉得不用开口也能被理解，是一件很了不起的事。" },
  { id: "L-6", day: 2, name: "墨针", joinAt: "06", archiveAt: "S-2", age: 16, origin: "旧印刷铺", portrait: "assets/informants/mozhen.webp", trait: "倒字排版", observation: "能直接辨认反字与镜像铅字，速记时几乎不抬头。", caution: "强光会让右眼短暂失焦。", profile: "地下传单大多经由他的手排版。他把每次错版都留着，因为错误有时比成品更接近真相。" },
  { id: "L-7", day: 3, name: "白芷", joinAt: "09", archiveAt: "I-8", age: 19, origin: "地下诊所", portrait: "assets/informants/baizhi.webp", trait: "药雾辨识", observation: "能凭极细微的甜苦味判断麻醉剂来源。", caution: "长时间处于粉尘中会呼吸困难。", profile: "她把诊所里每一种药都记成气味，而不是名字。马戏团曾拿走她救治过的一名病人。" },
  { id: "L-8", day: 3, name: "旧弦", joinAt: "10", archiveAt: "I-9", age: 38, origin: "前舞台绞盘工", portrait: "assets/informants/jiuxian.webp", trait: "配重技师", observation: "能徒手判断绞盘受力，也熟悉整套后台手势。", caution: "听力受损，无法依靠口头指令配合。", profile: "他亲手吊起过团长的第一张红幕，也亲眼看见有人从配重井里再没回来。" },
  { id: "L-9", day: 3, name: "鸦", joinAt: "11", archiveAt: "S-3", age: 17, origin: "主帐篷屋脊", portrait: "assets/informants/ya.webp", trait: "唇读望风", observation: "能从远处读懂口型，并快速记下巡逻路线。", caution: "惧怕封闭空间，进入狭窄风道会失去镇定。", profile: "他曾替两个阵营同时望风，直到发现治安局和马戏团使用的是同一份失踪者名单。" }
];

const archiveStages = {
  "L-1": [
    { title: "在煤灰里长大的孩子", unlockAt: "01", unlockLabel: "完成主线 01", content: "苔生没有正式的姓氏。洗衣巷的人轮流照看他，他便替每一家跑腿。锅炉房终年潮湿，砖缝里却总长着青苔，邻居因此给了他这个名字。" },
    { title: "没有名分的学徒", unlockAt: "I-1", unlockLabel: "归档信息 I-1", content: "地下诊所不敢登记一个孩子，老医师便只让他洗绷带、认药瓶。苔生不识多少字，却能记住上百种气味；那是他第一次发现，自己也可以成为有用的人。" },
    { title: "那一次没有追上", unlockAt: "I-3", unlockLabel: "完成派遣 I-3", content: "一名常给他留热汤的洗衣女工被带走时，苔生躲在煤车底下，没有出声。此后他执意替诊所送药、替街坊传信，仿佛多跑一步，就能补回那天没敢迈出的那一步。" },
    { title: "朝东的空药瓶", unlockAt: "04", unlockLabel: "完成主线 04", content: "第一夜结束，他没有跟随局长进入幕后，而是留下守住诊所。临别时，他约定用药瓶朝向报告平安——这是苔生第一次主动决定自己该留在哪里。" }
  ],
  "L-2": [
    { title: "钟表铺的报时人", unlockAt: "02", unlockLabel: "完成主线 02", content: "铃幼时被钟表匠收留，没有人知道她原来的名字。她每天替店里给钟上弦，整条街便用那声清脆的“铃”称呼她。比起交谈，她更习惯分辨来人的脚步。" },
    { title: "慢四分钟的约定", unlockAt: "I-2", unlockLabel: "归档信息 I-2", content: "钟表匠失踪后，街坊把所有钟调慢四分钟，用误差掩护彼此躲过换岗巡逻。只有铃守着真实时间，因为总要有一个人记得事情本来的样子。" },
    { title: "尖响之后", unlockAt: "I-3", unlockLabel: "完成派遣 I-3", content: "她畏惧尖锐声响，源于治安局砸毁钟表铺的那一夜。此后铃会借齿轮的规律声让自己镇定：不是假装不再害怕，而是练习带着恐惧继续判断。" },
    { title: "带走一枚小铃", unlockAt: "04", unlockLabel: "完成主线 04", content: "离队时，铃摘下店门口最小的一只铜铃。她说等街区不再需要暗号，就把它重新挂回去，只用来告诉客人：这里又开始修钟了。" }
  ],
  "L-3": [
    { title: "旧剧院最后的住客", unlockAt: "02", unlockLabel: "完成主线 02", content: "纸鸢曾是旧剧院的提词学徒。剧院关闭后，演员各自散去，他却留在漏雨的阁楼，用废节目单折纸鸢、记录街上仍在发生的故事。" },
    { title: "没能留住的人", unlockAt: "S-1", unlockLabel: "完成支线 S-1", content: "他的左膝是在剧院强拆时受伤的，一名杂耍演员把他从坍塌的布景下拖了出来。如今那名演员失踪，剪断的鞋带成为她留给纸鸢的最后一句话。" },
    { title: "倒着写下真相", unlockAt: "03", unlockLabel: "完成主线 03", content: "镜写最初只是提词人防止观众偷读台本的小技巧。纸鸢后来用它替不敢署名的人保存证词。他相信只要文字还在，沉默就不等于遗忘。" },
    { title: "屋顶上的记录者", unlockAt: "04", unlockLabel: "完成主线 04", content: "纸鸢选择留在街区，没有追随调查队。他把沿途所见刻在瓦片背面，等有一天屋顶重建，那些被藏起来的人生也会重新见光。" }
  ],
  "L-4": [
    { title: "锅炉站的黑手", unlockAt: "05", unlockLabel: "完成主线 05", content: "灰炭七岁便在锅炉站捡煤，双手总洗不干净。老师傅不教他认字，却肯让他拆坏掉的阀门；机器由此成了他最早读懂的一种语言。" },
    { title: "机器从不撒谎", unlockAt: "I-4", unlockLabel: "归档信息 I-4", content: "一次锅炉事故后，工头把责任推给已经失踪的同伴。灰炭从齿轮磨痕证明故障早已存在，却没人愿意听一个孩子说话。从那以后，他只相信能够亲手验证的证据。" },
    { title: "该不该让机器停下", unlockAt: "I-7", unlockLabel: "完成派遣 I-7", content: "过去的灰炭以修好机器为荣，即便机器服务的是坏人也一样。加入调查后他第一次开始思考：本领不只用来维持运转，有时也该让错误的秩序停下来。" },
    { title: "熄灭最后一炉火", unlockAt: "08", unlockLabel: "完成主线 08", content: "笼车突围后，他亲手关闭锅炉站。灰炭决定去学认字，弄懂那些总被大人用来推卸责任的记录——下一次，他要同时看懂机器和人的谎言。" }
  ],
  "L-5": [
    { title: "台上捡来的名字", unlockAt: "06", unlockLabel: "完成主线 06", content: "小满不记得自己的生日。默剧班在小满节那天收留她，便给了她这个名字。她从小跟着演员迁徙，把后台手势当作比口语更可靠的家乡话。" },
    { title: "烧毁的默剧班", unlockAt: "I-5", unlockLabel: "归档信息 I-5", content: "剧班因演出讽刺治安局而遭驱散，一场被称作“意外”的火烧掉了帐篷。小满从此惧怕明火，也再没有在观众面前完成过一整场表演。" },
    { title: "没有观众的演出", unlockAt: "07", unlockLabel: "完成主线 07", content: "为帮助居民撤离，她隔着三层幕布连续传递指令。无人鼓掌，她却第一次觉得自己完成了那场中断已久的演出：让所有同伴平安走下舞台。" },
    { title: "落幕之后是再见", unlockAt: "08", unlockLabel: "完成主线 08", content: "小满离队前做出“落幕”的手势，又认真补上“再见”。在旧剧班的规矩里，这句话只送给还会重逢的人。她已经开始寻找散落各处的团员。" }
  ],
  "L-6": [
    { title: "印刷铺的小学徒", unlockAt: "06", unlockLabel: "完成主线 06", content: "墨针自幼在旧印刷铺分拣铅字，真名反而很少有人叫。师傅说他排字又快又准，像一根蘸了墨的针，“墨针”便留在了每一张工单背面。" },
    { title: "第一张地下传单", unlockAt: "S-2", unlockLabel: "完成支线 S-2", content: "师傅因印刷工人请愿书被捕后，他接过铺子的钥匙。墨针把错字变成暗号，让每一张看似粗劣的传单都拥有只有街坊读得懂的第二层意思。" },
    { title: "光照坏的右眼", unlockAt: "I-7", unlockLabel: "完成派遣 I-7", content: "一次搜查中，他为保护排版原稿直视探照灯，右眼从此会在强光下失焦。他没有告诉同伴，只把重要文字排得更大、更深，确保自己永远还能读下去。" },
    { title: "留下错误的人", unlockAt: "08", unlockLabel: "完成主线 08", content: "撤离印刷铺时，墨针带走的不是完美成品，而是记录治安局与马戏团交易的错版。他说正确的版本总有人保存，而错误往往最接近被掩盖的真相。" }
  ],
  "L-7": [
    { title: "没有执照的医师", unlockAt: "09", unlockLabel: "完成主线 09", content: "白芷曾在正规诊所做配药学徒，因私自救治付不起费用的病人被赶走。她索性把技术带进地下街区，那里的人只问她能不能救命，从不问墙上有没有证书。" },
    { title: "用气味记住药", unlockAt: "I-8", unlockLabel: "归档信息 I-8", content: "地下诊所常收到撕去标签的旧药瓶，她便训练自己以气味、颜色和沉淀辨认药物。这项本为穷人弥补匮乏的本领，后来成了追踪马戏团药雾的关键。" },
    { title: "被带走的病人", unlockAt: "I-10", unlockLabel: "完成派遣 I-10", content: "她曾救回一名濒死的流浪者，第二天病床却空了，只留下马戏团门票。白芷加入调查并非为了证明医术；她无法接受自己救下的人又被当作材料带走。" },
    { title: "名册之后", unlockAt: "13", unlockLabel: "完成主线 13", content: "终场后，她逐一核对献祭名册与诊所记录。白芷拒绝为被划掉的人写下死亡日期——只要没有找到遗体，他们就仍是等待救援的病人。" }
  ],
  "L-8": [
    { title: "把红幕吊起来的人", unlockAt: "10", unlockLabel: "完成主线 10", content: "旧弦年轻时跟着流动戏班学习绞盘，后来成为马戏团最早的舞台工。他吊起第一张红幕，也相信这座帐篷真能给无处可去的人一个家。" },
    { title: "配重井里的事故", unlockAt: "I-9", unlockLabel: "归档信息 I-9", content: "一次违规加重让钢索突然崩断，旧弦失去大半听力，一名助手却再没从井下回来。团长把事故写成离职，他则偷偷保存了那天的受力记录。" },
    { title: "沉默了十二年", unlockAt: "I-10", unlockLabel: "完成派遣 I-10", content: "旧弦早已知道舞台下藏着什么，却因害怕牵连其他工人沉默至今。调查逼近暗仓后，他重新画出久违的后台手势——这一次不是服从演出，而是准备亲手揭开它。" },
    { title: "最后一次停机", unlockAt: "13", unlockLabel: "完成主线 13", content: "红幕落下后，旧弦锁死主绞盘，把钥匙交给幸存的年轻工人。他没有请求原谅，只说往后的舞台，应由知道代价的人决定升起什么。" }
  ],
  "L-9": [
    { title: "屋脊上的孩子", unlockAt: "11", unlockLabel: "完成主线 11", content: "鸦从小替摊贩望风，靠屋顶之间的缝隙躲开追捕。没人知道他的真名；他总穿黑衣，又会在危险前短促示警，于是街坊都叫他“鸦”。" },
    { title: "把消息卖给两边", unlockAt: "S-3", unlockLabel: "完成支线 S-3", content: "为了活下去，他同时向治安局和地下组织出售路线。鸦坚持自己只认价钱，却曾故意漏报一个出口，让三个付不起报酬的逃亡者离开包围圈。" },
    { title: "名单上的旧名字", unlockAt: "12", unlockLabel: "完成主线 12", content: "他在两边的文件里看见同一份失踪者名单，其中一个名字属于多年未归的姐姐。鸦终于明白，自己卖出的某些消息曾帮助敌人把无辜者包装成“自愿离开”。" },
    { title: "第一次免费的路线", unlockAt: "13", unlockLabel: "完成主线 13", content: "终场前，鸦烧掉治安局的通行证，免费为调查队标出唯一入口。事后他留下作证，没有再逃上屋顶——这是他第一次不把生存和选择分开计算。" }
  ]
};

const infoNodes = [
  { id: "I-1", day: 1, name: "破损药签", unlockAfter: "01", x: 730, y: 370, text: "被雨水泡开的药签仍残留甜苦味。苔生认出它来自只向地下诊所供货的批次。" },
  { id: "I-2", day: 1, name: "失准的报时", unlockAfter: "02", x: 1240, y: 900, text: "街区所有钟都慢了四分钟，只有铃坚持按真正的时间报时；那正好对应巡逻换岗。" },
  { id: "I-3", day: 1, name: "线人派遣·听墙人", unlockAfter: "02", x: 1660, y: 350, gameplay: true, text: "废弃排练通道里布满铃线，反抗组织将信筒藏在一面空心墙后。完成调查后，主线03才会显现。", task: { requiredCount: 1, image: "assets/events/listening-wall.webp", question: "三条岔路都挂着会惊动巡逻的细铃。纸条只写着：“别信画出的箭头，幕布后回来的声音才是真的。”谁最可能独自找出藏信筒的空心墙？", rule: "从本日线人中选择 1 人。提交后无法重试；结果不会改变主线走向，但会留下不同的独立探索记录。", clues: ["岔路没有照明，墙上的箭头被反复改画。", "轻敲砖面时，深处传回两种不同回声。", "铃线贴地相连，靠摸索乱走很容易触发警报。"], solution: ["L-2"] } },
  { id: "I-4", day: 2, name: "失灵的齿轮", unlockAfter: "05", x: 720, y: 370, text: "探照灯的传动齿轮每转三圈就会卡住一次。灰炭摸过外壳，记下了它真正的停顿周期。" },
  { id: "I-5", day: 2, name: "后台手势表", unlockAfter: "06", x: 1280, y: 900, text: "一张默剧班的手势表被缝在幕布内侧。小满补全了其中代表撤退与静止的动作。" },
  { id: "I-6", day: 2, name: "倒印传单", unlockAfter: "07", x: 2440, y: 960, text: "传单并非印反，而是专门留给镜中阅读的人。字缝里夹着下一场巡演的装卸编号。" },
  { id: "I-7", day: 2, name: "线人派遣·镜棚假账", unlockAfter: "06", x: 1660, y: 340, gameplay: true, text: "旧镜棚里藏着被倒写的巡演账册，旋转探照灯仍按后台机械的节拍扫过地面。完成调查后，主线07才会显现。", task: { requiredCount: 2, image: "assets/events/mirror-ledger.webp", question: "镜中的走廊真假交叠，账页全部倒写；安全时间藏在探照灯齿轮的循环里。该让哪两名本日线人进去？", rule: "选择 2 人组成调查队。现场需要两种能力，也要避开人物局限；结果仅作为本次独立探索记录。", clues: ["破镜把同一条路映成三个方向。", "账页不能带走，只能在灯下抄完。", "探照灯每转三圈停顿片刻，强光会反复扫过账桌。"], solution: ["L-4", "L-6"] } },
  { id: "I-8", day: 3, name: "无标签药瓶", unlockAfter: "09", x: 650, y: 360, text: "瓶中液体没有标签。白芷确认它受热后会形成几乎无色的麻醉雾。" },
  { id: "I-9", day: 3, name: "配重井旧图", unlockAfter: "10", x: 1210, y: 920, text: "旧图上的数字早已褪色，旧弦却能从绳结位置认出主舞台下方仍在运转的配重井。" },
  { id: "I-10", day: 3, name: "线人派遣·无声谢幕", unlockAfter: "11", x: 2070, y: 350, gameplay: true, text: "主舞台下方藏着献祭名册。药雾、老旧配重与头顶的演出，让喊话和迟疑都可能暴露行动。完成调查后，主线12才会显现。", task: { requiredCount: 2, image: "assets/events/silent-curtain.webp", question: "必须辨认混有麻醉剂的风道、稳住会自行回落的配重，并在台上演出时无声协作。哪两名本日线人能够彼此补足？", rule: "选择 2 人组成最终调查队。不要只看长处，也要确认局限不会被现场放大；结果不会分叉主线剧情。", clues: ["几条风管都吹出冷风，只有一股带着近乎不可察觉的甜味。", "名册锁在悬台下，放手后配重会在数秒内复位。", "头顶正在演出，任何喊声都会传进舞台。"], solution: ["L-7", "L-8"] } }
];

const dispatchOutcomes = {
  "I-3": {
    success: {
      kicker: "完整回收 · 无人暴露",
      title: "墙后传来的第四声回响",
      summary: "铃独自穿过排练通道，在没有触动警报的情况下取回完整信筒。",
      chapters: [
        { label: "进入", title: "不看箭头", body: "铃在第一处分岔便停了下来。她闭上眼，只听幕布后一次次折返的敲击声。墙上的粉笔箭头指向左侧，她却沿着更空、更远的回响走向右边。" },
        { label: "判断", title: "借一阵噪声前进", body: "细铃封住最后一段路。远处齿轮每隔十七秒发出一阵低鸣，铃便只在噪声覆盖铃舌时移动。她用三次轻敲确认夹层，第四声回响来自墙内。" },
        { label: "归来", title: "信筒还带着墙灰", body: "巡逻灯扫过通道时，她已经把松动的砖推回原位。铃回到巷口，将沾着墙灰的信筒交给局长，随后准确复述了沿途每一处铃线的位置。" }
      ],
      record: ["回收完整密封信筒", "确认三条巡逻暗道", "线人未被敌方察觉"],
      closing: "铃把耳朵贴在信筒上，确认里面没有机关，才轻声说：“这一次，响声没有把我留在原地。”"
    },
    failures: {
      "L-1": {
        kicker: "有限撤离 · 目标遗失",
        title: "煤烟盖不住铃声",
        summary: "苔生找到了信筒留下的药蜡气味，却无法从回声中辨认真正的夹墙。",
        chapters: [
          { label: "进入", title: "循着甜苦味", body: "苔生没有理会箭头。他在潮湿砖缝间闻到熟悉的药蜡味，判断信筒确实经过这里，于是沿着气味最浓的岔路俯身前行。" },
          { label: "失误", title: "脚边的一声轻响", body: "气味停在两面相似的墙前。苔生选择更靠近药味的一面，却没听出另一侧的空腔。他后退时碰到贴地铃线，第一枚铃只响了半声，整条通道便同时回应。" },
          { label: "撤离", title: "攥在手里的红线", body: "巡逻灯亮起前，苔生钻进排水口逃出。他没能带回信筒，却死死攥着一截沾有封蜡的红线——至少证明目标曾被人提前转移。" }
        ],
        record: ["信筒未能回收", "带回封蜡残留与红线", "线人安全撤离"],
        closing: "苔生一直低着头。他没有为失败辩解，只问局长能不能把那截红线也装进证物袋。"
      },
      "L-3": {
        kicker: "有限撤离 · 目标遗失",
        title: "镜字停在墙的另一边",
        summary: "纸鸢识破了假箭头，却因旧伤和铃线封锁无法抵达藏有信筒的夹墙。",
        chapters: [
          { label: "进入", title: "倒过来看", body: "纸鸢很快发现，墙上箭头只有映在积水里才组成完整记号。他照着镜像路线前进，并把每个转角画在袖中的纸片上。" },
          { label: "受阻", title: "越不过的低线", body: "最后一条通道的铃线贴着地面交错拉紧。纸鸢的旧伤无法支撑连续跨越，他尝试从墙边绕行，鞋底却擦响了最外侧的铜铃。" },
          { label: "撤离", title: "一张没有终点的地图", body: "他在巡逻抵达前翻上废弃布景架，从高处离开。信筒没能取回，但那张画满镜像岔路的纸片，为下一次搜索保留了不会再错的入口。" }
        ],
        record: ["信筒未能回收", "绘制排练通道镜像地图", "确认箭头为诱导标记"],
        closing: "纸鸢把地图折成一只飞不起来的纸鸟：“路我记住了。只是这一次，腿没有跟上眼睛。”"
      }
    }
  },
  "I-7": {
    success: {
      kicker: "完整回收 · 账册抄录",
      title: "灯暗下来的十七秒",
      summary: "灰炭与墨针让机器和文字同时失去伪装，完整带回了镜棚假账。",
      chapters: [
        { label: "进入", title: "三条走廊只有一条会震", body: "灰炭把手掌贴在地面，从齿轮震动里找出真正通往账桌的方向。墨针背对原稿，只观察碎镜中的倒字，以免被层层反射扰乱。" },
        { label: "配合", title: "人为制造的故障", body: "探照灯转到第三圈时，灰炭用煤楔卡住一枚磨损齿轮。灯暗了十七秒。墨针没有抬头，笔尖追着镜中的行列，把最后一个编号压进纸页。" },
        { label: "归来", title: "错误咬合与正确账目", body: "齿轮重新咬合前，两人离开镜棚。灰炭手上多了一道烫伤，墨针的抄本却一字未缺；他们甚至把纸页重新按原样留在了桌上。" }
      ],
      record: ["完整抄录倒写假账", "确认笼车装卸编号", "现场未留下明显侵入痕迹"],
      closing: "墨针把抄本递给灰炭确认。一个不识字的人和一个总在读反字的人，相互点了点头。"
    },
    failures: {
      "L-4+L-5": {
        kicker: "限时撤离 · 抄录中断",
        title: "停住了灯，却读不懂纸",
        summary: "灰炭和小满成功控制探照灯，却无法在短暂窗口内辨认整册倒写账目。",
        chapters: [
          { label: "进入", title: "用手势计算时间", body: "灰炭找到齿轮停顿，小满则站在镜廊尽头，用默剧手势为他倒数。两人配合得近乎无声，顺利抵达账桌。" },
          { label: "受阻", title: "镜中的陌生文字", body: "账页全部倒写。灰炭不识字，小满只能逐笔临摹；她越想保证准确，十七秒就流逝得越快。灯重新亮起时，他们只抄完半行。" },
          { label: "撤离", title: "把同伴带出光圈", body: "小满在强光里短暂僵住。灰炭放弃继续卡死齿轮，拉着她躲进机器背面。两人空手离开，但没有让任何一个人留在镜棚。" }
        ],
        record: ["取得半行装卸编号", "账册主体未能抄录", "两名线人安全撤离"],
        closing: "灰炭说机器按他的想法停了下来。小满摇头，做了一个“不是你的错”的手势。"
      },
      "L-5+L-6": {
        kicker: "紧急撤离 · 原件焚毁",
        title: "最后一行消失在强光里",
        summary: "小满与墨针解决了无声协作和倒字，却没人能延长探照灯的机械停顿。",
        chapters: [
          { label: "进入", title: "镜子里的手势", body: "小满站在转角，用倒影向墨针传递巡逻位置。墨针不必回头便能读懂她的动作，两人很快找到账桌与真正的账页。" },
          { label: "失控", title: "提前转动的一圈", body: "老旧齿轮忽然跳齿，探照灯比记录中提前转回。强光让墨针右眼失焦，灯罩的热量同时点燃了摊开的纸边。" },
          { label: "撤离", title: "先拉住一只手", body: "墨针本可以多抢下一页，却看见小满在火光前僵住。他扔下抄笔，握住她的手，用她教过的节拍把人带出镜廊。账册烧毁，只剩袖口里一串编号。" }
        ],
        record: ["保留一组笼车编号", "原始账册被灯火焚毁", "两名线人安全撤离"],
        closing: "小满反复做着“对不起”。墨针把那串编号展开给她看：“纸没了，人还在。这不叫一无所获。”"
      }
    }
  },
  "I-10": {
    success: {
      kicker: "完整回收 · 名册封存",
      title: "掌声掩住绞盘的声音",
      summary: "白芷与旧弦穿过药雾和配重机关，将完整献祭名册带离主舞台。",
      chapters: [
        { label: "进入", title: "从冷风里选一条路", body: "白芷逐一靠近风口，从潮气中分出镇静剂近乎不可察觉的甜味。旧弦看着她的手势，封住危险风道，领她走向主绞盘下方。" },
        { label: "协作", title: "听不见的倒数", body: "旧弦用肩背稳住会自行回落的配重，白芷在暗仓中取出名册。两人听不见彼此，也不能喊话，只凭后台手势在掌声最响时完成交接。" },
        { label: "归来", title: "一页也没有落下", body: "幕布再次升起前，配重恢复原位。白芷把名册贴身封好，旧弦最后离开。他回望运转如常的舞台，第一次没有替它检查下一场演出。" }
      ],
      record: ["完整回收献祭名册", "取得持续用药的幕布样本", "未惊动台上演出"],
      closing: "白芷数过每一页，旧弦数过每一根绳。两种完全不同的确认方式，得出了同一个答案。"
    },
    failures: {
      "L-7+L-9": {
        kicker: "紧急撤离 · 名册沉落",
        title: "割断绳索的人",
        summary: "白芷找到了安全风道，但鸦无法稳定老旧配重，只能在机关闭合前选择救人。",
        chapters: [
          { label: "进入", title: "避开甜味", body: "白芷辨出没有药雾的风道，鸦则从高处口型判断巡逻换位。两人顺利抵达暗仓，名册就在半开的配重门后。" },
          { label: "失控", title: "配重开始回落", body: "鸦试图用绳结固定悬台，腐朽的主索却突然滑脱。门板迅速下沉，白芷仍在仓内；继续抓住名册，便来不及把她拉出来。" },
          { label: "撤离", title: "一刀之后", body: "鸦割断承载名册的副索，用回弹的力量拖出白芷。名册随配重沉回井底，只撕下一张夹在门缝中的名单。" }
        ],
        record: ["抢救一页人员名单", "完整名册沉入配重井", "两名线人安全撤离"],
        closing: "鸦盯着断绳看了很久：“我以前总说路线只值一个价。刚才那条，不一样。”"
      },
      "L-8+L-9": {
        kicker: "中止调查 · 药雾侵入",
        title: "在幕布落下以前醒来",
        summary: "旧弦稳住了配重，鸦也找到了路线，但两人没能及时辨认混入冷风的麻醉剂。",
        chapters: [
          { label: "进入", title: "一条熟悉的旧路", body: "旧弦凭记忆找到主绞盘，鸦从通风口观察巡逻。他们避开所有视线，在掌声中降下通往暗仓的悬台。" },
          { label: "异变", title: "越来越慢的手势", body: "无色药雾从侧风道灌入。旧弦先发现鸦的手势变慢，却无法判断气味来源；鸦对封闭空间的恐惧也在眩晕中迅速失控。" },
          { label: "撤离", title: "放开名册，拉紧安全绳", body: "旧弦锁住悬台，把安全绳扣在鸦身上。他放弃近在手边的名册，靠多年前背熟的步数把两人带回通风处。" }
        ],
        record: ["确认名册所在暗仓", "未能取回纸质证据", "药雾暴露后安全撤离"],
        closing: "恢复意识后，鸦发现旧弦始终攥着安全绳。老人听不清他的道谢，只确认了一遍：“人都出来了？”"
      }
    }
  }
};

const state = { dayIndex: 0, mainCompleted: new Set(), sideCompleted: new Set(), infoCompleted: new Set(), taskResults: new Map(), selectedInformants: new Set(), activeTask: null, archiveInformantId: null, offsetX: 0, scale: 1, dragging: false, dragStartX: 0, dragStartOffset: 0, moved: false, pendingAction: null, toastTimer: null };

const viewport = document.getElementById("viewport");
const world = document.getElementById("world");
const mapArt = document.getElementById("mapArt");
const chapterLabel = document.getElementById("chapterLabel");
const dayEyebrow = document.getElementById("dayEyebrow");
const nodeLayer = document.getElementById("nodeLayer");
const routeLayer = document.getElementById("routeLayer");
const playerToken = document.getElementById("playerToken");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const progressLabel = document.getElementById("progressLabel");
const informantCount = document.getElementById("informantCount");
const gateTitle = document.getElementById("gateTitle");
const gateText = document.getElementById("gateText");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalKicker = document.getElementById("modalKicker");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalNote = document.getElementById("modalNote");
const confirmButton = document.getElementById("confirmButton");
const rosterBackdrop = document.getElementById("rosterBackdrop");
const rosterList = document.getElementById("rosterList");
const rosterSummary = document.getElementById("rosterSummary");
const archiveFigure = document.getElementById("archiveFigure");
const archivePortrait = document.getElementById("archivePortrait");
const archiveCode = document.getElementById("archiveCode");
const archiveName = document.getElementById("archiveName");
const archiveStatus = document.getElementById("archiveStatus");
const archivePersonName = document.getElementById("archivePersonName");
const archiveMeta = document.getElementById("archiveMeta");
const archiveProgress = document.getElementById("archiveProgress");
const archiveTrait = document.getElementById("archiveTrait");
const archiveObservation = document.getElementById("archiveObservation");
const archiveCaution = document.getElementById("archiveCaution");
const archiveStageList = document.getElementById("archiveStageList");
const dispatchBackdrop = document.getElementById("dispatchBackdrop");
const dispatchModal = document.getElementById("dispatchModal");
const dispatchTitle = document.getElementById("dispatchTitle");
const dispatchSetup = document.getElementById("dispatchSetup");
const dispatchIndex = document.getElementById("dispatchIndex");
const dispatchImage = document.getElementById("dispatchImage");
const dispatchQuestion = document.getElementById("dispatchQuestion");
const dispatchRule = document.getElementById("dispatchRule");
const dispatchClues = document.getElementById("dispatchClues");
const dispatchOptions = document.getElementById("dispatchOptions");
const selectionHint = document.getElementById("selectionHint");
const dispatchResult = document.getElementById("dispatchResult");
const resultImage = document.getElementById("resultImage");
const resultKicker = document.getElementById("resultKicker");
const resultTitle = document.getElementById("resultTitle");
const resultSummary = document.getElementById("resultSummary");
const resultSeal = document.getElementById("resultSeal");
const resultTeam = document.getElementById("resultTeam");
const resultRecord = document.getElementById("resultRecord");
const resultStory = document.getElementById("resultStory");
const resultClosing = document.getElementById("resultClosing");
const outcomeImpact = document.getElementById("outcomeImpact");
const dispatchSubmit = document.getElementById("dispatchSubmit");
const dispatchCancel = document.getElementById("dispatchCancel");
const toast = document.getElementById("toast");
const dragHint = document.getElementById("dragHint");

const currentDay = () => days[state.dayIndex] || days.at(-1);
const dayMainNodes = (day = currentDay()) => day.mainIds.map(id => mainNodes.find(node => node.id === id));
const nextMainNode = (day = currentDay()) => dayMainNodes(day).find(node => !state.mainCompleted.has(node.id));
const lastCompletedMain = (day = currentDay()) => [...dayMainNodes(day)].reverse().find(node => state.mainCompleted.has(node.id));
const currentAnchor = () => lastCompletedMain() || currentDay().start;
const hasJoined = informant => state.mainCompleted.has(informant.joinAt);
const isContentCompleted = id => state.mainCompleted.has(id) || state.sideCompleted.has(id) || state.infoCompleted.has(id);
const isStageUnlocked = stage => isContentCompleted(stage.unlockAt);
const unlockedStageCount = informant => (archiveStages[informant.id] || []).filter(isStageUnlocked).length;
const currentInformants = () => informants.filter(informant => informant.day === currentDay().id && hasJoined(informant));
const activeSideNodes = () => sideNodes.filter(node => node.day === currentDay().id && state.mainCompleted.has(node.unlockAfter) && !state.sideCompleted.has(node.id));
const activeInfoNodes = () => infoNodes.filter(node => node.day === currentDay().id && state.mainCompleted.has(node.unlockAfter) && !state.infoCompleted.has(node.id));
const dayTasksComplete = (day = currentDay()) => day.sideIds.every(id => state.sideCompleted.has(id)) && day.infoIds.every(id => state.infoCompleted.has(id));
const gateBlocking = (day = currentDay()) => state.mainCompleted.has(day.gate.after) && !state.infoCompleted.has(day.gate.info);
const canRevealMain = (node, day = currentDay()) => Boolean(node) && !gateBlocking(day) && (node.id !== day.finalId || dayTasksComplete(day));

function getScale() { return Math.max(viewport.clientHeight / WORLD.height, 0.58); }
function clampOffset(value) { const min = Math.min(0, viewport.clientWidth - WORLD.width * state.scale); return Math.max(min, Math.min(0, value)); }
function applyWorldTransform(animate = false) { world.style.transition = animate ? "transform 1.25s cubic-bezier(.2,.72,.18,1)" : "none"; world.style.transform = `translate3d(${state.offsetX}px, 0, 0) scale(${state.scale})`; }
function cameraOffsetFor(x) { return clampOffset(viewport.clientWidth * CAMERA_ANCHOR_RATIO - x * state.scale); }
function focusPoint(x, animate = true) { state.offsetX = cameraOffsetFor(x); applyWorldTransform(animate); }
function routeMarkup(a, b, className) {
  if (!b.via) return `<line class="${className}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" />`;
  return `<path class="${className}" d="M ${a.x} ${a.y} Q ${b.via.x} ${b.via.y} ${b.x} ${b.y}" />`;
}

function renderRoutes(visibleMain, sides) {
  const anchor = currentAnchor();
  const lines = [];
  if (visibleMain) lines.push(routeMarkup(anchor, visibleMain, "route-main"));
  sides.forEach(side => lines.push(routeMarkup(anchor, side, "route-side")));
  routeLayer.innerHTML = lines.join("");
}

function makeNode(item, kind, status = "available") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `map-node ${kind}-node ${status}`;
  if (kind === "main" && item.type === "battle") button.classList.add("battle");
  if (kind === "main" && item.final) button.classList.add("day-final");
  if (kind === "info" && item.gameplay) button.classList.add("gameplay", "mandatory");
  button.style.left = `${item.x}px`;
  button.style.top = `${item.y}px`;
  button.dataset.name = item.name;
  const isCurrent = kind === "main" && status === "current";
  button.setAttribute("aria-label", isCurrent ? `当前位置 ${item.id} ${item.name}` : `查看 ${item.id} ${item.name}`);
  if (isCurrent) {
    button.disabled = true;
    button.setAttribute("aria-current", "step");
  }
  const core = document.createElement("span");
  core.className = "node-core";
  if (kind === "info") core.innerHTML = '<span class="node-glyph" aria-hidden="true"></span>';
  else core.textContent = item.id;
  button.appendChild(core);
  if (!isCurrent) button.addEventListener("click", event => { event.stopPropagation(); if (!state.moved) openNode(item, kind); });
  return button;
}

function renderNodes() {
  const day = currentDay();
  const next = nextMainNode(day);
  const visibleMain = canRevealMain(next, day) ? next : null;
  const currentMain = lastCompletedMain(day);
  const sides = activeSideNodes();
  const infos = activeInfoNodes();
  nodeLayer.innerHTML = "";
  if (currentMain) nodeLayer.appendChild(makeNode(currentMain, "main", "current"));
  if (visibleMain) nodeLayer.appendChild(makeNode(visibleMain, "main", "next"));
  sides.forEach(side => nodeLayer.appendChild(makeNode(side, "side")));
  infos.forEach(info => nodeLayer.appendChild(makeNode(info, "info")));
  renderRoutes(visibleMain, sides);
  renderHud();
  renderRoster();
}

function renderHud() {
  const day = currentDay();
  const completed = state.mainCompleted.size;
  const joinedCount = informants.filter(hasJoined).length;
  const activeCount = currentInformants().length;
  const dayTotal = informants.filter(informant => informant.day === day.id).length;
  dayEyebrow.textContent = `第${day.id}日 · ${day.name}`;
  progressLabel.textContent = `第${day.id}日调查 · 总进度`;
  progressText.textContent = `${completed} / ${mainNodes.length}`;
  progressBar.style.width = `${completed / mainNodes.length * 100}%`;
  informantCount.textContent = `${joinedCount} / ${informants.length}`;
  const next = nextMainNode(day);
  if (!next) { gateTitle.textContent = "三日调查完成"; gateText.textContent = "全部节点已处理，红幕已经落下。"; }
  else if (gateBlocking(day)) { gateTitle.textContent = "主线暂缓"; gateText.textContent = `必须先完成 ${day.gate.info} 线人调查，下一主线才会显现。`; }
  else if (next.id === day.finalId && !dayTasksComplete(day)) {
    const sideLeft = day.sideIds.filter(id => !state.sideCompleted.has(id)).length;
    const infoLeft = day.infoIds.filter(id => !state.infoCompleted.has(id)).length;
    gateTitle.textContent = "日终节点尚未显现";
    gateText.textContent = `清理本日剩余内容：支线 ${sideLeft}，信息流 ${infoLeft}。`;
  } else { gateTitle.textContent = `第${day.id}日调查中`; gateText.textContent = `本日已联络 ${activeCount} / ${dayTotal} 名线人；背景将随主线明显向前移动。`; }
}

function applyDayScene(animate = false) {
  const day = currentDay();
  mapArt.style.backgroundImage = `url("${day.background}")`;
  mapArt.setAttribute("aria-label", `第${day.id}日「${day.name}」抽象剧场背景`);
  chapterLabel.innerHTML = `<span>第${day.id}日</span>${day.name}<small>${day.subtitle}</small>`;
  world.dataset.day = String(day.id);
  if (animate) { world.classList.remove("day-shift"); void world.offsetWidth; world.classList.add("day-shift"); }
}

function getNodeText(item) { return item.text; }

function openNode(item, kind) {
  let kicker = kind === "main" ? (item.final ? `第${item.day}日 · 收束节点` : "主线调查") : kind === "side" ? "支线调查" : item.gameplay ? "必经信息流 · 线人派遣" : "信息流 · 街区记录";
  let action = () => advanceMain(item);
  let note = "抵达后，该节点会保留为局长当前位置；前往下一主线时才退场。";
  if (kind === "side") { action = () => visitSide(item); note = "支线完成后退场，不改变局长所在位置与当前镜头。"; }
  if (kind === "info" && !item.gameplay) { action = () => visitInfo(item); note = "信息归档后退场，不改变局长所在位置与当前镜头。"; }
  if (kind === "info" && item.gameplay) { action = () => beginDispatch(item); note = "该信息流是主线必经调查；派遣不移动局长，成败将生成不同的独立探索记录，但不改变后续主线走向。"; }
  modalKicker.textContent = kicker;
  modalTitle.textContent = `${item.id} · ${item.name}`;
  modalBody.textContent = getNodeText(item);
  modalNote.textContent = note;
  confirmButton.textContent = "前往";
  state.pendingAction = action;
  modalBackdrop.hidden = false;
  confirmButton.focus();
}

function closeModal() { modalBackdrop.hidden = true; state.pendingAction = null; }
function moveTokenTo(point, camera = true) { playerToken.classList.add("moving"); playerToken.style.transform = `translate(${point.x - 39}px, ${point.y - 90}px)`; if (camera) focusPoint(point.x, true); window.setTimeout(() => playerToken.classList.remove("moving"), 1300); }

function advanceMain(item) {
  const expected = nextMainNode();
  if (!expected || expected.id !== item.id || !canRevealMain(expected)) return closeModal();
  closeModal();
  moveTokenTo(item, true);
  window.setTimeout(() => {
    state.mainCompleted.add(item.id);
    const day = currentDay();
    if (item.id === day.finalId && state.dayIndex < days.length - 1) {
      const departed = informants.filter(informant => informant.day === day.id && hasJoined(informant)).map(informant => informant.name);
      state.dayIndex += 1;
      applyDayScene(true);
      state.offsetX = cameraOffsetFor(currentDay().start.x);
      applyWorldTransform(false);
      moveTokenTo(currentDay().start, false);
      renderNodes();
      showToast(`进入第${currentDay().id}日 · ${departed.join("、")}已离队，新线人网络重新建立`);
      return;
    }
    renderNodes();
    const newcomers = informants.filter(informant => informant.joinAt === item.id);
    if (newcomers.length) showToast(`主线 ${item.id} 完成 · 联络线人「${newcomers.map(person => person.name).join("、")}」`);
    else if (item.id === days.at(-1).finalId) showToast("三日调查完成：红幕落下");
    else if (gateBlocking()) showToast(`主线 ${item.id} 完成 · 必须先处理 ${currentDay().gate.info}`);
    else showToast(`主线 ${item.id} 完成，上一节点已退场`);
  }, 1050);
}

function visitSide(item) {
  closeModal();
  window.setTimeout(() => { state.sideCompleted.add(item.id); renderNodes(); showToast(`${item.id} 支线完成，节点已退场；局长位置不变`); }, 260);
}

function visitInfo(item) {
  closeModal();
  window.setTimeout(() => { state.infoCompleted.add(item.id); renderNodes(); showToast(`${item.id} 信息已归档，节点已退场；局长位置不变`); }, 260);
}

function beginDispatch(item) { closeModal(); window.setTimeout(() => openDispatch(item), 180); }

function renderRoster() {
  const day = currentDay();
  const joined = informants.filter(hasJoined);
  let selected = informants.find(informant => informant.id === state.archiveInformantId);
  if (!selected || !hasJoined(selected)) {
    selected = joined.at(-1) || null;
    state.archiveInformantId = selected?.id || null;
  }

  rosterList.innerHTML = "";
  informants.forEach(informant => {
    const available = hasJoined(informant);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `archive-roster-button${informant.id === selected?.id ? " selected" : ""}`;
    button.dataset.code = informant.id;
    button.disabled = !available;
    button.setAttribute("aria-label", available ? `查看${informant.name}的档案` : `身份未建立，完成主线${informant.joinAt}后解锁`);
    button.setAttribute("aria-pressed", String(informant.id === selected?.id));
    button.innerHTML = available
      ? `<img src="${informant.portrait}" alt="" />`
      : `<span aria-hidden="true">?</span>`;
    if (available) button.addEventListener("click", () => {
      state.archiveInformantId = informant.id;
      renderRoster();
    });
    rosterList.appendChild(button);
  });

  const totalUnlockedStages = informants.reduce((total, informant) => total + unlockedStageCount(informant), 0);
  const totalStages = Object.values(archiveStages).reduce((total, records) => total + records.length, 0);
  rosterSummary.textContent = `已建立身份 ${joined.length} / ${informants.length} · 阶段记录 ${totalUnlockedStages} / ${totalStages}；线人离队后，已取得的档案仍可查阅。`;
  if (!selected) {
    archiveFigure.classList.add("unknown");
    archiveFigure.style.removeProperty("--archive-art");
    archivePortrait.removeAttribute("src");
    archivePortrait.alt = "";
    archiveCode.textContent = "L-?";
    archiveName.textContent = "身份未建立";
    archiveStatus.textContent = "等待接触";
    archivePersonName.textContent = "暂无可查阅线人";
    archiveMeta.textContent = "完成主线 01 后建立第一份线人档案";
    archiveProgress.textContent = "0 / 4";
    archiveTrait.textContent = "特质未知";
    archiveObservation.textContent = "调查尚未取得足以建立身份的信息。";
    archiveCaution.textContent = "";
    archiveStageList.innerHTML = `<article class="archive-stage locked archive-empty-stage"><span class="stage-number">--</span><span class="stage-status">RECORD SEALED</span><h4>档案尚未建立</h4><p>推进主线后，接触到的线人会在此留下分阶段记录。</p></article>`;
    return;
  }

  const stages = archiveStages[selected.id] || [];
  const unlocked = stages.filter(isStageUnlocked).length;
  const activeNow = selected.day === day.id && hasJoined(selected);

  archiveFigure.classList.remove("unknown");
  archiveFigure.style.setProperty("--archive-art", `url("${selected.portrait}")`);
  archivePortrait.src = selected.portrait;
  archivePortrait.alt = `${selected.name}的半身立绘`;
  archiveCode.textContent = selected.id;
  archiveName.textContent = selected.name;
  archiveStatus.textContent = activeNow ? `第${selected.day}日 · 当前可联络` : `第${selected.day}日 · 已离队 / 档案留存`;
  archivePersonName.textContent = selected.name;
  archiveMeta.textContent = `${selected.age}岁 · 来自${selected.origin}`;
  archiveProgress.textContent = `${unlocked} / ${stages.length}`;
  archiveTrait.textContent = selected.trait;
  archiveObservation.textContent = selected.observation;
  archiveCaution.textContent = `行动局限：${selected.caution}`;
  archiveStageList.innerHTML = stages.map((stage, index) => {
    const stageUnlocked = isStageUnlocked(stage);
    return `<article class="archive-stage ${stageUnlocked ? "unlocked" : "locked"}">
      <span class="stage-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="stage-status">${stageUnlocked ? "RECORD UNLOCKED" : "RECORD SEALED"}</span>
      <h4>${stageUnlocked ? stage.title : "阶段信息待解锁"}</h4>
      <p>${stageUnlocked ? stage.content : `解锁条件：${stage.unlockLabel}`}</p>
    </article>`;
  }).join("");
}

function openRoster() { renderRoster(); rosterBackdrop.hidden = false; document.getElementById("rosterClose").focus(); }
function closeRoster() { rosterBackdrop.hidden = true; }

function renderDispatchOptions(readOnly = false) {
  const result = state.taskResults.get(state.activeTask.id);
  const selected = result ? new Set(result.selected) : state.selectedInformants;
  dispatchOptions.innerHTML = "";
  currentInformants().forEach(informant => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `dispatch-option${selected.has(informant.id) ? " selected" : ""}`;
    button.dataset.informantId = informant.id;
    button.disabled = readOnly;
    button.setAttribute("aria-pressed", String(selected.has(informant.id)));
    button.innerHTML = `<img class="option-portrait" src="${informant.portrait}" alt="" /><span class="option-copy"><span class="option-head"><strong>${informant.name}</strong><span class="option-check">✓</span></span><span class="option-origin">${informant.age}岁 · ${informant.origin}</span><span class="trait-pill">${informant.trait}</span><span class="option-observation">${informant.observation}</span><span class="option-caution">注意：${informant.caution}</span></span>`;
    button.addEventListener("click", () => toggleInformant(informant.id));
    dispatchOptions.appendChild(button);
  });
}

function toggleInformant(informantId) {
  const required = state.activeTask.task.requiredCount;
  if (state.selectedInformants.has(informantId)) state.selectedInformants.delete(informantId);
  else if (state.selectedInformants.size < required) state.selectedInformants.add(informantId);
  else { showToast(`本次只能选择 ${required} 名线人`); return; }
  renderDispatchOptions(false); updateSelectionHint();
}

function updateSelectionHint() { const required = state.activeTask.task.requiredCount; const count = state.selectedInformants.size; selectionHint.textContent = `已选择 ${count} / ${required} 人${count === required ? "，可以确认派遣" : ""}`; dispatchSubmit.disabled = count !== required; }

function outcomeFor(taskId, result) {
  const outcomeSet = dispatchOutcomes[taskId];
  if (result.success) return outcomeSet.success;
  const selectionKey = [...result.selected].sort().join("+");
  return outcomeSet.failures[selectionKey];
}

function showDispatchResult(result) {
  const outcome = outcomeFor(state.activeTask.id, result);
  const selectedPeople = result.selected.map(id => informants.find(person => person.id === id)).filter(Boolean);
  dispatchModal.classList.add("showing-outcome");
  dispatchModal.setAttribute("aria-labelledby", "resultTitle");
  dispatchSetup.hidden = true;
  dispatchResult.hidden = false;
  dispatchResult.classList.toggle("failure", !result.success);
  resultImage.src = state.activeTask.task.image;
  resultImage.alt = `${state.activeTask.name.replace("线人派遣·", "")}·${result.success ? "成功" : "失败"}结果场景`;
  resultKicker.textContent = `${state.activeTask.id} · ${outcome.kicker}`;
  resultTitle.textContent = outcome.title;
  resultSummary.textContent = outcome.summary;
  resultSeal.textContent = result.success ? "调查完成" : "撤离记录";
  resultTeam.innerHTML = selectedPeople.map(person => `<article class="outcome-person"><img src="${person.portrait}" alt="${person.name}" /><span><strong>${person.name}</strong><small>${person.trait}</small></span></article>`).join("");
  resultRecord.innerHTML = outcome.record.map(item => `<li>${item}</li>`).join("");
  resultStory.innerHTML = outcome.chapters.map((chapter, index) => `<article class="outcome-chapter"><span>${String(index + 1).padStart(2, "0")} · ${chapter.label}</span><h4>${chapter.title}</h4><p>${chapter.body}</p></article>`).join("");
  resultClosing.textContent = outcome.closing;
  outcomeImpact.textContent = "本次派遣结果不会改变后续主线走向；选择、代价与线人的临场表现将作为本次探索的独立经历留存。";
  dispatchSubmit.hidden = true;
  dispatchCancel.textContent = "结束记录 · 返回地图";
  window.setTimeout(() => resultTitle.focus(), 0);
}

function openDispatch(item) {
  state.activeTask = item;
  state.selectedInformants.clear();
  const result = state.taskResults.get(item.id);
  dispatchTitle.textContent = item.name.replace("线人派遣·", "");
  dispatchIndex.textContent = `委托 ${item.id}`;
  dispatchImage.src = item.task.image;
  dispatchImage.alt = `${dispatchTitle.textContent}现场影像`;
  dispatchQuestion.textContent = item.task.question;
  dispatchRule.textContent = item.task.rule;
  dispatchClues.innerHTML = item.task.clues.map(clue => `<li>${clue}</li>`).join("");
  dispatchModal.classList.remove("showing-outcome");
  dispatchModal.setAttribute("aria-labelledby", "dispatchTitle");
  dispatchSetup.hidden = false;
  dispatchResult.hidden = true;
  dispatchResult.classList.remove("failure");
  dispatchSubmit.hidden = false;
  dispatchSubmit.textContent = "确认派遣";
  dispatchCancel.textContent = "返回地图";
  renderDispatchOptions(Boolean(result));
  dispatchBackdrop.hidden = false;
  if (result) showDispatchResult(result);
  else { updateSelectionHint(); document.getElementById("dispatchClose").focus(); }
}

function closeDispatch() {
  dispatchBackdrop.hidden = true;
  dispatchModal.classList.remove("showing-outcome");
  state.activeTask = null;
  state.selectedInformants.clear();
}

function submitDispatch() {
  if (!state.activeTask || state.taskResults.has(state.activeTask.id)) return;
  const taskItem = state.activeTask;
  const task = taskItem.task;
  if (state.selectedInformants.size !== task.requiredCount) return;
  const selected = [...state.selectedInformants].sort();
  const solution = [...task.solution].sort();
  const success = selected.length === solution.length && selected.every((id, index) => id === solution[index]);
  const result = { success, selected };
  state.taskResults.set(taskItem.id, result);
  state.infoCompleted.add(taskItem.id);
  renderNodes();
  showDispatchResult(result);
  showToast(`${taskItem.id} ${success ? "调查完成" : "安全撤离"} · 独立探索记录已封存`);
}

function showToast(message) { window.clearTimeout(state.toastTimer); toast.textContent = message; toast.classList.add("show"); state.toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3600); }

function resetPrototype() {
  state.dayIndex = 0;
  state.mainCompleted.clear(); state.sideCompleted.clear(); state.infoCompleted.clear(); state.taskResults.clear(); state.selectedInformants.clear();
  state.archiveInformantId = null;
  closeModal(); closeRoster(); closeDispatch(); applyDayScene(false); renderNodes(); moveTokenTo(currentDay().start, true); showToast("三日调查、线人档案与派遣结果已重置");
}

function resize() { state.scale = getScale(); state.offsetX = cameraOffsetFor(currentAnchor().x); applyWorldTransform(false); }

function validateConfig() {
  infoNodes.filter(info => info.gameplay).forEach(info => {
    const available = informants.filter(person => person.day === info.day && Number(person.joinAt) <= Number(info.unlockAfter)).map(person => person.id);
    const availableSet = new Set(available);
    if (info.task.solution.length !== info.task.requiredCount || info.task.solution.some(id => !availableSet.has(id))) throw new Error(`${info.id} 的解题线人在玩法解锁时尚未加入本日调查`);
    const solutionKey = [...info.task.solution].sort().join("+");
    const possibleKeys = info.task.requiredCount === 1
      ? available
      : available.flatMap((first, index) => available.slice(index + 1).map(second => [first, second].sort().join("+")));
    const missingStories = possibleKeys.filter(key => key !== solutionKey && !dispatchOutcomes[info.id]?.failures[key]);
    if (!dispatchOutcomes[info.id]?.success || missingStories.length) throw new Error(`${info.id} 缺少派遣结果故事：${missingStories.join("、")}`);
  });
}

viewport.addEventListener("pointerdown", event => {
  if (event.button !== 0 || event.target.closest("button, .legend-card, .validation-note")) return;
  state.dragging = true; state.moved = false; state.dragStartX = event.clientX; state.dragStartOffset = state.offsetX; viewport.classList.add("dragging"); viewport.setPointerCapture(event.pointerId);
});
viewport.addEventListener("pointermove", event => {
  if (!state.dragging) return;
  const delta = event.clientX - state.dragStartX;
  if (Math.abs(delta) > 6) state.moved = true;
  state.offsetX = clampOffset(state.dragStartOffset + delta); applyWorldTransform(false); dragHint.classList.add("dismissed");
});
function endDrag(event) { if (!state.dragging) return; state.dragging = false; viewport.classList.remove("dragging"); if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId); window.setTimeout(() => { state.moved = false; }, 0); }
viewport.addEventListener("pointerup", endDrag);
viewport.addEventListener("pointercancel", endDrag);
document.getElementById("confirmButton").addEventListener("click", () => state.pendingAction?.());
document.getElementById("cancelButton").addEventListener("click", closeModal);
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("informantButton").addEventListener("click", openRoster);
document.getElementById("rosterClose").addEventListener("click", closeRoster);
document.getElementById("dispatchClose").addEventListener("click", closeDispatch);
document.getElementById("dispatchCancel").addEventListener("click", closeDispatch);
document.getElementById("focusButton").addEventListener("click", () => moveTokenTo(currentAnchor(), true));
document.getElementById("resetButton").addEventListener("click", resetPrototype);
document.getElementById("backButton").addEventListener("click", resetPrototype);
dispatchSubmit.addEventListener("click", submitDispatch);
modalBackdrop.addEventListener("click", event => { if (event.target === modalBackdrop) closeModal(); });
rosterBackdrop.addEventListener("click", event => { if (event.target === rosterBackdrop) closeRoster(); });
dispatchBackdrop.addEventListener("click", event => { if (event.target === dispatchBackdrop) closeDispatch(); });
window.addEventListener("keydown", event => { if (event.key !== "Escape") return; if (!dispatchBackdrop.hidden) closeDispatch(); else if (!rosterBackdrop.hidden) closeRoster(); else if (!modalBackdrop.hidden) closeModal(); });
window.addEventListener("resize", resize);

validateConfig();
applyDayScene(false);
renderNodes();
resize();
moveTokenTo(currentDay().start, false);
