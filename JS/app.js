const sudokuContainer=document.querySelector(".sudoku")
const gameStartBtn=document.querySelector("#gameStart")
let runtime=0
let _values_=[].initiateValuesArray(3)
init(3)
const boxes=[...document.querySelectorAll(".box")]
// gameStartBtn event listener
gameStartBtn.addEventListener("click",()=>{
    const level=document.querySelector("#difficulty").value
    const difficulty={
        "Easy":33,
        "Intermediate":18,
        "Hard":12
    }
    boxes.forEach((box)=>{
        box.innerHTML=""
        box.classList.remove("given")
    })
    createPuzzle(difficulty[level])
    timer.minute=0
    timer.second=0
    timer.pauseit()
    timer.playit()
    document.querySelector("#minute").innerHTML="00"
    document.querySelector("#second").innerHTML="00"
    runtime++
})
// boxes event listeners
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        boxes.forEach(b=>{
            b.classList.remove("focused")
        })
        if(!box.classList.contains("given") && timer.pause==false){
            box.classList.add("focused")
        }
    })
})