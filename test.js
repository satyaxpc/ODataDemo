const contactService = require("./lib/commons/services/contactService.js");
var Promise = require('promise');
const _ = require("underscore");
const getContact = '/v2/lists?api_key=zkh6y8tat9b8pa7ypcza6kv9'
const request = require('request-promise');
const util = require("./lib/commons/utility");

const co = require('co');

const API_BASE_URI = 'https://api.constantcontact.com';

function getContactList() {

    
    return co(function*() {

        const requestOptions = {
            uri: `${API_BASE_URI}/v2/lists?api_key=zkh6y8tat9b8pa7ypcza6kv9`,
            headers: {
                Authorization : 'Bearer' + '5fdfd49a-0e1c-4354-80b3-9f6a4d24284b',
            },
            json: true
        };

        // yielding the response
        let response = yield request.get(requestOptions);

            console.log('Response '+ response);

         
            return messages.newMessageWithBody({
                response
            });
    });
}

    var data =  getContactList();
    console.log("Data "+JSON.stringify(data) );

  // updateVendor(
  // {endPointURL:"https://asp.calibersoftware.com/capi2_APISandbox",apiKey:"MINER01",username:"asanchez",password:"xKuFyku2J3"});
  // processTrigger({endPointURL:"https://asp.calibersoftware.com/capi2_APISandbox",apiKey:"MINER01",username:"asanchez",password:"xKuFyku2J3"});
  
  