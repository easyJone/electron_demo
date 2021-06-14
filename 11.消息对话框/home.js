const { remote: { dialog } } = require('electron')

window.onload = function () {
  const btn = document.getElementById('btn')
  btn.onclick = function (e) {
    dialog.showMessageBox({
      type: 'warning',
      title: '去不去由你',
      message: '上课去不去',
      buttons: ['去去去', '不去']
    }).then(res => {
      console.log(res)
    }).catch (e => console.log(e) )
  }
}