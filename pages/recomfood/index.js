// pages/recomfood/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    father_awardsConfig: {
      option: '我的小决定？',
      awards: [
        {
          id: 0,
          name: "兰州拉面",
          color: '#003399',
          probability: 0
        },
        {
          id: 1,
          name: "汉堡包",
          color: '#FF6633',
          probability: 0
        },
        {
          id: 2,
          name: "大猪肘子",
          color: '#FF3300',
          probability: 0
        },
        {
          id: 3,
          name: "烧腊饭",
          color: '#FF9900',
          probability: 0
        }
      ]
    },
    temp_awardsConfig: {
      option: '我的小决定？',
      awards: []
    },
    color: ["#003399", "#FF6633", "#FF9900", "#FF3300", "#993300", "#00FFFF", "#990099", "#000099", "#660000", "#FF0033", "#990000", "#999966", "#669900"],
    food_data: []
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onShow: function (option) {
    const that = this;
    const eventChannel = this.getOpenerEventChannel();
    // 监听acceptDataFromOpenerPage事件，获取首页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function (data) {
      that.setData({
        food_data: data
      });
      that.data.food_data.forEach((ele, index) => {
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