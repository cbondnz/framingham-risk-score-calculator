import React, { useRef, useEffect } from "react";

interface Props {
  riskPct: string;
  riskPctSymbol: string;
}

export default function PieChart({ riskPct, riskPctSymbol }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
    const x = 150;
    const y = 150;
    const radius = 150;
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
  }, []);

  return <canvas ref={canvasRef} width="300" height="300"></canvas>;
}
