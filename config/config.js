const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const fs = require('fs');
const nconf = require('nconf');

nconf.use('memory');
nconf.argv();
nconf.env(['PORT']);


module.exports = {
    development: {
        useDatabase: false,
        db: 'mongodb://localhost/spaceventure',
        root: rootPath,
        port: 3000,
        
    },
    staging: {
        useDatabase: false,
        db: 'mongodb://localhost/spaceventure',
        root: rootPath,
        port: process.env.PORT || 3000
    },

}