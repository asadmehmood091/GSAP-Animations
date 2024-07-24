let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,

    // ease: "back.out",
  });
});

imageDiv.addEventListener("mouseenter", (dets) => {
  cursor.innerHTML = "view more";
  gsap.to(cursor, {
    scale: 3,
    backgroundColor: "#ffffff8c",
  });
});
imageDiv.addEventListener("mouseleave", (dets) => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
  });
});
