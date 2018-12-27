const fs = require('fs')
const path = require('path')
const url = require('url')

module.exports = function(req, res) {
    //获取输入的url解析后的对象
    var pathObj = url.parse(req.url, true);
    console.log('pathObj', pathObj, req.url)

    //static文件夹的绝对路径
    var staticPath = path.resolve(__dirname)
    //获取资源文件绝对路径
    var filePath = path.join(staticPath, pathObj.pathname)
    if(filePath.indexOf('favicon.ico') === -1){//屏蔽浏览器默认对favicon.ico的请求
        //同步读取file
        var fileContent = fs.readFileSync(filePath,'binary')
        res.write(fileContent, 'binary')
    }
    res.end()

    // res.statusCode = 200
    // res.setHeader('Content-Type', 'text/html')
    // res.writeHead(200, {'Content-Type': 'text/html'})

    // fs.readFile(path.resolve(__dirname, 'index.html'), 'utf-8', (err, data) => {
    //     if (err) {
    //         throw err
    //     }
    //     res.write(data)
    //     res.end()
    // })
}