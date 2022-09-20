// pages/add/liushui.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:[],
        index:0,
        date: '',
        isChecked:false,
        text:'',
        fee:'0.0055'
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
    Setfee(e){
      console.log(e.detail.value)
      this.setData({
        fee:e.detail.value
      })
    },
    onSubmit(e) {
       
        let index=this.data.index
        let card_bank=this.data.list[index].bank
        let card_number=this.data.list[index].card_number
        let date =this.data.date;
        let fee=this.data.fee;
        let money=e.detail.value.money
        if(e.detail.value.money!="" &&e.detail.value.fee!=""){
            wx.request({
                url: 'https://wx.gaotie8.cn/addxykliushui',
                data:{
                    bank:card_bank,
                    date:date,
                    money:e.detail.value.money,
                    fee:money*fee,
                    card_number:card_number,
                    type:0
                   
                },
                success:res=>{
                   wx.showToast({
                     title: '添加成功',
                     icon:'success'
                   })
                   this.setData({
                    text:''
                  })
                    
                    
                }
    
              })
        }else{
            wx.showToast({
              title: '请输入账单金额',
              icon:"error"
            })
        }
        wx.redirectTo({
          url: '../add/liushui',
        })
        
      },
      onReset() {
        
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