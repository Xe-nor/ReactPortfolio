import React, { useEffect, useState } from "react";
import { preLoaderAnim } from "./Animation";

const PreLoader = () => {
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    if (!animationPlayed) {
      setAnimationPlayed(true);
    }
  }, [animationPlayed]);

  useEffect(() => {
    if (animationPlayed) {
      preLoaderAnim();
    }
  }, [animationPlayed]);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Click.&nbsp;</span>
        <span>Clack.&nbsp;</span>
        <span>FullStackkkkkkk!</span>
      </div>
    </div>
  );
};

export default PreLoader;
