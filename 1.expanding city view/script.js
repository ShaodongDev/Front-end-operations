const panels = document.querySelectorAll(".panel");

function removeAllClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeAllClasses();
    panel.classList.add("active");
  });
});
