const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        title: 'Editor',
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`)
    mainWindow.webContents.on('will-navigate', (e, url) => {
        e.preventDefault()
        mainWindow.webContents.send('open-file', url)
    })

})
