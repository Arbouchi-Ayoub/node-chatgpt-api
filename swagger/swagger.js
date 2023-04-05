// const swaggerAutogen = require('swagger-autogen')()
import swaggerAutogen from 'swagger-autogen'
// const outputFile = './swagger_output.json'
// const endpointsFiles = ['../../bin/server.js']

// swaggerAutogen(outputFile, endpointsFiles)

// const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['../bin/server.js'];

const doc = {
  info: {
    title: 'My API',
    description: 'My API description',
    version: '1.0.0',
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  // require('../bin/server.js');
  // use alternative for the require
  // import { server } from '../bin/server.js';
});
