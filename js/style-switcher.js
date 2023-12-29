/* toggle style switcher */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});
// hide style switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});
/* theme colors */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
/* theme light and dark mode */
// const dayNight = document.querySelector(".day-night");
// dayNight.addEventListener("click", () => {
//   dayNight.querySelector("i").classList.toggle("fa-sun");
//   dayNight.querySelector("i").classList.toggle("fa-moon");

//   document.body.classList.toggle("dark");
// });
// window.addEventListener("load", () => {
//   if (document.body.classList.contains("dark")) {
//     dayNight.querySelector("i").classList.add("fa-sun");
//   } else {
//     dayNight.querySelector("i").classList.add("fa-moon");
//   }
// });

const dayNight = document.querySelector(".day-night");

// Function to toggle dark mode
const toggleDarkMode = () => {
  const isDarkMode = document.body.classList.toggle("dark");
  const icon = dayNight.querySelector("i");

  // Toggle sun and moon icons based on the dark mode state
  icon.classList.toggle("fa-sun", isDarkMode);
  icon.classList.toggle("fa-moon", !isDarkMode);

  localStorage.setItem("darkMode", isDarkMode ? "dark" : "light");
};

dayNight.addEventListener("click", toggleDarkMode);

const setInitialMode = () => {
  const savedMode = localStorage.getItem("darkMode");

  if (savedMode === "dark") {
    document.body.classList.add("dark");
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    document.body.classList.remove("dark");
    dayNight.querySelector("i").classList.add("fa-moon");
  }
};
window.addEventListener("load", setInitialMode);
