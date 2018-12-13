'use strict';

const { ipcMain } = require('electron');

class Messages {

  constructor() {
    this.ipc = ipcMain;
  }

  listener(key, replier) {
    const promise = resolve => {
      this.ipc.on(key, (evt, rawData) => {
        let resolvedData;
        const data = rawData ? JSON.parse(rawData) : null;

        resolvedData = !replier ? data : { data: data, evt: evt };

        resolve(resolvedData);
      });
    };

    return new Promise(promise);
  }
}

module.exports = Messages;
