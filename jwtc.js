const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

/**
 *　モジュール本体
 *  @param {string} url
 *  @param {string} method
 *  @param {Object} body
 */
jwtc = (url, method, token,body) => {
    return new Promise((resolve, reject) => {
        //XMLHttpRequestのインスタンス化
        const xhr = new XMLHttpRequest();
        //初期化
        xhr.open(method, url);

        //jwtのトークンは存在しているか？
        if (!token) {
            reject('no auth token');
            return;
        }
        //ヘッダーをセット
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        xhr.setRequestHeader("Content-Type", "application/json");

        //リクエスト開始
        xhr.send(JSON.stringify(body));

        xhr.onreadystatechange = function () {
            //process.on('unhandledRejection', console.dir);
            console.log('readyState:' + xhr.readyState,'status:'+xhr.status);

            //console.log(xhr.responseText);

            //認証失敗(405の理由は、サーバーサイド側の問題?)
            if (xhr.status === 405 && xhr.readyState === 3) {
                
                reject('Different auth token');
                xhr.abort();
            }

            //問題が何もなかった場合
            if (xhr.readyState === 4 && xhr.status === 200) {
                const result = JSON.parse(xhr.responseText);
                
                //console.log(result);
                resolve(result);
                
            }
        }

    });

};

module.exports = jwtc;