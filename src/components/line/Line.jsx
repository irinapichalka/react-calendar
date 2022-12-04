import React, { useState, useEffect } from "react";

const Line = () => {
  const [marginTopHr, setMarginTopHr] = useState(new Date().getMinutes());

  useEffect(() => {
    const interval = setInterval(() => {
      setMarginTopHr(new Date().getMinutes());
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "red",
        width: "100%",
        height: `${1}px`,
        marginTop: `${marginTopHr}px`,
      }}
    ></div>
  );
};

export default Line;
