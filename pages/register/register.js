//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    // objectSex: [
    //   { id: 1, name: '男' },
    //   { id: 2, name: '女' }
    // ],
    // sexIndex: '',
    // sexName: '请选择',
    objectPosition: [
      { id: 1, name: '学员' },
      { id: 2, name: '管理员' }
    ],
    positionIndex: '',
    positionName: '请选择',

    userLevel: '',
    userNo: '',
    userName: '',
    userPwd: '',
    // stuGroupId:'',
    
    hasUserInfo: false
  },
  // 改变下拉选项
  // bindPickerChange2: function (e) {
  //   console.log(e.detail.value,this.data.objectArray[e.detail.value].id)
  //   this.setData({   //给变量赋值
  //     objectIndex: this.data.objectArray[e.detail.value].id,
  //     objectName: this.data.objectArray[e.detail.value].name,
  //   })
  // },

  // //获取用户信息
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse) {
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function (e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },

  //输入框事件
  getUserNo: function (e) {
    // console.log(e)
    this.setData({
      userNo: e.detail.value
    })
  },
  getUserName: function (e) {
    // console.log(e)
    this.setData({
      userName: e.detail.value
    })
  },
  getUserPwd: function (e) {
    this.setData({
      userPwd: e.detail.value
    })
  }, 
  // getStuGroupId: function(e) {
  //   this.setData({
  //     stuGroupId: e.detail.value
  //   })
  // }, 
  //下拉框事件
  // getSex: function (e) {
  //   console.log(e.detail.value, this.data.objectSex[e.detail.value].id)
  //   this.setData({
  //     sexIndex: this.data.objectSex[e.detail.value].id,
  //     sexName: this.data.objectSex[e.detail.value].name,
  //   })
  // },
  getPosition: function (e) {
    console.log(e.detail.value, this.data.objectPosition[e.detail.value].id)
    this.setData({
      positionIndex: this.data.objectPosition[e.detail.value].id,
      positionName: this.data.objectPosition[e.detail.value].name,
    })
  },

  //注册表单提交事件
  registerSubmit: function (e) {
    console.log('form=>', e)
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    let { userName, userNo, userPwd, userLevel } = e.detail.value;
    if (userName == '') {
      wx.showToast({
        title: '用户名不能为空',
        icon: 'success'
      })
      return false
    }
    if (userNo == '') {
      wx.showToast({
        title: '编号不能为空',
      })
      return false
    }
    if (userPwd == '') {
      wx.showToast({
        title: '密码不能为空',
      })
      return false
    }
    if (userLevel == '') {
      wx.showToast({
        title: '级别不能为空',
      })
      return false
    }
    // if (userLevel == '1' && stuGroupId=='') {
    //   wx.showToast({
    //     title: '小组不能为空',
    //   })
    //   return false
    // }
    console.log('用户级别:' + this.data.positionIndex)
    wx.request({
      url: 'http://localhost:8080/register/inster',
      method: 'POST',
      data: {
        userName: this.data.userName,
        userNo: this.data.userNo,
        userPwd: this.data.userPwd,
        userLevel: this.data.positionIndex
      },
      success: function (res) {
        console.log(res)
        console.log(res.data)
        var userLevel = res.data.userLevel;
        var success = res.data.success;
        if (success == 'true') {
          wx.navigateTo({
            url: '../login/login',
          })
        }else{
          wx.showToast({
            title: '注册失败',
          })
        }
      }

    })
  },


  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },


 


})
