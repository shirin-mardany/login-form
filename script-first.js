const loginformEl = document.querySelector("form");
const blobEl = document.querySelector(".blob");

const passwordInput = document.querySelector("#password");
const emailInput = document.querySelector("#email");
console.log(blobEl);

loginformEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(`https://fakestoreapi.com/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        username: emailInput.value,
        password: passwordInput.value,
      }),
    });
    // creat json file from data for use that >>
    const data = await res.json();
    loginformEl.classList.add("hide");
    blobEl.textContent = data.token;
  } catch (err) {
    alert("noooooooooooooooooooooo");
  }
});

// start dark and light ----------------------------------------- >>
const changeColor = document.querySelector("#changeColor");
const root = document.querySelector(":root");
let isDark = true;
// console.log(root);

changeColor.addEventListener("change", () => {
  if (isDark) {
    console.log("befor");
    root.style.setProperty("--color-1-1f1f47", "#656d4a");
    isDark = false;
  } else {
    console.log("after");
    root.style.setProperty("--color-1-1f1f47", "#1f2c47");
    isDark = true;
  }
});
