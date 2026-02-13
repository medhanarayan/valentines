/* CUSTOM CURSOR */
const roseCursor = document.getElementById("rose-cursor");

document.addEventListener("mousemove", (e) => {
  roseCursor.style.left = e.clientX + "px";
  roseCursor.style.top = e.clientY + "px";
});

/* PAGE NAVIGATION */
const pages = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll(".nav-btn");

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.page;

    pages.forEach(page =>
      page.classList.toggle("active", page.id === target)
    );
  });
});



/* CHOCOLATE DAY UNMUTE */
const chocolateVideo = document.getElementById("chocolateVideo");

chocolateVideo.addEventListener("click", () => {
  chocolateVideo.muted = !chocolateVideo.muted;

  if (!chocolateVideo.muted) {
    chocolateVideo.volume = 1;
  }
});
const kissVideo = document.getElementById("kissdayvideo");

kissVideo.addEventListener("click", () => {
  kissVideo.muted = !kissVideo.muted;

  if (!kissVideo.muted) {
    kissVideo.volume = 1;
  }
});

