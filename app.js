const WORLD = { width: 3840, height: 1280 };

const days = [
  { id: 1, name: "潮湿序幕", subtitle: "谣言从画布背后醒来", background: "assets/days/day-1-loop.webp", mainIds: ["01", "02", "03", "04"], sideIds: ["S-1"], infoIds: ["I-1", "I-2", "I-3"], finalId: "04", gate: { after: "02", info: "I-3" }, start: { x: 150, y: 735 } },
  { id: 2, name: "幕后迷宫", subtitle: "每一根绳索都牵着秘密", background: "assets/days/day-2-loop.webp", mainIds: ["05", "06", "07", "08"], sideIds: ["S-2"], infoIds: ["I-4", "I-5", "I-6", "I-7"], finalId: "08", gate: { after: "06", info: "I-7" }, start: { x: 150, y: 720 } },
  { id: 3, name: "红幕终场", subtitle: "笑声越响，真相越近", background: "assets/days/day-3-loop.webp", mainIds: ["09", "10", "11", "12", "13"], sideIds: ["S-3", "S-4"], infoIds: ["I-8", "I-9", "I-10"], finalId: "13", gate: { after: "11", info: "I-10" }, start: { x: 150, y: 735 } }
];

const mainNodes = [
  { id: "01", day: 1, name: "潮湿传闻", type: "story", x: 420, y: 720, text: "街区把墙面画成永不散场的舞台。局长循着狂厄反应进入布景般的窄巷，关于神奇马戏团的传言正从每一扇假窗后传来。" },
  { id: "02", day: 1, name: "失踪者名单", type: "story", x: 1100, y: 590, text: "名单上的人互不相识，却都收到过没有署名的门票。三个熟悉街区暗路的线人愿意协助调查。" },
  { id: "03", day: 1, name: "破棚下的笑声", type: "story", x: 2200, y: 720, text: "破棚里的居民用木箱搭起小舞台，笑声压过巡逻队的靴声。", branchFrom: "I-3", successBranch: "信筒中的暗号让局长提前转移了三户居民，治安局只搜到一座空棚。", failureBranch: "铃线惊动了巡逻，居民被迫连夜转移；有人留下半句暗号，调查只能从残缺处继续。" },
  { id: "04", day: 1, final: true, name: "第一夜散场", type: "story", x: 3300, y: 600, text: "当日线索全部归档，临时线人从不同巷口离开。局长追随一辆无灯篷车，进入马戏团的幕后区域。" },
  { id: "05", day: 2, name: "褪色的门票", type: "story", x: 420, y: 690, text: "第二日，街区像换景般改变。后台的旧票根写着每位团员曾经献出的东西，但其中几行被人故意倒印。" },
  { id: "06", day: 2, name: "献出之物", type: "story", x: 1100, y: 560, text: "绳索、镜面和配重构成新的街道。三名熟悉后台规则的线人先后回应了局长的联络。" },
  { id: "07", day: 2, name: "幕布之后", type: "story", x: 2200, y: 700, text: "台前的笑声穿过幕布，演员们却拒绝说出团长真正的名字。", branchFrom: "I-7", successBranch: "镜棚中的完整假账指出了下一批“自愿者”的去向，局长抢在笼车出发前抵达。", failureBranch: "探照灯烧毁了未抄完的账页，局长只能凭残留编号追踪一辆已经启动的笼车。" },
  { id: "08", day: 2, final: true, name: "第二夜换幕", type: "battle", x: 3300, y: 570, text: "当日支线与情报已经闭合。笼车突围后，所有后台线人切断联络；红幕后的主帐篷在第三日开启。" },
  { id: "09", day: 3, name: "笑声之下", type: "story", x: 380, y: 700, text: "第三日的街区不再伪装成现实：红幕、面具与聚光灯覆盖了一切，笑声像命令一样从高处落下。" },
  { id: "10", day: 3, name: "墙缝暗号", type: "story", x: 1000, y: 560, text: "地下反抗组织把路线藏进布景接缝。新的线人只在终场前现身一次，他们知道主舞台下方还有一层机关室。" },
  { id: "11", day: 3, name: "无声证词", type: "story", x: 1700, y: 690, text: "一段没有声音的证词指向舞台下的献祭名册。要靠近那里，必须同时应对药雾、配重与监听。" },
  { id: "12", day: 3, name: "团长的邀请", type: "story", x: 2500, y: 540, text: "团长邀请局长成为最后一位贵宾。红幕后的真相，正等待一个愿意笑着走进去的人。", branchFrom: "I-10", successBranch: "完整名册证明献祭仍在继续，也让台下几名团员在开演前选择倒戈。", failureBranch: "名册随配重沉回暗仓，只抢救出的几个名字不足以说服团员；终场仍将在满座中开始。" },
  { id: "13", day: 3, final: true, name: "盛大谢幕", type: "battle", x: 3370, y: 650, text: "三日获得的主线、支线与情报在红幕前汇合。所有可调查内容已完成，局长走向最后的谢幕。" }
];

const sideNodes = [
  { id: "S-1", day: 1, name: "缺席的杂耍演员", unlockAfter: "02", x: 1510, y: 965, text: "追查一名没有登台的演员。她的住处只留下一只剪断的鞋带和写给纸鸢的镜字便笺。" },
  { id: "S-2", day: 2, name: "墙后的传单", unlockAfter: "06", x: 1530, y: 970, text: "拆开一块活动布景板，找到地下反抗者传递假账页的暗格，并确认墨针的真实身份。" },
  { id: "S-3", day: 3, name: "没有署名的地图", unlockAfter: "10", x: 1320, y: 955, text: "沿屋脊标记还原治安局的包围路线，确认“鸦”究竟替谁望风。" },
  { id: "S-4", day: 3, name: "最后一场免费演出", unlockAfter: "12", x: 2780, y: 940, text: "居民在终场前搭起一座没有门票的小舞台。开怀大笑，是他们对痛苦最直接的反抗。" }
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

const infoNodes = [
  { id: "I-1", day: 1, name: "破损药签", unlockAfter: "01", x: 730, y: 370, text: "被雨水泡开的药签仍残留甜苦味。苔生认出它来自只向地下诊所供货的批次。" },
  { id: "I-2", day: 1, name: "失准的报时", unlockAfter: "02", x: 1240, y: 900, text: "街区所有钟都慢了四分钟，只有铃坚持按真正的时间报时；那正好对应巡逻换岗。" },
  { id: "I-3", day: 1, name: "线人派遣·听墙人", unlockAfter: "02", x: 1660, y: 350, gameplay: true, text: "废弃排练通道里布满铃线，反抗组织将信筒藏在一面空心墙后。完成调查后，主线03才会显现。", task: { requiredCount: 1, image: "assets/events/listening-wall.webp", question: "三条岔路都挂着会惊动巡逻的细铃。纸条只写着：“别信画出的箭头，幕布后回来的声音才是真的。”谁最可能独自找出藏信筒的空心墙？", rule: "从本日线人中选择 1 人。提交后无法重试，但无论结果如何都会推动故事。", clues: ["岔路没有照明，墙上的箭头被反复改画。", "轻敲砖面时，深处传回两种不同回声。", "铃线贴地相连，靠摸索乱走很容易触发警报。"], solution: ["L-2"], success: "铃没有追随假箭头。她从回声里辨出夹层，又按机械低鸣的间隙穿过铃线，带回完整信筒。", failure: "错误的岔路触动铃线，巡逻灯骤然亮起。行动组只能撤离，信筒落进治安局手中。", impactSuccess: "后续变化：居民提前转移，主线03将出现完整暗号。", impactFailure: "后续变化：街区遭到搜查，主线03将从残缺暗号继续。" } },
  { id: "I-4", day: 2, name: "失灵的齿轮", unlockAfter: "05", x: 720, y: 370, text: "探照灯的传动齿轮每转三圈就会卡住一次。灰炭摸过外壳，记下了它真正的停顿周期。" },
  { id: "I-5", day: 2, name: "后台手势表", unlockAfter: "06", x: 1280, y: 900, text: "一张默剧班的手势表被缝在幕布内侧。小满补全了其中代表撤退与静止的动作。" },
  { id: "I-6", day: 2, name: "倒印传单", unlockAfter: "07", x: 2440, y: 960, text: "传单并非印反，而是专门留给镜中阅读的人。字缝里夹着下一场巡演的装卸编号。" },
  { id: "I-7", day: 2, name: "线人派遣·镜棚假账", unlockAfter: "06", x: 1660, y: 340, gameplay: true, text: "旧镜棚里藏着被倒写的巡演账册，旋转探照灯仍按后台机械的节拍扫过地面。完成调查后，主线07才会显现。", task: { requiredCount: 2, image: "assets/events/mirror-ledger.webp", question: "镜中的走廊真假交叠，账页全部倒写；安全时间藏在探照灯齿轮的循环里。该让哪两名本日线人进去？", rule: "选择 2 人组成调查队。现场需要两种能力，也要避开人物局限。", clues: ["破镜把同一条路映成三个方向。", "账页不能带走，只能在灯下抄完。", "探照灯每转三圈停顿片刻，强光会反复扫过账桌。"], solution: ["L-4", "L-6"], success: "灰炭卡住齿轮的错误咬合，墨针只看镜像便抄完倒字。探照灯恢复前，两人带回了完整假账。", failure: "小队被镜中假路和强光拖慢，账页在撤离时被灯火烧毁，只留下几个模糊编号。", impactSuccess: "后续变化：主线07将明确指出下一辆笼车的去向。", impactFailure: "后续变化：主线07只能凭残留编号追踪已经启动的笼车。" } },
  { id: "I-8", day: 3, name: "无标签药瓶", unlockAfter: "09", x: 650, y: 360, text: "瓶中液体没有标签。白芷确认它受热后会形成几乎无色的麻醉雾。" },
  { id: "I-9", day: 3, name: "配重井旧图", unlockAfter: "10", x: 1210, y: 920, text: "旧图上的数字早已褪色，旧弦却能从绳结位置认出主舞台下方仍在运转的配重井。" },
  { id: "I-10", day: 3, name: "线人派遣·无声谢幕", unlockAfter: "11", x: 2070, y: 350, gameplay: true, text: "主舞台下方藏着献祭名册。药雾、老旧配重与头顶的演出，让喊话和迟疑都可能暴露行动。完成调查后，主线12才会显现。", task: { requiredCount: 2, image: "assets/events/silent-curtain.webp", question: "必须辨认混有麻醉剂的风道、稳住会自行回落的配重，并在台上演出时无声协作。哪两名本日线人能够彼此补足？", rule: "选择 2 人组成最终调查队。不要只看长处，也要确认局限不会被现场放大。", clues: ["几条风管都吹出冷风，只有一股带着近乎不可察觉的甜味。", "名册锁在悬台下，放手后配重会在数秒内复位。", "头顶正在演出，任何喊声都会传进舞台。"], solution: ["L-7", "L-8"], success: "白芷找到没有药雾的路线，旧弦稳住配重并用后台手势协调撤离。完整名册在掌声中被带走。", failure: "队伍在药雾、配重或无声协作的一环迟滞。机关复位前，他们只能放弃名册，抢救出几个名字。", impactSuccess: "后续变化：完整名册会动摇部分团员，主线12获得一批暗中援助者。", impactFailure: "后续变化：证据不足，主线12将在满场观众与沉默团员面前继续。" } }
];

const state = { dayIndex: 0, mainCompleted: new Set(), sideCompleted: new Set(), infoCompleted: new Set(), taskResults: new Map(), selectedInformants: new Set(), activeTask: null, offsetX: 0, scale: 1, dragging: false, dragStartX: 0, dragStartOffset: 0, moved: false, pendingAction: null, toastTimer: null };

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
const dispatchBackdrop = document.getElementById("dispatchBackdrop");
const dispatchTitle = document.getElementById("dispatchTitle");
const dispatchIndex = document.getElementById("dispatchIndex");
const dispatchImage = document.getElementById("dispatchImage");
const dispatchQuestion = document.getElementById("dispatchQuestion");
const dispatchRule = document.getElementById("dispatchRule");
const dispatchClues = document.getElementById("dispatchClues");
const dispatchOptions = document.getElementById("dispatchOptions");
const selectionHint = document.getElementById("selectionHint");
const dispatchResult = document.getElementById("dispatchResult");
const resultMark = document.getElementById("resultMark");
const resultTitle = document.getElementById("resultTitle");
const resultBody = document.getElementById("resultBody");
const outcomeImpact = document.getElementById("outcomeImpact");
const dispatchSubmit = document.getElementById("dispatchSubmit");
const toast = document.getElementById("toast");
const dragHint = document.getElementById("dragHint");

const currentDay = () => days[state.dayIndex] || days.at(-1);
const dayMainNodes = (day = currentDay()) => day.mainIds.map(id => mainNodes.find(node => node.id === id));
const nextMainNode = (day = currentDay()) => dayMainNodes(day).find(node => !state.mainCompleted.has(node.id));
const lastCompletedMain = (day = currentDay()) => [...dayMainNodes(day)].reverse().find(node => state.mainCompleted.has(node.id));
const currentAnchor = () => lastCompletedMain() || currentDay().start;
const hasJoined = informant => state.mainCompleted.has(informant.joinAt);
const isContentCompleted = id => state.mainCompleted.has(id) || state.sideCompleted.has(id) || state.infoCompleted.has(id);
const isArchiveUnlocked = informant => isContentCompleted(informant.archiveAt);
const currentInformants = () => informants.filter(informant => informant.day === currentDay().id && hasJoined(informant));
const activeSideNodes = () => sideNodes.filter(node => node.day === currentDay().id && state.mainCompleted.has(node.unlockAfter) && !state.sideCompleted.has(node.id));
const activeInfoNodes = () => infoNodes.filter(node => node.day === currentDay().id && state.mainCompleted.has(node.unlockAfter) && !state.infoCompleted.has(node.id));
const dayTasksComplete = (day = currentDay()) => day.sideIds.every(id => state.sideCompleted.has(id)) && day.infoIds.every(id => state.infoCompleted.has(id));
const gateBlocking = (day = currentDay()) => state.mainCompleted.has(day.gate.after) && !state.infoCompleted.has(day.gate.info);
const canRevealMain = (node, day = currentDay()) => Boolean(node) && !gateBlocking(day) && (node.id !== day.finalId || dayTasksComplete(day));

function getScale() { return Math.max(viewport.clientHeight / WORLD.height, 0.58); }
function clampOffset(value) { const min = Math.min(0, viewport.clientWidth - WORLD.width * state.scale); return Math.max(min, Math.min(0, value)); }
function applyWorldTransform(animate = false) { world.style.transition = animate ? "transform 1.25s cubic-bezier(.2,.72,.18,1)" : "none"; world.style.transform = `translate3d(${state.offsetX}px, 0, 0) scale(${state.scale})`; }
function cameraOffsetFor(x) { return clampOffset(viewport.clientWidth * 0.44 - x * state.scale); }
function focusPoint(x, animate = true) { state.offsetX = cameraOffsetFor(x); applyWorldTransform(animate); }
function lineMarkup(a, b, className) { return `<line class="${className}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" />`; }

function renderRoutes(visibleMain, sides) {
  const anchor = currentAnchor();
  const lines = [];
  if (visibleMain) lines.push(lineMarkup(anchor, visibleMain, "route-main"));
  sides.forEach(side => lines.push(lineMarkup(anchor, side, "route-side")));
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
  button.setAttribute("aria-label", `查看 ${item.id} ${item.name}`);
  const core = document.createElement("span");
  core.className = "node-core";
  if (kind === "info") core.innerHTML = '<span class="node-glyph" aria-hidden="true"></span>';
  else core.textContent = item.id;
  button.appendChild(core);
  button.addEventListener("click", event => { event.stopPropagation(); if (!state.moved) openNode(item, kind); });
  return button;
}

function renderNodes() {
  const day = currentDay();
  const next = nextMainNode(day);
  const visibleMain = canRevealMain(next, day) ? next : null;
  const sides = activeSideNodes();
  const infos = activeInfoNodes();
  nodeLayer.innerHTML = "";
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
  const archiveCount = informants.filter(isArchiveUnlocked).length;
  const activeCount = currentInformants().length;
  const dayTotal = informants.filter(informant => informant.day === day.id).length;
  dayEyebrow.textContent = `第${day.id}日 · ${day.name}`;
  progressLabel.textContent = `第${day.id}日调查 · 总进度`;
  progressText.textContent = `${completed} / ${mainNodes.length}`;
  progressBar.style.width = `${completed / mainNodes.length * 100}%`;
  informantCount.textContent = `${archiveCount} / ${informants.length}`;
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

function getNodeText(item) {
  if (!item.branchFrom) return item.text;
  const result = state.taskResults.get(item.branchFrom);
  return result ? `${item.text}\n\n${result.success ? item.successBranch : item.failureBranch}` : item.text;
}

function openNode(item, kind) {
  let kicker = kind === "main" ? (item.final ? `第${item.day}日 · 收束节点` : "主线调查") : kind === "side" ? "支线调查" : item.gameplay ? "必经信息流 · 线人派遣" : "信息流 · 街区记录";
  let action = () => advanceMain(item);
  let note = "点击“前往”后处理该节点；完成内容会从地图上退场。";
  if (kind === "side") action = () => visitSide(item);
  if (kind === "info" && !item.gameplay) action = () => visitInfo(item);
  if (kind === "info" && item.gameplay) { action = () => beginDispatch(item); note = "该信息流是主线必经调查。派遣结果只改变后续剧情表现，不再产生好感度。"; }
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
  closeModal(); moveTokenTo(item, true);
  window.setTimeout(() => { state.sideCompleted.add(item.id); renderNodes(); showToast(`${item.id} 支线完成，节点已退场`); window.setTimeout(() => moveTokenTo(currentAnchor(), true), 450); }, 850);
}

function visitInfo(item) {
  closeModal(); moveTokenTo(item, true);
  window.setTimeout(() => { state.infoCompleted.add(item.id); renderNodes(); showToast(`${item.id} 信息已归档，节点已退场`); window.setTimeout(() => moveTokenTo(currentAnchor(), true), 420); }, 700);
}

function beginDispatch(item) { closeModal(); moveTokenTo(item, true); window.setTimeout(() => openDispatch(item), 650); }

function renderRoster() {
  const day = currentDay();
  const active = currentInformants();
  const dayTotal = informants.filter(informant => informant.day === day.id).length;
  const archiveCount = informants.filter(isArchiveUnlocked).length;
  rosterSummary.textContent = `第${day.id}日可联络 ${active.length} / ${dayTotal} 人；已解锁档案 ${archiveCount} / ${informants.length}。进入下一日后，前一日线人离队，但已解锁档案永久保留。`;
  rosterList.innerHTML = informants.map(informant => {
    const joined = hasJoined(informant);
    if (!joined) return `<article class="informant-card locked"><div class="informant-avatar unknown">?</div><div class="locked-copy"><strong>身份未建立</strong><br>完成主线 ${informant.joinAt} 后建立联系</div></article>`;
    const archiveUnlocked = isArchiveUnlocked(informant);
    const activeNow = informant.day === day.id;
    return `<article class="informant-card${activeNow ? " active" : " departed"}"><img class="informant-avatar" src="${informant.portrait}" alt="${informant.name}的线人画像" /><div class="informant-info"><div class="informant-title"><h3>${informant.name} <small>${informant.id}</small></h3><span>${activeNow ? "本日可联络" : "已离队"}</span></div><p class="informant-meta"><span>${informant.age}岁</span><span>${informant.origin}</span></p><span class="trait-pill">${informant.trait}</span><p class="informant-observation">${informant.observation}</p><p class="informant-caution">注意：${informant.caution}</p><p class="archive-state ${archiveUnlocked ? "unlocked" : ""}">${archiveUnlocked ? `档案已解锁：${informant.profile}` : `完成 ${informant.archiveAt} 后解锁完整档案`}</p></div></article>`;
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

function showDispatchResult(result) {
  const task = state.activeTask.task;
  dispatchResult.hidden = false;
  dispatchResult.classList.toggle("failure", !result.success);
  resultMark.textContent = result.success ? "✓" : "×";
  resultTitle.textContent = result.success ? "情报取得" : "调查受挫";
  resultBody.textContent = result.success ? task.success : task.failure;
  outcomeImpact.textContent = result.success ? task.impactSuccess : task.impactFailure;
  selectionHint.textContent = "本次调查结果已经写入后续剧情，无法重新派遣。";
  dispatchSubmit.textContent = "已记录";
  dispatchSubmit.disabled = true;
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
  dispatchResult.hidden = true;
  dispatchResult.classList.remove("failure");
  dispatchSubmit.textContent = "确认派遣";
  renderDispatchOptions(Boolean(result));
  if (result) showDispatchResult(result); else updateSelectionHint();
  dispatchBackdrop.hidden = false;
  document.getElementById("dispatchClose").focus();
}

function closeDispatch() {
  const completedTask = state.activeTask && state.taskResults.has(state.activeTask.id);
  dispatchBackdrop.hidden = true;
  state.activeTask = null;
  state.selectedInformants.clear();
  if (completedTask) window.setTimeout(() => moveTokenTo(currentAnchor(), true), 180);
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
  renderDispatchOptions(true);
  showDispatchResult(result);
  showToast(`${taskItem.id} ${success ? "取得关键情报" : "调查受挫"} · 后续剧情已改变`);
}

function showToast(message) { window.clearTimeout(state.toastTimer); toast.textContent = message; toast.classList.add("show"); state.toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3600); }

function resetPrototype() {
  state.dayIndex = 0;
  state.mainCompleted.clear(); state.sideCompleted.clear(); state.infoCompleted.clear(); state.taskResults.clear(); state.selectedInformants.clear();
  closeModal(); closeRoster(); closeDispatch(); applyDayScene(false); renderNodes(); moveTokenTo(currentDay().start, true); showToast("三日调查、线人档案与派遣结果已重置");
}

function resize() { state.scale = getScale(); state.offsetX = cameraOffsetFor(currentAnchor().x); applyWorldTransform(false); }

function validateConfig() {
  infoNodes.filter(info => info.gameplay).forEach(info => {
    const available = new Set(informants.filter(person => person.day === info.day && Number(person.joinAt) <= Number(info.unlockAfter)).map(person => person.id));
    if (info.task.solution.length !== info.task.requiredCount || info.task.solution.some(id => !available.has(id))) throw new Error(`${info.id} 的解题线人在玩法解锁时尚未加入本日调查`);
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
