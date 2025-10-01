// script.js (replace your current file)

const titleText = "A Bloom from the Garden in Eden";
const titleElement = document.getElementById("title");

// message with proper line breaks
const message = `You're a flower in God's garden,
blooming with wisdom, beauty, and grace.
Your laugh is like rain that revives the earth,
and your eyes hold the peace my soul prays for.
You shine like the morning sun after a storm,
a light that warms even the coldest parts of me.
Your voice feels like the wind that whispers through 
trees,soft, gentle, and full of life.
You are a bloom from the Garden in Eden,
a reminder of love as God intended,
pure, sacred, and true.
In you, I see His masterpiece,
crafted with care, touched by heaven's hand,
and loved beyond measure.`;

// target element for message
const loveMessage = document.getElementById('loveMessage');

// clear any initial content so animation starts fresh
titleElement.innerHTML = "";
loveMessage.innerHTML = "";

/////////////////////
// Title animation //
/////////////////////
let titleIndex = 0;
function typeTitle() {
  if (titleIndex < titleText.length) {
    const ch = titleText.charAt(titleIndex);
    // keep spaces as plain text so they don't animate weirdly
    if (ch === " ") {
      titleElement.appendChild(document.createTextNode(" "));
    } else {
      const span = document.createElement("span");
      span.className = "char";
      span.textContent = ch;
      // small initial transform + invisible (CSS will control exact values)
      titleElement.appendChild(span);
      // animate in next tick
      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      }, 10);
    }
    titleIndex++;
    // title is faster and slightly random to feel natural
    setTimeout(typeTitle, 35 + Math.random() * 40);
  } else {
    // after title finishes, small pause then start message
    setTimeout(typeWriter, 300);
  }
}

///////////////////////
// Message animation //
///////////////////////
let index = 0;
const totalTime = 35000; // total animation time for message in ms
const intervalTime = totalTime / message.length;

function typeWriter() {
  if (index < message.length) {
    const char = message.charAt(index);

    if (char === "\n") {
      loveMessage.appendChild(document.createElement("br"));
    } else {
      const span = document.createElement("span");
      span.className = "char";
      span.textContent = char;
      loveMessage.appendChild(span);

      // trigger the small "draw up" animation
      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      }, 10);
    }

    index++;

    // add a bit of jitter so it feels handwritten
    const jitter = (Math.random() - 0.5) * (intervalTime * 0.4); // ±20%
    const delay = Math.max(8, intervalTime + jitter);

    setTimeout(typeWriter, delay);
  } else {
    // done — you can add a finished action here if you want
  }
}

// Start everything after DOM+assets load
window.addEventListener("load", () => {
  typeTitle();
});
