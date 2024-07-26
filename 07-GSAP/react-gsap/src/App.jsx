import "./App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
function App() {
  const circleRaf = useRef();
  // const boxRaf = useRef();
  useGSAP(() => {
    gsap.from(
      circleRaf.current,
      {
        y: 300,
        opacity: 0,
        rotate: 360,
        duration: 1,
        delay: 1,
      },
      { scope: ".container" }
    );
  });
  return (
    <main>
      <div className="container">
        <div ref={circleRaf} className="circle"></div>
        <div className="box"></div>
      </div>
      <div className="test">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
    </main>
  );
}

export default App;
