import { drawOrigin, drawDestination, drawRoute } from "./utils/helpers.js";

const canvas = document.getElementById("canvas");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

ctx.drawImage(document.getElementById("source"), 0, 0);

drawOrigin(ctx, 100, 75);
drawDestination(ctx, 200, 150);
drawRoute(ctx, 100, 75, 200, 150);
