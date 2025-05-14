import { app, BrowserWindow } from 'electron'
import path from 'path'
import { startApiServer } from './main/server'

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js'),
        },
    })

    win.loadURL('http://localhost:3000') // ou carrega build local
}

app.whenReady().then(() => {
    startApiServer() // inicia backend local
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})