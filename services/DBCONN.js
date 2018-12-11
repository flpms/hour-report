'use strict';

const sqlite3 = require('sqlite3');

class DBConnection {

  openConnection() {
    this.db = new sqlite3.Database('./file.db');
    return this.db;
  }

  closeConnection() {
    this.db.close();
  }

}

module.exports = DBConnection;
