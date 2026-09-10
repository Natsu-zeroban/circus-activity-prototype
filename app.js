const WORLD = { width: 3840, height: 1280 };
const ARCHIVE_AFFINITY = 30;

const mainNodes = [
  { id: "01", name: "潮湿传闻", type: "story", x: 360, y: 760, text: "潮水退去的旧街里，关于一座神奇马戏团的传言正沿着棚屋之间扩散。局长循着狂厄反应进入街区。" },
  { id: "02", name: "失踪者名单", type: "story", x: 620, y: 665, text: "失踪者来自不同角落，却都曾在巡演开始前收到一张没有署名的门票。替地下诊所跑腿的苔生认出了名单上的药味。" },
  { id: "03", name: "破棚下的笑声", type: "story", x: 885, y: 755, text: "钟表铺后巷的铃循着脚步声找来。她和躲在破棚下的孩子们知道后台的小路，也知道哪些问题不能被治安局听见。" },
  { id: "04", name: "街口封锁", type: "battle", x: 1140, y: 640, text: "治安局突然封锁街口。突破拦截，避免无辜居民被卷入冲突。", note: "战斗内容不在本轮设计范围内，此处仅验证战斗节点在主轴线中的位置与衔接。" },
  { id: "05", name: "褪色的门票", type: "story", x: 1400, y: 725, text: "旧剧院屋顶的纸鸢认出，破旧票根背面的文字必须从倒影中阅读；每个名字旁都写着一件被献出的东西。" },
  { id: "06", name: "献出之物", type: "story", x: 1670, y: 600, text: "有人献出一只眼，有人献出健康的双腿，换来令观众惊叹的狂厄能力，也换来一处容身之地。" },
  { id: "07", name: "幕布之后", type: "story", x: 1950, y: 695, text: "台前笑声震耳欲聋，后台却没有演员愿意说出团长真正的名字。锅炉站的灰炭愿意带路，只要求别把孩子们留给治安局。" },
  { id: "08", name: "笼车突围", type: "battle", x: 2230, y: 575, text: "运送团员的笼车突然失控，狂厄污染沿街扩散。保护孩子，并阻止混乱蔓延。", note: "战斗内容为占位；形式验证只关注地图推进、进入前说明及完成后的下一节点显现。" },
  { id: "09", name: "笑声之下", type: "story", x: 2510, y: 680, text: "笑声越热烈，街区的伤口越清晰。流动默剧班留下的小满用后台手势告诉局长：马戏团给予舞台，也在悄悄收取另一种代价。" },
  { id: "10", name: "墙缝暗号", type: "story", x: 2795, y: 555, text: "墙缝里的暗号属于一个被治安局追捕的地下反抗组织。支线中的零散信息开始拼成另一幅图景。" },
  { id: "11", name: "孩子的证词", type: "story", x: 3090, y: 650, text: "被帮助的孤儿带回主帐篷后的秘密：所谓献祭从未真正结束，而团员也未必都是受害者。" },
  { id: "12", name: "团长的邀请", type: "story", x: 3385, y: 535, text: "团长邀请局长成为最后一位贵宾。红幕后的真相，正等待一个愿意笑着走进去的人。" },
  { id: "13", name: "盛大谢幕", type: "battle", x: 3660, y: 625, text: "红幕升起。主线、支线和街区里搜集的线索在这场谢幕中汇合。", note: "最终战与BOSS挑战规则暂不展开，本节点仅作为全流程终点占位。" }
];

const sideNodes = [
  { id: "S-1", name: "缺席的杂耍演员", parent: 2, x: 850, y: 985, text: "寻找没有登台的演员，确认她是逃离、失踪，还是被迫献出了最后一件东西。" },
  { id: "S-2", name: "墙后的传单", parent: 4, x: 1470, y: 975, text: "沿着墙后传单留下的暗号，接触正在躲避治安局追捕的地下反抗者。" },
  { id: "S-3", name: "没有名字的孩子", parent: 8, x: 2580, y: 930, text: "帮助一名拒绝说出姓名的孤儿完成委托，让他愿意相信局长并留下个人档案。" },
  { id: "S-4", name: "最后一场免费演出", parent: 10, x: 3190, y: 930, text: "居民偷偷筹备一场不收门票的演出。开怀大笑，是他们对痛苦最直接的反抗。" }
];

const orphans = [
  {
    id: "O-1", name: "苔生", unlockAt: 2, age: 11, origin: "洗衣巷锅炉房", portrait: "assets/orphans/taisheng.webp",
    trait: "辨味识药", observation: "能从煤烟和染料里分出极淡的药味。", caution: "浓烈香水会让他眩晕。",
    profile: "曾替地下诊所清洗绷带，因此记得常见药剂的气味；他说自己不是勇敢，只是不愿再看见有人被悄悄带走。"
  },
  {
    id: "O-2", name: "铃", unlockAt: 3, age: 12, origin: "钟表铺后巷", portrait: "assets/orphans/ling.webp",
    trait: "听声记路", observation: "能用回声判断墙后空腔，并记住机械运转的节拍。", caution: "突如其来的尖响会打乱她的判断。",
    profile: "曾靠替店铺报时换取食物。她不爱说话，却会把每个同伴的脚步声牢牢记住。"
  },
  {
    id: "O-3", name: "纸鸢", unlockAt: 5, age: 13, origin: "旧剧院屋顶", portrait: "assets/orphans/zhiyuan.webp",
    trait: "镜写速记", observation: "习惯从倒影里读字，也能快速临摹复杂符号。", caution: "左膝有旧伤，不适合跳跃或负重。",
    profile: "在被拆掉的剧院里学会倒着看台词，以免巡查者发现。他相信写下来的东西，总有一天会替沉默的人作证。"
  },
  {
    id: "O-4", name: "灰炭", unlockAt: 7, age: 14, origin: "北街锅炉站", portrait: "assets/orphans/huitan.webp",
    trait: "机械直觉", observation: "熟悉滑轮、绞盘和配重，能凭震动判断故障。", caution: "不识字，无法独立辨认文书。",
    profile: "从小替锅炉工搬煤，手掌总有洗不净的黑。他把复杂机器看作不会撒谎的伙伴。"
  },
  {
    id: "O-5", name: "小满", unlockAt: 9, age: 10, origin: "流动默剧班", portrait: "assets/orphans/xiaoman.webp",
    trait: "无声戏语", observation: "熟悉后台手势，能隔着很远准确传递行动指令。", caution: "怕火，见到明火容易僵住。",
    profile: "默剧班解散后仍保留着整套手势。她觉得不用开口也能被理解，是一件很了不起的事。"
  }
];

const infoNodes = [
  { id: "I-1", name: "破损海报", unlock: 0, x: 470, y: 470, text: "海报上的演员脸孔被反复涂改，只留下团长夸张的笑容。" },
  { id: "I-2", name: "被涂抹的告示", unlock: 1, x: 745, y: 930, text: "治安局公告中的失踪人数被人用红笔改得更多。" },
  {
    id: "I-3", name: "孤儿派遣·听墙人", unlock: 4, x: 1325, y: 420, gameplay: true,
    text: "废弃排练通道里布满铃线，反抗组织将信筒藏在一面空心墙后。现场留下的迹象也许比委托人的话更可靠。",
    task: {
      requiredCount: 1,
      image: "assets/events/listening-wall.webp",
      question: "三条岔路都挂着会惊动巡逻的细铃。纸条只写着：“别信画出的箭头，幕布后回来的声音才是真的。”谁最可能独自找出藏信筒的空心墙？",
      rule: "从当前已结识的孩子中选择 1 人。委托提交后无法重试。",
      clues: ["岔路口没有照明，墙上的箭头被人反复改画。", "轻敲砖面时，最深处传回了两次不同的回声。", "铃线贴地相连，靠摸索乱走很容易触发警报。"],
      solution: ["O-2"],
      success: "铃没有追随墙上的假箭头。她贴着入口逐段轻叩砖面，从回声里辨出夹层，又按机械低鸣的间隙穿过铃线，带回了信筒。",
      failure: "孩子循着错误的岔路走得太深，鞋尖碰响了第一根铃线。巡逻灯亮起前，行动组只能放弃信筒撤离。"
    }
  },
  { id: "I-4", name: "巡逻表", unlock: 3, x: 1280, y: 920, text: "巡逻路线刻意绕开了马戏团后台，像是在保护那里，也像是在害怕那里。" },
  { id: "I-5", name: "空药瓶", unlock: 4, x: 1550, y: 405, text: "止痛药的标签被撕掉，瓶底残留着异常的狂厄结晶。" },
  { id: "I-6", name: "团员合照", unlock: 5, x: 1850, y: 920, text: "旧照片里的人比现在更多。背后写着：愿我们的笑声比生活更响。" },
  {
    id: "I-7", name: "孤儿派遣·镜棚假账", unlock: 7, x: 2160, y: 365, gameplay: true,
    text: "旧镜棚里藏着一份被倒写的巡演账册，旋转探照灯仍按后台机械的节拍扫过地面。",
    task: {
      requiredCount: 2,
      image: "assets/events/mirror-ledger.webp",
      question: "镜中的走廊真假交叠，账页也全部倒写；唯一的安全时间藏在探照灯齿轮的循环声里。该让哪两个人一起进去？",
      rule: "选择 2 人组成小队。留意现场中的两项工作，以及每个人的局限。",
      clues: ["破镜会把同一条路映成三个方向，肉眼很难辨认出口。", "账页不能带走，只能在灯光下一次抄完。", "探照灯每转三圈会停顿片刻，但视线无法同时盯住齿轮和账页。"],
      solution: ["O-2", "O-3"],
      success: "铃闭眼记住齿轮的停顿，以敲击提醒同伴；纸鸢只看镜中倒影便抄完账页。灯束再次扫来前，两人已经沿原节拍退回。",
      failure: "小队被镜中假路拖慢，探照灯在账页抄完前重新亮起。为了不暴露孩子们的藏身处，他们只能空手撤离。"
    }
  },
  { id: "I-8", name: "没寄出的信", unlock: 8, x: 2420, y: 970, text: "信中没有控诉，只有一个团员对家人反复练习的告别。" },
  { id: "I-9", name: "观众席座签", unlock: 9, x: 2880, y: 365, text: "最靠近舞台的座位从不出售，它们被留给那些决定献出东西的人。" },
  {
    id: "I-10", name: "孤儿派遣·无声谢幕", unlock: 10, x: 3320, y: 850, gameplay: true,
    text: "主舞台下方的机关室藏着献祭名册。毒雾、老旧配重与头顶的演出，让任何喊话都可能暴露行动。",
    task: {
      requiredCount: 3,
      image: "assets/events/silent-curtain.webp",
      question: "机关室必须同时完成三件事：找出没有麻醉剂的通风道、稳住会自行回落的配重、在舞台脚步声中无声协调撤离。请选择最合适的三人。",
      rule: "选择 3 人组成最终调查队。信息散落在现场记录与个人档案中。",
      clues: ["几条风管都吹出冷风，只有一股带着几乎闻不出的甜味。", "名册锁在悬台下，放手后配重会在数秒内复位。", "头顶正在演出；任何喊声都可能让团员察觉机关室有人。"],
      solution: ["O-1", "O-4", "O-5"],
      success: "苔生找出了混入麻醉剂的风管，灰炭卡住配重，小满用后台手势让三人的动作与台上鼓点重合。名册在谢幕掌声中被悄悄带走。",
      failure: "队伍在毒雾、配重与无声协作中的一环出现迟滞。机关复位前，他们只能留下名册，带着零散线索撤回安全处。"
    }
  }
];

const state = {
  progress: 0,
  sideCompleted: new Set(),
  infoRead: new Set(),
  taskResults: new Map(),
  affinity: Object.fromEntries(orphans.map(orphan => [orphan.id, 0])),
  selectedOrphans: new Set(),
  activeTask: null,
  offsetX: 0,
  scale: 1,
  dragging: false,
  dragStartX: 0,
  dragStartOffset: 0,
  moved: false,
  pendingAction: null,
  toastTimer: null
};

const viewport = document.getElementById("viewport");
const world = document.getElementById("world");
const nodeLayer = document.getElementById("nodeLayer");
const routeLayer = document.getElementById("routeLayer");
const playerToken = document.getElementById("playerToken");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const orphanCount = document.getElementById("orphanCount");
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
const affinityGain = document.getElementById("affinityGain");
const dispatchSubmit = document.getElementById("dispatchSubmit");
const toast = document.getElementById("toast");
const dragHint = document.getElementById("dragHint");

function getScale() {
  return Math.max(viewport.clientHeight / WORLD.height, 0.58);
}

function clampOffset(value) {
  const min = Math.min(0, viewport.clientWidth - WORLD.width * state.scale);
  return Math.max(min, Math.min(0, value));
}

function applyWorldTransform(animate = false) {
  world.style.transition = animate ? "transform 1.25s cubic-bezier(.2,.72,.18,1)" : "none";
  world.style.transform = `translate3d(${state.offsetX}px, 0, 0) scale(${state.scale})`;
}

function cameraOffsetFor(x) {
  return clampOffset(viewport.clientWidth * 0.46 - x * state.scale);
}

function focusPoint(x, animate = true) {
  state.offsetX = cameraOffsetFor(x);
  applyWorldTransform(animate);
}

function currentAnchor() {
  return state.progress === 0 ? { x: 145, y: 760 } : mainNodes[state.progress - 1];
}

function getUnlockedOrphans() {
  return orphans.filter(orphan => state.progress >= orphan.unlockAt);
}

function lineMarkup(a, b, className) {
  return `<line class="${className}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" />`;
}

function renderRoutes() {
  const lines = [];
  for (let i = 0; i < state.progress; i += 1) {
    const from = i === 0 ? { x: 145, y: 760 } : mainNodes[i - 1];
    lines.push(lineMarkup(from, mainNodes[i], "route-main"));
  }
  sideNodes.forEach(side => {
    if (state.progress > side.parent) lines.push(lineMarkup(mainNodes[side.parent], side, "route-side"));
  });
  routeLayer.innerHTML = lines.join("");
}

function completionFor(item, kind) {
  if (kind === "side") return state.sideCompleted.has(item.id) ? { done: true, failed: false } : { done: false };
  if (kind === "info") {
    const taskResult = state.taskResults.get(item.id);
    if (taskResult) return { done: true, failed: !taskResult.success };
    return state.infoRead.has(item.id) ? { done: true, failed: false } : { done: false };
  }
  return { done: false };
}

function makeNode(item, kind, status) {
  const completion = completionFor(item, kind);
  const button = document.createElement("button");
  button.type = "button";
  button.className = `map-node ${kind}-node ${status || ""}`;
  if (kind === "main" && item.type === "battle") button.classList.add("battle");
  if (kind === "info" && item.gameplay) button.classList.add("gameplay");
  if (kind === "info" && completion.done) button.classList.add("read");
  if (completion.failed) button.classList.add("failed");
  button.style.left = `${item.x}px`;
  button.style.top = `${item.y}px`;
  button.dataset.name = item.name;
  button.setAttribute("aria-label", `${item.id} ${item.name}${completion.done ? "，已完成" : ""}`);

  const core = document.createElement("span");
  core.className = "node-core";
  if (kind === "main" && status === "completed") {
    core.innerHTML = '<span class="check-mark" aria-hidden="true"></span>';
  } else if (kind === "info") {
    core.innerHTML = '<span class="node-glyph" aria-hidden="true"></span>';
  } else {
    core.textContent = item.id;
  }
  button.appendChild(core);

  if (completion.done) {
    const badge = document.createElement("span");
    badge.className = `completion-badge${completion.failed ? " failed" : ""}`;
    badge.textContent = "✓";
    badge.setAttribute("aria-hidden", "true");
    button.appendChild(badge);
  }

  button.addEventListener("click", event => {
    event.stopPropagation();
    if (!state.moved) openNode(item, kind, status);
  });
  return button;
}

function renderNodes() {
  nodeLayer.innerHTML = "";
  mainNodes.forEach((node, index) => {
    if (index > state.progress) return;
    nodeLayer.appendChild(makeNode(node, "main", index < state.progress ? "completed" : "next"));
  });
  sideNodes.forEach(side => {
    if (state.progress <= side.parent) return;
    nodeLayer.appendChild(makeNode(side, "side", state.sideCompleted.has(side.id) ? "completed" : "available"));
  });
  infoNodes.forEach(info => {
    if (state.progress <= info.unlock) return;
    nodeLayer.appendChild(makeNode(info, "info", "available"));
  });
  renderRoutes();
  progressText.textContent = `${state.progress} / ${mainNodes.length}`;
  progressBar.style.width = `${state.progress / mainNodes.length * 100}%`;
  orphanCount.textContent = `${getUnlockedOrphans().length} / ${orphans.length}`;
  renderRoster();
}

function openNode(item, kind, status) {
  let kicker = "主线调查";
  let actionLabel = "前往调查";
  let action = () => advanceMain(item);
  let note = item.note || "点击确认后进入节点；本原型以位移与状态变化代替实际剧情或战斗内容。";

  if (kind === "main" && status === "completed") {
    kicker = item.type === "battle" ? "已完成 · 战斗节点" : "已完成 · 主线回看";
    actionLabel = "回看记录";
    action = closeModal;
    note = "走过的主线节点持续保留，玩家拖回旧区域后可再次点击回看。";
  } else if (kind === "main" && item.type === "battle") {
    kicker = "主线 · 战斗占位";
    actionLabel = "进入战斗";
  } else if (kind === "side") {
    const completed = state.sideCompleted.has(item.id);
    kicker = completed ? "已完成 · 支线回看" : "可选支线";
    actionLabel = completed ? "回看记录" : "进入支线";
    action = completed ? closeModal : () => visitSide(item);
    note = "支线由配置挂接主线节点；完成后节点旁保留完成标记，不阻塞主轴线推进。";
  } else if (kind === "info") {
    if (item.gameplay) {
      const result = state.taskResults.get(item.id);
      kicker = result ? `已完成 · 派遣${result.success ? "成功" : "失败"}` : "信息流 · 孤儿派遣";
      actionLabel = result ? "查看派遣结果" : "选择派遣人员";
      action = () => openDispatch(item);
      note = result
        ? "本玩法仅可挑战1次；结果与好感度变化已经记录。"
        : "题目只使用当前主线阶段已经结识的孤儿能力，不会要求未来才能获得的角色。";
    } else {
      kicker = state.infoRead.has(item.id) ? "已读取 · 街区记录" : "信息流 · 街区记录";
      actionLabel = state.infoRead.has(item.id) ? "再次阅读" : "读取记录";
      action = () => readInfo(item);
      note = "纯信息流读取后即完成，并在节点旁显示完成标记。";
    }
  }

  modalKicker.textContent = kicker;
  modalTitle.textContent = `${item.id} · ${item.name}`;
  modalBody.textContent = item.text;
  modalNote.textContent = note;
  confirmButton.textContent = actionLabel;
  state.pendingAction = action;
  modalBackdrop.hidden = false;
  confirmButton.focus();
}

function closeModal() {
  modalBackdrop.hidden = true;
  state.pendingAction = null;
}

function moveTokenTo(point, camera = true) {
  playerToken.classList.add("moving");
  playerToken.style.transform = `translate(${point.x - 39}px, ${point.y - 90}px)`;
  if (camera) focusPoint(point.x, true);
  window.setTimeout(() => playerToken.classList.remove("moving"), 1300);
}

function advanceMain(item) {
  const expected = mainNodes[state.progress];
  if (!expected || expected.id !== item.id) return closeModal();
  closeModal();
  moveTokenTo(item, true);
  window.setTimeout(() => {
    state.progress += 1;
    renderNodes();
    const newcomer = orphans.find(orphan => orphan.unlockAt === state.progress);
    if (newcomer) {
      showToast(`主线 ${item.id} 完成 · 结识孤儿「${newcomer.name}」`);
    } else if (state.progress < mainNodes.length) {
      showToast(`主线 ${item.id} 完成，下一节点已显现`);
    } else {
      showToast("形式验证流程已完成：红幕落下");
    }
  }, 1050);
}

function visitSide(item) {
  closeModal();
  moveTokenTo(item, true);
  window.setTimeout(() => {
    state.sideCompleted.add(item.id);
    renderNodes();
    showToast(`${item.id} 支线完成，完成标记已记录`);
    window.setTimeout(() => moveTokenTo(currentAnchor(), true), 600);
  }, 1050);
}

function readInfo(item) {
  state.infoRead.add(item.id);
  closeModal();
  renderNodes();
  showToast("信息已收入剧情档案，完成标记已记录");
}

function renderRoster() {
  const unlocked = getUnlockedOrphans();
  rosterSummary.textContent = `已结识 ${unlocked.length} / ${orphans.length} 人。派遣成功好感度 +20，失败 +5；好感度达到 ${ARCHIVE_AFFINITY} 解锁个人档案。`;
  rosterList.innerHTML = orphans.map((orphan, index) => {
    const isUnlocked = state.progress >= orphan.unlockAt;
    if (!isUnlocked) {
      return `<article class="orphan-card locked"><div class="orphan-avatar unknown">?</div><div class="locked-copy"><strong>身份未记录</strong><br>完成主线 ${String(orphan.unlockAt).padStart(2, "0")} 后结识</div></article>`;
    }
    const affinity = state.affinity[orphan.id];
    const archiveUnlocked = affinity >= ARCHIVE_AFFINITY;
    return `<article class="orphan-card">
      <img class="orphan-avatar" src="${orphan.portrait}" alt="${orphan.name}的档案画像" />
      <div class="orphan-info">
        <h3>${orphan.name} <small>${orphan.id}</small></h3>
        <p class="orphan-meta"><span>${orphan.age}岁</span><span>${orphan.origin}</span></p>
        <span class="trait-pill">${orphan.trait}</span>
        <p class="orphan-observation">${orphan.observation}</p>
        <p class="orphan-caution">注意：${orphan.caution}</p>
        <div class="affinity-row"><span>好感度</span><span class="affinity-track"><i style="width:${affinity}%"></i></span><strong>${affinity}</strong><span class="archive-state ${archiveUnlocked ? "unlocked" : ""}">${archiveUnlocked ? `个人档案已解锁：${orphan.profile}` : `个人档案 ${affinity} / ${ARCHIVE_AFFINITY}`}</span></div>
      </div>
    </article>`;
  }).join("");
}

function openRoster() {
  renderRoster();
  rosterBackdrop.hidden = false;
  document.getElementById("rosterClose").focus();
}

function closeRoster() {
  rosterBackdrop.hidden = true;
}

function renderDispatchOptions(readOnly = false) {
  const result = state.taskResults.get(state.activeTask.id);
  const selected = result ? new Set(result.selected) : state.selectedOrphans;
  dispatchOptions.innerHTML = "";
  getUnlockedOrphans().forEach(orphan => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `dispatch-option${selected.has(orphan.id) ? " selected" : ""}`;
    button.dataset.orphanId = orphan.id;
    button.disabled = readOnly;
    button.setAttribute("aria-pressed", String(selected.has(orphan.id)));
    button.innerHTML = `<img class="option-portrait" src="${orphan.portrait}" alt="" /><span class="option-copy"><span class="option-head"><strong>${orphan.name}</strong><span class="option-check">✓</span></span><span class="option-origin">${orphan.age}岁 · ${orphan.origin}</span><span class="trait-pill">${orphan.trait}</span><span class="option-observation">${orphan.observation}</span><span class="option-caution">注意：${orphan.caution}</span></span>`;
    button.addEventListener("click", () => toggleOrphan(orphan.id));
    dispatchOptions.appendChild(button);
  });
}

function toggleOrphan(orphanId) {
  const required = state.activeTask.task.requiredCount;
  if (state.selectedOrphans.has(orphanId)) {
    state.selectedOrphans.delete(orphanId);
  } else if (state.selectedOrphans.size < required) {
    state.selectedOrphans.add(orphanId);
  } else {
    showToast(`本题只能选择 ${required} 名孤儿`);
    return;
  }
  renderDispatchOptions(false);
  updateSelectionHint();
}

function updateSelectionHint() {
  const required = state.activeTask.task.requiredCount;
  const count = state.selectedOrphans.size;
  selectionHint.textContent = `已选择 ${count} / ${required} 人${count === required ? "，可以确认派遣" : ""}`;
  dispatchSubmit.disabled = count !== required;
}

function showDispatchResult(result) {
  const task = state.activeTask.task;
  const selectedNames = result.selected.map(id => orphans.find(orphan => orphan.id === id)?.name).filter(Boolean);
  dispatchResult.hidden = false;
  dispatchResult.classList.toggle("failure", !result.success);
  resultMark.textContent = result.success ? "✓" : "×";
  resultTitle.textContent = result.success ? "派遣成功" : "派遣失败";
  resultBody.textContent = result.success ? task.success : `${task.failure} 现场只留下行动后果，不会公开另一种选择会发生什么。`;
  affinityGain.textContent = `${selectedNames.join("、")} 好感度 +${result.gain}`;
  selectionHint.textContent = "本玩法挑战次数已用完，结果不可重置。";
  dispatchSubmit.textContent = "已完成";
  dispatchSubmit.disabled = true;
}

function openDispatch(item) {
  closeModal();
  state.activeTask = item;
  state.selectedOrphans.clear();
  const result = state.taskResults.get(item.id);
  dispatchTitle.textContent = item.name.replace("孤儿派遣·", "");
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
  if (result) showDispatchResult(result);
  else updateSelectionHint();
  dispatchBackdrop.hidden = false;
  document.getElementById("dispatchClose").focus();
}

function closeDispatch() {
  dispatchBackdrop.hidden = true;
  state.activeTask = null;
  state.selectedOrphans.clear();
}

function submitDispatch() {
  if (!state.activeTask || state.taskResults.has(state.activeTask.id)) return;
  const task = state.activeTask.task;
  if (state.selectedOrphans.size !== task.requiredCount) return;
  const selected = [...state.selectedOrphans].sort();
  const solution = [...task.solution].sort();
  const success = selected.length === solution.length && selected.every((id, index) => id === solution[index]);
  const gain = success ? 20 : 5;
  selected.forEach(id => { state.affinity[id] = Math.min(100, state.affinity[id] + gain); });
  const result = { success, selected, gain };
  state.taskResults.set(state.activeTask.id, result);
  state.infoRead.add(state.activeTask.id);
  renderNodes();
  renderDispatchOptions(true);
  showDispatchResult(result);
  showToast(`${state.activeTask.id} 派遣${success ? "成功" : "失败"}，好感度已记录`);
}

function showToast(message) {
  window.clearTimeout(state.toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  state.toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3200);
}

function resetPrototype() {
  state.progress = 0;
  state.sideCompleted.clear();
  state.infoRead.clear();
  state.taskResults.clear();
  state.selectedOrphans.clear();
  orphans.forEach(orphan => { state.affinity[orphan.id] = 0; });
  closeModal();
  closeRoster();
  closeDispatch();
  renderNodes();
  moveTokenTo({ x: 145, y: 760 }, true);
  showToast("验证进度、派遣结果与好感度已重置");
}

function resize() {
  const anchor = currentAnchor();
  state.scale = getScale();
  state.offsetX = cameraOffsetFor(anchor.x);
  applyWorldTransform(false);
}

function validateGameplayConfig() {
  infoNodes.filter(info => info.gameplay).forEach(info => {
    const availableAtUnlock = new Set(orphans.filter(orphan => orphan.unlockAt <= info.unlock + 1).map(orphan => orphan.id));
    if (info.task.solution.length !== info.task.requiredCount || info.task.solution.some(id => !availableAtUnlock.has(id))) {
      throw new Error(`${info.id} 的解题孤儿在玩法解锁时尚未获得`);
    }
  });
}

viewport.addEventListener("pointerdown", event => {
  if (event.button !== 0 || event.target.closest("button, .legend-card, .validation-note")) return;
  state.dragging = true;
  state.moved = false;
  state.dragStartX = event.clientX;
  state.dragStartOffset = state.offsetX;
  viewport.classList.add("dragging");
  viewport.setPointerCapture(event.pointerId);
});

viewport.addEventListener("pointermove", event => {
  if (!state.dragging) return;
  const delta = event.clientX - state.dragStartX;
  if (Math.abs(delta) > 6) state.moved = true;
  state.offsetX = clampOffset(state.dragStartOffset + delta);
  applyWorldTransform(false);
  dragHint.classList.add("dismissed");
});

function endDrag(event) {
  if (!state.dragging) return;
  state.dragging = false;
  viewport.classList.remove("dragging");
  if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
  window.setTimeout(() => { state.moved = false; }, 0);
}

viewport.addEventListener("pointerup", endDrag);
viewport.addEventListener("pointercancel", endDrag);
document.getElementById("orphanButton").addEventListener("click", openRoster);
document.getElementById("focusButton").addEventListener("click", () => focusPoint(currentAnchor().x, true));
document.getElementById("resetButton").addEventListener("click", resetPrototype);
document.getElementById("backButton").addEventListener("click", resetPrototype);
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("cancelButton").addEventListener("click", closeModal);
document.getElementById("rosterClose").addEventListener("click", closeRoster);
document.getElementById("dispatchClose").addEventListener("click", closeDispatch);
document.getElementById("dispatchCancel").addEventListener("click", closeDispatch);
dispatchSubmit.addEventListener("click", submitDispatch);
confirmButton.addEventListener("click", () => state.pendingAction?.());
modalBackdrop.addEventListener("click", event => { if (event.target === modalBackdrop) closeModal(); });
rosterBackdrop.addEventListener("click", event => { if (event.target === rosterBackdrop) closeRoster(); });
dispatchBackdrop.addEventListener("click", event => { if (event.target === dispatchBackdrop) closeDispatch(); });
document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  if (!dispatchBackdrop.hidden) closeDispatch();
  else if (!rosterBackdrop.hidden) closeRoster();
  else if (!modalBackdrop.hidden) closeModal();
});
window.addEventListener("resize", resize);

validateGameplayConfig();
resize();
renderNodes();
moveTokenTo({ x: 145, y: 760 }, false);
