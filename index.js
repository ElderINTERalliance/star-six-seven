var {app, BrowserWindow} = require('electron');
require('update-electron-app');

function createwindow(){
    let win = new BrowserWindow({
        minWidth: 720,
        minHeight: 480,
        frame: false,
        width: 720,
        height: 480,
        transparent: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile("index.html")
}
app.on('ready', createwindow)