
```js
const liveCountEl = document.getElementById('liveCount');
const lastUpdateEl = document.getElementById('lastUpdate');

let count = 2000000;
const increment = 5;
const intervalMs = 1000 / (increment/1); // one increment per second-ish

function formatNum(num) {
  return num.toLocaleString();
}

function updateCounter() {
  count += increment;
  liveCountEl.textContent = formatNum(count);
  lastUpdateEl.textContent = new Date().toLocaleString();
}

setInterval(updateCounter, 1000);
