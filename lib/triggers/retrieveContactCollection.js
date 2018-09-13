"use strict";
const request = require('request-promise');
const messages = require('elasticio-node').messages;

const API_BASE_URI = 'https://api.constantcontact.com';

exports.process = processTrigger;
exports.getStatusModel = getStatusModel;

/**
 * Executes the trigger's logic by sending a request to the Petstore API and emitting response to the platform.
 * The function returns a Promise sending a request and resolving the response as platform message.
 *
 * @param msg incoming messages which is empty for triggers
 * @param cfg object to retrieve triggers configuration values, such as apiKey and pet status
 * @returns promise resolving a message to be emitted to the platform
 */
function processTrigger(msg, cfg) {

    // access the value of the apiKey field defined in credentials section of component.json
    const apiKey = cfg.apiKey;
    // access the value of the status field defined in credentials section of component.json
    const status = cfg.status;

   


    const requestOptions = {
        uri: `${API_BASE_URI}/v2/lists?api_key=zkh6y8tat9b8pa7ypcza6kv9`,
        headers: {
          Authorization : 'Bearer' + '5fdfd49a-0e1c-4354-80b3-9f6a4d24284b'
        },
        json: true
    };

    // return the promise that sends a request to the Petstore API
    return request.get(requestOptions)
        .then((response) => {

            console.log('Response Length', response.length);

            if (response.length) {

                // this message will be emitted to the platform
                // please note that we wrap the request payload into a message object
                return messages.newMessageWithBody({
                    result : response
                });
            }
        });
}

/**
 * This function calls the Petstore API to retrieve the available pet statuses.
 * The response is transformed into an object, shown below:
 *
 * <pre>
 *     {
 *      "available": "Available",
 *      "pending": "Pending",
 *      "sold": "Sold"
 *     }
 * </pre>
 *
 * The returned object represents a model for a select box in which the keys represent the options
 * and the values their human representable names.
 *
 * @param cfg object to retrieve apiKey from
 * @returns promise resolving the select model
 */
// function getStatusModel(cfg) {
//     // access the value of the apiKey field defined in credentials section of component.json
//     const apiKey = cfg.apiKey;

//     const requestOptions = {
//         uri: `${API_BASE_URI}/pet/statuses`,
//         headers: {
//             'api-key': apiKey
//         },
//         json: true
//     };

//     return request.get(requestOptions)
//         .then((response) => {

//             const model = {};

//             // transforming a simple array of statuses into a select model
//             response.forEach((next) => {
//                 model[next] = next.charAt(0).toUpperCase() + next.substring(1);
//             });

//             return model;
//         });
// }