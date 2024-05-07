import {
  drawOrigin,
  drawDestination,
  drawQuadraticBezierRoute,
} from "./utils/helpers.js";

const canvas = document.getElementById("canvas");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

ctx.drawImage(document.getElementById("source"), 0, 0);

// Countries list
let countries = {
  brazil: { x: 350, y: 360 },
  iran: { x: 645, y: 210 },
};

drawOrigin(ctx, countries.brazil.x, countries.brazil.y);
drawDestination(ctx, countries.iran.x, countries.iran.y);
drawQuadraticBezierRoute(
  ctx,
  countries.brazil.x,
  countries.brazil.y,
  countries.iran.x,
  countries.iran.y
);
