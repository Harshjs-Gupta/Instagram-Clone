"use strict";

const searchBox = document.querySelector(".search-bar");
const searchBtn = document.getElementById("search-btn");

const showSearchBar = function () {
  if (searchBox.classList.contains("search")) {
    searchBox.classList.remove("search");
    // document.getElementById("instagram").style.display = " ";
  } else {
    searchBox.classList.add("search");
  }
};

searchBtn.addEventListener("click", showSearchBar);

const menuBox = document.querySelector(".moreMenu");
const moreBtn = document.getElementById("more-btn");

const showMoreMenu = function () {
  if (menuBox.classList.contains("hidden")) {
    menuBox.classList.remove("hidden");
  } else {
    menuBox.classList.add("hidden");
  }
};

moreBtn.addEventListener("click", showMoreMenu);

const createBox = document.querySelector(".createHidden");
const createBtn = document.getElementById("create-btn");

const showCreateBox = function () {
  if (createBox.classList.contains("createHidden")) {
    createBox.classList.remove("createHidden");
  } else {
    createBox.classList.add("createHidden");
  }
};

createBtn.addEventListener("click", showCreateBox);
