// pages/add/fenqi.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:[],
        index:-1,
        isChecked:false,
        date: '',
        bill_date:''

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
    onReset() {
        console.log("form发生了reset事件，表单已被重置")
      },
    bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          index: e.detail.value
        })
      },
      onSubmit(e) {
        console.log("form发生了submit事件，携带数据为：")
        console.log(e.detail.value)
        let index=this.data.index
        let card_bank=this.data.list[index].bank
        let card_number=this.data.list[index].card_number
        let p_money=e.detail.value.money
        let date=this.data.date
        console.log(p_money)


        if(e.detail.value.money!="" &&e.detail.value.qishu!=""&&e.detail.value.e_money!=""&&e.detail.value.fee!=""){
            wx.request({
                url: 'https://wx.gaotie8.cn/addxykfenqi',
              
                data:{
                    money:p_money,
                    fee:e.detail.value.fee,
                    e_fee:e.detail.value.e_fee,
                    e_money:e.detail.value.e_money,
                    card_number:card_number,
                    qishu:e.detail.value.qishu,
                    fenqi_date:date,
                   
                },
                success:res=>{
                    console.log(res)
                }
          
              })

        }else{
            wx.showToast({
              title: '请输入账单金额',
              icon:"error"
            })
        }
        
      },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.request({
            url: 'https://wx.gaotie8.cn/getXyklist',
            success:res=>{
                this.setData({
                    list:res.data
                })
            }
          })
        
          var myDate = new Date();
          var year=myDate.getFullYear();
          var month=myDate.getMonth()+1;
          var Day=myDate.getDate();
          var date=year+"-"+month+"-"+Day
          
          
          this.setData({
              date:date
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