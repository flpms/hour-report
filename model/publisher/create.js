'use strict';

const DBConnection = require('../../services/DBCONN.js');

class PublisherModel {

  constructor() {
    this.openConnection();
  }

  openConnection() {
    this.db = new DBConnection().openConnection();
  }

  create(values) {
    console.log(values);
    this.db.serialize(() => {
      this.db.run('INSERT INTO publishers VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', values);
    });

    // this.db.closeConnection();
  }

  read() {

    let acc = [];

    return new Promise((resolve, reject) => {

      this.db.serialize(() => {
        this.db.each('SELECT * FROM publishers',
          (err, row) => !err ? acc.push(row) : reject(err),
          (err, totalRows) => {
            !err && acc.length === totalRows ? resolve(acc) : reject(err);
          });
      });

      // this.db.closeConnection();
    });
  }
}

module.exports = PublisherModel;
