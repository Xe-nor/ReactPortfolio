import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "./magnet";

const RoundedButton = ({
  children,
  backgroundColor = "#455CE9",
  ...attributes
}) => {
  const circle = useRef(null);
  const timeline = useRef(null);
  const timeoutId = useRef(null);

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );

    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        style={{
          // borderRadius: "3em",
          border: "1px solid #888",
          cursor: "pointer",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // padding: "15px 60px 15px 60px",
          overflow: "hidden",
        }}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          style={{
            width: "100%",
            height: "150%",
            position: "absolute",
            borderRadius: "50%",
            top: "100%",
            backgroundColor,
          }}
        ></div>
      </div>
    </Magnetic>
  );
};

export default RoundedButton;
