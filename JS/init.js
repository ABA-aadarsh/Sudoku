Array.prototype.initiateValuesArray=(n)=>{
    const arr=[]
    for(let i=0;i<n*n;i++){
        const a=[]
        for(let j=0;j<n*n;j++){
            a.push("")
        }
        arr.push(a)
    }
    return arr
}

const init=(n)=>{
    // 3X3 in one block => n=3  => there are in total n*n blocks
    // set blocks
    let rowNo=1
    let columnNo=1
    for(let i=0;i<n*n;i++){
        const block=document.createElement("div")
        block.classList.add("block")
        block.id=`block-${i}`
        sudokuContainer.appendChild(block)
        // putting boxes inside the block
        let counter=0
        for(let r=0;r<n;r++){
            for(let c=0;c<n;c++){
                const box=document.createElement("div")
                box.classList.add("box",`row-${r+rowNo}`,`column-${c+columnNo}`)
                box.id=`box-${counter}`
                counter++
                box.tabIndex=0  //to use focus in css 
                block.appendChild(box)
                // // setting labels in box
                // box.innerHTML=`
                // <label class="valid">1</label>
                // <label class="valid">2</label>
                // <label class="valid">3</label>
                // <label class="valid">4</label>
                // <label class="valid">5</label>
                // <label class="valid">6</label>
                // <label class="valid">7</label>
                // <label class="valid">8</label>
                // <label class="valid">9</label>`
            }
        }
        if(columnNo<(n*n-n+1)){
            columnNo+=n
        }else{
            columnNo=1
            rowNo+=n
        }
    }
    // giving no
    let count=1
    for(let r=1;r<=9;r++){
        for(let c=1;c<=9;c++){
            const box=document.querySelector(`.row-${r}.column-${c}`)
            box.classList.add(`no-${count}`)
            count++
        }
    }
}