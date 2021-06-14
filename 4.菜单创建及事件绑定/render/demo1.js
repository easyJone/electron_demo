// 此处打开的渲染进程跟之前的渲染进程不是父子关系
const BrowserWindow = require('electron').remote.BrowserWindow
const btn = document.getElementById('btn')

btn.onclick = function () {
  const newWin = new BrowserWindow({
    width: 300,
    height: 300
  })
  newWin.loadFile('./yellow.html')
  newWin.on('closed', () => {
    newWin = null
  })
}
