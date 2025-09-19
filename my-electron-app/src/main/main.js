const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1224,
    height: 1224,
    resizable: false,   // scherm niet wijzigbaar
    frame: false,       // bovenste balk weghalen
    webPreferences: {
      nodeIntegration: true,
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
