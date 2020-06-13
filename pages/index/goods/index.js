//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [{
      goods_url: 'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg', 
      goods_name: '我是一个商品',
      shop_name: '我是一个店铺',
      shop_url: 'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg',
      price: '30元',
      sales: '30人抢购'
    },
    {
      goods_url: 'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg', 
      goods_name: '我是一个商品',
      shop_name: '我是一个店铺',
      shop_url: 'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg',
      price: '30元',
      sales: '30人抢购'
    },
    {
      goods_url: 'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg', 
      goods_name: '我是一个商品',
      shop_name: '我是一个店铺',
      shop_url: 'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg',
      price: '30元',
      sales: '30人抢购'
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
})