const mistakes=[]
const getSet=(range)=>{
    const nset=new Set()
    range.forEach(rbox=>{
        const boxNumber=parseInt(rbox.id.slice(4))
        const blockNumber=parseInt(rbox.parentElement.id.slice(6))
        const value=_values_[blockNumber][boxNumber]
        if(value!=0 && value!=""){
            nset.add(_values_[blockNumber][boxNumber])
        }
    })
    return nset
}
const mistakesArrayRecheck=()=>{
    const mistakeIndex=[]
    for(let i=0;i<mistakes.length;i++){
        const mistakeBox=mistakes[i]
        const flag=mistakeCheckforBox(mistakeBox)
        if(flag==true){
            mistakeIndex.push(i)
        }
    }
    mistakeIndex.forEach(i=>{
        mistakes.splice(i,1)
    })
}
const mistakeCheckforBox=(box)=>{
    const rowNo=parseInt(box.classList[1].slice(4))
    const columnNo=parseInt(box.classList[2].slice(7))
    const blockNo=parseInt(box.parentElement.id.slice(6))
    // getting range to be checked
    const range=[...new Set([
        ...document.querySelectorAll(`.row-${rowNo}`),
        ...document.querySelectorAll(`.column-${columnNo}`),
        ...document.querySelectorAll(`#block-${blockNo} .box`)
    ])]
    range.splice(range.indexOf(box),1)
    // ....................
    const nset=getSet(range)    // getting values in rows, columns, and block for mistake check
    const boxValue=parseInt(box.innerHTML)
    if(nset.has(boxValue) ){
        box.classList.add("mistake")
        if(mistakes.indexOf(box)==-1){
            mistakes.push(box)
        }
    }else{
        box.classList.remove("mistake")
        if(mistakes.indexOf(box)!=-1){
            return true
            // true will be returned which will help to get index mistake box which will be then removed later on
        }
    }
    return false
}