// pages/get/shouyi.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      shouyi:[
        {
          date:"2022-09-19",
          huoqifu:0,
          xiaochengxu:0.03
        },
        {
          date:"2022-09-18",
          huoqifu:0,
          xiaochengxu:0.03
        }
      ]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      wx.request({
        url: 'https://wx.gaotie8.cn/shouyi/getall',
        success:res=>{
          this.setData({
            shouyi:res.data
          })

        }
      })

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})