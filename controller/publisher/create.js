'use strict';

const Messages = require('../../services/messages.js');
const PublisherModel = require('../../model/publisher/create.js');

class CreatePublisher {

  get message() {
    return new Messages();
  }

  get PublisherModel() {
    return new PublisherModel();
  }

  async listenRead() {
    const publishersData = await this.message.listener('read-publishers');
    const newPublisher = this.PublisherModel;
    publisher.read();
  }

  async listenCreation() {
    const publisherData = await this.message.listener('create-publisher');

    const values = this.serializeData(publisherData);

    const newPublisher = this.PublisherModel;
    newPublisher.create(values);
  }

  serializeData(data) {
    return [
      data['publisher-name'],
      data['publisher-sex'],
      data['publisher-address'],
      data['publisher-phone'],
      data['publisher-email'],
      data['publisher-birthdate'],
      data['publisher-immersion'],
      !data['other-sheep'],
      !!data['elder'],
      !!data['ministerial-servant'],
      !!data['regular-pionner'],
    ]
  }

}

module.exports = CreatePublisher;
