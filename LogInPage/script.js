document.querySelector("#LogIn").addEventListener("click", function (e) {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email == "" || password == "") {
    alert("Please fill out all fields");
  } else if (email === "7667045966" && password === "gupta88911@") {
    // Redirect to home.html page
    location.href = "/HomePage/home.html";
  } else if (email !== "7667045966" && password !== "gupta88911@") {
    // Redirect to home.html page
    alert("Please enter  valid credentials");
  }
});
