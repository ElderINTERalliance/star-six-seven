var {app, BrowserWindow} = require('electron')

function createwindow(){
    let win = new BrowserWindow({
        frame: true,
        width: 1080,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile("index.html")
}

app.on('ready', createwindow)