'use strict';
const messages = require('elasticio-node').messages;
const contactService = require('../commons/services/createContactService.js');
exports.process = processTrigger;

/** *
 * @param msg incoming messages which is empty for triggers
 * @param cfg object to retrieve triggers configuration values, such as endPointURL,apiKey,username,password
 * @param snapshot save the current state of integration step for the future reference.
 */
async function processTrigger(cfg) {

  const self = this;

  contactService.createContact(cfg).then(function (response){

    self.emit('data', messages.newMessageWithBody(response));
    self.emit('end');

  });
}