// pages/search/search_detail/search_detail.js

import {b64DecodeUnicode,base64_url_decode, weAtob } from './weapp-jwt.js'

var WxParse = require('../../help/wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
 

  data: {
    keyword:"",
    ifGithub:true,
    readmeURL:"",
    soureceURl:"",
    file_path:[],
  },
  // getTree: function(){
  //   var that = this
  //   wx.request({
  //     url: "https://api.github.com/repos/"+that.data.keyword+"/git/trees/master?recursive=1",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     success: function (res) {
  //       console.log(res.data.tree)
  //       var resoult = res.data.tree
  //       var resoult_path = []
  //       for(var i=0;i<resoult.length;i++){
  //         resoult_path[i] = resoult[i].path
  //       }
  //       console.log(resoult_path)
  //       that.setData({
  //         file_path:resoult_path
  //       })
  //     }
  //   })
  // },

  getReadme: function(){
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    var readme_text
    var that = this
    // console.log(that.data.keyword)
    wx.request({
      url: that.data.readmeURL,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        var result = res.data.content
        if(result==undefined){
          WxParse.wxParse('readme_text' , 'md', "**README获取失败...**", that,0)
          return
        }
        readme_text = b64DecodeUnicode(result)
        console.log(readme_text)
        WxParse.wxParse('readme_text' , 'md', readme_text, that,0)
      },
      fail: function (res) {
 
        wx.showToast({ title: '系统错误' })
 
      },
 
      complete: function (res) {
 
        wx.hideLoading()
 
      }
    })
  },
  copyReadmeURL: function (e) {
    var that = this;
    wx.setClipboardData({
      //准备复制的数据内容
      data: that.data.soureceURl,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
        });
      }
    });
},
  
 wxParseTagATap: function(e) {
  wx.setClipboardData({
    //准备复制的数据内容
    data: e.currentTarget.dataset.src,
    success: function (res) {
      wx.showToast({
        title: '复制成功',
      });
    }
  });
 },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var tempURL
    var soureceURl
    console.log(options.ifGithub)
    if(options.ifGithub=="true"){
      tempURL = "https://api.github.com/repos/"+options.keyword+"/readme"
      soureceURl = "https://github.com/"+options.keyword
      // console.log("这是github")
    }else{
      tempURL = "https://gitee.com/api/v5/repos/"+options.keyword+"/readme"
      soureceURl = "https://gitee.com/"+options.keyword
      // console.log("这是gitEE")
    }
    this.setData({
      keyword:options.keyword,
      readmeURL:tempURL,
      soureceURl:soureceURl,
      ifGithub:options.ifGithub
  })
  this.getReadme()

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