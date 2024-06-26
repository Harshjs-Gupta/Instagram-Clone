"use strict";

const menuBox = document.querySelector(".moreMenu");
const searchBox = document.querySelector(".search-bar");
const instaIcon = document.querySelector(".fa-instagram");
const homeBtn = document.getElementById("home-btn");
const searchBtn = document.getElementById("search-btn");
const exploreBtn = document.getElementById("explore-btn");
const reelsBtn = document.getElementById("reels-btn");
const messageBtn = document.getElementById("messages-btn");
const notificationBtn = document.getElementById("notification-btn");
const createBtn = document.getElementById("create-btn");
const profileBtn = document.getElementById("profile-btn");
const moreBtn = document.getElementById("more-btn");
const profileImg = document.querySelector(".MyPicture");

const showSearchBar = function () {
  if (searchBox.classList.contains("search")) {
    searchBox.classList.remove("search");
    searchBtn.style.height = "40px";
    searchBtn.style.width = "40px";
    searchBtn.style.borderRadius = "10px";
    searchBtn.style.border = "0.5px solid white";
    homeBtn.style.height = "40px";
    homeBtn.style.width = "40px";
    exploreBtn.style.height = "40px";
    exploreBtn.style.width = "40px";
    reelsBtn.style.height = "40px";
    reelsBtn.style.width = "40px";
    messageBtn.style.height = "40px";
    messageBtn.style.width = "40px";
    notificationBtn.style.height = "40px";
    notificationBtn.style.width = "40px";
    createBtn.style.height = "40px";
    createBtn.style.width = "40px";
    profileBtn.style.height = "40px";
    profileBtn.style.width = "40px";
    moreBtn.style.height = "40px";
    moreBtn.style.width = "40px";

    // instaIcon.classList.remove("hiddenInstagramIcon");
    // document.getElementById("instagram").style.display = " ";
  } else {
    searchBox.classList.add("search");
    searchBtn.style.height = "37px";
    searchBtn.style.width = "200px";
    searchBtn.style.border = "none";
    homeBtn.style.height = "37px";
    homeBtn.style.width = "200px";
    exploreBtn.style.height = "37px";
    exploreBtn.style.width = "200px";
    reelsBtn.style.height = "37px";
    reelsBtn.style.width = "200px";
    messageBtn.style.height = "37px";
    messageBtn.style.width = "200px";
    notificationBtn.style.height = "37px";
    notificationBtn.style.width = "200px";
    createBtn.style.height = "37px";
    createBtn.style.width = "300px";
    profileBtn.style.height = "37px";
    profileBtn.style.width = "200px";
    moreBtn.style.height = "37px";
    moreBtn.style.width = "200px";

    // instaIcon.classList.add("hiddenInstagramIcon");
  }
};

searchBtn.addEventListener("click", showSearchBar);

const showMoreMenu = function () {
  if (menuBox.classList.contains("hidden")) {
    menuBox.classList.remove("hidden");
  } else {
    menuBox.classList.add("hidden");
  }
};

moreBtn.addEventListener("click", showMoreMenu);

const about = document.getElementById("about-account");
const aboutContainer = document.querySelector(".aboutHidden");
const close = document.getElementById("close-about-container");

const showAbout = function () {
  aboutContainer.classList.remove("aboutHidden");
};

const closeAbout = function () {
  aboutContainer.classList.add("aboutHidden");
};

about.addEventListener("click", showAbout);
close.addEventListener("click", closeAbout);
