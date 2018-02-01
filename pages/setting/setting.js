// pages/index/setting.js
const app = getApp()
var routes = require('routes');

Page({
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
  },
  /**
   * 页面的初始数据
   */
  data: {
    /**  
        * 页面配置  
        */
    winWidth: 0,
    winHeight: 0,
    cellHeight: '120px',
    pageItems: [],

    movies: [
      { url: '../../image/1.jpg' },
      { url: '../../image/2.jpg' },
      { url: '../../image/3.jpg' },
      { url: '../../image/4.jpg' }
    ],
    icons: [
      { 
        url: '../../image/huijuan.png',
        text: '领优惠券'
       },
      { 
        url: '../../image/ping.png', 
        text: '商城拼购'  
      },
      { 
        url: '../../image/zhekou.png',
        text: '商城折扣'
      },
      { 
        url: '../../image/service.png',
        text: '商城服务'
      },
      { 
        url: '../../image/liwu.png',
        text: '商城礼物'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this
    console.log(that)
    var row = [];
    var pagetItems = [];
    var len = routes.PageItems.length;
    len = Math.floor((len + 2) / 3) * 3;
    for (var i = 0;i < len;i++){
      if((i + 1) % 3 == 0){
        row.push(routes.PageItems[i])
        pagetItems.push(row)
        row = [];
        continue;
      }else{
        row.push(routes.PageItems[i]);
      }
    }
    wx.getSystemInfo({
      success: function (res) {
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