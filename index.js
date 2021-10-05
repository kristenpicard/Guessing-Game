let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let winMessage = document.getElementById("win");
let reset = document.getElementById("reset");

let one = "hidden";
let two = "hidden";
let three = "hidden";

// pure function
function waitInSeconds(func, n) {
  setTimeout(func, n * 1000);
}

// pure function
function isDone(button1, button2, button3) {
  if (
    button1.innerHTML != "" &&
    button2.innerHTML != "" &&
    button3.innerHTML != ""
  ) {
    return true;
  } else {
    return false;
  }
}

// pure function
function shouldShow(button) {
  if (button.id == "btn3" && (two == "hidden" || one == "hidden")) {
    return false;
  } else if (button.id == "btn2" && one == "hidden") {
    return false;
  } else {
    return true;
  }
}

function showNumber(button) {
  if (button.id == "btn1") {
    button1.innerHTML = "1";
    one = "shown";
  } else if (button.id == "btn2") {
    button2.innerHTML = "2";
    two = "shown";
  } else if (button.id == "btn3") {
    button3.innerHTML = "3";
    three = "shown";
  }
}

function hideNumber(button) {
  if (button.id == "btn1") {
    button1.innerHTML = "";
    one = "hidden";
  } else if (button.id == "btn2") {
    button2.innerHTML = "";
    two = "hidden";
  } else if (button.id == "btn3") {
    button3.innerHTML = "";
    three = "hidden";
  }
}

// What happens upon clicking either boxes or reset
function onClick(event) {
  let clickedButton = event.target;

  showNumber(clickedButton);

  waitInSeconds(function () {
    if (shouldShow(clickedButton)) {
      // do nothing
    } else {
      console.log("test");
      hideNumber(clickedButton);
    }
  }, 1);

  if (isDone(button1, button2, button3)) {
    winMessage.innerHTML = "You Win!!!";
  }
}

// Empties boxes and takes away You Win message
function onClickReset() {
  button1.innerHTML = "";
  button2.innerHTML = "";
  button3.innerHTML = "";
  winMessage.innerHTML = "";
  one = "hidden";
  two = "hidden";
  three = "hidden";
}

button1.addEventListener("click", onClick);
button2.addEventListener("click", onClick);
button3.addEventListener("click", onClick);
reset.addEventListener("click", onClickReset);
