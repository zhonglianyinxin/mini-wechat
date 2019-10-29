Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],

    userNo:'',
    stuYear:'',
    groupId:'',
    studyBeginTime: '',
    studyEndTime: '',

    lessId:'1000',
    lessName: '前行广释',
    lessType: '1',
    lessAttribute: '1',
    lessonBegin: '',
    lessonEnd: '',
    complete: '',
    noComplete: '',
    lessTypee: '2',
    completee: '',
    noCompletee: '',
    lessId2: '1001',
    lessName2: '大学演讲',
    lessType2: '1',
    lessAttribute2: '2',
    lessonBegin2: '',
    lessonEnd2: '',
    complete2: '',
    noComplete2: '',
    lessTypee2: '2',
    completee2: '',
    noCompletee2: '',
    lessId3: '1002',
    lessName3: '观修',
    lessType3: '3',
    lessAttribute3: '3',
    lessonBegin3: '',
    lessonEnd3: '',
    complete3: '',
    noComplete3: '',
    lessId4: '1003',
    lessName4:'顶礼',
    lessType4: '4',
    lessAttribute4: '4',
    complete4: '',
    lessId5: '1004',
    lessName5:'皈依',
    lessType5: '4',
    lessAttribute5: '4',
    complete5: '',
    lessId6: '1005',
    lessName6:'发心',
    lessType6: '4',
    lessAttribute6: '4',
    complete6: '',
    lessId7: '1006',
    lessName7: '百字明',
    lessType7: '4',
    lessAttribute7: '4',
    complete7: '',
    lessId8: '1007', 
    lessName8: '供曼扎',
    lessType8: '4',
    lessAttribute8: '4',
    complete8: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    // var models = JSON.parse(options.model);
    // console.log(models)
    this.setData({
      // items: models,
      userNo: options.userNo
    })
    // console.log('items:'+this.data.items)
    console.log('userNo:' + this.data.userNo)


  },
  
  getstuYear: function(e) {
    console.log(e.detail.value)
    this.setData({
      stuYear: e.detail.value
    })
  },
  getgroupId: function (e) {
    console.log(e.detail.value)
    this.setData({
      groupId: e.detail.value
    })
  },
  bindDateChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      studyBeginTime: e.detail.value
    })
  },
  bindDateChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      studyEndTime: e.detail.value
    })
  },
  getlessonBegin: function (e) {
    this.setData({
      lessonBegin: e.detail.value
    })
    console.log(this.data.lessonBegin)
  },

  getlessonEnd: function (e) {
    this.setData({
      lessonEnd: e.detail.value
    })
    console.log(this.data.lessonEnd)
  },

  getcomplete: function (e) {
    this.setData({
      complete: e.detail.value
    })
    console.log(this.data.complete)
  },

  getnoComplete: function (e) {
    this.setData({
      noComplete: e.detail.value
    })
    console.log(this.data.noComplete)
  },

  getcompletee: function (e) {
    this.setData({
      completee: e.detail.value
    })
    console.log(this.data.completee)
  },

  getnoCompletee: function (e) {
    this.setData({
      noCompletee: e.detail.value
    })
    console.log(this.data.noCompletee)
  },

  getlessonBegin2: function (e) {
    this.setData({
      lessonBegin2: e.detail.value
    })
    console.log(this.data.lessonBegin2)
  },

  getlessonEnd2: function (e) {
    this.setData({
      lessonEnd2: e.detail.value
    })
    console.log(this.data.lessonEnd2)
  },

  getcomplete2: function (e) {
    this.setData({
      complete2: e.detail.value
    })
    console.log(this.data.complete2)
  },

  getnoComplete2: function (e) {
    this.setData({
      noComplete2: e.detail.value
    })
    console.log(this.data.noComplete2)
  },

  getcompletee2: function (e) {
    this.setData({
      completee2: e.detail.value
    })
    console.log(this.data.completee2)
  },

  getnoCompletee2: function (e) {
    this.setData({
      noCompletee2: e.detail.value
    })
    console.log(this.data.noCompletee2)
  },

  getlessonBegin3: function (e) {
    this.setData({
      lessonBegin3: e.detail.value
    })
    console.log(this.data.lessonBegin3)
  },

  getlessonEnd3: function (e) {
    this.setData({
      lessonEnd3: e.detail.value
    })
    console.log(this.data.lessonEnd3)
  },

  getcomplete3: function (e) {
    this.setData({
      complete3: e.detail.value
    })
    console.log(this.data.complete3)
  },

  getnoComplete3: function (e) {
    this.setData({
      noComplete3: e.detail.value
    })
    console.log(this.data.noComplete3)
  },

  getcomplete4: function (e) {
    this.setData({
      complete4: e.detail.value
    })
    console.log(this.data.complete4)
  },

  getcomplete5: function (e) {
    this.setData({
      complete5: e.detail.value
    })
    console.log(this.data.complete5)
  },

  getcomplete6: function (e) {
    this.setData({
      complete6: e.detail.value
    })
    console.log(this.data.complete6)
  },
  getcomplete7: function (e) {
    this.setData({
      complete7: e.detail.value
    })
    console.log(this.data.complete7)
  },
  getcomplete8: function (e) {
    this.setData({
      complete8: e.detail.value
    })
    console.log(this.data.complete8)
  },

  //提成完成信息提交
  lessonAddSubmit: function (e) {
    console.log('form=>', e)
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    let { 
      stuYear,groupId,studyBeginTime,studyEndTime,
      lessId,lessType,lessAttribute,lessonBegin, lessonEnd, complete, noComplete,completee, noCompletee, 
      lessId2,lessType2,lessonBegin2,lessonEnd2,lessAttribute2, complete2, noComplete2,completee2, noCompletee2, 
      lessId3, lessType3, lessonBegin3,lessonEnd3,lessAttribute3, complete3, noComplete3,
      lessId4,lessType4,lessAttribute4, complete4,  
      lessId5,lessType5,lessAttribute5,complete5,
      lessId6,lessType6,lessAttribute6, complete6,
      lessId7, lessType7,lessAttribute7,complete7,
      lessId8,lessType8,lessAttribute8,complete8
    } = e.detail.value;
    if (stuYear == '') {
      wx.showToast({
        title: '届数不能为空',
        icon: 'success'
      })
      return false
    }
    if (groupId == '') {
      wx.showToast({
        title: '小组不能为空',
      })
      return false
    }
    if (studyBeginTime == '' || studyEndTime=='') {
      wx.showToast({
        title: '时间不能为空',
      })
      return false
    }
    // if (lessonBegin == '' || lessonEnd == '' || complete == '' || noComplete == '' || completee == '' || noCompletee == '' ||
    //   lessonBegin2 == '' || lessonEnd2 == '' || complete2 == ''|| noComplete2 == '' || completee2 == '' || noCompletee2 == '' ||
    //   lessonBegin3 == '' || lessonEnd3 == '' || complete3 == '' || noComplete3 == '' ||
    //   complete4 == '' ||complete5 == '' ||complete6 == '' || complete7 == '' || complete8) {
    //   wx.showToast({
    //     title: '信息不能为空',
    //   })
    //   return false
    // }
    wx.request({
      url: 'http://localhost:8080/lesson/insertSelective',
      method: 'POST',
      data: {
        userNo:this.data.userNo,
        stuYear: this.data.stuYear,
        groupId: this.data.groupId,
        studyBeginTime: this.data.studyBeginTime,
        studyEndTime: this.data.studyEndTime,
        lessId: this.data.lessId,
        lessType: this.data.lessType,
        lessAttribute: this.data.lessAttribute,
        lessonBegin: this.data.lessonBegin,
        lessonEnd: this.data.lessonEnd,
        complete: this.data.complete,
        noComplete: this.data.noComplete,
        lessTypee: this.data.lessTypee,
        completee: this.data.completee,
        noCompletee: this.data.noCompletee,
        lessId2: this.data.lessId2,
        lessType2: this.data.lessType2,
        lessonBegin2: this.data.lessonBegin2,
        lessonEnd2: this.data.lessonEnd2,
        lessAttribute2: this.data.lessAttribute2,
        complete2: this.data.complete2,
        noComplete2: this.data.noComplete2,
        lessTypee2: this.data.lessTypee2,
        completee2: this.data.completee2,
        noCompletee2: this.data.noCompletee2,
        lessId3: this.data.lessId3,
        lessType3: this.data.lessType3,
        lessonBegin3: this.data.lessonBegin3,
        lessonEnd3: this.data.lessonEnd3,
        lessAttribute3: this.data.lessAttribute3,
        complete3: this.data.complete3,
        noComplete3: this.data.noComplete3,
        lessId4: this.data.lessId4,
        lessType4: this.data.lessType4,
        lessAttribute4: this.data.lessAttribute4,
        complete4: this.data.complete4,
        lessId5: this.data.lessId5,
        lessType5: this.data.lessType5,
        lessAttribute5: this.data.lessAttribute5,
        complete5: this.data.complete5,
        lessId6: this.data.lessId6,
        lessType6: this.data.lessType6,
        lessAttribute6: this.data.lessAttribute6,
        complete6: this.data.complete6,
        lessId7: this.data.lessId7,
        lessType7: this.data.lessType7,
        lessAttribute7: this.data.lessAttribute7,
        complete7: this.data.complete7,
        lessId8: this.data.lessId8,
        lessType8: this.data.lessType8,
        lessAttribute8: this.data.lessAttribute8,
        complete8: this.data.complete8
      },
      success: function (res) {
        console.log(res)
        console.log(res.data)
        var success = res.data.success;
        if (success == 'true') {
          wx.request({
            url: 'http://localhost:8080/lesson/selectByExample',
            method: 'POST',
            data: { userNo: this.data.userNo},
            success: function (res) {
              console.log(res)
              console.log(res.data)
              console.log('数组：' + res.data.k)
              console.log('数组：' + res.data.k[1].lessName)
              var model = JSON.stringify(res.data.k);
              console.log('转换字符串数组：' + model)

              if (model != null || model != '') {
                wx.navigateTo({
                  url: '../lessonShow/lessonShow?userNo=' + userNo + "&model=" + model,
                })
              } else {
                wx.showToast({
                  title: '数据加载失败',
                })
              }
            }

          })

        } else {
          wx.showToast({
            title: '提交失败',
          })
        }
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