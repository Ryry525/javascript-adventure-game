console.log("script is loading");

// select the countainer of the game description
const descriptionText = document.querySelector(".adventure-description");
const optionButtons = document.getElementsByClassName("button");

let startIndex = 1;
console.log(startIndex);

function startAdventure (objectID) {
  console.log("Adventure has started");
  
  let ids = textAdventure.map((item) => {
    return item.id;
  });

  if (startIndex > ids.length - 1 ) {
    startIndex = 0;
  }
  
  showAdventureOptions(ids[startIndex])
}

function showAdventureOptions(textAdventureID) {

  const newDescriptionText = textAdventure.find((gameNode) => gameNode.id ===textAdventureID);
 
// create a condition that checks if there are options, and then hide a button and display "play again" in the button that is on the screen
if(!newDescriptionText.options) {

  // hide button at the end of the game
  let myButton = document.getElementById("first_btn").style.display = "none";
  
  descriptionText.innerHTML = newDescriptionText.message;

  document.getElementById("second_btn").innerHTML = "play again";
  return;
}

  descriptionText.innerText = newDescriptionText.description; 

  // iterate through the buttons and insert the option text in each button
  for(let i = 0; i < newDescriptionText.options.length; i++) {
    optionButtons[i].innerText = newDescriptionText.options[i].buttontext;
  }
}

// functions for button event

function onNextOption(event) {
  event.preventDefault();
  startIndex++;
  startAdventure()
}

function onPlayAgain(event) {
  event.preventDefault();
  document.getElementById("first_btn").style.display = "inline";
  startIndex = 0;
  startAdventure()
}

const textAdventure = [
  {
    id: 1,
    description: 'This is the adventure of ming, who got lost in elo hell, please help him get out and reach diamond',
    options: [
    {
      buttontext: "Play ADC",
      setState: { headback: true },
      nexttext: 2,
    },
    {
     buttontext: "Uninstall the game",
     message: () => { alert("Try agan")},
    }
  ]
},
{ 
  id: 2, 
  description:"great, we are on the right track, but now he has to decide what champion he wants to main",
  options: [
    {
      buttontext: "main Jinx",
      setState: { headback:true },
      nexttext: 3
    },
    {
      buttontext: "play Xayah",
      message: console.log("Try again, he has a 29% winrate on xayah"),
    }
  ]
},
{
  id: 3,
  description: ""
}
]

startAdventure(startIndex);