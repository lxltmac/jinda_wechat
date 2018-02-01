// pages/classify/classify.js
var app = getApp()
var routes = require('routes');

Page({
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
  },
  /**
   * 页面的初始数据
   */
  data: {
    // userInfo: {},
    cellHeight: '120px',
    pageItems: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log(app)
    var that = this
    //调用应用实例的方法获取全局数据
    //调用app.getUserInfo的时候报错待研究
    // app.getUserInfo(function (userInfo) {
    //   wx.setNavigationBarTitle({
    //     title: '分类九宫格-' + userInfo.nickName,
    //     success: function (res) {
    //       //success
    //     }
    //   })
    //   that.setData({
    //     userInfo: userInfo
    //   })
      var pagetItems = [];
      var row = [];
      var len = routes.PageItems.length;
      len = Math.floor((len + 2) / 3) * 3;
      console.log(len);
      for (var i =0;i < len;i++){
        if ((i + 1) % 3 == 0 ){
          row.push(routes.PageItems[i]);
          pagetItems.push(row);
          row = [];
          continue;
        }else{
          row.push(routes.PageItems[i]);
        }
      }
      wx.getSystemInfo({
        success: function(res) {
          var windowWidth = res.windowWidth;
          console.log(windowWidth);
          that.setData({
            cellHeight: (windowWidth / 3) + 'px'
          })
        },
        complete: function () {
          that.setData({
            pageItems: pagetItems
          })
        }
      })
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})