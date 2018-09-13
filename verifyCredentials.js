"use strict";
const request = require('request-promise');
const messages = require('elasticio-node').messages;
module.exports = verify;
const accountService = require("./lib/commons/services/accountService.js");
/***
 * @param credentials object to retrieve apiKey from
 *
 * @returns Promise sending HTTP request and resolving its response
 */
async function verify(credentials) {
    console.log('Credentials '+ credentials.endPointUrl);
    return await accountService.login(credentials);
}