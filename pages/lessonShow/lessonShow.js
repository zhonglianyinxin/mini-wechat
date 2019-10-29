Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],

    userNo: '',
    stuYear: '',
    groupId: '',
    studyBeginTime: '',
    studyEndTime: '',

    lessId: '1000',
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
    lessName4: '顶礼',
    lessType4: '4',
    lessAttribute4: '4',
    complete4: '',
    lessId5: '1004',
    lessName5: '皈依',
    lessType5: '4',
    lessAttribute5: '4',
    complete5: '',
    lessId6: '1005',
    lessName6: '发心',
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
    console.log("options:"+options)
    var models = JSON.parse(options.model);
    console.log("models"+models)
    this.setData({
      userNo: options.userNo,
      stuYear: models[0].stuYear,
      groupId: models[0].groupId,
      studyBeginTime: models[0].studyBeginTime,
      studyEndTime: models[0].studyEndTime,
      lessonBegin: models[0].lessonBegin,
      lessonEnd: models[0].lessonEnd,
      complete: models[0].complete,
      noComplete: models[0].noComplete,
      completee: models[1].completee,
      noCompletee: models[1].noCompletee,
      lessonBegin2: models[2].lessonBegin2,
      lessonEnd2: models[2].lessonEnd2,
      complete2: models[2].complete2,
      noComplete2: models[2].noComplete2,
      completee2: models[3].completee2,
      noCompletee2: models[3].noCompletee2,
      lessonBegin3: models[4].lessonBegin3,
      lessonEnd3: models[4].lessonEnd3,
      complete3: models[4].complete3,
      noComplete3: models[4].noComplete3,
      complete4: models[5].complete4,
      complete5: models[6].complete5,
      complete6: models[7].complete6,
      complete7: models[8].complete7,
      complete8: models[9].complete8,
    })
    console.log('items:'+this.data.items)
    console.log('userNo:' + this.data.userNo)


  },

  getstuYear: function (e) {
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