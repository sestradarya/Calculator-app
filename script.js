const historyScreen = document.getElementById('history')

document.addEventListener('click', (event) => {
    if(event.target.localName === 'button'){
        if(event.target.innerHTML === 'AC'){
            clearScreen()
        }
        else{
            historyScreen.innerHTML += event.target.innerHTML
        }
    }
})

function clearScreen(){
    historyScreen.innerHTML = ''
}