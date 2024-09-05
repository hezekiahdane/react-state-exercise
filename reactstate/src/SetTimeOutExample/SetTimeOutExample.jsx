import React, { useState, useEffect } from "react";

const SetTimeOutExample = ({ initialWidth = 0, duration, onComplete }) => {
  const [width, setWidth] = useState(initialWidth);

  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((prevWidth) => {
        const increment = (500 * 30) / duration; // Calculate the increment based on the duration
        const newWidth = prevWidth + increment;

        // Check if width has reached the max or if time is up
        if (newWidth >= 500) {
          clearInterval(interval);
          onComplete(); // Notify parent component that the duration is complete
          return 500; // Ensure it doesn't go beyond 500
        }

        return newWidth;
      });
    }, duration / 100); // Adjust interval speed based on the duration

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  return (
    <div
      style={{
        width: `${width}px`,
        backgroundColor: "#f00",
        height: "10px",
        transition: "width 0.1s linear", // Smooth animation
      }}
    />
  );
};

export default SetTimeOutExample;
