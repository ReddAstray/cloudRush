const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 824,
    height: 824,
    resizable: false,   // scherm niet wijzigbaar
    frame: false,       // bovenste balk weghalen
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'), // preload script
    },
  });

  win.loadFile('src/main/index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

const { ipcMain } = require('electron');

ipcMain.on('minimize-window', (event) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  win.minimize();
});

ipcMain.on('close-window', (event) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  win.close();
});

