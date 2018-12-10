'use strict'

const { app, BrowserWindow } = require('electron');
require('./controller/')();

require('./first-run.js')();

let win;

function createWindow () {
  // Create the browser window.
  // e carrega index.html do app.
  win = new BrowserWindow({
    width: 1024,
    height: 728,
    center: true
  });

  win.loadURL('http://localhost:3000');
  win.webContents.openDevTools();


  win.on('close', () => {
    win = null;
  });


}

app.on('ready', createWindow);
