'use strict';

const DBConnection = require('./services/DBCONN.js');

module.exports = () => {
  const db = new DBConnection().openConnection();

  db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS publishers(name, sex, address, phone, email, birthdate, immersionDate, otherSheep, elder, sm, rp)');
    db.run('CREATE TABLE IF NOT EXISTS hours(publisherId, year, publications, videos, hours, ReturnVisits, bibleStudings, observations)');
  });

  db.close();
}
