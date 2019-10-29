const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userNo: '',
    userName: '',
    userPwd: '',
    objectPosition: [
      { id: 1, name: '学员' },
      { id: 2, name: '管理员' }
    ],
    positionIndex: '',
    positionName: '请选择',

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log('wx数据：' + res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
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
  getPosition: function (e) {
    console.log(e.detail.value, this.data.objectPosition[e.detail.value].id)
    this.setData({
      positionIndex: this.data.objectPosition[e.detail.value].id,
      positionName: this.data.objectPosition[e.detail.value].name,
    })
  },
  //登陆表单提交事件
  loginSubmit: function (e) {
    console.log('form=>', e)
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    let { userName, userNo, userPwd } = e.detail.value;
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
    wx.login({
      success: function (res) {
        var code = res.code;//登录凭证
        if (code) {
          //2、调用获取用户信息接口          
          wx.getUserInfo({            
            success: function (res) {              
              console.log({ encryptedData: res.encryptedData, iv: res.iv, code: code, userNo: userNo, userName: userName, userPwd: userPwd})              
              //3.请求自己的服务器，解密用户信息 获取unionId等加密信息              
              wx.request({
                url: 'http://localhost:8080/login/login',//自己的服务接口地址                
                method: 'get',                
                header: {                  
                  "Content-Type": "applciation/json"                
                },                
                data: { encryptedData: res.encryptedData, iv: res.iv, code: code, userNo: userNo, userName: userName, userPwd: userPwd },                
                success: function (res) {                  
                  console.log('用户微信信息:' + res.data)     

                  //4.解密成功后 获取自己服务器返回的结果                  
                  if (res.data.status == 1) {                
                    var userLevel = res.data.userLevel;                    
    
                    var userInfo_ = res.data.userInfo;                    
                    wx.setStorageSync('openid', userInfo_.openid)
                    if (userLevel == 1) {
                      wx.request({
                        url: 'http://localhost:8080/lesson/selectLesson',
                        method: 'POST',
                        data: {},
                        success: function (res) {
                          console.log(res)
                          console.log(res.data)
                          console.log('数组：'+res.data.k)                  
                          console.log('数组：' + res.data.k[1].lessName)
                          var model = JSON.stringify(res.data.k);
                          console.log('转换字符串数组：' + model)

                          if (model != null || model != '') {
                            wx.navigateTo({
                              url: '../lessonAdd/lessonAdd?userNo=' + userNo ,
                            })
                          } else {
                            wx.showToast({
                              title: '数据加载失败',
                            })
                          }
                        }

                      })
               
                    } else {
                      wx.reLaunch({
                        url: '../groups/groups',
                      })
                    }
                  } else {                    
                    console.log('解密失败')                  
                  }               
                },                
                fail: function () {                  
                  console.log('系统错误')                
                }              
              })          
            },           
            fail: function () {              
              console.log('获取用户信息失败')            
            }          
          })        
        } else {          
          console.log('获取用户登录态失败！' + r.errMsg)        
        }     
      },     
      fail: function () {        
        console.log('登陆失败')      
      }    
    })
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