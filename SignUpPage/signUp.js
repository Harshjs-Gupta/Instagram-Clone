"use strict";

const signUpbtn = document.getElementById("SignUpbtn");

signUpbtn.addEventListener("click", function () {
  if (phoneEmail == "" || fullName == "" || userName == "" || passWord1 == "") {
    alert("Please fill out all fields");
  } else if (
    phoneEmail === "7667045966" &&
    fullName === "Harsh Gupta" &&
    userName === "harshgupta8031" &&
    passWord1 === "gupta88911@"
  ) {
    // Redirect to home.html page
    location.href = "/LogInPage/logInPage.html";
  } else if (
    phoneEmail !== "7667045966" ||
    fullName !== "Harsh Gupta" ||
    userName !== "harshgupta8031" ||
    passWord1 !== "gupta88911@"
  ) {
    // Redirect to home.html page
    alert("Please enter  valid credentials");
  }
});
