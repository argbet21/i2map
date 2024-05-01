const canvas = document.getElementById("canvas");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

ctx.drawImage(document.getElementById("source"), 0, 0);

// ORIGIN START
// Inner circle
ctx.beginPath();
ctx.arc(100, 75, 5, 0, 2 * Math.PI);
ctx.fill();

// Outer circle
ctx.beginPath();
ctx.arc(100, 75, 10, 0, 2 * Math.PI);
ctx.stroke();
// ORGIN END

// DESTINATION START
// Inner circle
ctx.beginPath();
ctx.arc(200, 150, 5, 0, 2 * Math.PI);
ctx.fill();

// Outer circle
ctx.beginPath();
ctx.arc(200, 150, 10, 0, 2 * Math.PI);
ctx.stroke();
// DESTINATION END

// Route
ctx.beginPath();
ctx.moveTo(100, 75);
ctx.lineTo(200, 150);
ctx.stroke();
