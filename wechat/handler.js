var config   = require('config');
var util     = require('util');
var async    = require('async');

/**
 * 处理订阅事件
 * Callback:
 * - err
 * - msg, 自动回复消息
 * @param {String} message 微信推送的消息体
 */
exports.subscribe = function(message, callback) {
    // FromUserName为设置的唯一、不能修改的账号
    var userID = message.FromUserName;
};

/**
 * 处理退订事件
 * Callback:
 * - err
 * - msg, 自动回复消息
 * @param {String} message 处理订阅事件
 */
exports.unsubscribe = function(message, callback) {

};