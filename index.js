var {app, BrowserWindow} = require('electron')

function createwindow(){
    let win = new BrowserWindow({
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