/**
 * Plots a control point on the canvas.
 *
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 * @param {number} cpx - The x-coordinate of the control point.
 * @param {number} cpy - The y-coordinate of the control point.
 */
export function plotControlPoint(ctx, cpx, cpy) {
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
export function plotControlPoints(ctx, cp1x, cp1y, cp2x, cp2y) {
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(cp1x, cp1y, 5, 0, 2 * Math.PI);
  ctx.arc(cp2x, cp2y, 5, 0, 2 * Math.PI);
  ctx.fill();
}
