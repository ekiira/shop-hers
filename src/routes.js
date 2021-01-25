import Shop from "./views/NewIn";
import Clothing from "./views/Clothing";
import Shoes from "./views/Shoes";
import Bags from "./views/Bags";
import Hats from "./views/Hats";
import Accessories from "./views/Accessories";

export const Routes = [
  {
    path: "/",
    name: "Shop",
    component: Shop,
    layout: "/shop",
  },
  {
    path: "/clothing",
    name: "Clothing",
    component: Clothing,
    layout: "/shop",
  },
  {
    path: "/clothing",
    name: "Clothing",
    component: Clothing,
    layout: "/shop",
  },
  {
    path: "/shoes",
    name: "Shoes",
    component: Shoes,
    layout: "/shop",
  },
  {
    path: "/bags",
    name: "Bags",
    component: Bags,
    layout: "/shop",
  },
  {
    path: "/hats",
    name: "Hats",
    component: Hats,
    layout: "/shop",
  },
  {
    path: "/accessories",
    name: "Accessories",
    component: Accessories,
    layout: "/shop",
  },
];
