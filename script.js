const historyScreen = document.getElementById('history')
const inputScreen = document.getElementById('input')

document.addEventListener('click', (event) => {
    if(event.target.localName === 'button'){
        if(event.target.innerHTML === 'AC'){
            clearInputScreen()
        }
        else{
            inputScreen.textContent += event.target.innerHTML
        }
    }
})

function clearInputScreen(){
    inputScreen.innerHTML = ' '
}  