//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
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
    sexIndex:'',
    sexName:'',
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
    positionIndex:'',
    positionName:'',
    //普通选择器2：（普通json格式数组）    
    objectArray: [      
      {        id: 1,        name: '中国'      },      
      {        id: 2,        name: '美国'      },      
      {        id: 3,        name: '德国'      },      
      {        id: 4,        name: '法国'      }    
    ],    
    objectIndex:'',
    objectName: '',

    name:'',
    id:'',
    group:'',
    age:'',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 改变下拉选项
  // bindPickerChange2: function (e) {
  //   console.log(e.detail.value,this.data.objectArray[e.detail.value].id)
  //   this.setData({   //给变量赋值
  //     objectIndex: this.data.objectArray[e.detail.value].id,
  //     objectName: this.data.objectArray[e.detail.value].name,
  //   })
  // },
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

  getSex: function (e) {
    // console.log(e.detail.value, this.data.objectSex[e.detail.value].id)
    this.setData({
      sexIndex: this.data.objectSex[e.detail.value].id,
      sexName: this.data.objectSex[e.detail.value].name,
    })
  },

  getPosition:function(e){
    // console.log(e.detail.value, this.data.objectPosition[e.detail.value].id)
    this.setData({
      positionIndex: this.data.objectPosition[e.detail.value].id,
      positionName: this.data.objectPosition[e.detail.value].name,
    })
  },
  register:function(){
    wx.request({
      url:'http://localhost:8080/register/inster',
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
          url: '/pages/login/login',
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
