import React, { useState, useEffect } from "react";
type Props = { showBelow: number };
const Scroll = ({ showBelow }: Props) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 200, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <div>
      {show && (
        <button
          onClick={handleClick}
          className="scroll-to-top"
          aria-label="to top"
        >
          <img src="/icons/uparrow.png" alt="" />
        </button>
      )}
    </div>
  );
};

export default Scroll;
