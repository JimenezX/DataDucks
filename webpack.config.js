const path = require('path')
const HtmlPlugins = require('html-webpack-plugin');

module.exports = {
entry:'./views/app.js',
output:
{
    path: path.join(__dirname, 'backend/public'),
    filename:'bundle.js'
},

plugins:[
    new HtmlPlugins({
        template:'./views/index.html'
    })
]
}