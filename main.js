const electron = require('electron')

const app = electron.app // 引用app

const BrowserWindow = electron.BrowserWindow // 窗口引用（构造函数）

let mainWindow = null // 主窗口

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800
  })
  mainWindow.loadFile('./index.html')
  mainWindow.on('closed', () => mainWindow = null)
})