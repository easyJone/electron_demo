const { remote: { dialog } } = require('electron')
window.onload = function () {
  const btn = document.getElementById('btn')
  btn.onclick = function (e) {
    dialog.showOpenDialog({
      title: '请选择小姐姐',
      filters: [
        {
          name: 'img',
          extensions: ['jpg']
        }
      ],
      buttonLabel: '选择上传',
      defaultPath: '飞鹤.jpg'
    }).then(res => {
      console.log(res)
      const imgBox = document.getElementById('img')
      imgBox.setAttribute('src', res.filePaths[0])
    }).catch (e => console.log(e) )
  }
}