var webpack = require("webpack");

// 压缩代码
var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
});

module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    entry: {
        gonggao: './src/js/gonggao.js',
        note: './src/js/note.js',
        reply: './src/js/reply.js',
    },
    output: {
        path: 'dist/js',
        filename: '[name].js' // 模版基于上边 entry 的 key
    },plugins: [uglifyPlugin]
};
