Component({
    data: {
      selected: 0,
      color: "#9A9A9A",
      selectedColor: "#000000",
      list: [{
        "pagePath": "/pages/commend/commend",
        "iconPath": "/image/tool_bar/hot.png",
        "selectedIconPath": "/image/tool_bar/hot_pressed.png",
        "text": "推荐"
      }, {
        "pagePath": "/pages/search/search",
        "iconPath": "/image/tool_bar/search.png",
        "selectedIconPath": "/image/tool_bar/search_pressed.png",
        "text": "搜索"
      }, {
        "pagePath": "/pages/help/help",
        "iconPath": "/image/tool_bar/help.png",
        "selectedIconPath": "/image/tool_bar/help_pressed.png",
        "text": "帮助"
      }]
    },
    attached() {
    },
    methods: {
      switchTab(e) {
        const data = e.currentTarget.dataset
        const url = data.path
        wx.switchTab({url})
        this.setData({
          selected: data.index
        })
      }
    }
  })