// Preloader fade out
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("fade-out");
  }, 800); // small delay for smoother effect
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Lightbox logic
const lightbox = document.getElementById("lightbox");
const lightboxVideo = document.getElementById("lightbox-video");
const closeBtn = document.querySelector(".lightbox .close");

document.querySelectorAll(".video-card video").forEach(video => {
  video.addEventListener("click", () => {
    video.pause();
    lightbox.style.display = "flex";
    lightboxVideo.src = video.querySelector("source").src;
    lightboxVideo.play();
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightboxVideo.pause();
  lightboxVideo.src = "";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    lightboxVideo.pause();
    lightboxVideo.src = "";
  }
});
