// 此处打开的渲染进程跟之前的渲染进程不是父子关系
const { remote } = require('electron')
const { BrowserWindow, Menu, getCurrentWindow } = remote
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

  // 右键菜单是在渲染进程中的
  const rightTemplate = [
    { label: '复制', accelerator: 'command+c' },
    { label: '粘贴', accelerator: 'command+v' }
  ]
  const m = Menu.buildFromTemplate(rightTemplate)
  
  window.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    m.popup({
      window: getCurrentWindow()
    })
  })
}
