//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
    sex:['男','女'],
    objectSex:[
      {
      id:1,
      name:'男'
      },
      {
        id:2,
        name:'女'
      }
    ],
    position:['学员','管理员'],
    objectPosition:[
      {
        id:1,
        name:'学员'
      },
      {
        id:2,
        name:'管理员'
      }
    ],
    name:'',
    id:'',
    group:'',
    age:'',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  getName:function(e){
    this.setData({
      name:e.detail.value
    })
    console.log(this.data.name)
  },

  getId:function(e){
    this.setData({
      id:e.detail.value
    })
    console.log(this.data.id)
  },

  getAge:function(e){
    this.setData({
      age:e.detail.value
    })
    console.log(this.data.age)
  },

  getGroup:function(e){
    this.setData({
      group:e.detail.value
    })
    console.log(this.data.group)
  },

  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  bindPickerChange: function (e) {
    console.log(e)
    this.setData({
      index: e.detail.value
    })
    console.log(this.data.index)

  },

  bindPositionChange:function(e){
    console.log(e)
    this.setData({
      index2:e.detail.value
    })
    console.log(this.data.index2)
  },

  login:function(){
    wx.request({
      url:'http://192.168.1.181:8080/register/inster',
      data:({
        name:this.data.name,
        id:this.data.id,
        age:this.data.age,
        group:this.data.group,
        sex:this.data.index,
        position:this.data.position
      })
      ,
      success(res){
        wx.switchTab({
          url: '/pages/collect/collect',
        })
      }
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
  }
})
