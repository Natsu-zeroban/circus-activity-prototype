const WORLD = { width: 3840, height: 1280 };

const mainNodes = [
  { id: "01", name: "潮湿传闻", type: "story", x: 360, y: 760, text: "潮水退去的旧街里，关于一座神奇马戏团的传言正沿着棚屋之间扩散。局长循着狂厄反应进入街区。" },
  { id: "02", name: "失踪者名单", type: "story", x: 620, y: 665, text: "失踪者来自不同角落，却都曾在巡演开始前收到一张没有署名的门票。" },
  { id: "03", name: "破棚下的笑声", type: "story", x: 885, y: 755, text: "一群底层孤儿躲在破棚下模仿马戏。他们知道后台的小路，也知道哪些问题不能被治安局听见。" },
  { id: "04", name: "街口封锁", type: "battle", x: 1140, y: 640, text: "治安局突然封锁街口。突破拦截，避免无辜居民被卷入冲突。", note: "战斗内容不在本轮设计范围内，此处仅验证战斗节点在主轴线中的位置与衔接。" },
  { id: "05", name: "褪色的门票", type: "story", x: 1400, y: 725, text: "破旧票根背面，每个名字旁都写着一件被献出的东西。那似乎是进入马戏团真正的代价。" },
  { id: "06", name: "献出之物", type: "story", x: 1670, y: 600, text: "有人献出一只眼，有人献出健康的双腿，换来令观众惊叹的狂厄能力，也换来一处容身之地。" },
  { id: "07", name: "幕布之后", type: "story", x: 1950, y: 695, text: "台前笑声震耳欲聋，后台却没有演员愿意说出团长真正的名字。" },
  { id: "08", name: "笼车突围", type: "battle", x: 2230, y: 575, text: "运送团员的笼车突然失控，狂厄污染沿街扩散。保护孩子，并阻止混乱蔓延。", note: "战斗内容为占位；形式验证只关注地图推进、进入前说明及完成后的下一节点显现。" },
  { id: "09", name: "笑声之下", type: "story", x: 2510, y: 680, text: "笑声越热烈，街区的伤口越清晰。马戏团给予了边缘人舞台，也在悄悄收取另一种代价。" },
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

const infoNodes = [
  { id: "I-1", name: "破损海报", unlock: 0, x: 470, y: 470, text: "海报上的演员脸孔被反复涂改，只留下团长夸张的笑容。" },
  { id: "I-2", name: "被涂抹的告示", unlock: 1, x: 745, y: 930, text: "治安局公告中的失踪人数被人用红笔改得更多。" },
  { id: "I-3", name: "孤儿派遣·旧钟楼", unlock: 2, x: 1040, y: 420, gameplay: true, text: "派遣已经结识的孤儿前往旧钟楼搜集情报；成功后增加该孤儿好感度。" },
  { id: "I-4", name: "巡逻表", unlock: 3, x: 1280, y: 920, text: "巡逻路线刻意绕开了马戏团后台，像是在保护那里，也像是在害怕那里。" },
  { id: "I-5", name: "空药瓶", unlock: 4, x: 1550, y: 405, text: "止痛药的标签被撕掉，瓶底残留着异常的狂厄结晶。" },
  { id: "I-6", name: "团员合照", unlock: 5, x: 1850, y: 920, text: "旧照片里的人比现在更多。背后写着：愿我们的笑声比生活更响。" },
  { id: "I-7", name: "孤儿派遣·排水渠", unlock: 7, x: 2160, y: 365, gameplay: true, text: "派遣孤儿潜入排水渠寻找地下组织的传信路线；成功后增加该孤儿好感度。" },
  { id: "I-8", name: "没寄出的信", unlock: 8, x: 2420, y: 970, text: "信中没有控诉，只有一个团员对家人反复练习的告别。" },
  { id: "I-9", name: "观众席座签", unlock: 9, x: 2880, y: 365, text: "最靠近舞台的座位从不出售，它们被留给那些决定献出东西的人。" },
  { id: "I-10", name: "孤儿派遣·帐篷夹层", unlock: 10, x: 3320, y: 850, gameplay: true, text: "派遣高好感度孤儿进入帐篷夹层，寻找团长隐藏的献祭记录。" }
];

const state = {
  progress: 0,
  sideCompleted: new Set(),
  infoRead: new Set(),
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
const modalBackdrop = document.getElementById("modalBackdrop");
const modalKicker = document.getElementById("modalKicker");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalNote = document.getElementById("modalNote");
const confirmButton = document.getElementById("confirmButton");
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

function lineMarkup(a, b, className) {
  return `<line class="${className}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" />`;
}

function renderRoutes() {
  const lines = [];
  for (let i = 0; i < state.progress; i += 1) {
    const from = i === 0 ? { x: 145, y: 760 } : mainNodes[i - 1];
    const to = mainNodes[i];
    lines.push(lineMarkup(from, to, "route-main"));
  }
  sideNodes.forEach(side => {
    if (state.progress > side.parent) {
      lines.push(lineMarkup(mainNodes[side.parent], side, "route-side"));
    }
  });
  routeLayer.innerHTML = lines.join("");
}

function makeNode(item, kind, status) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `map-node ${kind}-node ${status || ""}`;
  if (kind === "main" && item.type === "battle") button.classList.add("battle");
  if (kind === "info" && item.gameplay) button.classList.add("gameplay");
  if (kind === "info" && state.infoRead.has(item.id)) button.classList.add("read");
  button.style.left = `${item.x}px`;
  button.style.top = `${item.y}px`;
  button.dataset.name = item.name;
  button.setAttribute("aria-label", `${item.id} ${item.name}`);

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
  button.addEventListener("click", event => {
    event.stopPropagation();
    if (state.moved) return;
    openNode(item, kind, status);
  });
  return button;
}

function renderNodes() {
  nodeLayer.innerHTML = "";
  mainNodes.forEach((node, index) => {
    if (index > state.progress) return;
    const status = index < state.progress ? "completed" : "next";
    nodeLayer.appendChild(makeNode(node, "main", status));
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
}

function openNode(item, kind, status) {
  let kicker = "主线调查";
  let actionLabel = "前往调查";
  let action = () => advanceMain(item);
  let note = item.note || "点击确认后进入节点；本原型以位移与状态变化代替实际剧情或战斗内容。";

  if (kind === "main" && status === "completed") {
    kicker = item.type === "battle" ? "已完成 · 战斗节点" : "已完成 · 主线回看";
    actionLabel = "回看记录";
    action = () => closeModal();
    note = "走过的主线节点持续保留，玩家拖回旧区域后可再次点击回看。";
  } else if (kind === "main" && item.type === "battle") {
    kicker = "主线 · 战斗占位";
    actionLabel = "进入战斗";
  } else if (kind === "side") {
    kicker = state.sideCompleted.has(item.id) ? "已完成 · 支线回看" : "可选支线";
    actionLabel = state.sideCompleted.has(item.id) ? "回看记录" : "进入支线";
    action = state.sideCompleted.has(item.id) ? () => closeModal() : () => visitSide(item);
    note = "支线由配置挂接主线节点；形式上与主线一致，但不阻塞主轴线推进。";
  } else if (kind === "info") {
    kicker = item.gameplay ? "信息流 · 派遣玩法占位" : "信息流 · 街区记录";
    actionLabel = item.gameplay ? "查看玩法说明" : "读取记录";
    action = () => readInfo(item);
    note = item.gameplay
      ? "孤儿派遣、成功条件、好感度与个人档案将在主流程形式通过后继续设计。"
      : "信息流无连线，随主线进度解锁并散落在已探索街区，可随时点击。";
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
    if (state.progress < mainNodes.length) {
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
    showToast(`${item.id} 支线完成，返回主线当前位置`);
    window.setTimeout(() => moveTokenTo(currentAnchor(), true), 600);
  }, 1050);
}

function readInfo(item) {
  state.infoRead.add(item.id);
  closeModal();
  renderNodes();
  showToast(item.gameplay ? "玩法信息流已记录（详细玩法待后续设计）" : "信息已收入剧情档案占位");
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
  renderNodes();
  moveTokenTo({ x: 145, y: 760 }, true);
  showToast("验证进度已重置");
}

function resize() {
  const anchor = currentAnchor();
  state.scale = getScale();
  state.offsetX = cameraOffsetFor(anchor.x);
  applyWorldTransform(false);
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

document.getElementById("focusButton").addEventListener("click", () => focusPoint(currentAnchor().x, true));
document.getElementById("resetButton").addEventListener("click", resetPrototype);
document.getElementById("backButton").addEventListener("click", resetPrototype);
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("cancelButton").addEventListener("click", closeModal);
confirmButton.addEventListener("click", () => state.pendingAction?.());
modalBackdrop.addEventListener("click", event => { if (event.target === modalBackdrop) closeModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && !modalBackdrop.hidden) closeModal(); });
window.addEventListener("resize", resize);

resize();
renderNodes();
moveTokenTo({ x: 145, y: 760 }, false);
