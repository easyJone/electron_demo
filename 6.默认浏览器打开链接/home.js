const { shell } = require('electron')
window.onload = function () {
  const btn = document.getElementById('aaa')
  btn.onclick = function (e) {
    e.preventDefault()
    const href = this.getAttribute('href')
    shell.openExternal(href)
  }
}