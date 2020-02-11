const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')


module.exports = {
    entry: './src/main.js',
    output:{
        path: __dirname+"/../dist/",
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                use:['vue-loader']
            },
        ]
    },
    resolve:{
        alias:{
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins:[
        new webpack.BannerPlugin('最终解释权由凌建所有'),
        new htmlWebpackPlugin({
            template: 'index.html'
        }),
        // new uglifyjsWebpackPlugin()
    ],
    // devServer: {
    //     contentBase: './dist',
    //     inline: true
    // }
}