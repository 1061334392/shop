var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    devServer: {
		contentBase: __dirname + 'dist'
	}
,
    mode: 'development',
    entry: {
        index: './src/index.js',
        mos: './src/mos.js'
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin(
        {
            title:"webpack",
            filename:"index.html",
            template:"./src/index.html"
        }
    ),
    new MiniCssExtractPlugin({
        
        filename: 'in.css',
        template:'./src/in.css'
      }),
      new CopyPlugin({
        patterns: [
          { from: 'sisa', to: 'sisa' },
          {from:'./src/in.css',to:'inin.css'}
        ],
      }),
    ]
   
    
}