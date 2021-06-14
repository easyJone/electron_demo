const { remote: { dialog }, clipboard } = require('electron')

const btn = document.getElementById('btn')
const code = document.getElementById('code')
btn.onclick = function () {
  clipboard.writeText(code.innerHTML)
  alert('复制成功')

}