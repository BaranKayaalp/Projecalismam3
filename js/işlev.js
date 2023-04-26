const hamburger = document.querySelector(".hamburger")
const navList = document.querySelector(".nav-list")

if(hamburger) {
    hamburger.addEventListener("click", () => {
        navList.classList.toggle("open");
    } )
}

/* Popup */

const popup = document.querySelector(".popup");
const ClosePopup = document.querySelector(".popup-close");


if(popup){
    ClosePopup.addEventListener(`click`, () => {
        popup.classList.add("hide-popup");
    })

    window.addEventListener(`load`, () => {
        setTimeout(() => {
            popup.classList.remove("hide-popup");
        }, 1000)
    })
}