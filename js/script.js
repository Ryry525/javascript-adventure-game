console.log("script is loading");

// select the container of the game description
const descriptionText = document.querySelector(".adventure-description");
const optionButtons = document.getElementsByClassName("button");
const changeProfile = document.getElementsByClassName("profile");

// Id node where the game starts
let startIndex = 0;

// function that starts the game
function startAdventure(textAdventureIndex) {
  console.log("Adventure has started");
  showAdventureOptions(textAdventureIndex);
}

// create a function that shows the description
function showAdventureOptions(textAdventureID) {
  // check fisrt

  const newDescriptionText = textAdventure.find(
    (gameNode) => gameNode.id === textAdventureID
  );
  if (!newDescriptionText.options) {
    // hide button
    document.getElementById("first_btn").style.display = "none";

    // show description
    descriptionText.innerHTML = newDescriptionText.message;

    //change the profile
    document.getElementById("profile_pic").src="images/diamond.png";

    document.getElementById("second_btn").innerHTML = "Play Again";
    return;
  }

  descriptionText.innerText = newDescriptionText.description;
  // iterate through the buttons and insert the option text in each button
  for (let i = 0; i < newDescriptionText.options.length; i++) {
    //console.log(newDescriptionText.options[i].buttontext);
    optionButtons[i].innerText = newDescriptionText.options[i].buttontext;
  }
}

// function that tracks options and passes the id to the showAdventureOptions function
function buttonOptions() {
  const adventureIndex = textAdventure.find(
    (gameNode) => gameNode.id === startIndex
  );

  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons.addEventListener("click", function () {});
  }
}

function onPlay() {
  let ids = textAdventure.map((item) => {
    return item.id;
  });

  if (startIndex > ids.length - 1) {
    startIndex = 0;
  }

  // show
  showAdventureOptions(ids[startIndex]);
}

function onNextOption(event) {
  event.preventDefault();

  startIndex++;

  onPlay();
}

function onPlayAgain(event) {
  event.preventDefault();

  // show button
  document.getElementById("first_btn").style.display = "inline";

  document.getElementById("profile_pic").src = "images/iron.png";

  startIndex = 0;

  onPlay();
}

// optional: function that shows end of the game

// create and object that holds the text for our game and options and also tracks state
const textAdventure = [
  {
    id: 1,
    description:
      "This is the adventure of Ming, who got lost in elo hell, please help him get out. Select one of the options below.",
    options: [
      {
        buttontext: "Play ADC",
        setState: { headback: true },
        nexttext: 2,
      },
      {
        buttontext: "Uninstall the game",
        alert: alert("Ming would never uninstall the game, pleas choose another option");
        message: console.log("Ming would never uninstall! ^_^"),
      },
    ],
  },
  {
    id: 2,
    description:
      "great, we are going in the right direction! What champion should ming use?",
    options: [
      {
        buttontext: "Play Jinx",
        setState: { headback: true },
        nexttext: 3,
      },
      {
        buttontext: "Play Xayah",
        message: console.log("Try again, Ming has a 29% winrate on Xayah."),
      },
    ],
  },
  {
    id: 3,
    description:
      "Ming is able to get to platinum solo q with Jinx. What should he do next to reach diamond?",
    options: [
      {
        buttontext: "Get a egirl support",
        setState: { headback: true },
      },
      {
        buttontext: "continue with the solo q adventure",
        setState: { daylight: true },
        nexttext: 4,
      },
    ],
  },
  {
    id: 4,
    message: "Thank you for helping Ming! He was able to reach diamond and get out of elo hell",
  },
];


onPlay();