const { remote: { dialog } } = require('electron')

const btn = document.getElementById('btn')
btn.onclick = function () {
  const option = {
    title: '小二，出来接客了',
    body: '有大官人翻牌子了'
  }
  new window.Notification(option.title, option)
}