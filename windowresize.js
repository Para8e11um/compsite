let windowWidth;

function changeMainWidth() {
    if (window.innerWidth > window.innerHeight && window.innerHeight < 1200) {
windowWidth = 700000 / window.innerWidth + 1700;
document.documentElement.style.setProperty(`--mainheight`, `${windowWidth}px`);
} else {
    windowWidth = 1400000 / window.innerWidth + 1700;
    document.documentElement.style.setProperty(`--mainheight`, `${windowWidth}px`);
}
};

window.onresize = changeMainWidth;