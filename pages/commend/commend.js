// pages/aqa.js




Page({

  /**
   * 页面的初始数据
   */
    data: {
      count:10,
      github_itemsData:[
        {
          title:"",
          content:"",
          language:"",
          star:"",
          url:""
        }
      ]
    },
    showH: function(event){
      console.log(event)
      wx.navigateTo({ url: '/pages/search/search_detail/search_detail?keyword='+event.currentTarget.dataset.keyword+'&ifGithub='+event.currentTarget.dataset.ifgithub, })
    },
    callHotApi () {
      wx.showLoading({
        title: '加载中',
        mask: true
      })
      var that=this
      wx.request({
        url: 'https://trendings.herokuapp.com/repo?since=daily',
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          that.setData({
            github_itemsData:[]
          })
          var result=res.data.items
          for(var i=0;i<that.data.count;i++){
            var tempJSON = {title:"",content:"",language:"",star:"",url:""}
            tempJSON.title = result[i].repo.substring(0,30)
            tempJSON.content = result[i].desc
            tempJSON.language = result[i].lang
            tempJSON.star = result[i].star
            tempJSON.url = result[i].repo_link
            that.setData({
              github_itemsData: that.data.github_itemsData.concat(tempJSON)
            })
          }
        },
        fail: function (res) {
 
          wx.showToast({ title: '系统错误' })
   
        },
   
        complete: function (res) {
   
          wx.hideLoading()
   
        }
    })},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.callHotApi()
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
    if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
            selected: 0
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