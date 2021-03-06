// pages/shopping/shopping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**  
        * 页面配置  
        */
    // '全部', '待付款', '待发货', '待收货', '已完成'
    navTab: [
      {
        idx: 0,
        name: '全部' 
      },
      {
        idx: 1,
        name: '待付款'
      },
      {
        idx: 2,
        name: '待发货'
      },
      {
        idx: 3,
        name: '待收货'
      },
      {
        idx: 4,
        name: '已完成'
      }
    ],
    winWidth: 0,
    winHeight: 0,    
    currentTab: 0,
  },
  swichNav: function (e){
    console.log(e);
    var that = this;
    if (this.data.currentTab == e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },
  swiperChange: function (e) {
    console.log(e);
    var that = this;
    that.setData({
      currentTab: e.detail.current,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    /**  
     * 获取系统信息  
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });    
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