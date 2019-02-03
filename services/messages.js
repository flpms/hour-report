'use strict';

const { ipcMain } = require('electron');

class Messages {

  constructor() {
    this.ipc = ipcMain;
  }

  listener(key, replier) {
    const promise = resolve => {
      this.ipc.on(key, (evt, rawData) => {
        const data = rawData ? JSON.parse(rawData) : null;
        resolve(!replier ? data : { data: data, evt: evt });
      });
    };

    return new Promise(promise);
  }
}

module.exports = Messages;
