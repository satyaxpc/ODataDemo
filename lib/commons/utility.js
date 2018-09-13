const _ = require('underscore');

module.exports = {
  autoParse: function (body, response, resolveWithFullResponse) {
      console.log("body" + JSON.stringify(body));
    return body;
  },
  error: function (reason) {
    console.log('Oops! Error occurred - ', reason);
  },
  errorWithThrow: function (reason) {
    console.log('Oops! Error occurred - ', reason);
    throw new Error(reason);
  },
  isEmpty:function(value) {
    return typeof value == 'string' && !value.trim() || typeof value == 'undefined' || value === null;
  }
  
};
