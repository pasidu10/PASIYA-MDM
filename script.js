🧮 `script.js`
```js
const counterEl = document.getElementById('counter');
let count = 1700000;        // Start value
const rate = 5;             // Increment per interval
const intervalMs = 1000 / rate;  // e.g. 2ms for 5 increments/sec

function formatNumber(num) {
  return num.toLocaleString('en-US');
}

function updateCounter() {
  count += rate;
  counterEl.textContent = formatNumber(count) + '+';
}

setInterval(updateCounter, intervalMs);
```
