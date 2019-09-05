const path = require('path');

module.exports = {
    entry: {
        app: './docs/index.js'
    },
    output: {
        filename: "js/[name].bundle.js",
        path: path.resolve(__dirname, '../docs/dist')
    },
    resolve: {
        alias: {
            "components": path.resolve(__dirname, "../src/components")
        }
    },
}