const messages = require('elasticio-node').messages;
const contactService = require('../ODataDemo/lib/commons/services/contactService.js');
exports.process = processTrigger;

async function processTrigger(cfg){
    await contactService.retrieveContact(cfg);
}

processTrigger({endPointUrl : 'https://api.constantcontact.com', api_key : 'zkh6y8tat9b8pa7ypcza6kv9'});