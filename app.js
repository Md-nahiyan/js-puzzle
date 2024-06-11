// TODO 1: Generate PIN - done
// TODO 2: Make the keypad functional - done
// TODO 3: Make Notification Work - 
// TODO 4: Make try out functional - 
// TODO 5: Make "<" and "C" work on the keypress - 
// TODO 6: If there is no try left user won't able to generate a new pin - 


const generateBtn = document.querySelector(".generate-btn");
const generatedPin = document.querySelector(".generatedPin");
const  showValue = document.querySelector(".showValue");
const submitBtn = document.querySelector(".submit-btn");
const correctPin = document.querySelector(".correct-pin");
const wrongPin = document.querySelector(".wrong-pin");
const tryLeft = document.getElementById("tryLeft");

function showgenerated () {
  let showgenerate = Math.floor( Math.random() * 9000 + 1000);
  generatedPin.value = showgenerate;
  generateBtn.disabled = true;
}

function showKeyPadInput (number) {

  if (tryLeft.innerText >= 0 ) {
    if (generatedPin.value == "") {
      alert("please insert your number")
  
    }
    else{
      showValue.value += number;
    }
  
    if (number == "C") {
      showValue.value = "";
    }
  }


}


// once click on remove single digit
function removeSingleDigit() {
  if (generatedPin.value == "") {
    alert("please insert your number")
  }
  else{
    let currentPin = showValue.value;
    showValue.value = currentPin.slice(0, -1);
  }
}

// check generated pin

function checkGeneratedPin() {
  let newPin = generatedPin.value;
  let currentPin = showValue.value;
  let newPins = ""
  if () {
    
  }
  if (newPin === currentPin) {
    showCorrectNotification();
  }
  else{
    showWrongNotification();
    numberOfTry();
  }
}

// show coreect notification

function showCorrectNotification() {
  correctPin.style.display = "block";
  wrongPin.style.display = "none";
  generateBtn.style.backgroundColor = "green";
  submitBtn.style.backgroundColor = "green";
  submitBtn.disabled = true;
}
// show wromg notification 

function showWrongNotification() {
  wrongPin.style.display = "block";
  correctPin.style.display = "none";
  generateBtn.style.backgroundColor = "red";
  submitBtn.style.backgroundColor = "red";
  showValue.value = "";
}

// Notification hide 

function hideNotification () {
  correctPin.style.display = "none"; 
  wrongPin.style.display = "none";
}

// check number of chances left
function numberOfTry(){
  let chances = tryLeft.innerText;
  if (chances > 0) {
    tryLeft.innerText = --chances;
  }
  else{
    tryLeft.innerText = "No try Left!, Please try agin 30 hourse ago";
    submitBtn.disabled =  true;
  }
}

hideNotification();

generateBtn.addEventListener("click", showgenerated);

submitBtn.addEventListener("click", checkGeneratedPin);

