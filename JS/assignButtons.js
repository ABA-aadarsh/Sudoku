const assignbuttons=[...document.querySelectorAll(".values-buttons button")]
const sudokuCompleteOrNot=()=>{
    const totalFilled=[...document.querySelectorAll(".filled")]
    if(mistakes.length==0 && totalFilled.length==81){
        return true
    }
    return false
}
const action={
    "enter-1":1,
    "enter-2":2,
    "enter-3":3,
    "enter-4":4,
    "enter-5":5,
    "enter-6":6,
    "enter-7":7,
    "enter-8":8,
    "enter-9":9,
    "clear": "",
}
assignbuttons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        const box=document.querySelector(".focused")
        const btnAction=btn.id
        if(box!=null && timer.pause==false){
            // some box is focused
            const blockNo=parseInt(box.parentElement.id.slice(6))
            const boxNo=parseInt(box.id.slice(4))
            if(!box.classList.contains("given")){
                box.innerHTML=action[btnAction]
                _values_[blockNo][boxNo]=action[btnAction]
                // mistake check
                mistakesArrayRecheck()
                mistakeCheckforBox(box)
                if(btnAction=="clear"){
                    box.classList.remove("filled")
                }else{
                    box.classList.add("filled")
                }
                // checking the sudoku is complete or not
                if(sudokuCompleteOrNot()==true){
                    // there are no mistakes and all boxes are filled
                    timer.pauseit()
                    console.log("Congratulation You completed the Game")
                }
            }
        }
    })
})

// keyboard assign event
window.addEventListener("keydown",(e)=>{
    const box=document.querySelector(".focused")
    const blockNo=parseInt(box.parentElement.id.slice(6))
    const boxNo=parseInt(box.id.slice(4))
    if(box!=null && timer.pause==false){
        const validKeys=["0","1","2","3","4","5","6","7","8","9"]
        if(validKeys.indexOf(e.key)!=-1){
            if(e.key=="0"){
                _values_[blockNo][boxNo]=""
                box.innerHTML=""
                box.classList.remove("filled")
            }else{
                _values_[blockNo][boxNo]=parseInt(e.key)
                box.innerHTML=e.key
                box.classList.add("filled")
            }
            // mistake check
            mistakesArrayRecheck()
            mistakeCheckforBox(box)
            // checking the sudoku is complete or not
            if(sudokuCompleteOrNot()==true){
                // there are no mistakes and all boxes are filled
                timer.pauseit()
                showWinMessage()
                runtime=0
            }
        }
    }
})