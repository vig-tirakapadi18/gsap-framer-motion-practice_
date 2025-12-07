"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapText = () => {
  useGSAP(() => {
    gsap.to("#text", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });

    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <div>
      <h1
        id="text"
        className="text-center font-bold text-3xl opacity-0 transition-transform"
      >
        GsapText
      </h1>

      <p className="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        repellendus, omnis impedit expedita ut ipsum cum id nostrum perferendis
        doloremque, dolorem atque similique nulla tempora!
      </p>

      <p className="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        repellendus.
      </p>

      <p className="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        repellendus, omnis impedit expedita ut ipsum cum id nostrum perferendis
        doloremque, dolorem atque similique nulla tempora! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Ratione repellendus, omnis impedit
        expedita ut ipsum cum id nostrum perferendis doloremque, dolorem atque
        similique nulla tempora!
      </p>
    </div>
  );
};

export default GsapText;
