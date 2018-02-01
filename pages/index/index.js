//index.js
//获取应用实例
const app = getApp()

Page({
  onPullDownRefresh: function(){
    // var that = this;
    // that.getCount(app.globalData.userId);
    wx.stopPullDownRefresh();
  },
  data: {
    motto: '欢迎来到金达，哈哈哈哈！FUCK',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // getImageInfo: function (e) {
  //   wx.chooseImage({
  //     success: function(res) {
  //       wx.getImageInfo({
  //         src: res.tempFilePaths[0],
  //         success: function (res) {
  //           console.log(res.width),
  //           console.log(res.height)
  //         }
  //       })
  //     },
  //   })
  // }
  // getImageInfo: function (e) {
  //   wx.showToast({
  //     title: '成功',
  //     icon: 'success',
  //     duration: 2000
  //   })
  // }
  getImageInfo: function (e) {
    wx.navigateTo({
      url: '../index/new',
    }),
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 1000
    })

  }
})
