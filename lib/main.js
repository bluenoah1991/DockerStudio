'use strict';

var _require = require('electron'),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow;

var path = require('path');

var win = null;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600
    });
    win.loadURL('file://' + __dirname + '/../index.html');
}

app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function () {
    if (win == null) {
        createWindow();
    }
});
//# sourceMappingURL=main.js.map
