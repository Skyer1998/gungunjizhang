// index.js
Page({
    data: {
        xyklist:[],
    },
    
   
       
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.navigateTo({
          url: '../get/feesum',
        })
      
       
        wx.request({
            url:'https://wx.gaotie8.cn/getxykindex',
            success:res=>{
                this.setData({
                    xyklist:res.data
                })
            }
          })
        
       

       
    },
   


})
