const { app, BrowserWindow } = require('electron')

let mainWindow = null

app.whenReady().then(() => {
  // https://www.electronjs.org/docs/api/browser-window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    // show: true, // 窗口是否在创建时显示
    // backgroundColor: '#ccc', // 复杂应用显示缓慢，添加背景会更原生，视觉缩减等待
    // alwaysOnTop: true,
    // title: '父窗口标题',
    // frame: false,
    webPreferences: { // 网页功能设置
      nodeIntegration: true, // 启用Node integration
      contextIsolation: false, // 是否在独立 JavaScript 环境中运行 Electron API和指定的preload 脚本
      enableRemoteModule: true, // 开启remote模块
    },
    // autoHideMenuBar: false, // 自动隐藏菜单栏、alt

  })

  /**
   * 优雅显示, 配合show: false ---> 窗口准备好后显示
   */
  // mainWindow.once('ready-to-show', () => {
  //   mainWindow.show()
  // })

  /**
   * loadURL和loadFile
   */
  // mainWindow.loadURL('https://github.com') // 载入网络地址
  // mainWindow.loadURL(`file://${__dirname}/index.html`) // 载入本地地址
  mainWindow.loadFile('./demo1.html') // 载入本地文件
  require('./main/menu')

  /**
   * 父子窗口
   */
  // const child = new BrowserWindow({
  //   width: 300,
  //   height: 300,
  //   parent: mainWindow, // 指定父窗口为mainWindow,子窗口始终会置于父窗口前面
  //   // modal: false, // 模态窗口：禁用父窗口的子窗口，必须设置parent和modal
  //   // x: 100,
  //   // y: 100,
  //   // resizable: false,
  //   // movable: false,
  //   // minimizable: false,
  //   // maximizable: false,
  //   // closable: false,
  //   // focusable: false,
  //   // alwaysOnTop: true, // 受限于父窗口
  //   // skipTaskbar: true, // 不在任务栏显示
  //   title: '我是标题', // 仅当加载的html文件title为空生效
  //   icon: 'http://kylin-oss.sylstock.com/upload/20201201/cab961518d2cdea49b3097fe9555ba690832bb61.jpeg',
  //   // frame: false, // 无边框
  //   // momodalable: true, // 子窗口为模态窗口
  //   webPreferences: { // 网页功能设置
  //     nodeIntegration: true, // 启用Node integration
  //   },
  // })
  
  // child.loadFile('./home.html')


  /**
   * 页面可见性：与窗口是否隐藏/最小化相关
   * 1、macOS上还会跟踪窗口是否被完全遮挡
   * 2、创建BrowserWindow带有show: false时，可见状态仍为visible，设置paintWhenInitiallyHidden:false以解决
   * 3、backgroundThrottling被禁用时，可见状态始终为visible
   * 4、一般状态为hide时暂停消耗资源的操作以节省电力
   */

  mainWindow.on('closed', () => mainWindow = null)
})