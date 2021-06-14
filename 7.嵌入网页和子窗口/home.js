const { shell } = require('electron')
window.onload = function () {
  const aaa = document.getElementById('aaa')
  aaa.onclick = function (e) {
    e.preventDefault()
    const href = this.getAttribute('href')
    shell.openExternal(href)
  }
  const btn = document.getElementById('btn')
  btn.onclick = function (e) {
    window.open('http://www.baidu.com')
  }
}