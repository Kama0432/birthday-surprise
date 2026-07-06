function checkPassword() {

    let pass = document.getElementById("password").value;

    if (pass === "queenlots") {

       document.getElementById("passwordPage").style.display="none";

startCountdown();
        const bgMusic = document.getElementById("bgMusic");

bgMusic.volume = 0.15;   // 15% volume

bgMusic.play();

    } else {

        document.getElementById("error").innerHTML = "❌ Wrong Password";

    }

}

// ---------------- Welcome → Wish Page ----------------

const startBtn = document.getElementById("startJourney");

startBtn.addEventListener("click", function () {

   changePage(

document.getElementById("welcomePage"),

document.getElementById("wishPage"),

function(){

    typeWriter();

}

);

});

// ---------------- Typewriter Effect ----------------

const message = `Happy Birthday My Queen❤️

Pata hai kaafi time se hamari baat pehle jaisi nahi rahi, aur shayad waqt ke saath bahut si cheezein bhi badal gayi Aaj tumhare birthday par bas itna hi kehna chahta hoon ki dil se dua karta hoon tumhe duniya ki har khushi mile, har sapna poora ho aur zindagi tumhe woh sab de jiski tumne kabhi dil se khwahish ki ho. Tum hamesha muskurati raho, sehatmand raho aur apni life mein bahut aage badho. Chahe hamari baat kam ho gayi ho, meri dua hamesha yahi rahegi ki tumhari zindagi pyaar, sukoon, izzat aur duniya ki har khushi se bhari rahe.
Enjoy your special day. ❤️`;

let i = 0;

function typeWriter() {

    if (i < message.length) {

        document.getElementById("typingText").innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter, 35);

    }

}

// Wish → Memory Page

document.getElementById("nextMemory").addEventListener("click", function () {

    document.getElementById("wishPage").style.display = "none";

    document.getElementById("memoryPage1").style.display = "flex";

    document.getElementById("memoryText").innerHTML = "";

    m = 0;

    memoryTyping();

});

// Memory Page Typing

const memoryMessage = `Thank you sooo much 🥺

wo khoobsurat or achi yaadon ke liye jo humne kabhi saath mein banayi thi, unke liye dil se shukriya❣️. Zindagi mein kuch lamhe aise hote hain jo waqt ke saath beet zaroor jaate hain, lekin unki yaadein hamesha dil mein basi rehti hain. Hamare saath bitaaye hue woh pal bhi mere liye hamesha khaas rahenge. Waqt chahe kitna bhi badal jaye aur zindagi humein alag raaston par le aaye, un yaadon ki ehmiyat mere liye kabhi kam nahi hogi. Main unhe hamesha ek khoobsurat ehsaas aur apni zindagi ke ek pyare hissa ke roop mein yaad rakhunga.`;

let m = 0;

function memoryTyping() {

    if (m < memoryMessage.length) {

        document.getElementById("memoryText").innerHTML += memoryMessage.charAt(m);

        m++;

        setTimeout(memoryTyping, 35);

    }

}

// Memory 2 Typing

const memoryMessage2 = `Har tasveer sirf ek photo nahi hoti,

Uske saath kai ehsaas, hasi aur yaadein judi hoti hain. Syd tum is pic ko dekhkr gussa hogi bht 😅
but tmhe ye pic meri fvrt pic me se ek h kyuki ye pic tb ki h jab hm log new new friend bne the😂

Thank you for being a beautiful part of those memories. ❤️`;

let m2 = 0;

function memoryTyping2(){

    if(m2 < memoryMessage2.length){

        document.getElementById("memoryText2").innerHTML += memoryMessage2.charAt(m2);

        m2++;

        setTimeout(memoryTyping2,35);

    }

}

document.getElementById("nextMemory1").addEventListener("click",function(){

    document.getElementById("memoryPage1").style.display="none";

    document.getElementById("memoryPage2").style.display="flex";

    document.getElementById("memoryText2").innerHTML="";

    m2=0;

    memoryTyping2();

});// Memory Page 3 Typing

const memoryMessage3 = `Bas dil se yahi dua karta hoon ki tumhari zindagi mein kabhi aisa koi waqt na aaye jab tumhe kisi takleef ya pareshani ka saamna karna pade.
 Kyunki shayad ab tum pehle ki tarah apni har baat mujhse share na kar pao,
  aur main bhi pehle ki tarah tumhari madad na kar paun kyuki ab phle jaisa wkt nh rha but 
  tmhri khushi ki dua ab bhi phle jaisi h or hmesha rhegi😙
  chahe hamari baat kitni bhi kam ho gayi ho, dil se hamesha yahi dua rahegi 
  ki tum apni zindagi mein hamesha khush raho,
 muskurati raho aur har woh khushi pao jiski tum haqdaar ho. ❤️`;

let m3 = 0;

function memoryTyping3(){

    if(m3 < memoryMessage3.length){

        document.getElementById("memoryText3").innerHTML += memoryMessage3.charAt(m3);

        m3++;

        setTimeout(memoryTyping3,35);

    }

}

document.getElementById("nextMemory2").addEventListener("click",function(){

    document.getElementById("memoryPage2").style.display="none";

    document.getElementById("memoryPage3").style.display="flex";

    document.getElementById("memoryText3").innerHTML="";

    m3=0;

    memoryTyping3();

});

// Memory Page 4 Typing

const memoryMessage4 = `Bas itna hi kehna tha...

ki chahe zindagi humein kitna bhi alag raaston par le aaye, 
meri dua hamesha tumhare saath rahegi. Bhagwan kare tumhari zindagi mein kabhi kisi cheez 
ki kami na ho. Har khwahish poori ho, har sapna sach ho aur tum hamesha muskurati raho.
 Duniya ki har khushi tumhare kadmon me aakr gir jayeee😂 or bhi h bht kuch bolne ke liye but itna kafi h nh to gussa ho jaogi tm😙❤️`;

let m4 = 0;

function memoryTyping4(){

    if(m4 < memoryMessage4.length){

        document.getElementById("memoryText4").innerHTML += memoryMessage4.charAt(m4);

        m4++;

        setTimeout(memoryTyping4,35);

    }

}

document.getElementById("nextMemory3").addEventListener("click",function(){

    document.getElementById("memoryPage3").style.display="none";

    document.getElementById("memoryPage4").style.display="flex";

    document.getElementById("memoryText4").innerHTML="";

    m4=0;

    memoryTyping4();

});

// ================= FINAL PAGE =================

const nextMemory4 = document.getElementById("nextMemory4");

if(nextMemory4){

nextMemory4.onclick = function(){

document.getElementById("memoryPage4").style.display="none";

document.getElementById("finalPage").style.display="flex";
startConfetti();

setTimeout(()=>{

    stopConfetti();

},10000);

typeFinal();

// Music Change
switchMusic();

window.scrollTo({
top:0,
behavior:"smooth"
});

}

}

// Final Typing Effect

const finalMessage =
"Phle to tm Gussa Mt hona Tumhari hi voice h ye😂 or Thank you for coming into my life ❤️. Chahe hamari baat roz ho ya na ho, meri dua hamesha tumhare saath rahegi. Main sirf itna chahta hoon ki tum hamesha khush raho, muskurati raho aur tumhari har wish puri ho. ❤️🎂";

let finalIndex = 0;

function typeFinal(){

const box = document.getElementById("finalText");

box.innerHTML="";

finalIndex=0;

let typing = setInterval(()=>{

if(finalIndex < finalMessage.length){

box.innerHTML += finalMessage.charAt(finalIndex);

finalIndex++;

}else{

clearInterval(typing);

}

},35);

}

// ================= LETTER POPUP =================

const showLetter = document.getElementById("showLetter");

const letterPopup = document.getElementById("letterPopup");

const closeLetter = document.getElementById("closeLetter");

const letterMessage = `My Dear Queen ❤️

Sabse pehle...

Happy Birthday 🎂❤️

Apna hamesha dhyan rakhna aur zindagi ko hamesha khulkar jeena. Hamesha muskurati rehna, kyunki tumhari muskaan hamesha bani rahe, isse badhkar meri aur koi dua nahi. Bhagwan tumhe duniya ki har khushi, har kamyabi aur har woh cheez de jiski tum dil se haqdaar ho.

Once again, wishing you a very Happy Birthday! 🎉🎂
May this year bring you endless happiness, good health, peace, and success.`;

let letterIndex = 0;

function typeLetter(){

const box = document.getElementById("letterText");

box.innerHTML="";

letterIndex=0;

let typing = setInterval(()=>{

if(letterIndex < letterMessage.length){

box.innerHTML += letterMessage.charAt(letterIndex);

letterIndex++;

}else{

clearInterval(typing);


}

},30);

}

showLetter.onclick=function(){

letterPopup.style.display="flex";

typeLetter();

}

closeLetter.onclick=function(){

letterPopup.style.display="none";

}

// ================= MUSIC TRANSITION =================

function switchMusic(){

const bgMusic=document.getElementById("bgMusic");
const favoriteMusic=document.getElementById("favoriteMusic");

favoriteMusic.volume=0.35;

let fadeOut=setInterval(()=>{

if(bgMusic.volume>0.02){

bgMusic.volume-=0.02;

}else{

clearInterval(fadeOut);

bgMusic.pause();

bgMusic.currentTime=0;

favoriteMusic.play().catch(err=>console.log(err));

}

},150);

}
// ================= FLOATING HEARTS =================

function createHeart(){

    const container = document.getElementById("hearts");

    if(!container) return;

    const heart = document.createElement("span");

    heart.classList.add("heart");

    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    container.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);

}

setInterval(createHeart,300);

// ================= PAGE TRANSITION =================

function changePage(currentPage,nextPage,callback){

    currentPage.classList.add("fade-out");

    setTimeout(()=>{

        currentPage.style.display="none";

        currentPage.classList.remove("fade-out");

        nextPage.style.display="flex";

        nextPage.classList.add("fade-in");

        if(callback){
            callback();
        }

    },450);

}

// ================= PHOTO ZOOM =================

document.addEventListener("DOMContentLoaded", function () {

    const popup = document.getElementById("photoPopup");
    const popupImg = document.getElementById("popupImage");
    const closeBtn = document.getElementById("closePhoto");

    document.querySelectorAll(".memory-photo").forEach(photo => {

        photo.addEventListener("click", function () {

            popup.style.display = "flex";
            popupImg.src = this.src;

        });

    });

    closeBtn.addEventListener("click", function () {

        popup.style.display = "none";

    });

    popup.addEventListener("click", function (e) {

        if (e.target === popup) {

            popup.style.display = "none";

        }

    });

});

// ================= CONFETTI =================

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

const colors = [
"#ff4f87",
"#ffd700",
"#00c3ff",
"#7dff7d",
"#ffffff",
"#ff8fd3"
];

function createConfetti(){

    confetti=[];

    for(let i=0;i<180;i++){

        confetti.push({

            x:Math.random()*canvas.width,

            y:Math.random()*canvas.height-canvas.height,

            r:Math.random()*6+3,

            d:Math.random()*3+2,

            color:colors[Math.floor(Math.random()*colors.length)]

        });

    }

}
function drawConfetti(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    confetti.forEach(c=>{

        ctx.beginPath();

        ctx.fillStyle=c.color;

        ctx.fillRect(c.x,c.y,c.r,c.r*2);

        c.y+=c.d;

        c.x+=Math.sin(c.y*0.01);

        if(c.y>canvas.height){

            c.y=-20;

            c.x=Math.random()*canvas.width;

        }

    });

}

let confettiAnimation;

function startConfetti(){

    createConfetti();

    clearInterval(confettiAnimation);

    confettiAnimation=setInterval(drawConfetti,20);

}
function stopConfetti(){

    clearInterval(confettiAnimation);

    ctx.clearRect(0,0,canvas.width,canvas.height);

}

// ================= COUNTDOWN =================

function startCountdown(){

    const page=document.getElementById("countdownPage");

    const number=document.getElementById("countNumber");

    page.style.display="flex";

    let count=3;

    number.innerHTML=count;

    let timer=setInterval(()=>{

        count--;

        if(count>0){

            number.innerHTML=count;

        }else{

            clearInterval(timer);

            number.innerHTML="🎉";

            setTimeout(()=>{

                page.style.display="none";

                document.getElementById("welcomePage").style.display="flex";

            },800);

        }

    },1000);

}

// ================= REPLAY =================

document.getElementById("replayJourney").onclick = function(){

    location.reload();

}