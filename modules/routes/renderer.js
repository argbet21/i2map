import { plotControlPoint } from "../../utils/debug.js";

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
