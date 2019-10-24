// pages/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date1:'',
    date2:'',
    num1: '',
    num2: '',
    num3: '',
    num4: '',
    num5: '',
    num6: '',
    num7: '',
    num8: '',
    num9: '',
    num10: '',
    num11: '',
    num12: '',
    num13: '',
    num14: '',
    num15: '',
    num16: '',
    num17: '',
    num18: '',
    num19: '',
    num20: '',
    num21: ''
 


  },

  bindDateChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date1: e.detail.value
    })
  },

  getNum1: function (e) {
    this.setData({
      num1: e.detail.value
    })
    console.log(this.data.num1)
  },

  getNum2: function (e) {
    this.setData({
      num2: e.detail.value
    })
    console.log(this.data.num2)
  },

  getNum3: function (e) {
    this.setData({
      num3: e.detail.value
    })
    console.log(this.data.num3)
  },

  getNum4: function (e) {
    this.setData({
      num4: e.detail.value
    })
    console.log(this.data.num4)
  },

  getNum5: function (e) {
    this.setData({
      num5: e.detail.value
    })
    console.log(this.data.num5)
  },

  getNum6: function (e) {
    this.setData({
      num6: e.detail.value
    })
    console.log(this.data.num6)
  },

  getNum7: function (e) {
    this.setData({
      num7: e.detail.value
    })
    console.log(this.data.num7)
  },

  getNum8: function (e) {
    this.setData({
      num8: e.detail.value
    })
    console.log(this.data.num8)
  },

  getNum9: function (e) {
    this.setData({
      num9: e.detail.value
    })
    console.log(this.data.num9)
  },

  getNum10: function (e) {
    this.setData({
      num10: e.detail.value
    })
    console.log(this.data.num10)
  },

  getNum11: function (e) {
    this.setData({
      num11: e.detail.value
    })
    console.log(this.data.num11)
  },

  getNum12: function (e) {
    this.setData({
      num12: e.detail.value
    })
    console.log(this.data.num12)
  },

  getNum13: function (e) {
    this.setData({
      num13: e.detail.value
    })
    console.log(this.data.num13)
  },

  getNum14: function (e) {
    this.setData({
      num14: e.detail.value
    })
    console.log(this.data.num14)
  },

  getNum15: function (e) {
    this.setData({
      num15: e.detail.value
    })
    console.log(this.data.num15)
  },

  getNum16: function (e) {
    this.setData({
      num16: e.detail.value
    })
    console.log(this.data.num16)
  },

  getNum17: function (e) {
    this.setData({
      num17: e.detail.value
    })
    console.log(this.data.num17)
  },

  getNum18: function (e) {
    this.setData({
      num18: e.detail.value
    })
    console.log(this.data.num18)
  },

  getNum19: function (e) {
    this.setData({
      num19: e.detail.value
    })
    console.log(this.data.num19)
  },

  getNum20: function (e) {
    this.setData({
      num20: e.detail.value
    })
    console.log(this.data.num20)
  },

  getNum21: function (e) {
    this.setData({
      num21: e.detail.value
    })
    console.log(this.data.num21)
  },


  bindDateChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date2: e.detail.value
    })
  },


  submit: function () {
    wx.request({
      url: 'http://192.168.1.181:8080/register/inster',
      data: ({
        date1: this.data.date1,
        date2: this.data.date2,
        num1: this.data.num1,
        num2: this.data.num2,
        num3: this.data.num3,
        num4: this.data.num4,
        num5: this.data.num5,
        num6: this.data.num6,
        num7: this.data.num7,
        num8: this.data.num8,
        num9: this.data.num9,
        num10: this.data.num10,
        num11: this.data.num11,
        num12: this.data.num12,
        num13: this.data.num13,
        num14: this.data.num14,
        num15: this.data.num15,
        num16: this.data.num16,
        num17: this.data.num17,
        num18: this.data.num18,
        num19: this.data.num19,
        num20: this.data.num20,
        num21: this.data.num21
      })
      ,
      success(res) {
        wx.switchTab({
          url: '/pages/collect/collect',
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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