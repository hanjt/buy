//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World test',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    artlist:[
      { 
        id:1,
	      url: 'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg', 
	      title: "我是一个标题", 
	      name: "买爆主播",
        order_num: "100",
        imgs:[
          {
            id:1,
            url:'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg',
          },
          {
            id:2,
            url:'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg',
          },
          {
            id:3,
            url:'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg',
          } 
        ]
      },
      { 
        id:2,
	      url: 'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg', 
	      title: "我是一个标题", 
	      name: "买爆主播",
	      order_num: "100"
      },
      { 
        id:3,
	      url: 'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg', 
	      title: "我是一个标题", 
	      name: "买爆主播",
        order_num: "100",
        imgs:[
          {
            id:1,
            url:'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg',
          },
          {
            id:2,
            url:'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg',
          },
          {
            id:3,
            url:'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg',
          } 
        ]
      },
      { 
        id:4,
	      url: 'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg', 
	      title: "我是一个标题", 
	      name: "买爆主播",
	      order_num: "100"
      }
    ],
    bannerList:[
      {
        id:1,
        url:'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg',
      },
      {
        id:2,
        url:'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg',
      },
      {
        id:3,
        url:'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg',
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
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showGoodsList: function(e) {
    console.log('showGoodsList'+e)
  }
})
