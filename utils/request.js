const requestHeader = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Cache-Control': 'no-cache'
};

var request = {

    get(url) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: appConfig.apiDomain + url,
                header: requestHeader,
                success: (res) => {
                    resolve(res.data);
                },
                fail: (res) => {
                    reject(res);
                }
            });
        });
    },

    post(url, params) {
        params = params || {};
        return new Promise((resolve, reject) => {
            wx.request({
                url: appConfig.apiDomain + url,
                data: params,
                method: 'POST',
                header: requestHeader,
                success: (res) => {
                    resolve(res.data);
                },
                fail: (res) => {
                    reject(res);
                }
            });
        });
    }
};
export default request;
