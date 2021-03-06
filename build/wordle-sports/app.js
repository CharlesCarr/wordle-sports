document.addEventListener("DOMContentLoaded", () => {
  // Calling the create square function to create the grid of squares for the game board
  createSquares();

  // Adding an click event to overlay button to fire closeOverlay function
  document
    .getElementById("overlay-btn")
    .addEventListener("click", closeOverlay);

  // is an array with an array inside of it - keeping a record of all the words
  let guessedWords = [[]];
  // assigning the available space to equal 1 at the start (this means that the starting position of the game will be the first square as reflected with its id)
  // will change this in a function after the letter is clicked and added as text content to that square so will go up in value one each time
  let availableSpace = 1;

  // this will be the correct word in the game - what the user is trying to guess (just initializing the variable and then with API will assign)
  // (to start I will remove the API and hard code the word)
  // global variable so that I can use in the getNewTeamName function w/o error
  var word;
  let guessedWordCount = 0;

  // setting variable for all the keys of the keyboard
  const keys = document.querySelectorAll(".keyboard-row button");

  // Replacement for the API - copy/pasting this from sportsTeams js file as want to use my own data
  // teamsArr is all of the big four sports team names with seven letters
  const teamsArr = [
    "Sixers",
    "Niners",
    "Angels",
    "Astros",
    "Braves",
    "Brewer",
    "Dodger",
    "Giants",
    "Indian",
    "Marlin",
    "Oriole",
    "Padres",
    "Pirate",
    "Ranger",
    "RedSox",
    "Rockie",
    "Royals",
    "Tigers",
    "Yankee",
    "Bengal",
    "Bronco",
    "Browns",
    "Chiefs",
    "Cowboy",
    "Eagles",
    "Falcon",
    "Giants",
    "Packer",
    "Raider",
    "Ravens",
    "Saints",
    "Texans",
    "Titans",
    "Viking",
    "Celtic",
    "Hornet",
    "Knicks",
    "Lakers",
    "Nugget",
    "Pacers",
    "Piston",
    "Raptor",
    "Rocket",
    "Wizard",
    "Coyote",
    "Bruins",
    "Sabres",
    "Flames",
    "Oilers",
    "Devils",
    "Ranger",
    "Flyers",
    "Sharks",
    "Kraken",
    "Canuck",
    "Knight",
  ];
  const lowerTeams = teamsArr.map((element) => {
    return element.toLowerCase();
  });
  word = lowerTeams[Math.floor(Math.random() * 56)];

  // Commenting this out for hosting but this is the correct word
  // console.log(word);

  function getCurrentWordArr() {
    // number of guessed words so far - checks the length of the array
    // (amount of full words in that array - to determine how many are guessed and then how mnay are left)
    const numberOfGuessedWords = guessedWords.length;
    //   return the actual array that we are updating
    return guessedWords[numberOfGuessedWords - 1];
  }

  function updateGuessedWords(letter) {
    // calling the above function to get the actual array and set it as a variable
    const currentWordArr = getCurrentWordArr();

    //   checking to make sure that we haven't filled in 5 letters that word array yet
    if (currentWordArr && currentWordArr.length < 6) {
      //  adding the letter to the array
      currentWordArr.push(letter);

      // saving the available space of how many more letters can be entered into that row
      // getting the element of the id of the space where the next letter should go
      const availableSpaceEl = document.getElementById(String(availableSpace));

      // sets the available space to the next letter in the word
      availableSpace = availableSpace + 1;
      // text content of the available space is the letter that we have passed in
      availableSpaceEl.textContent = letter;
    }
  }

  function updateColors(letter, index) {
    // if the letter is correct - if the word includes the letter
    const isCorrectLetter = word.includes(letter);

    // get the letters from keyboard - with All this will return a Node list
    let keyboardLetters = document.querySelectorAll(".letter-key");
    // convert Node List to an array
    let keyboardLettersArr = Array.from(keyboardLetters);

    //   if it is not the correct letter
    if (!isCorrectLetter) {
      // keyboard letter with that letter now has new background color - dark gray
      for (l = 0; l < keyboardLettersArr.length; l++) {
        if (keyboardLettersArr[l].innerHTML === letter) {
          keyboardLettersArr[l].style.backgroundColor = "#181818";
        }
      }
      //   returning the gray color
      return "rgb(58, 58, 60)";
    }

    //   getting the character in the word at the index that we have passed in
    const letterInThatPosition = word.charAt(index);
    //   if the letter equals the letter in that position
    const isCorrectPosition = letter === letterInThatPosition;

    //   if it is the correct position
    if (isCorrectPosition) {
      // keyboard letter with that letter now has new background color - dark gray
      for (l = 0; l < keyboardLettersArr.length; l++) {
        if (keyboardLettersArr[l].innerHTML === letter) {
          keyboardLettersArr[l].style.backgroundColor = "rgb(83, 141, 78)";
        }
      }
      //   returning the green color
      return "rgb(83, 141, 78)";
    }
    // keyboard letter with that letter now has new background color - dark gray
    for (l = 0; l < keyboardLettersArr.length; l++) {
      if (keyboardLettersArr[l].innerHTML === letter) {
        keyboardLettersArr[l].style.backgroundColor = "rgb(181, 159, 59)";
      }
    }
    //   otherwise returning the yellow color
    return "rgb(181, 159, 59)";
  }

  function handleSubmitWord() {
    // get the word in that line (within that array)
    const currentWordArr = getCurrentWordArr();
    //   turns the array into a string
    const currentWord = currentWordArr.join("");
    //   if the current word array length is not equal to 5 (not a full word)
    if (currentWordArr.length !== 6) {
      // in wordle app there is a small overlay container in the middle of the current guess location
      // it appears and then disappears on its own
      let overlay = document.getElementById("overlay");
      let cardHeader = document.getElementById("card-header");
      let cardTextOne = document.getElementById("card-text-one");
      let cardTextTwo = document.getElementById("card-text-two");
      let cardTextThree = document.getElementById("card-text-three");
      let cardBtn = document.getElementById("overlay-btn");

      overlay.style.display = "flex";
      cardHeader.innerHTML = "ALERT";
      cardTextOne.innerHTML = "Team name must be 6 letters";
      cardTextTwo.innerHTML = "";
      cardTextThree.innerHTML = "";
      cardBtn.innerHTML = "Continue";

      // *** Right now the tiles are still checked but I do not want them to be checked and definitely not reflected as green/yellow/gray on UI
      // will need to write something here to do this
      // (simple fix of just adding this else statement and wrapping rest of code in it)
    } else {
      if (!lowerTeams.includes(currentWord)) {
        let overlay = document.getElementById("overlay");
        let cardHeader = document.getElementById("card-header");
        let cardTextOne = document.getElementById("card-text-one");
        let cardTextTwo = document.getElementById("card-text-two");
        let cardTextThree = document.getElementById("card-text-three");
        let cardBtn = document.getElementById("overlay-btn");

        overlay.style.display = "flex";
        cardHeader.innerHTML = "ALERT";
        cardTextOne.innerHTML = "Team name is not recognized!";
        cardTextTwo.innerHTML = "";
        cardTextThree.innerHTML = "";
        cardBtn.innerHTML = "Continue";
      } else {
        // getting the first letter id by using the originally set guessedwordcount as 0 and then multiplying it by 6 and adding 1 (b/c length / array number difference)
        const firstLetterId = guessedWordCount * 6 + 1;
        //   Interval for animation
        const interval = 200;
        //   for each letter and using the index
        currentWordArr.forEach((letter, index) => {
          //   set time out for animation
          setTimeout(() => {
            // calls function for getting the appropriate tile colors (this will grab either the green or yellow)
            const tileColor = updateColors(letter, index);

            //   allows to get the letter id for each specific letter in the word
            const letterId = firstLetterId + index;
            //   getting the element of the letter
            const letterEl = document.getElementById(letterId);
            //   Adding class that is part of external animation CSS that attached in head of HTML file
            letterEl.classList.add("animate__flipInX");
            //   setting the colors
            letterEl.style = `background-color:${tileColor};border-color:${tileColor}`;
            //   Adding the time interval - so one will go after the other using the index to add more time for each one
          }, interval * index);
        });

        // updating the word count after the check
        guessedWordCount += 1;

        //  if the current word is the correct word
        if (currentWord === word) {
          //   alert the user that they have guessed correctly
          // window.alert("Congratulations!");
          // instead of window.alert want to have another overlay instead
          // maybe I could create this all in a separate function and just call that function
          let overlay = document.getElementById("overlay");
          let cardHeader = document.getElementById("card-header");
          let cardTextOne = document.getElementById("card-text-one");
          let cardTextTwo = document.getElementById("card-text-two");
          let cardTextThree = document.getElementById("card-text-three");
          // capitalizing first letter of word
          let capWord = word.charAt(0).toUpperCase() + word.slice(1);
          let cardBtn = document.getElementById("overlay-btn");

          overlay.style.display = "flex";
          cardHeader.innerHTML = "Congratulations!";
          cardTextOne.innerHTML = `${capWord} is the correct team name!`;
          cardTextTwo.innerHTML = "";
          cardTextThree.innerHTML = "";
          // will then also need to add a click event to reload the page to 'Play Again'
          cardBtn.addEventListener("click", reload);
        }

        //   if the guessedWords array is 6 (they have run out of guesses) and the word is not correct
        if (guessedWords.length === 5 && currentWord !== word) {
          let overlay = document.getElementById("overlay");
          let cardHeader = document.getElementById("card-header");
          let cardTextOne = document.getElementById("card-text-one");
          let cardTextTwo = document.getElementById("card-text-two");
          let cardTextThree = document.getElementById("card-text-three");
          // capitalizing first letter of word
          let capWord = word.charAt(0).toUpperCase() + word.slice(1);
          let cardBtn = document.getElementById("overlay-btn");

          overlay.style.display = "flex";
          cardHeader.innerHTML = "Sorry, you have no more guesses!";
          cardTextOne.innerHTML = `${capWord} is the correct team name!`;
          cardTextTwo.innerHTML = "";
          cardTextThree.innerHTML = "";
          // will then also need to add a click event to reload the page to 'Play Again'
          cardBtn.addEventListener("click", reload);
        }

        guessedWords.push([]);
      }
    }
  }

  function createSquares() {
    // Assign a variable to the game board DOM element
    const gameBoard = document.getElementById("board");

    //   for loop (want 30 squares b/c 6 rows of 5 letters)
    for (let index = 0; index < 30; index++) {
      // Creates a div for the squares
      let square = document.createElement("div");
      // Adding a classes
      square.classList.add("square");
      square.classList.add("animate__animated");
      // Adding an id of the index + 1 (so it will start at 1 b/c index is 0 based)
      // id to represent the number of the square
      square.setAttribute("id", index + 1);
      // Appending each square to the game board
      gameBoard.appendChild(square);
    }
  }

  function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
  }

  function handleDeleteLetter() {
    // getting the current word array
    const currentWordArr = getCurrentWordArr();
    // using pop can mutate the existing array to remove the last letter (returns the removed array element)
    const removedLetter = currentWordArr.pop();

    // reassigning the current word array with one less letter   (?)
    guessedWords[guessedWords.length - 1] = currentWordArr;

    //  getting the last letter element and using the availablespace variable (getting the last letter and not the next letter)
    const lastLetterEl = document.getElementById(String(availableSpace - 1));

    //   removing the text content in HTML
    lastLetterEl.textContent = "";
    //   then fixing the available space to the previous letter
    availableSpace = availableSpace - 1;
  }

  function reload() {
    location.reload();
  }

  // for loop for the keys
  for (let i = 0; i < keys.length; i++) {
    // adding an onclick to all the keys
    keys[i].onclick = ({ target }) => {
      //   getting the actual letter
      const letter = target.getAttribute("data-key");

      // if the letter selected is enter we need to call a new function for what the enter will do
      if (letter === "enter") {
        handleSubmitWord();
        // within this I want to update the keyboard as well to reflect the guessed letters
        return;
      }

      // if the letter selected is the delete key then
      if (letter === "del") {
        // call this delete function
        handleDeleteLetter();
        return;
      }

      // calling the function to update the letter into the array that saves the guessed letters of the word
      updateGuessedWords(letter);
    };
  }
});
