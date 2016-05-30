var config = require('config');
var wechat = require('wechat-enterprise');
var logger = require('../common/logger');
var handler = require('./handler');

// 比较通用的写法
exports.post = wechat(config, wechat.text(function (message, req, res, next) {
  // TODO 消息自动回复等
}).event(function (message, req, res, next) {
    // 传入信息都在req.weixin上
    var weixin = req.weixin;
    logger.info(weixin);

    // 根据事件类型来处理
    // { ToUserName: 'wxc5ae57f3724d87a8',
    // FromUserName: 'leo.liu',
    // CreateTime: '1464581010',
    // MsgType: 'event',
    // AgentID: '20',
    // Event: 'subscribe',
    // EventKey: '' }
    handler[weixin.Event](weixin, function(err, result) {

    });
}));

// 方便扩展的写法
// exports.post = wechat(config.WeChat, function (req, res, next) {
//     // 微信输入信息都在req.weixin上
//     var weixin = req.weixin;
//     logger.info(weixin);
//     if(weixin === undefined) {
//         return next();
//     }

//     // TODO: handler here
// });

exports.get = wechat(config.WeChat, function (req, res, next) {
    logger.info(req.query);

    return next();
});