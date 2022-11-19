const winMessageBox=document.querySelector(".winMessage-box")
const cross=document.querySelector("#cross")
const showWinMessage=()=>{
    document.querySelector(".message h2").innerHTML=`Congratulation! You sloved the Sudoku in ${timer.minute} Minute and ${timer.second} Second.`
    winMessageBox.classList.remove("not-show")
}
cross.addEventListener("click",()=>{
    if(!winMessageBox.classList.contains("not-show")){
        winMessageBox.classList.add("not-show")
    }
})