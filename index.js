const { app, BrowserWindow } = require("electron");

app.whenReady().then(createWindow);

function createWindow() {
  const win = new BrowserWindow({
    width: 480,
    height: 600,
    minWidth: 480,
    minHeight: 610,
    resizable: true,
    webPreferences: {
      devTools: false,
      nodeIntegration: true,
    },
  });
  win.loadFile("index.html");
  win.setMenuBarVisibility(false);
}
