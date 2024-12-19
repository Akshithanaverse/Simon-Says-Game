let game_seq=[];
let user_seq=[];
let btns=["yellow","red","green","blue"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function()
{
    if(started==false)
    {
        console.log("game has been started");
        started=true;
        levelUp();
    }
});
function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
{
    btn.classList.remove("flash")
},250);
}
function userFlash(btn)
{
    btn.classList.add("userFlash");
    setTimeout(function()
{
    btn.classList.remove("userFlash")
},250);
}
function levelUp()
{
    level++;
    h2.innerText=`Level ${level}`;

    //random button choose
    let randIndx=Math.floor(Math.random()*4);
    let randColor=btns[randIndx];
    let randBtn=document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
}

function btnPress()
{
    let btn=this;
    userFlash(btn);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}