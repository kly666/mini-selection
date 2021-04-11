//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    placeholder: "输入内容",
    iptValue: '',
    alldatas: [],
    flag: false
  },

  // 获取输入框数据
  handleinput(e) {
    this.setData({
      iptValue: e.detail.value,
    });

  },
  // 点击 下一个 实现当前输入框数据保存到 alldatas
  getdata() {
    let iptValue = this.data.iptValue;
    if (iptValue == '') {
      this.setData({
        flag: true
      })
    } else {
      this.data.alldatas.push(this.data.iptValue);
      this.setData({
        placeholder: "输入下一个",
        iptValue: ""
      });
    }
  },
  setdatas() {
    const that = this;
    if (that.data.alldatas.length == 0) {
      this.setData({
        flag: true
      })
    } else {
      wx.navigateTo({
        url: '../lunpan/index',
        success: function (res) {
          // 通过eventChannel向轮盘页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', that.data.alldatas)
        }
      })
    }
  },

  close() {
    this.setData({
      flag: false
    })
  }
})
