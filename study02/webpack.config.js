module.exports = {
    entry: './src/main.js',
    output:{
        path: __dirname+"/dist/",
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
    }
}