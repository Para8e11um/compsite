let windowWidth;
let mainTop;

let mainClass = document.querySelector("#mainid");
let style = window.getComputedStyle(mainClass);
windowWidth = style.getPropertyValue('height');
console.log(windowWidth);
document.documentElement.style.setProperty(`--mainheight`, `${windowWidth}`);
mainTop = style.getPropertyValue('top');
console.log(mainTop);
document.documentElement.style.setProperty(`--maintop`, `${mainTop}`);

function changeMainWidth() {
    mainClass = document.querySelector("#mainid");
    style = window.getComputedStyle(mainClass);
    windowWidth = style.getPropertyValue('height');
    console.log(windowWidth);
    document.documentElement.style.setProperty(`--mainheight`, `${windowWidth}`);
    mainTop = style.getPropertyValue('top');
    console.log(mainTop);
    document.documentElement.style.setProperty(`--maintop`, `${mainTop}`);
};

changeMainWidth();

window.onresize = changeMainWidth;
