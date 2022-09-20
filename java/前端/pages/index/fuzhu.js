// pages/index/fuzhu.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    updatebill:function(){
        wx.navigateTo({
          url: '../index/update',
        })
    },
    
    addfenqi(){
        wx.navigateTo({
          url: '../add/fenqi',
        })
    },
    addzhengxin(){
        wx.navigateTo({
          url: '../add/zhengxin',
        })
    },
    addpayment(){
        wx.navigateTo({
          url: '../add/payment',
        })
    },
    getxyklist(){
        wx.navigateTo({
          url: '../get/xykapply',
        })
    },
    getfuzhai(){
        wx.navigateTo({
          url: '../get/fuzhai',
        })
    },
    getsoulutin(){
        wx.navigateTo({
          url: '../get/solution',
        })
    },
    getzoushi(){
        wx.navigateTo({
          url: '../get/zoushi',
        })
    },
    getstart(){
        wx.navigateTo({
          url: '../get/start',
        })
    },
    getshouyi(){
        wx.navigateTo({
          url: '../get/shouyi',
        })
    },
    gethuankuanjin(){
        wx.navigateTo({
          url: '../get/huankuanjin',
        })

    },
    gethuodong(){
        wx.navigateTo({
          url: '../get/huodong',
        })

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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