let menu = document.querySelector("#nav i");
let cross = document.querySelector("#full i");
let tl = gsap.timeline();

tl.to("#full", {
  right: 0,
  duration: 0.5,
})
  .from("#full h4", {
    x: 200,
    duration: 0.7,
    stagger: 0.2,
    opacity: 0,
  })
  .from("#full i", {
    opacity: 0,
  });

tl.pause();

menu.addEventListener("click", () => {
  tl.play();
});
cross.addEventListener("click", () => {
  tl.reverse();
});
