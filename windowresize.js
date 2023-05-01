let windowWidth;
let mainTop;

let mainClass = document.querySelector("#mainid");
let style = window.getComputedStyle(mainClass);
windowWidth = style.getPropertyValue('height');
document.documentElement.style.setProperty(`--mainheight`, `${windowWidth}`);
mainTop = style.getPropertyValue('top');
document.documentElement.style.setProperty(`--maintop`, `${mainTop}`);

function changeMainWidth() {
    mainClass = document.querySelector("#mainid");
    style = window.getComputedStyle(mainClass);
    windowWidth = style.getPropertyValue('height');
    document.documentElement.style.setProperty(`--mainheight`, `${windowWidth}`);
    mainTop = style.getPropertyValue('top');
    document.documentElement.style.setProperty(`--maintop`, `${mainTop}`);
};

function topScroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

changeMainWidth();

window.onresize = changeMainWidth;

Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
    changeMainWidth();
});

window.onload = document.documentElement.style.setProperty(`--headingspacing`, `normal`);