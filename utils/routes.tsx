import Shop from "../pages/shop";
import Clothing from "../pages/shop/clothing";
import Shoes from "../pages/shop/shoes";
import Bags from "../pages/shop/bags";
import Hats from "../pages/shop/hats";
import Accessories from "../pages/shop/accessories";

export const Routes = [
  {
    path: "/",
    name: "Shop",
    component: Shop,
    layout: "/shop",
  },
  {
    path: "/newin",
    name: "New In",
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
