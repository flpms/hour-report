'use strict';

const Messages = require('../../services/messages.js');
const PublisherModel = require('../../model/publisher/create.js');

class CreatePublisher {

  get message() {
    return new Messages();
  }

  get publisherModel() {
    return new PublisherModel();
  }

  async listenRead() {
    try {
      const { evt } = await this.message.listener('read-publishers', true);
      const publishers = await this.publisherModel.read();

      evt.sender.send('read-publishers', publishers);

      this.listenRead();
    } catch(e) {
      console.error(e);
    }
  }

  async listenCreation() {
    const publisherData = await this.message.listener('create-publisher');
    this.publisherModel.create(this.serializeData(publisherData));
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
