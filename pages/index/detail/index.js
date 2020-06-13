//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    url: 'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg', 
    list: [{
      content: "内容1",
      url: 'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg', 
    },
    {
      content: "内容2",
      url: 'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg', 
    },
    {
      content: "内容3",
      url: 'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg', 
    }
  ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
  subscribe: function(e) {
    console.log('subscribe'+e)
  },
})