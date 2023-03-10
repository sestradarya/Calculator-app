const historyScreen = document.getElementById('history')
const inputScreen = document.getElementById('input')

document.addEventListener('click', (event) => {
    if(event.target.localName === 'button'){
        if(event.target.innerHTML === 'AC'){
            clearInputScreen()
        }
        else if(event.target.innerHTML === 'CE'){

        }
        else if(event.target.innerHTML === '='){
            getResult()
        }
        else{
            inputScreen.textContent += event.target.innerHTML
        }
    }
})

function clearInputScreen(){
    inputScreen.innerHTML = ' '
}  

function deleteLast

function getResult(){
    const textExpr = inputScreen.innerHTML;
    const expr = eval(textExpr);
    historyScreen.innerHTML = textExpr;
    inputScreen.innerHTML = expr;
}