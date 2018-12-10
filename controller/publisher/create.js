'use strict';

const Messages = require('../../services/messages.js');
const CreatePublisherModel = require('../../model/publisher/create.js');

class CreatePublisher {
  async listen() {
    const message = new Messages();
    const publisherData = await message.listener('create-publisher');

    const values = this.serializeData(publisherData);
    console.log(values);
    let newPublisher = new CreatePublisherModel();
    //newPublisher.create(values);
  }

  serializeData(data) {
    console.log(data);
    return [
      0,
      data['publisher-name'],
      data['publisher-sex'],
      data['publisher-address'],
      data['publisher-phone'],
      data['publisher-email'],
      data['publisher-birthdate'],
      data['publisher-immersion'],
      data['other-sheep'],
      !!data['elder'],
      !!data['ministerial-servant'],
      !!data['regular-pionner'],
    ]
  }

}

module.exports = CreatePublisher;
