const { app, BrowserWindow, Tray, Menu, nativeImage, shell } = require('electron');
const path = require('path');
let win, tray, salir = false;

app.setAppUserModelId('com.horariosmr.app');
if (!app.requestSingleInstanceLock()) app.quit();
app.on('second-instance', () => { if (win) { win.show(); win.focus(); } });
app.on('before-quit', () => { salir = true; });

function crearVentana() {
  win = new BrowserWindow({
    width: 1200, height: 850, autoHideMenuBar: true,
    icon: path.join(__dirname, 'icon-512.png'),
    webPreferences: { backgroundThrottling: false }
  });
  win.loadFile('index.html');
  // Enlaces (Moodle, Rayuela, Classroom) se abren en el navegador
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
  // Al cerrar, se oculta en la bandeja para seguir enviando avisos
  win.on('close', e => { if (!salir) { e.preventDefault(); win.hide(); } });
}

app.whenReady().then(() => {
  crearVentana();
  const img = nativeImage.createFromPath(path.join(__dirname, 'icon-192.png')).resize({ width: 24, height: 24 });
  tray = new Tray(img);
  tray.setToolTip('Horario 2º SMR');
  tray.setContextMenu(Menu.buildFromTemplate([
    { label: 'Abrir horario', click: () => { win.show(); win.focus(); } },
    { label: 'Salir del todo', click: () => { salir = true; app.quit(); } }
  ]));
  tray.on('click', () => { win.show(); win.focus(); });
  app.setLoginItemSettings({ openAtLogin: true }); // arranca con el ordenador
});
