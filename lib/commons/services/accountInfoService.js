const request = require('request-promise');
const getAccuntInfoUrl = 'https://api.constantcontact.com/v2/account/info?api_key=zkh6y8tat9b8pa7ypcza6kv9';
const util = require('../utility.js');

module.exports = {
  getAccuntInfo: async function (cfg) {
    const requestOptions = {
      uri: cfg.endPointURL + getAccuntInfoUrl,
      headers: {
        Authorization: 'Bearer 5fdfd49a-0e1c-4354-80b3-9f6a4d24284b' + Buffer.from(cfg.apiKey + ':' + cfg.username + ':' + cfg.password).toString('base64')
      },
      json: true
    };
    // Console.log("client vendor request:-"+requestOptions);
    return await request.get(requestOptions).then(util.autoParse).catch(util.error);
  }
};
