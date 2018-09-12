const request = require('request-promise');
//const loginURL = '/api/v2/login';
//const util = require('../utility.js');

module.exports = {

  // Login service
  login: async function (cfg) {

    if(cfg.username === 'satyaxpc'){
      return true;
    }
    if(cfg.password === 'satyaxpc@123'){
      return true;
    }
    if(cfg.endPointURL === 'https://api.constantcontact.com'){
      return true;
    }
    // const requestOptions = {
    //   uri: cfg.endPointURL + loginURL,
    //   headers: {
    //     Authorization: 'basic ' + Buffer.from(cfg.username + ':' + cfg.password).toString('base64')
    //   },
    //   json: true
    // };
    // console.log('login request:-' + requestOptions);
    //return await request.get(requestOptions).then(util.autoParse).catch(util.errorWithThrow);
  }
};
