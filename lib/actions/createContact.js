'use strict';
const messages = require('elasticio-node').messages;
const contactService = require('../commons/services/contactService.js');
const utility = require('../commons/utility');
exports.process = processTrigger;

/** *
 * @param msg incoming messages which is empty for triggers
 * @param cfg object to retrieve triggers configuration values, such as endPointURL,apiKey,username,password
 */
async function processTrigger(msg,cfg) {

  const self = this;

   var result = await contactService.createContact(msg.body,cfg);

     if(!utility.isEmpty(result))
      {
        result.forEach(element => {
        self.emit('data', messages.newMessageWithBody(element));
        self.emit('end');
      });

    }
}
