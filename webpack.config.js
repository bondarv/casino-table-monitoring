var path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
            },
            {
              test: /.*\.(gif|png|jpe?g)$/i,
              use: [
                {
                  loader: 'file-loader'
                }
              ]
            }
        ]
    }
}