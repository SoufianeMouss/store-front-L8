<template>
  <nav class="top-nav">
    <div class="logo">
      <router-link to="/">
        <img src="/new_logo.png" alt="Best Buy Logo" />
      </router-link>
    </div>

    <!-- Hamburger (mobile) -->
    <button class="hamburger" @click="toggleNav" aria-label="Toggle navigation">
      <span class="hamburger-icon"></span>
    </button>

    <!-- Desktop + mobile menu -->
    <ul class="nav-links" :class="{ 'nav-links--open': isNavOpen }">

      <!-- Updated menu items -->
      <li><router-link to="/" @click="closeNav">All Products</router-link></li>
      <li><router-link to="/deals" @click="closeNav">Deals</router-link></li>
      <li><router-link to="/laptops" @click="closeNav">Laptops</router-link></li>
      <li><router-link to="/phones" @click="closeNav">Phones</router-link></li>
      <li><router-link to="/admin" @click="closeNav">Admin</router-link></li>
      <li><router-link to="/cart" @click="closeNav">Cart ({{ cartItemCount }})</router-link></li>


    </ul>
  </nav>
</template>

<script>
export default {
  name: "TopNav",
  props: {
    cartItemCount: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    closeNav() {
      this.isNavOpen = false;
    },
  },
};
</script>

<style scoped>
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0046be; /* Best Buy blue */
  color: #fff;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

/* Logo */
.logo img {
  width: 60px;
  height: auto;
}

/* Menu (desktop) */
.nav-links {
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 1rem;
  font-weight: 600;
  gap: 1.5rem;
}

.nav-links li a {
  color: #fff;
  text-decoration: none;
}

.nav-links li a.router-link-active {
  border-bottom: 2px solid #ffeb3b; /* highlight active link */
}

/* Hamburger button (hidden on desktop) */
.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger-icon {
  display: block;
  width: 22px;
  height: 2px;
  background-color: #fff;
  position: relative;
}

.hamburger-icon::before,
.hamburger-icon::after {
  content: "";
  display: block;
  width: 22px;
  height: 2px;
  background-color: #fff;
  position: absolute;
  left: 0;
}

.hamburger-icon::before {
  top: -6px;
}

.hamburger-icon::after {
  top: 6px;
}

/* Mobile behaviour */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    background-color: #0046be;
    padding: 0.75rem 1rem 1rem;
  }

  .nav-links--open {
    display: flex;
  }

  .nav-links li {
    padding: 0.5rem 0;
  }

  .hamburger {
    display: block;
  }
}
</style>
