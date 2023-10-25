const numberOnScreen = document.querySelector(".number_viewer")

function decrementFunction() {
    if(Number(numberOnScreen.innerHTML) == 0) {
        Number(numberOnScreen.innerHTML) = 0
    }

    numberOnScreen.innerHTML = Number(numberOnScreen.innerHTML) -1
}

function incrementFunction() {
    numberOnScreen.innerHTML = Number(numberOnScreen.innerHTML) +1
}

function resetFunction() {
    numberOnScreen.innerHTML = 0
}