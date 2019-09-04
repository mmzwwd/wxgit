const request = function (url, method, data, msg, succ, fail, com) {
  // 小程序顶部显示Loading
  wx.showNavigationBarLoading();
  if (msg != "") {
    wx.showLoading({
      title: msg
    })
  }
  wx.request({
    url: url,
    data: data,
    header: {
      'content-type': 'application/x-www-form-urlencoded',
      'appVersion':  '1.0.0' //小程序的版本号（可选,不填也不会报错）
    },
    method: method,
    success: res => {
      if (succ) succ(res);
    },
    fail: err => {
      if (fail) fail(err);
    },
    complete: com => {
      wx.hideNavigationBarLoading();
      if (msg != "") {
        wx.hideLoading();
      }
      console.log(url + ' 返回的data:', com.data);
    }
  })
}
module.exports = {
  request: request
} 
