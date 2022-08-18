// pages/add/liushui.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:[],
        index:0,
        date: '',
        isChecked:false
    },
    bindDateChange(e){
        this.setData({
            date:e.detail.value
        })
    },
    changeSwitch(e){
        console.log(e.detail.value)
        this.setData({
            isChecked:e.detail.value
        })
    },
    onSubmit(e) {
        console.log("form发生了submit事件，携带数据为：")
        console.log(e.detail.value)
        let index=this.data.index
        let card_bank=this.data.list[index].bank
        let card_number=this.data.list[index].card_number
        let date =this.data.date;

        if(e.detail.value.money!="" &&e.detail.value.fee!=""){
            wx.request({
                url: 'https://wx.gaotie8.cn/addxykliushui',
                data:{
                    bank:card_bank,
                    date:date,
                    money:e.detail.value.money,
                    fee:e.detail.value.fee,
                    card_number:card_number,
                    type:0
                   
                },
                success:res=>{
                    console.log(res.data)
                }
          
              })

        }else{
            wx.showToast({
              title: '请输入账单金额',
              icon:"error"
            })
        }
        
      },
      onReset() {
        console.log("form发生了reset事件，表单已被重置")
      },
    bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          index: e.detail.value
        })
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