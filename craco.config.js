const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    webpack: {
        alias: {
            '@icon': resolvePath('./src/img/icon'),
            '@upload': resolvePath('./src/img/upload')
        }
    },
}