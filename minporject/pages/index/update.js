// pages/index/update.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:[],
        index:0,
    },
    onSubmit(e) {
        console.log("form发生了submit事件，携带数据为：")
        console.log(e.detail.value)
        let index=this.data.index
      
        let card_number=this.data.list[index]


        if(e.detail.value.money!=""&&e.detail.value.now_payment_bill!=""){
            wx.request({
                url: 'https://wx.gaotie8.cn/upadatexykbill',
                data:{
                    card_number:card_number,
                    bill_credit:e.detail.value.bill_credit,
                    now_payment_bill:e.detail.value.now_payment_bill
                },
                success:res=>{
                    if(res.data==1){
                        wx.showToast({
                          title: '更新账单成功',
                          icon:"success"
                        })
                        
                        wx.request({
                            url: 'https://wx.gaotie8.cn/getupdatexyklist',
                            success:res=>{
                                this.setData({
                                    list:res.data
                                })
                            }
                          })
                    }
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
    addliushui:function(){
        wx.navigateTo({
          url: '../add/liushui',
        })
    },
    
    


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.request({
            url: 'https://wx.gaotie8.cn/getupdatexyklist',
            success:res=>{
                this.setData({
                    list:res.data
                })
            }
          })

    },
    addfenqi(){
        wx.navigateTo({
          url: '../add/fenqi',
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