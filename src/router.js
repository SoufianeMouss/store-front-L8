import { createWebHistory, createRouter } from "vue-router";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import ShoppingCart from "./components/ShoppingCart";

const AdminPage = {
  template: '<div style="padding: 2rem;"><h2>Admin Page (placeholder)</h2><p>Best Buy admin area will go here.</p></div>'
}

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