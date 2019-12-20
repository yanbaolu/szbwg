const webpack = require('webpack');
const path = require('path');
function resolve(dir) {
    return path.resolve(__dirname, dir)
}
module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': resolve('src'),
                'assets': resolve('src/assets'),
                'base': resolve('src/assets/base'),
                'images': resolve('src/assets/images'),
                'img': resolve('src/assets/css/img'),
                'views': resolve('src/views'),
                'components': resolve('src/components'),
                'api': resolve('src/api'),
                'mixins': resolve('src/mixins'),
                'store': resolve('src/store'),
                'service': resolve('src/service'),
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]
    },
    devServer: {
        port: 8038,
        host: '0.0.0.0',
        open: 'Google Chrome'
    },
    productionSourceMap: false,
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
}