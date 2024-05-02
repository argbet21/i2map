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
  ctx.arc(x, y, 5, 0, 2 * Math.PI);
  ctx.fill();

  // Outer circle
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
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
  ctx.arc(x, y, 5, 0, 2 * Math.PI);
  ctx.fill();

  // Outer circle
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.stroke();
}

/**
 * Draws a route between the origin and destination points on the canvas.
 *
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 * @param {number} startX - The x-coordinate of the origin point.
 * @param {number} startY - The y-coordinate of the origin point.
 * @param {number} endX - The x-coordinate of the destination point.
 * @param {number} endY - The y-coordinate of the destination point.
 */
export function drawRoute(ctx, startX, startY, endX, endY) {
  // Route
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
}
