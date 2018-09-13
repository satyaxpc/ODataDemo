'use strict';
const messages = require('elasticio-node').messages;
const contactService = require('../commons/services/contactService.js');
exports.process = processTrigger;

/** *
 * @param msg incoming messages which is empty for triggers
 * @param cfg object to retrieve triggers configuration values, such as endPointURL,apiKey,username,password
 * @param snapshot save the current state of integration step for the future reference.
 */
async function processTrigger(msg,cfg,snapshot) {

  const self = this;

  contactService.createContact(msg.body,cfg).then(function (response){

    self.emit('data', messages.newMessageWithBody(response));
    self.emit('end');

  });
}
