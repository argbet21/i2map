/**
 * Draws the origin point on the canvas.
 *
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 * @param {number} x - The x-coordinate of the origin point.
 * @param {number} y - The y-coordinate of the origin point.
 */
export function drawOrigin(ctx, x, y) {
  // Inner circle
  ctx.beginPath();
  ctx.arc(x, y, 2.5, 0, 2 * Math.PI);
  ctx.fill();

  // Outer circle
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, 2 * Math.PI);
  ctx.stroke();
}

/**
 * Draws the destination point on the canvas.
 *
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 * @param {number} x - The x-coordinate of the destination point.
 * @param {number} y - The y-coordinate of the destination point.
 */
export function drawDestination(ctx, x, y) {
  // Inner circle
  ctx.beginPath();
  ctx.arc(x, y, 2.5, 0, 2 * Math.PI);
  ctx.fill();

  // Outer circle
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, 2 * Math.PI);
  ctx.stroke();
}

/**
 * Draws a line between the origin and destination points on the canvas.
 *
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 * @param {number} originX - The x-coordinate of the origin point.
 * @param {number} originY - The y-coordinate of the origin point.
 * @param {number} destX - The x-coordinate of the destination point.
 * @param {number} destY - The y-coordinate of the destination point.
 */
export function drawRoute(ctx, originX, originY, destX, destY) {
  ctx.beginPath();
  ctx.moveTo(originX, originY);
  ctx.lineTo(destX, destY);
  ctx.stroke();
}

/**
 * Draws a quadratic Bézier curve between the origin and destination points on the canvas.
 *
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 * @param {number} originX - The x-coordinate of the origin point.
 * @param {number} originY - The y-coordinate of the origin point.
 * @param {number} destX - The x-coordinate of the destination point.
 * @param {number} destY - The y-coordinate of the destination point.
 */
export function drawQuadraticBezierRoute(ctx, originX, originY, destX, destY) {
  let cp1x = originX + 100;
  let cp1y = originY - 100;

  ctx.beginPath();
  ctx.moveTo(originX, originY);
  ctx.quadraticCurveTo(cp1x, cp1y, destX, destY);
  ctx.stroke();

  plotControlPoint(ctx, cp1x, cp1y);
}

/**
 * Plots a control point on the canvas.
 *
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 * @param {number} cpx - The x-coordinate of the control point.
 * @param {number} cpy - The y-coordinate of the control point.
 */
function plotControlPoint(ctx, cpx, cpy) {
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(cpx, cpy, 5, 0, 2 * Math.PI);
  ctx.fill();
}

/**
 * Plots the control points on the canvas.
 *
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 * @param {number} cp1x - The x-coordinate of the first control point.
 * @param {number} cp1y - The y-coordinate of the first control point.
 * @param {number} cp2x - The x-coordinate of the second control point.
 * @param {number} cp2y - The y-coordinate of the second control point.
 */
function plotControlPoints(ctx, cp1x, cp1y, cp2x, cp2y) {
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(cp1x, cp1y, 5, 0, 2 * Math.PI);
  ctx.arc(cp2x, cp2y, 5, 0, 2 * Math.PI);
  ctx.fill();
}
