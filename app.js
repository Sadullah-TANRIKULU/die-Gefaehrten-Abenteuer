let currentLang = "tr";
let currentSceneId = "start";
let nextIdAfterModal = "";

// Index für die Reihenfolge
let currentSahabaIndex = 0;

// Statistik-Zähler (global für alle 7)
let matches = 0;
let totalChoices = 0;

let traitsCount = {
  Mut: 0,
  Geduld: 0,
  Weisheit: 0,
  Ehrlichkeit: 0,
  Großzügigkeit: 0,
};

// Die feste Reihenfolge der Geschichten
const sahabaSequence = [
  "mesud_start",
  "sad_start",
  "musab_start",
  "habbab_start",
  "avf_start",
  "osman_start",
  "ali_start",
];

document.addEventListener("DOMContentLoaded", () => {
  startNewSahaba();
});

function startNewSahaba() {
  if (currentSahabaIndex < sahabaSequence.length) {
    updateProgress(); // Anzeige aktualisieren
    const nextStartId = sahabaSequence[currentSahabaIndex];
    renderScene(nextStartId);
  } else {
    showFinalGlobalStats();
  }
}

// NEU: Zeigt "Gefährte X von 7"
function updateProgress() {
  const displayIndex = currentSahabaIndex + 1;
  const label = currentLang === "de" ? "Gefährte" : "Sahabe";
  document.getElementById("progress-text").innerText =
    `${label} ${displayIndex} / ${sahabaSequence.length}`;
}

function renderScene(id) {
  currentSceneId = id;
  const scene = storyData[currentLang][id];
  if (!scene) return;

  document.getElementById("scene-title").innerText = scene.title;
  document.getElementById("scene-text").innerText = scene.text;

  const container = document.getElementById("options-container");
  container.innerHTML = "";

  if (!scene.options || scene.options.length === 0) {
    renderNextStepButton(); // Button für den nächsten Sahaba
    return;
  }

  scene.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.innerText = opt.text;
    btn.onclick = () => {
      if (opt.isMatch) {
        matches++;
        if (opt.trait && traitsCount.hasOwnProperty(opt.trait)) {
          traitsCount[opt.trait]++;
        }
        if (navigator.vibrate) navigator.vibrate(50);
      }
      totalChoices++;
      updateHeader(opt.characterChange);
      showModal(
        opt.wisdom || (currentLang === "de" ? "Ein Schritt..." : "Bir adım..."),
        opt.nextId,
      );
    };
    container.appendChild(btn);
  });
}

function showModal(text, nextId) {
  nextIdAfterModal = nextId;
  const modalTitle =
    currentLang === "de" ? "Licht der Weisheit" : "Hikmet Nuru";
  const closeBtnText = currentLang === "de" ? "Weitergehen" : "Devam Et";

  document.querySelector("#modal h3").innerText = modalTitle;
  document.getElementById("modal-text").innerText = text;
  document.getElementById("close-modal").innerText = closeBtnText;
  document.getElementById("modal").style.display = "flex";
}

document.getElementById("close-modal").onclick = () => {
  document.getElementById("modal").style.display = "none";
  renderScene(nextIdAfterModal);
};

function updateHeader(charName) {
  if (charName)
    document.getElementById("current-character").innerText = charName;
  document.getElementById("match-count").innerText = matches;
}

function renderNextStepButton() {
  const container = document.getElementById("options-container");
  const btn = document.createElement("button");

  currentSahabaIndex++;

  if (currentSahabaIndex < sahabaSequence.length) {
    btn.innerText =
      currentLang === "de" ? "Nächster Gefährte ➔" : "Sıradaki Sahabe ➔";
    btn.className = "next-sahaba-btn"; // Du kannst dies im CSS stylen
    btn.onclick = () => {
      document.getElementById("result-area").style.display = "none";
      startNewSahaba();
    };
  } else {
    btn.innerText =
      currentLang === "de"
        ? "Gesamt-Statistik anzeigen"
        : "Genel İstatistikleri Gör";
    btn.className = "share-button";
    btn.onclick = showFinalGlobalStats;
  }
  container.appendChild(btn);
}

function showFinalGlobalStats() {
  // Hier nutzen wir jetzt die korrekten globalen Variablen
  const prozent =
    totalChoices > 0 ? Math.round((matches / totalChoices) * 100) : 0;
  const isDe = currentLang === "de";

  document.getElementById("scene-title").innerText = isDe
    ? "Reise vollendet"
    : "Yolculuk Tamamlandı";

  let resultText = isDe
    ? `Wie viele deiner Präferenzen haben ein Match? <br><b>${matches} von ${totalChoices}</b> Entscheidungen (${prozent}%).`
    : `Kaç tercihin Sahabelerle örtüştü? <br><b>${totalChoices} kararda ${matches} eşleşme</b> (%${prozent}).`;

  document.getElementById("scene-text").innerHTML = resultText;
  document.getElementById("result-area").style.display = "block";

  const shareBtn = document.getElementById("share-btn");

  // Die Nachricht, die kopiert werden soll
  const shareMsg = isDe
    ? `Meine Reise mit den 7 Gefährten: ${matches}/${totalChoices} Matches (${prozent}% Übereinstimmung).`
    : `7 Sahabe ile yolculuğum: ${totalChoices} kararda ${matches} uyum (%${prozent}).`;

  shareBtn.onclick = () => {
    navigator.clipboard
      .writeText(shareMsg)
      .then(() => {
        // Kleiner visueller Effekt: Button-Text ändert sich kurz
        const originalText = shareBtn.innerText;
        shareBtn.innerText = isDe ? "Kopiert! ✅" : "Kopyalandı! ✅";
        setTimeout(() => {
          shareBtn.innerText = originalText;
        }, 2000);
      })
      .catch((err) => {
        console.error("Fehler beim Kopieren: ", err);
        alert("Kopieren fehlgeschlagen.");
      });
  };

  const quote = isDe
    ? "Iman ist sowohl Licht als auch Kraft."
    : "İman hem nurdur, hem kuvvettir.";
  document.getElementById("nursi-quote").innerText = `"${quote}" - Bediüzzaman`;

  const container = document.getElementById("options-container");
  container.innerHTML = `<button onclick="location.reload()">${isDe ? "Ganze Reise neu starten" : "Yolculuğu Sıfırla"}</button>`;
}

function changeLanguage(lang) {
  currentLang = lang;
  updateProgress(); // Auch die Fortschrittsanzeige übersetzen
  renderScene(currentSceneId);
}
