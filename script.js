const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
if (toggle) toggle.addEventListener("click", () => nav.classList.toggle("open"));

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
document.querySelectorAll(".zoomable").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});
function closeLightbox(){
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}
document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") closeLightbox(); });
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click",()=>nav.classList.remove("open")));
