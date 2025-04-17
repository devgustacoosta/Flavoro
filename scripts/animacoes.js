const section = document.getElementById("img-movivel");

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const valor = scroll * 0.4;
    section.style.backgroundPositionY = `${valor}px`;
});