'use strict';

const { ipcMain } = require('electron');

class Messages {

  constructor() {
    this.ipc = ipcMain;
  }

  listener(key) {
    return new Promise(resolve => {
      this.ipc.on(key, (evt, data) => {
        resolve(data);
      });
    });
  }
}


module.exports = Messages;
