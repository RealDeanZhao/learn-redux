var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['webpack-hot-middleware/client',
        './src/index.jsx'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include: __dirname,
                query: {
                    presets: ['es2015', 'react']
                }
            },

        ]
    }
};
