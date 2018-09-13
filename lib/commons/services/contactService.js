const request = require('request-promise');
const contactURL = '/v2/lists?api_key={api_key}';
const util = require('../utility.js');

module.exports = {
  createContact : async function (body,cfg) {
    const requestOptions = {
      uri: cfg.endPointUrl + contactUR.replace('{api_key}' , cfg.api_key),
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
      uri : cfg.endPointUrl + contactUR.replace('{api_key}',cfg.api_key),
      headers : {
        Authorization : cfg.accessToken
      },
      json : true
    }
    return await request.get(requestOptions).then(util.autoParse).catch(util.error);
  }
};
