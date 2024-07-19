let tl = gsap.timeline();

tl.from("h1", {
  y: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});

tl.from("h3", {
  y: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});
