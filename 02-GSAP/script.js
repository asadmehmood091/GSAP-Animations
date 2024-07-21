// let tl = gsap.timeline();

gsap.from(".page1 #box", {
  duration: 2,
  scale: 0,
  dealy: 1,
  rotate: 360,
});

gsap.from(".page2 h2", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
