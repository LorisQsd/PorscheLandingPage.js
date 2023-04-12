//NAV HOVER UNDERLINE PROGRESS
const navLink = document.querySelectorAll("li");

navLink.forEach(nav => {
    nav.addEventListener("mouseenter", underlineProgress)

    function underlineProgress(e){
        const navUnderline = e.target.querySelector(".underline")
        navUnderline.style.width = "100%";
        navUnderline.style.backgroundColor = "white";
    }

    nav.addEventListener("mouseleave", underlineInit)

    function underlineInit(e) {
        const navUnderline = e.target.querySelector(".underline")
        navUnderline.style.width = "30%";
        navUnderline.style.backgroundColor = "rgb(121, 121, 121)";
    }
})

//FIRST SECTION
//H1 DISPLAY LETTER BY LETTER
const firstSection = document.querySelector(".first")
const letters = firstSection.getElementsByTagName("span")
let letterIndex = 0;

function showLetterInterval() {
    if(letterIndex < letters.length) {
        letters[letterIndex].style.display = "block";
        letterIndex++;
        setTimeout(showLetterInterval, 200)
    }
}

window.addEventListener("load", showLetterInterval)

// Push down button
const heroPushLink = document.querySelector(".first a")
console.log(heroPushLink)
heroPushLink.addEventListener("click", slideDown);

function slideDown(e) {
  e.preventDefault();
  window.scrollTo({
    top: document.querySelector("#anker").offsetTop,
    behavior: "smooth",
  });
}
// P & BUTTON DISPLAY
const firstParagraph = document.querySelector(".first p");

window.addEventListener("load", showParagButton)

function showParagButton(){
    setTimeout(()=>{firstParagraph.style.opacity = "1"},700)
    setTimeout(()=>{heroPushLink.style.opacity = "1"},1500)
}

//H1 TXT CURSOR
const txtCursor = document.querySelector(".txt-cursor");
let intervalId;
intervalId = setInterval(displayCursor, 1000);

function displayCursor(){
    txtCursor.style.opacity = "0"
    setTimeout(() => {txtCursor.style.opacity = "1"},500)
}

//INTERSECTION OBSERVER
const main = document.querySelector("main")

const active = main.querySelectorAll(".active")

const options = {
    rootMargin: "0px 0px -150px 0px"
};

const observer = new IntersectionObserver((entries) => {
    for(const entry of entries){
        if (entry.isIntersecting){
            entry.target.style.opacity = "1"
        }
    }

}, options)

active.forEach(el => {observer.observe(el)})

//CURSOR
const customCursor = document.querySelector(".custom-cursor");

window.addEventListener("mousemove", handleCustomCursor);

function handleCustomCursor(e) {
  customCursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
}
