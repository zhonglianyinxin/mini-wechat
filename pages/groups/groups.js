// pages/groups/groups.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[]
  },

  groupData(e){
    console.log(e)
    var id = e.currentTarget.dataset.id;
    var app =getApp();
    app.requestDetailid = id;
    console.log("id:"+id);
    wx.request({
      url: 'http://192.168.1.181:8080/group/selectByGroupId',
      method: 'POST',
      data: { groupId: id },
      success: function (res) {
        console.log(res)
        console.log(res.data)
        console.log('数组：' + res.data.k)
        console.log('数组：' + res.data.k[0].stuId)
        var model = JSON.stringify(res.data.k);
        console.log('转换字符串数组：' + model)

        if (model != null || model != '') {
          wx.navigateTo({
            url: '../groupData/groupData?model=' + model,
          })
        } else {
          wx.showToast({
            title: '数据加载失败',
          })
        }
      }

    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var models = JSON.parse(options.model);
    console.log(models)
    this.setData({
      items: models
    })
    console.log('items:'+this.data.items)
  
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