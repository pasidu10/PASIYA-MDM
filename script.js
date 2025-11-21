

⚙️ `script.js`

```javascript
let deployCount = 2000000;
const deployElement = document.getElementById("deployCount");

setInterval(() => {
  deployCount += 5;
  deployElement.innerText = deployCount.toLocaleString();
}, 1000); // every second, +5

// Country flags
const countries = ["us", "gb", "lk", "in", "pk", "bd", "au", "ca", "fr", "de", "it", "jp", "kr", "br", "sa", "ae", "ru", "cn", "es", "mx", "za", "ng", "ke", "tr", "ir", "id", "th", "my", "ph", "vn"];
const flagContainer = document.getElementById("flags");

countries.forEach(code => {
  const img = document.createElement("img");
  img.src = `https://flagcdn.com/w40/${code}.png`;
  img.alt = code;
  flagContainer.appendChild(img);
});
```

---
