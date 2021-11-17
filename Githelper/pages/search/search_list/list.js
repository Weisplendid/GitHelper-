// pages/search/search_list/list.js
const getInf = (str, key)=> str.replace(new RegExp(`${key}`, 'g'), `%%${key}%%`).split('%%');

var nowIMG = 0

Page({

  /**
   * 页面的初始数据
   */
  data: {
    giteeUrl:'https://gitee.com/api/v5/search/repositories?q=',
    giteeSuffix:'&page=1&per_page=20&language=C%2B%2B&order=desc',
    githubUrl:'https://api.github.com/search/repositories?q=',
    inputValue:'',
    nowIMGPath:"../../../image/public/github_ico.png",
    imgPath:["../../../image/public/github_ico.png","../../../image/public/gitee_ico.png","../../../image/public/GitHelper_ico.png"],
    keyword:"",
    total_count:30,
    itemsData:[],//{title:"",ifGitHub:false,content:"",language:"",star:"",date:"",url:""}
    nowIMG:0
  },
  inputSearch(e){
    this.setData({
      inputValue: e.detail.value
    })
    console.log(this.data.inputValue)
    this.callApi ()
  },
  skyOnclick(){
    this.data.nowIMG=(this.data.nowIMG+1)%3
    var temp = this.data.imgPath[this.data.nowIMG]
    console.log(this.data.nowIMG)
    console.log(temp)
    this.setData({
      nowIMGPath:temp
    })
  },
  callGiteeApi(){
    console.log(this.data.inputValue)
    var that=this;
    var thisUrl=this.data.giteeUrl+this.data.inputValue+this.data.giteeSuffix;
    wx.request({
      url: thisUrl,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
          console.log(res.data)
          var i;
          that.setData({
            itemsData: []
          })
          for(i=0;i<res.data.length;i++){
            var tempJSON = {
              title:"",ifGitHub:false,content:"",language:"",star:"",date:"",url:""
            }
            tempJSON.title = res.data[i].human_name;
            tempJSON.ifGitHub = false;
            tempJSON.language = res.data[i].language;
            tempJSON.star = res.data[i].stargazers_count;
            tempJSON.url = res.data[i].url;
            tempJSON.date = res.data[i].updated_at.substring(0,10)
            tempJSON.content = res.data[i].description
            that.setData({
              itemsData: that.data.itemsData.concat(tempJSON)
            })
          }
      }})
  },
  callApi () {
     console.log(this.data.inputValue)
    var that = this//不要漏了这句，很重要
    var thisUrl='';
    if (this.data.nowIMG==0)
      {thisUrl=this.data.githubUrl+this.data.inputValue;}
      else if(this.data.nowIMG==1)
{
  thisUrl=this.data.giteeUrl+this.data.inputValue+this.data.giteeSuffix;
}      

    console.log(thisUrl)
    this.setData({
      itemsData: []
    })
    wx.request({
      url: thisUrl,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.items)
        var result;
        if (that.data.nowIMG==0)
        {result = res.data.items}
      else if(that.data.nowIMG==1)
        {
          result = res.data}      
        var i;
        for(i=0;i<that.data.total_count;i++){
          var tempJSON = {
            title:"",ifGitHub:false,content:"",language:"",star:"",date:"",url:""
          }
          if (that.data.nowIMG==0)
          {
            tempJSON.title = result[i].full_name.substring(0,24)
            tempJSON.ifGitHub = true
          }
        else if(that.data.nowIMG==1)
          {
            tempJSON.title =result[i].human_name;
            tempJSON.ifGitHub = false
            }      
          
          
          tempJSON.content = result[i].description
          tempJSON.language = result[i].language
          tempJSON.star = result[i].stargazers_count
          tempJSON.date = result[i].updated_at.substring(0,10)
          tempJSON.url = result[i].html_url
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