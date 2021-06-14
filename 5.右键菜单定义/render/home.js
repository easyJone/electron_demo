const fs = require('fs')
window.onload = function () {
  const btn = document.getElementById('btn')
  const myBaby = document.getElementById('myBaby')
  btn.onclick = function () {
    fs.readFile('ladys.txt', (err, data) => {
      myBaby.innerHTML = data
    })
  }
}