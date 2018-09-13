const request = require('request-promise');
const createContactUrl = '/v2/account/info?api_key={api_key}';
const getContact = '/v2/lists?api_key={api_key}'
const util = require('../utility.js');

module.exports = {
  createContact : async function (cfg) {
    const requestOptions = {
      uri: cfg.endPointUrl + createContactUrl.replace('{api_key}' , cfg.api_key),
      headers: {
        Authorization : 'Bearer' + '5fdfd49a-0e1c-4354-80b3-9f6a4d24284b',
        ContentType : 'application/json'
      },
      json: true
    };
    return await request.post(requestOptions).then(util.autoParse).catch(util.error);
  },

  retrieveContact : async function(cfg){
    const requestOptions = {
      uri : cfg.endPointUrl + getContact.replace('{api_key}',cfg.api_key),
      headers : {
        Authorization : 'Bearer' + '5fdfd49a-0e1c-4354-80b3-9f6a4d24284b',
        ContentType : 'application/json'
      },
      json : true
    }
    console.log("URI "+ requestOptions.uri);
    return await request.get(requestOptions).then(util.autoParse).catch(util.error);
  }
};
