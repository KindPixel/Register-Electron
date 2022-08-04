//electron setup
const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1200,
        height: 700,
        resizable: true,
        icon: "/resources/images/icon.ico",
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    //jquery setup
    const $ = require('jquery')
    win.$ = $

    win.loadFile('view/index.html')
    win.openDevTools()
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
