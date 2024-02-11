import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Magnet({ children }) {
  const magnetic = useRef(null);
  useEffect(() => {
    // Create variables to capture the current value of the ref
    const currentRef = magnetic.current;
    const xTo = gsap.quickTo(currentRef, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(currentRef, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = currentRef.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    if (currentRef) {
      currentRef.addEventListener("mousemove", handleMouseMove);
      currentRef.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        // Use the variable in the cleanup function
        currentRef.removeEventListener("mousemove", handleMouseMove);
        currentRef.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []); // No dependencies since this effect should run only once

  return React.cloneElement(children, { ref: magnetic });
}

export default Magnet;
