const secondHand = document.querySelector(".secondHand");
const minuteHand = document.querySelector(".minuteHand");
const hourHand = document.querySelector(".hourHand");
const hands = document.querySelectorAll(".hands");

let d;
let s;
let m;
let h;

function clock() {
  d = new Date();
  s = d.getSeconds();
  m = d.getMinutes();
  h = d.getHours();

  let secondsDeg = (s / 60) * 360 - 90;
  let minutesDeg = (m / 60) * 360 - 90;
  let hoursDeg = ((h % 12 || 12) / 12) * 360 + (m / 60) * 30 - 90;

  hands.forEach((hand) => {
    hand.style.transition = "all 0.15s cubic-bezier(.26,.45,.17,1.84)";
  });

  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

hands.forEach((hand) => {
  hand.addEventListener("transitionstart", () => {
    if (s === 0) {
      secondHand.style.transition = "none";
    }
    if (m === 0) {
      minuteHand.style.transition = "none";
    }
    if (h === 0) {
      hourHand.style.transition = "none";
    }
  });
});

setInterval(clock, 1000);

const clockContainer = document.querySelector(".clock");
let numbers = [];

for (let i = 0; i < 12; i++) {
  numbers.push(document.createElement("div"));
  numbers[i].classList.add("numbers", `num${i + 1}`);
  numbers[i]
    .appendChild(document.createElement("div"))
    .appendChild(document.createTextNode(i + 1));
  clockContainer.appendChild(numbers[i]);
}
