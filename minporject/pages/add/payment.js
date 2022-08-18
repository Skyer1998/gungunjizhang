// pages/add/payment.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:[],
        date:[],
        isChecked:false,
        index:0,
        huankuan:[]

    },
    onReset() {
        console.log("form发生了reset事件，表单已被重置")
      },
    bindDateChange(e){
        this.setData({
            date:e.detail.value
        })
    },
    changeSwitch(e){
        this.setData({
            isChecked:e.detail.value
        })
    },
    bindPickerChange: function(e) {
        this.setData({
          index: e.detail.value
        })
        this.getpaymentnow()
      },
      getpaymentnow(){
        var card_number=this.data.list[this.data.index].card_number
        wx.request({
          url: 'https://wx.gaotie8.cn/getnowpaymentbillbycardnumber',
          data:{
              card_number:card_number
          },
          success:res=>{
            this.setData({
                huankuan:res.data.now_payment_bill
            })
          }
        })
      },
      onSubmit(e) {
        var card_number=this.data.list[this.data.index].card_number
        var date=this.data.date
        var money=e.detail.value.money
        wx.request({
          url: 'https://wx.gaotie8.cn/addxykliushui',
          data:{
              card_number:card_number,
              date:date,
              money:money,
              fee:0,
              type:1
          },
          success:res=>{
              this.getpaymentnow()
              this.formReset(e);
             
              
          }
        })
        
       
       
    },
    formReset: function(e){ 
        console.log("数据已经被重置了");
      },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var myDate = new Date();
        var year=myDate.getFullYear();
        var month=myDate.getMonth()+1;
        var Day=myDate.getDate();
        var date=year+"-"+month+"-"+Day
        this.setData({
            date:date
        })
        wx.request({
            url: 'https://wx.gaotie8.cn/getXyklist',
            success:res=>{
                this.setData({
                    list:res.data
                })
            }
          })
        wx.request({
          url: 'https://wx.gaotie8.cn/getnowpaymentbillbycardnumber',
          data:{
              card_number:2410
          },success:res=>{
              this.setData({
                huankuan:res.data.now_payment_bill
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