/*!     
 * 配置文件（开发环境）：    
 */
var config = {
    // 应用名称
    name: 'Soostep-Enterprise',

    //默认调试状态开启
    debug: true,

    // 网站的域名
    host: 'localhost',

    // 站点端口
    port: 3000,

    // 微信(企业号参数)
    WeChat: {
        token: 'Soostep123',

        encodingAESKey: 'vuErOhTyBpdfxMBTlvkkjR3pHjqIeKjHqZqK2Wy5RXO',
        //
        corpId : 'wxc5ae57f3724d87a8',

        corpSecret : 'Ll5AY-po9tHp3ZtIcrcCE6xxUfHlk0OAMKAU9GSh7HX4mR1dcSull5_pAeH5Pecz',
        //应用ID
        agentId: 20
    }
};

if(process.env.NODE_ENV === 'production') {
    config.debug = false;
}

module.exports = config;