'use strict';
const messages = require('elasticio-node').messages;
const contactService = require('../commons/services/contactService.js');
exports.process = processTrigger;

/** *
 * @param msg incoming messages which is empty for triggers
 * @param cfg object to retrieve triggers configuration values, such as endPointURL,apiKey,username,password
 * @param snapshot save the current state of integration step for the future reference.
 */
async function processTrigger(cfg) {

  var contactList = await contactService.retrieveContact(cfg);
  
  contactList.forEach(element => {
    console.log('Contact List' + JSON.stringify(element));
    self.emit('data', messages.newMessageWithBody(element));
  });

  self.emit('end');
}
