// pages/search/search_list/list.js
const getInf = (str, key)=> str.replace(new RegExp(`${key}`, 'g'), `%%${key}%%`).split('%%');

var nowIMG = 0

Page({

  /**
   * 页面的初始数据
   */
  data: {
    githubUrl:'https://api.github.com/search/repositories?q=',
    inputValue:'',
    nowIMGPath:"../../../image/public/github_ico.png",
    imgPath:["../../../image/public/github_ico.png","../../../image/public/gitee_ico.png","../../../image/public/GitHelper_ico.png"],
    keyword:"",
    total_count:30,
    itemsData:[]//{title:"",ifGitHub:false,content:"",language:"",star:"",date:"",url:""}
  },
  inputSearch(e){
    this.setData({
      inputValue: e.detail.value
    })
    console.log(this.data.inputValue)
  },
  skyOnclick(){
    console.log(this.data.nowIMG)
    nowIMG++
    nowIMG = nowIMG%3
    var temp = this.data.imgPath[nowIMG]
    console.log(nowIMG)
    console.log(temp)
    this.setData({
      nowIMGPath:temp
    })
  },
  callApi () {
     console.log(this.data.inputValue)
    var that = this//不要漏了这句，很重要
    var thisUrl=this.data.githubUrl+this.data.inputValue;
    console.log(thisUrl)
    wx.request({
      url: thisUrl,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.items)
        var result = res.data.items
        var i;
        for(i=0;i<that.data.total_count;i++){
          var tempJSON = {
            title:"",ifGitHub:false,content:"",language:"",star:"",date:"",url:""
          }
          tempJSON.title = result[i].full_name.substring(0,24)
          tempJSON.ifGitHub = true
          tempJSON.content = result[i].description
          tempJSON.language = result[i].language
          tempJSON.star = result[i].stargazers_count
          tempJSON.date = result[i].updated_at.substring(0,10)
          tempJSON.url = result[i].html_url
          console.log(tempJSON)
          that.setData({
            keyword:"openmv",
            itemsData: that.data.itemsData.concat(tempJSON)
          })
        }
        that.setData({
          keyword:"openmv"
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.callApi()
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