"use strict";
console.log('Production mode');
const path = require('path');

// Paths involved in the creating the config
const PATHS = {
    src: path.resolve(__dirname, 'app/index.js'),
    dest: path.resolve(__dirname, 'dist')
}

// Webpack config object
const config = {};

// Entry point of the application to be compiled
config.entry = PATHS.src;

// Output of the application build
config.output = {
    path: PATHS.dest,
    filename: 'output.bundle.js'
}

module.exports = config;