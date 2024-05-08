import { drawOrigin, drawDestination } from "./modules/countries/renderer.js";
import { drawQuadraticBezierRoute } from "./modules/routes/renderer.js";
import countries from "./modules/countries/countries.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

init();

function init() {
  ctx.drawImage(document.getElementById("source"), 0, 0);
  drawOrigin(ctx, countries.brazil.x, countries.brazil.y);
  drawDestination(ctx, countries.iran.x, countries.iran.y);
  drawQuadraticBezierRoute(
    ctx,
    countries.brazil.x,
    countries.brazil.y,
    countries.iran.x,
    countries.iran.y
  );
}
