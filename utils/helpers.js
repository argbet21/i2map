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
