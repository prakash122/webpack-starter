"use strict";

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

// Webpack Dev Server
config.devServer = {
    contentBase: PATHS.dest,
    inline: true,
    port: 9500
};

config.module = {
    rules: [
        {
            test: /\.js$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            ]
        },
        {
            test: /\.css$/,
            use: [
                { loader: 'style-loader' },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }]
        }
    ]
};

module.exports = config;