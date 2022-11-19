const playPause=document.querySelector(".playpause button")
const icon=document.querySelector(".playpause button i")
class TIMER {
    constructor(){
        this.second=0
        this.minute=0
        this.pause=true
        this.timerUpdate=null
    }
    playit(){
        this.pause=false
        icon.classList.remove("fa-play-circle")
        icon.classList.add("fa-pause-circle")
        this.timerUpdate=setInterval(()=>{
            this.second++
            if(this.second==60){
                this.minute++
                this.second=0
            }
            if(this.second<10){
                document.querySelector("#second").innerHTML=`0${this.second}`
            }else{
                document.querySelector("#second").innerHTML=this.second
            }
            if(this.minute<10){
                document.querySelector("#minute").innerHTML=`0${this.minute}`
            }else{
                document.querySelector("#minute").innerHTML=this.minute
            }
        },1000)
    }
    pauseit(){
        this.pause=true
        icon.classList.add("fa-play-circle")
        icon.classList.remove("fa-pause-circle")
        clearInterval(this.timerUpdate)
    }
}
const timer=new TIMER()
playPause.addEventListener("click",()=>{
    if(runtime!==0){    
        if(playPause.classList.contains("play")){
            timer.playit()
            playPause.classList.remove("play")
            // showing the content of the boxes
            boxes.forEach(box=>{
                const blockNo=parseInt(box.parentElement.id.slice(6))
                const boxNo=parseInt(box.id.slice(4))
                box.innerHTML=_values_[blockNo][boxNo]
            })
        }else{
            timer.pauseit()
            playPause.classList.add("play")
            // hiding content of boxes
            boxes.forEach(box=>{
                box.innerHTML=""
            })
        }
    }
})