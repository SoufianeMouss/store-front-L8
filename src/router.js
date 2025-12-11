import { createWebHistory, createRouter } from "vue-router";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import ShoppingCart from "./components/ShoppingCart";

const routes = [
  { path: "/", component: ProductList },
  { path: "/product/:id", component: ProductDetail },
  { path: "/cart", component: ShoppingCart },
  { path: '/deals', component: ProductList },
  { path: '/laptops', component: ProductList },
  { path: '/phones', component: ProductList },
  { path: '/admin', component: AdminPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;