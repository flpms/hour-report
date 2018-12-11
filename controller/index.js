'use strict';

const Publisher = require('./publisher/create.js');

module.exports = function MainController() {
  const publisher = new Publisher();
  publisher.listenCreation();
  publisher.listenRead();
}
