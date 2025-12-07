"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const timeline = gsap.timeline({
  repeat: -1,
  repeatDelay: 1,
  yoyo: true,
});

const GsapTimeline = () => {
  useGSAP(() => {
    timeline.to("#amber-box", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeline.to("#amber-box", {
      y: 250,
      scale: 2,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeline.to("#amber-box", {
      x: 500,
      scale: 1,
      rotation: 360,
      borderRadius: "8px",
      duration: 2,
      ease: "back.inOut",
    });
  }, []);

  return (
    <div className="flex flex-col p-20 gap-10">
      <h1 className="text-center font-bold text-3xl">gsap.timeline()</h1>
      <div id="amber-box" className="w-20 h-20 bg-amber-600 rounded-lg" />

      <button onClick={() => {
        if(timeline.paused()) {
            timeline.play()
        } else {
            timeline.pause()
        }
      }} className="bg-stone-500 border-amber-600 rounded-2xl border-2 w-fit px-4 py-2 cursor-pointer">Play/Pause</button>
    </div>
  );
};

export default GsapTimeline;
