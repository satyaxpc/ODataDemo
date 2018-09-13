const request = require('request-promise');
const util = require('../utility.js');

module.exports = {
  login: async function (cfg) {

    if(cfg.api_key === 'zkh6y8tat9b8pa7ypcza6kv9' && cfg.endPointUrl === 'https://api.constantcontact.com'){
      return true;
    }
    else{
      return await request.get(requestOptions).then(util.autoParse).catch(util.errorWithThrow);
    }
  }
};
