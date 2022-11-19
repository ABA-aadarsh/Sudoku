const getRandomSet=()=>{
    // randomize the array [1,2,3,4,5,6,7,8,9]
    const simpleSet=[1,2,3,4,5,6,7,8,9]
    const randomizedSet=[]
    for(let i=1;i<=9;i++){
        const r=simpleSet[Math.floor(Math.random()*simpleSet.length)]
        randomizedSet.push(r)
        simpleSet.splice(simpleSet.indexOf(r),1)
    }
    // console.log(randomizedSet)
    return randomizedSet
}
const createPuzzle=(givens=17)=>{
    _values_=[].initiateValuesArray(3)
    const nL=getRandomSet()
    const puzzles=[
            [
                nL[0] , nL[1] , nL[2] , nL[3] , nL[4] , nL[5] , nL[6] , nL[7] , nL[8] ,
                nL[4] , nL[6] , nL[3] , nL[7] , nL[1] , nL[8] , nL[0] , nL[5] , nL[2] ,
                nL[5] , nL[8] , nL[7] , nL[2] , nL[6] , nL[0] , nL[3] , nL[1] , nL[4] ,
                nL[7] , nL[2] , nL[5] , nL[0] , nL[8] , nL[1] , nL[4] , nL[6] , nL[3] ,
                nL[8] , nL[0] , nL[1] , nL[6] , nL[3] , nL[4] , nL[7] , nL[2] , nL[5] ,
                nL[3] , nL[4] , nL[6] , nL[5] , nL[2] , nL[7] , nL[8] , nL[0] , nL[1] ,
                nL[1] , nL[3] , nL[0] , nL[8] , nL[7] , nL[2] , nL[5] , nL[4] , nL[6] ,
                nL[6] , nL[5] , nL[4] , nL[1] , nL[0] , nL[3] , nL[2] , nL[8] , nL[7] ,
                nL[2] , nL[7] , nL[8] , nL[4] , nL[5] , nL[6] , nL[1] , nL[3] , nL[0] 
            ],
            [
                nL[0] , nL[1] , nL[2] , nL[3] , nL[4] , nL[5] , nL[6] , nL[7] , nL[8] , 
                nL[3] , nL[4] , nL[7] , nL[8] , nL[0] , nL[6] , nL[1] , nL[2] , nL[5] , 
                nL[8] , nL[6] , nL[5] , nL[1] , nL[2] , nL[7] , nL[4] , nL[0] , nL[3] , 
                nL[1] , nL[8] , nL[4] , nL[5] , nL[7] , nL[0] , nL[3] , nL[6] , nL[2] , 
                nL[7] , nL[2] , nL[0] , nL[6] , nL[3] , nL[4] , nL[5] , nL[8] , nL[1] , 
                nL[6] , nL[5] , nL[3] , nL[2] , nL[1] , nL[8] , nL[7] , nL[4] , nL[0] , 
                nL[4] , nL[7] , nL[8] , nL[0] , nL[5] , nL[3] , nL[2] , nL[1] , nL[6] , 
                nL[2] , nL[3] , nL[6] , nL[7] , nL[8] , nL[1] , nL[0] , nL[5] , nL[4] , 
                nL[5] , nL[0] , nL[1] , nL[4] , nL[6] , nL[2] , nL[8] , nL[3] , nL[7] 
            ],
            [
                nL[0] , nL[1] , nL[2] , nL[3] , nL[4] , nL[5] , nL[6] , nL[7] , nL[8] , 
                nL[7] , nL[4] , nL[5] , nL[6] , nL[8] , nL[1] , nL[0] , nL[3] , nL[2] , 
                nL[3] , nL[8] , nL[6] , nL[2] , nL[7] , nL[0] , nL[1] , nL[5] , nL[4] , 
                nL[8] , nL[2] , nL[1] , nL[0] , nL[5] , nL[7] , nL[4] , nL[6] , nL[3] , 
                nL[5] , nL[7] , nL[4] , nL[1] , nL[6] , nL[3] , nL[2] , nL[8] , nL[0] , 
                nL[6] , nL[3] , nL[0] , nL[4] , nL[2] , nL[8] , nL[7] , nL[1] , nL[5] , 
                nL[1] , nL[5] , nL[7] , nL[8] , nL[0] , nL[2] , nL[3] , nL[4] , nL[6] , 
                nL[4] , nL[0] , nL[3] , nL[5] , nL[1] , nL[6] , nL[8] , nL[2] , nL[7] , 
                nL[2] , nL[6] , nL[8] , nL[7] , nL[3] , nL[4] , nL[5] , nL[0] , nL[1] 
            ]
    ]
    const puzzle=puzzles[Math.floor(Math.random()*puzzles.length)]
    // setting which boxes will be given
    let n=0
    const givenSet=[]
    while(n<givens){
        const r=Math.floor(Math.random()*81)+1
        if(givenSet.indexOf(r)==-1){
            givenSet.push(r)
            n++;
        }
    }
    // displaying givens
    givenSet.forEach(n=>{
        const box=document.querySelector(`.no-${n}`)
        const blockNo=parseInt(box.parentElement.id.slice(6))
        const boxNo=parseInt(box.id.slice(4))
        box.innerHTML=puzzle[n-1]
        box.classList.add("given")
        box.classList.add("filled")
        _values_[blockNo][boxNo]=puzzle[n-1]
    })
}