import React, { useRef, useEffect, useState } from "react";

interface Props {
  riskPct: string;
  riskPctSymbol: string;
}

export default function PieChart({ riskPct, riskPctSymbol }: Props) {
  const [screenSize, setScreenSize] = useState("");

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Function to update screen size when the component mounts
    const updateScreenSize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("small");
      } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    };

    // Call the function initially to set the screen size
    updateScreenSize();

    // Add an event listener to update screen size on window resize
    window.addEventListener("resize", updateScreenSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return; // Canvas element not found, exit the function
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return; // 2D rendering context not available, exit the function
    }

    // Define variables
    let x = 0;
    let y = 0;
    let radius = 0;

    if (screenSize == "large") {
      x = 150;
      y = 150;
      radius = 150;
    } else if (screenSize == "medium" || screenSize == "small") {
      x = 100;
      y = 100;
      radius = 100;
    }
    const startAngle = 0;
    const endAngle = 2 * Math.PI;
    const circleColor = "#80DEEA";
    const sliceColor = "#ff619e";
    const riskP = riskPct;
    const riskPSymbol = riskPctSymbol;
    const slice = (2 * Math.PI * parseInt(riskP)) / 100;
    const labX = canvas.width / 2 + (radius / 2) * Math.cos(startAngle + slice / 2);
    const labY = canvas.width / 2 + (radius / 2) * Math.sin(startAngle + slice / 2);

    // Draw circle
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.fillStyle = circleColor;
    ctx.fill();
    ctx.stroke();

    // Draw slice
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, radius, startAngle, startAngle + slice);
    ctx.closePath();
    ctx.fillStyle = sliceColor;
    ctx.fill();
    ctx.stroke();

    // Draw labels
    ctx.fillStyle = "black";
    ctx.font = "bold 20px Lucida Sans";
    ctx.fillText(riskPSymbol, labX, labY);
  }, [screenSize]);

  return (
    <>
      {screenSize == "large" && <canvas ref={canvasRef} width={300} height={300} className="flex mx-auto "></canvas>}
      {(screenSize == "medium" || screenSize == "small") && <canvas ref={canvasRef} width={200} height={200} className="flex mx-auto "></canvas>}
    </>
  );
}
