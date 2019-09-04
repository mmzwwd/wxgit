//index.js
//获取应用实例
const app = getApp()
const md5 = require('../md5/md5.js');
const util = require("../../utils/request.js")

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  tapName: function (event) {
    console.log(md5.hexMD5('123456'))
    wx.navigateTo({
      url: '../logs/logs?id=1'
    })
  },
  onLoad: function (options) {
    var that = this
    var xc = {
      labelType: "0",
      shopId: "538af23ab8ea4e8b987309a832e6b6c0"
    }
    util.request('http://test2.mumzone.cn/egg_goods/api/v1/goods/getGoodsLabelListByShopId',
     'post', xc , '正在加载数据', res => {
      that.setData({
        list_data: res.data
      })
    }, err => {
      wx.showToast({
        title: '加载数据失败',
      })
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
