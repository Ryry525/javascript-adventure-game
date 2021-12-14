console.log("script is loading");

let adventureDescriptionText = document.querySelector(".adventure-description");
let optionButtons = document.getElementsByClassName("button");

function updateAdventureText() {
  adventureDescriptionText.innerText = textAdventure[0].text;
}

function updateOptions() {
  let i = 0;
  for (i; i < optionButtons.length; i++) {
    console.log(optionButtons[i]);
    optionButtons[i].innerText = textAdventure[0].options[i];
  }
}

const textAdventure = [
  {
    id: 1,
    text: "This is the story of ming who got lost in elo hell, he need your help to get out and reach diamond elo. Choose one of the options below",
    options: ["Play adc", "Play jungle"],
  },
];

updateAdventureText();
updateOptions();
