const { remote: { dialog } } = require('electron')

window.addEventListener('online', () => alert('官人，我回来了'))
window.addEventListener('offline', () => alert('小女子先行一步'))