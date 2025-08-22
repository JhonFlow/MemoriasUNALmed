import { loadRoute } from "./router.js";

window.addEventListener("DOMContentLoaded", loadRoute);
window.addEventListener("hashchange", loadRoute);
