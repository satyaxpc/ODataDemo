const request = require('request-promise');
const getAccuntInfoUrl = '/v2/account/info?api_key=zkh6y8tat9b8pa7ypcza6kv9';
const util = require('../utility.js');

module.exports = {
  getAccuntInfo: async function (cfg) {
    const requestOptions = {
      uri: cfg.endPointURL + getAccuntInfoUrl,
      headers: {
        Authorization: 'Bearer'
      },
      json: true
    };
    // Console.log("client vendor request:-"+requestOptions);
    return await request.get(requestOptions).then(util.autoParse).catch(util.error);
  }
};
