// page/search/search.js

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowIMGPath:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */


  goSearch: function(event){ 
    if(event.detail.value == undefined || event.detail.value == null || event.detail.value == "") {
      return
    }
    wx.navigateTo({ url: '/pages/search/search_list/list?keyword='+event.detail.value, })
   
  },
  goSearch_hot: function(event){

    wx.navigateTo({ url: '/pages/search/search_list/list?keyword='+event.target.dataset.id, })
  },

  onLoad: function (options) {
   
  },
  skyOnclick(){
    app.globalData.nowIMG=(app.globalData.nowIMG+1)%3
    this.setData({
      nowIMGPath: app.globalData.imgPath[app.globalData.nowIMG]
    })
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
    this.setData({
      nowIMGPath: app.globalData.imgPath[app.globalData.nowIMG]
    })
    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
    this.getTabBar().setData({
        selected: 1
    })
}
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