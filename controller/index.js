'use strict';

const CreatePublisher = require('./publisher/create.js');

module.exports = function MainController() {
  const createPublisher = new CreatePublisher();
  createPublisher.listen();
}
