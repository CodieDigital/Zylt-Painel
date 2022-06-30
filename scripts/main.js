const password = document.getElementById("password");
const eyeSvg = document.getElementById("eyeSvg");

function showPassword() {
  if (password.type === "password") {
    password.setAttribute("type", "text");
    eyeSvg.setAttribute("src", "images/closed-eye.svg");
  } else {
    password.setAttribute("type", "password");
    eyeSvg.setAttribute("src", "images/open-eye.svg");
  }
}

eyeSvg.addEventListener("click", showPassword);
