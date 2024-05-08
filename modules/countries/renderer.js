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
