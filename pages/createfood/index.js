// pages/createfood/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    food_data: []
  },
  inpfood(e) {
    this.setData({
      food_data: e.detail.value.trim().split(' ')
    })
  },
  savefood() {
    const that = this;
    if (that.data.food_data.length == 0) {
      this.setData({
        flag: true
      })
    } else {
      wx.navigateTo({
        url: '../recomfood/index',
        success: function (res) {
          // 通过eventChannel向轮盘页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', that.data.food_data)
        }
      })
    }
  }
})