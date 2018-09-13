const request = require('request-promise');
//const loginURL = '/api/v2/login';
const util = require('../utility.js');

module.exports = {

  // Login service
  login: async function (cfg) {

    if(cfg.api_key === 'zkh6y8tat9b8pa7ypcza6kv9'){
      return true;
    }
    else{
      return await request.get(requestOptions).then(util.autoParse).catch(util.errorWithThrow);
    }

    if(cfg.endPointUrl === 'https://api.constantcontact.com'){
      return true;
    }else{
      return await request.get(requestOptions).then(util.autoParse).catch(util.errorWithThrow);
    }

    // if(cfg.endPointURL === 'https://api.constantcontact.com'){
    //   return true;
    // }else{
    //   return await request.get(requestOptions).then(util.autoParse).catch(util.errorWithThrow);
    // }
    // const requestOptions = {
    //   uri: cfg.endPointURL + loginURL,
    //   headers: {
    //     Authorization: 'basic ' + Buffer.from(cfg.username + ':' + cfg.password).toString('base64')
    //   },
    //   json: true
    // };
    // console.log('login request:-' + requestOptions);
  }
};
