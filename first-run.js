'use strict';

const sqlite3 = require('sqlite3');

module.exports = () => {
  const db = new sqlite3.Database('./file.db');

  db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS publishers(id, name, sex, address, phone, email, birthdate, immersionDate, otherSheep, elder, sm, rp)');
    db.run('CREATE TABLE IF NOT EXISTS hours(publisherId, year, publications, videos, hours, ReturnVisits, bibleStudings, observations)');
  });

  db.close();
}
