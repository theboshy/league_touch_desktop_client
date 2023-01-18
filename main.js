const { app, BrowserWindow, ipcMain } = require("electron");

let appWin;

createWindow = () => {
  appWin = new BrowserWindow({
    width: 500,
    height: 600,
    title: "Angular and Electron",
    resizable: true,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      devTools: true
    }
  });

  appWin.loadURL(`file://${__dirname}/dist/index.html`).then(r => console.log("page loaded"));

  appWin.setMenu(null);

  appWin.webContents.openDevTools();

  appWin.on("closed", () => {
    appWin = null;
  });
}

ipcMain.on("message", (event) => event.reply("reply", "pong"))

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
