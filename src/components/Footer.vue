<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <h3>BestBuy Cloud-Native Store</h3>
        <p>Powered by Microservices • Kubernetes • Rust • Vue.js</p>
      </div>

      <div class="footer-right">
        <a href="https://github.com/SoufianeMouss" target="_blank">GitHub</a>
        <span>•</span>
        <a href="https://bestbuy.ca" target="_blank">BestBuy.ca</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0046be; /* Best Buy blue */
  color: #fff;
  padding: 12px 20px;
  font-size: 0.9rem;
  z-index: 1000;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.footer-left h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
}

.footer-left p {
  margin: 2px 0 0 0;
  font-size: 0.8rem;
}

.footer-right {
  display: flex;
  gap: 8px;
  font-size: 0.9rem;
  cursor: pointer;
}

.footer-right a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}

.footer-right a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
}
</style>
