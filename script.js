let avatarElement = document.getElementById("avatar");
let lastInteractionTime = Date.now();
const defaultAvatar = 'https://tse3.mm.bing.net/th/id/OIP.aACuy27SMGcSmPDJuspK6AHaHa?pid=ImgDet&w=202&h=202&c=7&dpr=2&o=7&rm=3';
const moods = [ 'https://i.pinimg.com/originals/5f/63/39/5f6339262ef684b3a9643a4ad9d41e66.gif',
  'https://media.tenor.com/BhQtysGX9fkAAAAM/cat-cats.gif',
  'https://media1.tenor.com/m/lWVyjNY96scAAAAC/cat-cats.gif'
];
const idleGif = 'https://media1.tenor.com/m/66MK5QxsnXMAAAAC/bye-bye-bye.gif';
const animationGifs = [
  'https://media.tenor.com/ZwAGnCZ4zFAAAAAi/bailegato.gif', 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWhxOG93YmphMW1zbm9uamh6eXpneXdjOHBiZGM0bXRnaWQ5N2VoMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/UKHhiIddtoYK29GfXu/giphy.gif',
  'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExem1ldGlkbDY1anp2Yjcyb3dmdzh2bWRtdzNhbG9lN3BnbnZyaWRreiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/kPryNRkt1ryfnpn59G/giphy.gif'
];

function setAvatarImage(src) {
  avatarElement.style.backgroundImage = `url('${src}')`;
}

// Idle Detection
setInterval(() => {
  if (Date.now() - lastInteractionTime > 3 * 60 * 1000) {
    setAvatarImage(idleGif);
    setTimeout(() => setAvatarImage(defaultAvatar), 10000);
    lastInteractionTime = Date.now();
  }
}, 10);

setInterval(() => {
  const mood = moods[Math.floor(Math.random() * moods.length)];
  setAvatarImage(mood);
  setTimeout(() => setAvatarImage(defaultAvatar), 30000);
}, 5 * 6 * 1000);

function animatePet() {
  const gif = animationGifs[Math.floor(Math.random() * animationGifs.length)];
  setAvatarImage(gif);
  setTimeout(() => setAvatarImage(defaultAvatar), 2000);
  lastInteractionTime = Date.now();
}

window.onload = () => {
  setAvatarImage(defaultAvatar);
};
setInterval(() => {
  let messages = [];
  if (inventory.includes("talkFire")) {
    messages = messages.concat([
      "🔥 Check your smoke alarms!",
      "🚒 Fire safety is pawsome.",
      "🧯 Meow is the purr-fect time to practice fire drills!",
      "🚪 Keep exits clear!",
      "Don’t let a little flame turn into a big cat-astrophe.",
      "Paw-sition your heaters safely away from anything that burns."
    ]);
  }
  if (inventory.includes("talkSass")) {
    messages = messages.concat([
      "Kitchen fires? Sorry, I only serve sass.",
      "I’ve got attitude, not a fire extinguisher—check yours.",
      "Excuse me, queen coming through!",
      "Not my problem 😼",
      "This place is a fire hazard!"
    ]);
  }
  if (inventory.includes("talkStudy")) {
    messages = messages.concat([
      "Study fire safety like it's finals!",
      "Books before fire hazards!",
      "Quiz me on fire facts, hooman.",
      "Did you finish your fire safety quest?",
      "I only nap *after* homework.",
    ]);
  }

  if (messages.length === 0) return;

  const msg = messages[Math.floor(Math.random() * messages.length)];
  const bubble = document.createElement("div");
  bubble.textContent = msg;
  bubble.style.position = "absolute";
  bubble.style.top = "-30px";
  bubble.style.background = "#fff";
  bubble.style.padding = "6px 10px";
  bubble.style.borderRadius = "8px";
  bubble.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
  bubble.style.fontSize = "14px";
  bubble.style.whiteSpace = "nowrap";

  avatarElement.appendChild(bubble);
  setTimeout(() => avatarElement.removeChild(bubble), 3000);
}, 15000); // every 4 minutes
function getRandomSpeech() {
  let messages = [];

  if (inventory.includes("talkFire")) {
    messages = messages.concat([
      "🔥 Check your smoke alarms!",
      "🧯 Fire drills save lives.",
      "🚪 Keep exits clear!"
    ]);
  }
  if (inventory.includes("talkSass")) {
    messages = messages.concat([
      "Did you clean that up yet?",
      "Not my problem 😼",
      "This place is a fire hazard!"
    ]);
  }
  if (inventory.includes("talkStudy")) {
    messages = messages.concat([
      
      "Quiz me, human!"
    ]);
  }

  if (messages.length === 0) return null;
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomEmoji() {
  let emojis = [];

  if (inventory.includes("emojiPack1")) {
    emojis = emojis.concat(["😺", "😸", "😹"]);
  }
  if (inventory.includes("emojiPack2")) {
    emojis = emojis.concat(["🙀", "😼", "😾"]);
  }

  return emojis.length > 0 ? emojis[Math.floor(Math.random() * emojis.length)] : "";
}

function showSpeechBubble(message) {
  if (!message) return;

  const bubble = document.createElement("div");
  bubble.textContent = message;
  bubble.style.position = "absolute";
  bubble.style.top = "-35px";
  bubble.style.left = "50%";
  bubble.style.transform = "translateX(-50%)";
  bubble.style.background = "#fff";
  bubble.style.padding = "6px 12px";
  bubble.style.borderRadius = "10px";
  bubble.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
  bubble.style.fontSize = "14px";
  bubble.style.whiteSpace = "nowrap";
  bubble.style.zIndex = "5";

  avatarElement.appendChild(bubble);
  setTimeout(() => avatarElement.removeChild(bubble), 4000);
}

function scheduleRandomSpeech() {
  const interval = (Math.floor(Math.random() * 180) + 180) * 1000;
  setTimeout(() => {
    const msg = getRandomSpeech();
    const emoji = getRandomEmoji();
    showSpeechBubble((msg || "") + (emoji ? " " + emoji : ""));
    scheduleRandomSpeech();
  }, interval);
}

scheduleRandomSpeech();