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
    window.open('children.html')
  }

  // 接收子窗口传递的信息
  window.addEventListener('message', msg => {
    const contentBox = document.getElementById('content')
    contentBox.innerHTML = JSON.stringify(msg.data)
  })
}