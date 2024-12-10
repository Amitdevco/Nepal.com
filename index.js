/// for section-one 
/// appearing paragraph
/// on clicking on .faq1 #btn 
/// appear .section-one #ans1

function Appear(){
    let ans = document.getElementById('ans1');
    let btn1 = document.getElementById('btn1');
    let btn = document.getElementById('btn');
    ans.style.display = "block";
    btn1.style.display = "block";
    btn.style.display = "none";
    btn1.style.backgroundImage = "url('img/up.png')"
}

function Disappear(){
    let ans = document.getElementById('ans1');
    let btn = document.getElementById('btn');
    let btn1 = document.getElementById('btn1');
    ans.style.display = "none";
    btn.style.display = "block";
    btn1.style.display = "none";
}


function Appearfestival(){
    let btn1 = document.getElementById('btn1');
    let ans = document.getElementById('ans1');
    let ansfestival = document.getElementById('ans1festival');
    let btn1festival = document.getElementById('btn1festival');
    let btnfestival = document.getElementById('btnfestival');
    ansfestival.style.display = "block";
    btn1festival.style.display = "block";
    btnfestival.style.display = "none";
    btn1festival.style.backgroundImage = "url('img/up.png')"
    ans.style.display = "none";
    btn1.style.backgroundImage = "url('img/down.png')"
}

function Disappearfestival(){
    let ansfestival = document.getElementById('ans1festival');
    let btnfestival = document.getElementById('btnfestival');
    let btn1festival = document.getElementById('btn1festival');
    ansfestival.style.display = "none";
    btnfestival.style.display = "block";
    btn1festival.style.display = "none";

}
