require('dotenv').config();
const withSass = require('@zeit/next-sass');

module.exports = withSass({
    cssModules: true,
    publicRuntimeConfig: {
        CONVERT_API: process.env.CONVERT_API,
    }
})