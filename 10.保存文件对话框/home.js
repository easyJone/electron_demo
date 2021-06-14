const { remote: { dialog } } = require('electron')
const fs = require('fs')

window.onload = function () {
  const btn = document.getElementById('btn')
  btn.onclick = function (e) {
    dialog.showSaveDialog({
      title: '保爆存'
    }).then(res => {
      fs.writeFileSync(res.filePath, '123123')
    }).catch (e => console.log(e) )
  }
}