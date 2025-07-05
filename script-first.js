const loginformEl = document.querySelector("form");
const token = document.querySelector(".wrapper");
const blobEl = document.querySelector(".blob");


const passwordInput = document.querySelector("#password");
const usernameInput = document.querySelector("#username");
console.log(blobEl);

loginformEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(`https://fakestoreapi.com/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameInput.value,
        password: passwordInput.value,
      }),
    });
    // creat json file from data for use that >>
    const data = await res.json();
    console.log(data)
    if (!res.ok) throw new Error(data.message || "Login failed");
    loginformEl.classList.add("hide");
    token.textContent = data.token;
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
