// pages/search/search_list/list.js
const getInf = (str, key)=> str.replace(new RegExp(`${key}`, 'g'), `%%${key}%%`).split('%%');
var app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    realTime:"",
    searchInfo:'',
    giteeUrl:'https://gitee.com/api/v5/search/repositories?q=',
    giteeSuffix:'&page=1&per_page=20&sort=stars_count&order=desc',
    githubUrl:'https://api.github.com/search/repositories?q=',
    inputValue:'',
    keyword:"",
    total_count:0,
    nowIMGPath:'',
    itemsData:[],//{title:"",ifGitHub:false,content:"",language:"",star:"",date:"",url:""}
  },
  inputSearch(e){
    this.setData({
      inputValue: e.detail.value
    })
    this.callApi ()
  },
  showH: function(event){
    console.log(event)
    wx.navigateTo({ url: '/pages/search/search_detail/search_detail?keyword='+event.currentTarget.dataset.keyword+'&ifGithub='+event.currentTarget.dataset.ifgithub, })
  },
  skyOnclick(){
    app.globalData.nowIMG=(app.globalData.nowIMG+1)%3
    this.setData({
      nowIMGPath: app.globalData.imgPath[app.globalData.nowIMG]
    })
    console.log(app.globalData.nowIMG)
  },
  callApi () {
    //  console.log(this.data.inputValue)
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    var that = this//不要漏了这句，很重要
    var thisUrl='';
    var thisUrl1='';
    if (app.globalData.nowIMG==0)
    {
      thisUrl=this.data.githubUrl+this.data.inputValue;
    }
    else if(app.globalData.nowIMG==1)
    {
      thisUrl=this.data.giteeUrl+this.data.inputValue+this.data.giteeSuffix;
    } 
    else
    {
      thisUrl=this.data.githubUrl+this.data.inputValue;
      thisUrl1=this.data.giteeUrl+this.data.inputValue+this.data.giteeSuffix;
    }     

    console.log("thisURL:"+thisUrl),
    console.log("thisURL1:"+thisUrl1),
 //clear history search
    this.setData({
      itemsData: []
    })

    wx.request({
      url: thisUrl,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        
        var result;
        if (app.globalData.nowIMG==0 ||app.globalData.nowIMG==2)
        {
          result = res.data.items
        }
      else if(app.globalData.nowIMG==1)
        {
          result = res.data
        }      
       console.log(result)
        var i;
        // if (nowIMG==0)
        //   i=
        for(i=0;i<result.length;i++){
          var tempJSON = {
            title:"",ifGitHub:false,content:"",language:"",star:"",date:"",url:""
          }
          if (app.globalData.nowIMG==0||app.globalData.nowIMG==2)
          {
            tempJSON.title = result[i].full_name
            tempJSON.ifGitHub = true
          }
        else if(app.globalData.nowIMG==1)
          {
            tempJSON.title =result[i].full_name;
            tempJSON.ifGitHub = false
            }      
          tempJSON.content = result[i].description
          tempJSON.language = result[i].language
          tempJSON.star = result[i].stargazers_count
          tempJSON.date = result[i].updated_at.substring(0,10)
          tempJSON.url = result[i].html_url
          that.setData({
            itemsData: that.data.itemsData.concat(tempJSON)
          })
        }
        that.setData({
          total_count: result.length
        })
        // console.log(result)
      }
    })
    if(app.globalData.nowIMG==2){//both
      wx.request({
        url: thisUrl1,
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          // console.log('test')
          // console.log(res.data)
          var result;
          result = res.data      
          var i;
          for(i=0;i<res.data.length;i++){
            var tempJSON = {
              title:"",ifGitHub:false,content:"",language:"",star:"",date:"",url:""
            }
            tempJSON.title = result[i].full_name
            tempJSON.ifGitHub = false
            tempJSON.content = result[i].description
            tempJSON.language = result[i].language
            tempJSON.star = result[i].stargazers_count
            tempJSON.date = result[i].updated_at.substring(0,10)
            tempJSON.url = result[i].html_url
            that.setData({
              itemsData: that.data.itemsData.concat(tempJSON)
            })
          }
          that.setData({
            total_count: that.data.total_count+result.length
          })
        }
      })
      wx.hideLoading()
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

      that.setData({
        inputValue:options.keyword,
        nowIMGPath:app.globalData.imgPath[app.globalData.nowIMG]
      })
      that.callApi()
      
      

      
    
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