'use strict';

const expect = require('chai').expect;
const fs = require('fs');
const {getJsonSchemaForEntitySet} = require('../lib/commons/odata/extractCsdl');

describe('OData Parsing Test Cases', function () {
  it('TripPin Person Schema', async function () {
    const csdlString = fs.readFileSync('./spec/samples/rawCsdlFiles/TripPinMetadata.xml').toString();

    const convertedResults = await getJsonSchemaForEntitySet(csdlString, 'People');
    const properties = convertedResults.properties;

    expect(properties.UserName).to.deep.include({
      type: 'string',
      required: false,
      title: 'UserName (Primary Key)'
    });
    expect(properties.FirstName).to.deep.include({
      type: 'string',
      required: true,
      title: 'FirstName'
    });
    expect(properties.LastName).to.deep.include({
      type: 'string',
      required: false,
      title: 'LastName'
    });
    expect(properties.MiddleName).to.deep.include({
      type: 'string',
      required: false,
      title: 'MiddleName'
    });
    expect(properties.Gender).to.deep.include({
      type: 'string',
      required: true,
      enum: ['Male', 'Female', 'Unknow'],
      title: 'Gender'
    });
    expect(properties.Age).to.deep.include({
      type: 'number',
      required: false,
      title: 'Age'
    });
    expect(properties.Emails).to.deep.include({
      type: 'array',
      items: {
        type: 'string'
      },
      required: false,
      title: 'Emails'
    });

    expect(properties.FavoriteFeature).to.deep.include({
      type: 'string',
      required: true,
      enum: ['Feature1', 'Feature2', 'Feature3', 'Feature4'],
      title: 'FavoriteFeature'
    });

    expect(properties.Features).to.deep.include({
      type: 'array',
      required: true,
      items: {
        type: 'string',
        enum: ['Feature1', 'Feature2', 'Feature3', 'Feature4']
      },
      title: 'Features'
    });

    expect(properties.BestFriend.required).to.be.false;
  });

  it('MS Business Central Contact Schema', async function () {
    const csdlString = fs.readFileSync('./spec/samples/rawCsdlFiles/MsBusinessCentralWithCustomerCardService.xml').toString();

    const convertedResults = await getJsonSchemaForEntitySet(csdlString, 'CustomerCardService');
    const properties = convertedResults.properties;

    expect(properties.No.required).to.be.false;
  });
});
