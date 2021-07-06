const { resolve } = require('path')

exports.alias = {
    root: process.cwd(),
    main: resolve(process.cwd(), './src'),
    packages: resolve(process.cwd(), './src/packages'),
}

