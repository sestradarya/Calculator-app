const historyScreen = document.getElementById("history");
const inputScreen = document.getElementById("input");

document.addEventListener("click", (event) => {
  if (event.target.localName === "button") {
    if (event.target.innerHTML === "AC") {
      clearInputScreen();
    } else if (event.target.innerHTML === "CE") {
      deleteLastCharacter();
    } else if (event.target.innerHTML === "=") {
      getResult();
    } else {
      inputScreen.innerHTML += event.target.innerHTML;
    }
  }
});

function clearInputScreen() {
  inputScreen.innerHTML = " ";
  historyScreen.innerHTML = " ";
}

function deleteLastCharacter() {
  const expr = inputScreen.innerHTML;
  inputScreen.innerHTML = expr.slice(0, -1);
}



function getResult() {
  try {
    const textExpr = inputScreen.innerHTML;
    const expr = eval(textExpr);
    historyScreen.innerHTML = textExpr;
    inputScreen.innerHTML = expr;
  } catch (error) {
    
  }
}

const wrapper = document.querySelector('.wrapper')

function changeTheme(){
  if (wrapper.classList.contains('light-theme')){
    wrapper.classList.remove('light-theme')
    wrapper.classList.add('dark-theme')
  } else{
    wrapper.classList.remove('dark-theme')
    wrapper.classList.add('light-theme')
  }
}

document.querySelector('.slider').addEventListener('click', changeTheme)