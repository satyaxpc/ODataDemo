"use strict";
module.exports = verify;
/***
 * @param credentials object to retrieve apiKey from
 *
 * @returns Promise sending HTTP request and resolving its response
 */
 function verify(credentials)
 {
    if(credentials.api_key === 'zkh6y8tat9b8pa7ypcza6kv9' && 
    credentials.endPointUrl === 'https://api.constantcontact.com' && credentials.accessToken === 'Bearer 5fdfd49a-0e1c-4354-80b3-9f6a4d24284b')
    {
      return true;
    }
    else{

    throw  error("Invalid Credentials");
    return false;
    
    }
}