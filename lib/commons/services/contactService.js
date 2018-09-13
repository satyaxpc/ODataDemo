const request = require('request-promise');
const createContactURL = '/v2/account/info?api_key={api_key}';
const getContactURL = '/v2/lists?api_key={api_key}';
const util = require('../utility.js');

module.exports = {
  createContact : async function (body,cfg) {
    const requestOptions = {
      uri: cfg.endPointUrl + createContactURL.replace('{api_key}' , cfg.api_key),
      headers: {
        Authorization : cfg.accessToken
      },
      body: body,
      json: true
    };
    return await request.post(requestOptions).then(util.autoParse).catch(util.error);
  },
  getContact : async function(cfg){
    const requestOptions = {
      uri : cfg.endPointUrl + getContactURL.replace('{api_key}',cfg.api_key),
      headers : {
        Authorization : cfg.accessToken
      },
      json : true
    }
    return await request.get(requestOptions).then(util.autoParse).catch(util.error);
  }
};
