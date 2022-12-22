let sounds=false;
let amewin=new Audio("music.mp3");
let changeturn=new Audio("ting.mp3");
let mark="X";
let gameover=false;
//funtion for changing value of mark
let text=document.getElementById("decorate");
text.innerHTML="X It's Your Turn";
const changeMark=()=>{
    if(mark==="X"){
    mark="O";
    text.innerHTML="O It's Your Turn";
    if(sounds!=false)
    changeturn.play();
}
    else{
    mark="X";
    text.innerHTML="X It's Your Turn";
    if(sounds!=false)
    changeturn.play();
}
}
//checking for sound
let soundbtn=document.getElementById("soundImg");
soundbtn.addEventListener('click',()=>{
    if(soundbtn.innerHTML==='<img src="/mute-2-xl.png" alt="">'){
    soundbtn.innerHTML='<li id="soundImg"><img src="/volume-up-4-xl.png" alt=""></li></ul>';
    sounds=true;
    }
    else{
    soundbtn.innerHTML='<img src="/mute-2-xl.png" alt="">'
    sounds=false;
    }

})
// alert(soundbtn.innerHTML);//<img src="/img/mute-2-xl.png" alt="soundIcon">
//function to check winner
const checkWin = ()=>{
    let boxes=document.getElementsByClassName("box");
    let data=Array.from(boxes);
    // console.log(check[0].lastElementChild.innerHTML);
    if((data[0].lastElementChild.innerHTML===data[1].lastElementChild.innerHTML&&data[1].lastElementChild.innerHTML===data[2].lastElementChild.innerHTML&&data[2].lastElementChild.innerHTML!=="")||
        (data[3].lastElementChild.innerHTML===data[4].lastElementChild.innerHTML&&data[4].lastElementChild.innerHTML===data[5].lastElementChild.innerHTML&&data[5].lastElementChild.innerHTML!=="")||
        (data[6].lastElementChild.innerHTML===data[7].lastElementChild.innerHTML&&data[7].lastElementChild.innerHTML===data[8].lastElementChild.innerHTML&&data[8].lastElementChild.innerHTML!=="")||
        (data[0].lastElementChild.innerHTML===data[3].lastElementChild.innerHTML&&data[3].lastElementChild.innerHTML===data[6].lastElementChild.innerHTML&&data[6].lastElementChild.innerHTML!=="")||
        (data[1].lastElementChild.innerHTML===data[4].lastElementChild.innerHTML&&data[4].lastElementChild.innerHTML===data[7].lastElementChild.innerHTML&&data[7].lastElementChild.innerHTML!=="")||
        (data[2].lastElementChild.innerHTML===data[5].lastElementChild.innerHTML&&data[5].lastElementChild.innerHTML===data[8].lastElementChild.innerHTML&&data[8].lastElementChild.innerHTML!=="")||
        (data[0].lastElementChild.innerHTML===data[4].lastElementChild.innerHTML&&data[4].lastElementChild.innerHTML===data[8].lastElementChild.innerHTML&&data[8].lastElementChild.innerHTML!=="")||
        (data[2].lastElementChild.innerHTML===data[4].lastElementChild.innerHTML&&data[4].lastElementChild.innerHTML===data[6].lastElementChild.innerHTML&&data[6].lastElementChild.innerHTML!=="")){
            gameover=true;
            if(sounds!=false)
            gamewin.play();
        }
    }
//Main game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerHTML===""&&gameover==false){
            boxtext.innerHTML=mark;
            checkWin(); 
            changeMark();
    }
    if(gameover==true){
        text.style.color="purple";
        if(mark=="X")
        text.innerHTML="Congo! Player O Won";
        else
        text.innerHTML="Congo! Player X Won";
        setTimeout(() => {
            rest();            
        }, 1000);
    }
    })
})
//reset function
function rest(){
    if(sounds!=false){
    setTimeout(() => {
        gamewin.pause();
        
    }, 1000);
}
    text.style.color="white";
    gameover=false;
    mark="X";
    let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    boxtext.innerHTML="";
    text.innerHTML="X It's Your Turn";
})
}
//reset button
let reso=document.getElementById("res");
reso.addEventListener("click",rest);
