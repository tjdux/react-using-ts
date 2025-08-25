document.querySelectorAll(".traffic-light__light").forEach((light) => {
  light.addEventListener("click", function () {
    document
      .querySelectorAll(".traffic-light__light")
      .forEach((btn) => btn.setAttribute("aria-pressed", "false"));
    this.setAttribute("aria-pressed", "true");
  });
});
