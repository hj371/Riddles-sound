const riddles = {
  en: [
    { q: "What has keys but cannot open locks?", a: "A piano." },
    { q: "What gets wetter the more it dries?", a: "A towel." },
    { q: "What has a face and two hands but no arms or legs?", a: "A clock." },
    { q: "What can travel around the world while staying in one corner?", a: "A stamp." },
    { q: "What has a neck but no head?", a: "A bottle." },
    { q: "The more you take, the more you leave behind. What are they?", a: "Footsteps." },
    { q: "What belongs to you but other people use it more than you do?", a: "Your name." },
    { q: "What has many teeth but cannot bite?", a: "A comb." },
    { q: "What can fill a room but takes up no space?", a: "Light." },
    { q: "What goes up but never comes down?", a: "Your age." },
    { q: "What has one eye but cannot see?", a: "A needle." },
    { q: "What can you catch but not throw?", a: "A cold." },
    { q: "What has words but never speaks?", a: "A book." },
    { q: "What runs but never walks, has a bed but never sleeps?", a: "A river." },
    { q: "What is full of holes but still holds water?", a: "A sponge." },
    { q: "What comes down but never goes up?", a: "Rain." },
    { q: "What has cities, but no houses; forests, but no trees; and water, but no fish?", a: "A map." },
    { q: "What is always in front of you but cannot be seen?", a: "The future." },
    { q: "What has four fingers and a thumb but is not alive?", a: "A glove." },
    { q: "What can be broken without being held?", a: "A promise." }
  ],
  ar: [
    { q: "ما الشيء الذي له مفاتيح لكنه لا يفتح الأقفال؟", a: "البيانو." },
    { q: "ما الشيء الذي يزداد بللاً كلما جفف غيره؟", a: "المنشفة." },
    { q: "ما الشيء الذي له وجه ويدان بلا ذراعين أو ساقين؟", a: "الساعة." },
    { q: "ما الشيء الذي يسافر حول العالم وهو ثابت في زاوية؟", a: "طابع البريد." },
    { q: "ما الشيء الذي له عنق وليس له رأس؟", a: "الزجاجة." },
    { q: "كلما أخذت منه أكثر، تركت خلفك أكثر. ما هو؟", a: "الخطوات." },
    { q: "ما الشيء الذي تملكه ويستخدمه الآخرون أكثر منك؟", a: "اسمك." },
    { q: "ما الشيء الذي له أسنان كثيرة ولا يعض؟", a: "المشط." },
    { q: "ما الشيء الذي يملأ الغرفة ولا يشغل حيزاً؟", a: "الضوء." },
    { q: "ما الشيء الذي يصعد ولا ينزل أبداً؟", a: "العمر." },
    { q: "ما الشيء الذي له عين واحدة ولا يرى؟", a: "الإبرة." },
    { q: "ما الشيء الذي يمكنك الإمساك به ولا يمكنك رميه؟", a: "الزكام." },
    { q: "ما الشيء الذي يحتوي على كلمات ولا يتكلم؟", a: "الكتاب." },
    { q: "ما الشيء الذي يجري ولا يمشي وله سرير ولا ينام؟", a: "النهر." },
    { q: "ما الشيء المليء بالثقوب ومع ذلك يحتفظ بالماء؟", a: "الإسفنجة." },
    { q: "ما الشيء الذي ينزل ولا يصعد؟", a: "المطر." },
    { q: "ما الشيء الذي يحتوي مدناً بلا بيوت وغابات بلا أشجار وماء بلا سمك؟", a: "الخريطة." },
    { q: "ما الشيء الموجود دائماً أمامك ولا يمكنك رؤيته؟", a: "المستقبل." },
    { q: "ما الشيء الذي له أربعة أصابع وإبهام وليس حياً؟", a: "القفاز." },
    { q: "ما الشيء الذي يمكن كسره دون أن تمسكه؟", a: "الوعد." }
  ]
};

const translations = {
  en: {
    title: "Riddle Game Night",
    subtitle: "Build teams, start the timer, and solve every mystery.",
    timer: "Timer",
    noTimer: "No timer",
    seconds: "seconds",
    minute2: "2 minutes",
    startTimer: "Start Timer",
    pauseTimer: "Pause Timer",
    language: "Language",
    restart: "Restart Game",
    teams: "Teams",
    teamPlaceholder: "Team name",
    add: "Add",
    noTeams: "No teams yet. Add one to begin scoring.",
    round: "Round",
    remaining: n => `${n} riddles remaining`,
    riddle: "RIDDLE",
    answer: "ANSWER",
    hidden: "Hidden",
    revealed: "Revealed",
    emptyRiddle: "Press “New Riddle” to reveal your first challenge.",
    newRiddle: "New Riddle",
    showAnswer: "Show Answer",
    hideAnswer: "Hide Answer",
    teamAdded: "Team added.",
    teamRemoved: "Team removed.",
    duplicateTeam: "That team name already exists.",
    enterTeam: "Please enter a team name.",
    allUsed: "All riddles in this round are complete. Restart to play again.",
    restarted: "Game restarted.",
    timeUp: "Time is up!",
    confirmRestart: "Restart the game and clear all scores?"
  },
  ar: {
    title: "ليلة الألغاز",
    subtitle: "أنشئ الفرق، شغّل المؤقت، وحاول حل كل لغز.",
    timer: "المؤقت",
    noTimer: "بدون مؤقت",
    seconds: "ثانية",
    minute2: "دقيقتان",
    startTimer: "تشغيل المؤقت",
    pauseTimer: "إيقاف مؤقت",
    language: "اللغة",
    restart: "إعادة اللعبة",
    teams: "الفرق",
    teamPlaceholder: "اسم الفريق",
    add: "إضافة",
    noTeams: "لا توجد فرق بعد. أضف فريقاً لبدء تسجيل النقاط.",
    round: "الجولة",
    remaining: n => `متبقي ${n} لغزاً`,
    riddle: "اللغز",
    answer: "الإجابة",
    hidden: "مخفية",
    revealed: "ظاهرة",
    emptyRiddle: "اضغط «لغز جديد» لعرض أول تحدٍ.",
    newRiddle: "لغز جديد",
    showAnswer: "إظهار الإجابة",
    hideAnswer: "إخفاء الإجابة",
    teamAdded: "تمت إضافة الفريق.",
    teamRemoved: "تم حذف الفريق.",
    duplicateTeam: "اسم الفريق موجود بالفعل.",
    enterTeam: "يرجى كتابة اسم الفريق.",
    allUsed: "تم استخدام جميع ألغاز الجولة. أعد اللعبة للبدء من جديد.",
    restarted: "تمت إعادة اللعبة.",
    timeUp: "انتهى الوقت!",
    confirmRestart: "هل تريد إعادة اللعبة ومسح جميع النقاط؟"
  }
};

let language = null;
let usedIndices = [];
let currentRiddle = null;
let answerVisible = false;
let teams = [];
let timerInterval = null;
let timerRemaining = 30;
let timerTotal = 30;
let timerRunning = false;
let audioContext = null;

function unlockAudio() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;
  if (!audioContext) audioContext = new AudioContext();
  if (audioContext.state === "suspended") audioContext.resume().catch(() => {});
  return audioContext;
}

const $ = id => document.getElementById(id);
const languageScreen = $("languageScreen");
const gameScreen = $("gameScreen");
const timerSelect = $("timerSelect");

function t(key, ...args) {
  const value = translations[language || "en"][key];
  return typeof value === "function" ? value(...args) : value;
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 2300);
}

function setLanguage(lang) {
  language = lang;
  document.documentElement.lang = lang;
  document.body.dir = lang === "ar" ? "rtl" : "ltr";
  languageScreen.classList.remove("active");
  gameScreen.classList.add("active");
  applyTranslations();
  resetGame(false);
}

function applyTranslations() {
  $("mainTitle").textContent = t("title");
  $("mainSubtitle").textContent = t("subtitle");
  $("timerLabel").textContent = t("timer");
  timerSelect.options[0].textContent = t("noTimer");
  [15, 30, 45, 60, 90].forEach((sec, i) => timerSelect.options[i + 1].textContent = `${sec} ${t("seconds")}`);
  timerSelect.options[6].textContent = t("minute2");
  $("startTimerBtn").textContent = t("startTimer");
  $("changeLanguageBtn").textContent = t("language");
  $("restartBtn").textContent = t("restart");
  $("teamsTitle").textContent = t("teams");
  $("teamNameInput").placeholder = t("teamPlaceholder");
  $("saveTeamBtn").textContent = t("add");
  $("roundLabel").textContent = t("round");
  $("riddleLabel").textContent = t("riddle");
  $("answerLabel").textContent = t("answer");
  $("newRiddleText").textContent = t("newRiddle");
  $("showAnswerText").textContent = answerVisible ? t("hideAnswer") : t("showAnswer");
  $("answerStatus").textContent = answerVisible ? t("revealed") : t("hidden");
  if (!currentRiddle) $("riddleText").textContent = t("emptyRiddle");
  updateRoundStatus();
  renderTeams();
}

function getUnusedIndex() {
  const all = riddles[language].map((_, index) => index);
  const available = all.filter(index => !usedIndices.includes(index));
  if (!available.length) return null;
  return available[Math.floor(Math.random() * available.length)];
}

function showNewRiddle() {
  const index = getUnusedIndex();
  if (index === null) {
    showToast(t("allUsed"));
    return;
  }
  usedIndices.push(index);
  currentRiddle = riddles[language][index];
  answerVisible = false;
  $("riddleText").textContent = currentRiddle.q;
  $("riddleText").classList.remove("empty-state");
  $("answerText").textContent = "••••••••••••";
  $("answerStatus").textContent = t("hidden");
  $("answerCard").classList.add("locked");
  $("answerCard").classList.remove("revealed");
  $("showAnswerBtn").disabled = false;
  $("showAnswerText").textContent = t("showAnswer");
  updateRoundStatus();
  resetTimer();
}

function toggleAnswer() {
  if (!currentRiddle) return;
  answerVisible = !answerVisible;
  const card = $("answerCard");
  if (answerVisible) {
    $("answerText").textContent = currentRiddle.a;
    $("answerStatus").textContent = t("revealed");
    $("showAnswerText").textContent = t("hideAnswer");
    card.classList.remove("locked");
    card.classList.add("revealed");
  } else {
    $("answerText").textContent = "••••••••••••";
    $("answerStatus").textContent = t("hidden");
    $("showAnswerText").textContent = t("showAnswer");
    card.classList.add("locked");
    card.classList.remove("revealed");
  }
}

function updateRoundStatus() {
  const total = language ? riddles[language].length : 20;
  $("roundCount").textContent = `${usedIndices.length} / ${total}`;
  $("remainingLabel").textContent = language ? t("remaining", total - usedIndices.length) : `${total} riddles remaining`;
}

function addTeam(name) {
  const clean = name.trim();
  if (!clean) return showToast(t("enterTeam"));
  if (teams.some(team => team.name.toLowerCase() === clean.toLowerCase())) return showToast(t("duplicateTeam"));
  teams.push({ id: Date.now() + Math.random(), name: clean, score: 0 });
  $("teamNameInput").value = "";
  renderTeams();
  showToast(t("teamAdded"));
}

function renderTeams() {
  const list = $("teamsList");
  list.innerHTML = "";
  if (!teams.length) {
    list.innerHTML = `<div class="empty-teams">${language ? t("noTeams") : "No teams yet."}</div>`;
    return;
  }
  teams.forEach(team => {
    const card = document.createElement("div");
    card.className = "team-card";
    card.innerHTML = `
      <div class="team-name-row">
        <span class="team-name"></span>
        <button class="remove-team" aria-label="Remove team">✕</button>
      </div>
      <div class="score-row">
        <button class="score-button minus" aria-label="Remove point">−</button>
        <div class="score">${team.score}</div>
        <button class="score-button plus" aria-label="Add point">＋</button>
      </div>`;
    card.querySelector(".team-name").textContent = team.name;
    card.querySelector(".remove-team").addEventListener("click", () => {
      teams = teams.filter(item => item.id !== team.id);
      renderTeams();
      showToast(t("teamRemoved"));
    });
    card.querySelector(".minus").addEventListener("click", () => updateScore(team.id, -1));
    card.querySelector(".plus").addEventListener("click", () => updateScore(team.id, 1));
    list.appendChild(card);
  });
}

function updateScore(id, amount) {
  teams = teams.map(team => team.id === id ? { ...team, score: team.score + amount } : team);
  renderTeams();
}

function updateTimerVisual() {
  const display = $("timerDisplay");
  const ring = $("timerRing");
  display.textContent = timerTotal === 0 ? "∞" : timerRemaining;
  const percentage = timerTotal ? Math.max(0, (timerRemaining / timerTotal) * 100) : 100;
  ring.style.setProperty("--progress", `${percentage}%`);
  ring.classList.toggle("urgent", timerTotal > 0 && timerRemaining <= 5 && timerRemaining > 0);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  timerTotal = Number(timerSelect.value);
  timerRemaining = timerTotal;
  $("startTimerBtn").textContent = t("startTimer");
  updateTimerVisual();
}

function toggleTimer() {
  if (timerTotal === 0) return;
  unlockAudio();
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
    $("startTimerBtn").textContent = t("startTimer");
    return;
  }
  if (timerRemaining <= 0) timerRemaining = timerTotal;
  timerRunning = true;
  $("startTimerBtn").textContent = t("pauseTimer");
  timerInterval = setInterval(() => {
    timerRemaining -= 1;
    updateTimerVisual();
    if (timerRemaining <= 0) {
      clearInterval(timerInterval);
      timerRunning = false;
      $("startTimerBtn").textContent = t("startTimer");
      playEndSound();
      showToast(t("timeUp"));
    }
  }, 1000);
}

function playEndSound() {
  const ctx = unlockAudio();
  if (!ctx) return;

  const now = ctx.currentTime + 0.05;
  const master = ctx.createGain();
  master.gain.setValueAtTime(0.72, now);
  master.connect(ctx.destination);

  // Four strong buzzer pulses lasting about four seconds in total.
  [0, 0.95, 1.9, 2.85].forEach((offset, index) => {
    const start = now + offset;
    const duration = 0.72;

    [0, 1].forEach(layer => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = layer === 0 ? "sawtooth" : "square";
      osc.frequency.setValueAtTime(layer === 0 ? 430 : 215, start);
      osc.frequency.linearRampToValueAtTime(layer === 0 ? 360 : 180, start + duration);
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(layer === 0 ? 0.34 : 0.18, start + 0.025);
      gain.gain.setValueAtTime(layer === 0 ? 0.34 : 0.18, start + duration - 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
      osc.connect(gain).connect(master);
      osc.start(start);
      osc.stop(start + duration + 0.03);
    });

    if (index === 3) {
      master.gain.setValueAtTime(0.72, start);
      master.gain.exponentialRampToValueAtTime(0.0001, start + duration + 0.08);
    }
  });

  if (navigator.vibrate) {
    navigator.vibrate([450, 180, 450, 180, 450, 180, 650]);
  }
}

function resetGame(clearTeams = true) {
  usedIndices = [];
  currentRiddle = null;
  answerVisible = false;
  if (clearTeams) teams = [];
  $("riddleText").textContent = t("emptyRiddle");
  $("riddleText").classList.add("empty-state");
  $("answerText").textContent = "••••••••••••";
  $("answerStatus").textContent = t("hidden");
  $("answerCard").classList.add("locked");
  $("answerCard").classList.remove("revealed");
  $("showAnswerBtn").disabled = true;
  $("showAnswerText").textContent = t("showAnswer");
  resetTimer();
  updateRoundStatus();
  renderTeams();
}

function goToLanguageScreen() {
  clearInterval(timerInterval);
  gameScreen.classList.remove("active");
  languageScreen.classList.add("active");
  document.body.dir = "ltr";
  $("mainTitle").textContent = "Choose Your Language";
  $("mainSubtitle").textContent = "Pick a language to begin your riddle challenge.";
}

document.querySelectorAll(".language-card").forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.language)));
$("newRiddleBtn").addEventListener("click", showNewRiddle);
$("showAnswerBtn").addEventListener("click", toggleAnswer);
$("teamForm").addEventListener("submit", event => { event.preventDefault(); addTeam($("teamNameInput").value); });
$("addTeamBtn").addEventListener("click", () => $("teamNameInput").focus());
$("startTimerBtn").addEventListener("click", toggleTimer);
$("resetTimerBtn").addEventListener("click", resetTimer);
timerSelect.addEventListener("change", resetTimer);
$("changeLanguageBtn").addEventListener("click", goToLanguageScreen);
$("restartBtn").addEventListener("click", () => {
  if (confirm(t("confirmRestart"))) {
    resetGame(true);
    showToast(t("restarted"));
  }
});

updateTimerVisual();
renderTeams();
