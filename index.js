const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
});

let left = document.getElementById("left-arrow")
let right = document.getElementById("right-arrow")
let menu = document.getElementsByClassName("menu-sec")[0];

left.addEventListener("click", function () {
    menu.scrollLeft -= 135
})

right.addEventListener("click", function () {
    menu.scrollLeft += 135
})

let video = document.getElementsByTagName("video")[0];
let play = document.querySelector(".play")
let pause = document.querySelector(".pause")
let screen = document.querySelector(".screen")

play.addEventListener("click", function () {
    video.play();
    play.style.display = "none"
    screen.style.display = "none"
    pause.style.display = "flex"
})

pause.addEventListener("click", function () {
    video.pause();
    play.style.display = "flex"
    screen.style.display = "flex"
    pause.style.display = "none"
})

video.addEventListener("ended", function () {
    play.style.display = "flex"
    screen.style.display = "flex"
    pause.style.display = "none"
})

let dataload = () => {
    let title = document.getElementById("sec-title")
    let h6 = document.getElementsByTagName("h6")

    setTimeout(() => {
        title.innerHTML = "Bargain <br> Bucket menu <br>campaign"
        h6[1].classList.add("head-dots-main")
        h6[2].classList.remove("head-dots-main")
        h6[3].classList.remove("head-dots-main")
        h6[4].classList.remove("head-dots-main")
    }, 0000)
    setTimeout(() => {
        title.innerHTML = "Bargain <br>Fries menu <br>campaign"
        h6[1].classList.remove("head-dots-main")
        h6[2].classList.add("head-dots-main")
        h6[3].classList.remove("head-dots-main")
        h6[4].classList.remove("head-dots-main")
    }, 3000)
    setTimeout(() => {
        title.innerHTML = "Bargain <br> Burger menu <br>campaign"
        h6[1].classList.remove("head-dots-main")
        h6[2].classList.remove("head-dots-main")
        h6[3].classList.add("head-dots-main")
        h6[4].classList.remove("head-dots-main")
    }, 6000)
    setTimeout(() => {
        title.innerHTML = "Bargain <br> Chicken menu <br>campaign"
        h6[1].classList.remove("head-dots-main")
        h6[2].classList.remove("head-dots-main")
        h6[3].classList.remove("head-dots-main")
        h6[4].classList.add("head-dots-main")
    }, 8000)
}

setInterval(dataload,12000)
dataload()

let menuicon=document.getElementById("menu-icon1")
let navullist=document.getElementById("nav-ul-list")

menuicon.addEventListener("click",function(){
    menuicon.classList.toggle("humburger")
    navullist.classList.toggle("menu-ul-list")
})