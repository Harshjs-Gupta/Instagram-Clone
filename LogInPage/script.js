document.querySelector("#LogIn").addEventListener("click", function (e) {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email == "" || password == "") {
    location.href = "/HomePage/home.html";
  }
});
