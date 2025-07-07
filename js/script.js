let menu = document.querySelector("#menu-btn")
let navbarLinks = document.querySelector(".header .navbar .links")

menu.onclick = () => {
  menu.classList.toggle("fa-times")
  navbarLinks.classList.toggle("active")
}

window.onscroll = () => {
  menu.classList.remove("fa-times")
  navbarLinks.classList.remove("active")

  if (window.scrollY > 60) {
    document.querySelector(".header .navbar").classList.add("active")
  } else {
    document.querySelector(".header .navbar").classList.remove("active")
  }
}

/* =======================================================
  * Template Name: BDM date.js
  * Template URL: https://byramdigitalmedia.com
  * Updated: Jun 19 2025 with Bootstrap v5.3.3
  * Author: BDM
  * License: MIT
  ======================================================== */

let date = new Date().getFullYear()
document.getElementById("year").innerHTML = date
