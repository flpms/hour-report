'use strict';

const sqlite3 = require('sqlite3');

class CreatePublisherModel {

  create(valus) {
    const db = new sqlite3.Database('../../file.db');
    db.serialize(() => {
      db.run('INSERT INTO Publishers VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', values);
    });
  }
}

module.exports = CreatePublisherModel;
