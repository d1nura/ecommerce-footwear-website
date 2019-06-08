console.log("index");

import { menu } from "./menu.js";
import { setData } from "./setData.js";
import { setDetails } from "./setDetails.js";
import { shoeDetails } from "./shoeDetails.js";
import { shoppingBag } from "./shoppingBag.js";
import { footer } from "./footer.js";
import { onload } from "./onload.js";

menu();
setData();
setDetails();
shoeDetails();
shoppingBag();
footer();
window.onload = () => {
  onload();
};
