// pages/lunpan/index.js
Page({

  data: {
    datas: [],
    father_awardsConfig: {
    },
    temp_awardsConfig: {
      option: '我的小决定？',
      awards: []
    },

    color: ["#003399", "#FF6633", "#FF9900", "#FF3300", "#993300", "#00FFFF", "#990099", "#000099", "#660000", "#FF0033", "#990000", "#999966", "#669900"]
  },

  onLoad: function (option) {
    const that = this;
    const eventChannel = this.getOpenerEventChannel();
    // 监听acceptDataFromOpenerPage事件，获取首页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function (data) {
      that.setData({
        datas: data
      });
      that.data.datas.forEach((ele, index) => {
        that.data.temp_awardsConfig.awards.push({
          id: index,
          name: ele,
          color: that.data.color[index],
          probability: 0
        })
      });
      that.setData({
        father_awardsConfig: that.data.temp_awardsConfig   // 必须通过 setData 这个方法设置才能生效，因为通过这个方法的数据才能渲染到模板上
      });
    });

  },


})