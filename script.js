let ctr = 0;
function callback() {
    const el = document.querySelectorAll("h2")[1];
    if (el) {
        el.innerHTML = ctr;
        ctr = ctr + 1;
    }
}
setInterval(callback, 1000);