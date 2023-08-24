function changeTheme() {
  const html = document.getElementById("html");
  const theme_icon = document.getElementById("theme_icon");
  const theme = html.getAttribute("data-bs-theme");

  html.setAttribute(
    "data-bs-theme",
    theme === "dark" ? "light" : "dark"
  );
  theme_icon.classList.toggle("fa-sun", theme !== "dark");
  theme_icon.classList.toggle("fa-moon", theme === "dark");
}