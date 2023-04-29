let windowWidth;

function changeMainWidth() {
windowWidth = 700000 / window.innerWidth + 1700;
document.documentElement.style.setProperty(`--mainheight`, `${windowWidth}px`);
};

window.onresize = changeMainWidth;