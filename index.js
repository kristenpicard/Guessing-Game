let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let winMessage = document.getElementById("win");
let reset = document.getElementById("reset");

let one = "hidden";
let two = "hidden";
let three = "hidden";

// Empties boxes and takes away You Win message
function resetBoard() {
  button1.innerHTML = "";
  button2.innerHTML = "";
  button3.innerHTML = "";
  winMessage.innerHTML = "";
  one = "hidden";
  two = "hidden";
  three = "hidden";
}

// Shows the number "behind" the card clicked and calls wait sec func
function showNumber(button) {
  if (button.id == "btn1") {
    button1.innerHTML = "1";
    one = "shown";
  } else if (button.id == "btn2") {
    button2.innerHTML = "2";
  } else if (button.id == "btn3") {
    button3.innerHTML = "3";
  }
  waitOneSec(button);
}

// Waits 1 second before calling check if the number should stay showing
function waitOneSec(button) {
  setTimeout(function () {
    checkIfShouldStayUp(button);
  }, 1000);
}

// If all three buttons filled, displays win message
function checkIfDone() {
  if (
    button1.innerHTML != "" &&
    button2.innerHTML != "" &&
    button3.innerHTML != ""
  ) {
    winMessage.innerHTML = "You Win!!!";
  }
}

// Checks chosen button in relation to other buttons. Changes the inner HTML if needed AND changes status.
function checkIfShouldStayUp(button) {
  if (one == "hidden" && button.id == "btn2") {
    button2.innerHTML = "";
  } else if (one == "shown" && button.id == "btn2") {
    two = "shown";
  } else if (one == "hidden" && button.id == "btn3") {
    button3.innerHTML = "";
  } else if (one == "shown" && two == "hidden" && button.id == "btn3") {
    button3.innerHTML = "";
  } else if (one == "shown" && two == "shown" && button.id == "btn3") {
    button3.innerHTML = "3";
    three = "shown";
  }
}

// What happens upon clicking either boxes or reset
function onClick(event) {
  let clickedButton = event.target;

  // If they click a box, this is called
  showNumber(clickedButton);

  // Called after each click
  checkIfDone(clickedButton);

  // If click reset button, calls resetBoard function
  if (clickedButton == reset) {
    resetBoard();
  }
}

button1.addEventListener("click", onClick);
button2.addEventListener("click", onClick);
button3.addEventListener("click", onClick);
reset.addEventListener("click", onClick);
