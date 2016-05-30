// JS基础类库
GLOBAL._ = require('underscore');
// 需首先加载config
var config = require('config');
// 设置控制台颜色，用于调试和监控
require('colors');
var express = require('express');
var session = require('express-session');
var compress = require('compression');
var bodyParser = require('body-parser');
var path = require('path');
var wechatRouter = require('./routers/wechat_router');
// 获取主机名
var urlinfo = require('url').parse(config.host);
var logger = require('./common/logger');
config.hostname = urlinfo.hostname || config.host;

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/views', express.static(path.join(__dirname, 'views')));
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '1mb'}));
// signed cookie support by passing a secret string
app.use(require('cookie-parser')(config.session_secret));
app.use(compress());

app.use(function (err, req, res, next) {
    logger.error(err);
    return res.status(500).send('500 status');
});

app.use('/wechat', wechatRouter);

if (!module.parent) {
    // 启动server
    app.listen(config.port, function () {
        logger.info('Soofruit listening on port', config.port);
        logger.info('Be the better...');
        logger.info('http://' + config.hostname + ':' + config.port);
    });
}

module.exports = app;