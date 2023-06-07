const cat = document.querySelector('#cat');
const tanos = document.querySelector('#tanos');
const sun = document.querySelector('#sun');
const earth = document.querySelector('#earth')
const body = document.querySelector('#body')
const contentBox = document.querySelector('#box')
const count = document.querySelector('#count')
let counterJump = 0
const audio = new Audio('8caa51f7d04e20ff8aabc.mp3');

audio.play();
function monitorCat(){
    console.log(catTop)
}
function monitorTan(){
    console.log(tanosLeft)
}
document.addEventListener('keydown', function (evt) {
    if(evt.key === ' '){
        cat.classList.toggle('jump');
        if (cat.classList.contains('jump')){
            setTimeout(removeJump,1000)
        }
    }
});

function finishGame(){
    cat.remove()
    tanos.remove()
    sun.remove()
    earth.remove()
    count.remove()
    const audioZV = new Audio('zvuk-klasicheskiy-zvuk-vzryva.mp3');
    audioZV.play();
}


let alive = setInterval(()=>{
    let catTop = parseInt(getComputedStyle(cat).getPropertyValue('top'))
    let tanosLeft = parseInt(getComputedStyle(tanos).getPropertyValue('left'))
    if(tanosLeft <= 600 && catTop >200 && tanosLeft >= 400){
        const score = document.createElement('h1')
        score.classList.add('score')
        score.textContent = `Your score: ${Math.floor(counterJump)}`
        contentBox.append(score)
        finishGame()
    }if(tanosLeft <= 600 && tanosLeft >595 && catTop !== 420 ){
            counterJump +=0.25
        }

    count.textContent = `score: ${Math.floor(counterJump)}`
},1)

function removeJump(){

    cat.classList.remove('jump')
}