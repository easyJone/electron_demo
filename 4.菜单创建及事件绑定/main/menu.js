// 菜单创建
const { Menu, BrowserWindow } = require('electron')
const template = [
  {
    label: '凤来仪会所',
    submenu: [
      {
        label: '奶油SPA',
        accelerator: 'option+n', // 快捷键
        click: () => {
          const newWin = new BrowserWindow({
            width: 300,
            height: 300,
            webPreferences: {
              nodeIntegration: true
            }
          })
          newWin.loadFile('yellow.html')
          newWin.on('closed', function () {
            newWin = null
          })
        }
      },
      {
        label: '大桶大洗浴中心',
        submenu: [
          {
            label: '泰式按摩'
          },
          {
            label: '盲人松骨'
          }
        ]
      }
    ]
  }
]
const m = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(m)