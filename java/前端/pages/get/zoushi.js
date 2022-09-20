// pages/get/zoushi.js

function drawChart(F2, config){
        
};

function chart2(F2, config){
    
}
Page({

    /**
     * 页面的初始数据
     */
    data: {
        onInitChart1(F2, config) {
            const chart = new F2.Chart(config);
        wx.request({
          url: 'https://wx.gaotie8.cn/getfeemonth',
          success:res=>{
              const data =res.data
              chart.source(data, {
                month:{
                    type: 'timeCat',
                    mask: 'MM'

                },

              });
              chart.area().position('month*fee').color('red').adjust('stack');
             // chart.line().position('month*fee').color('month').adjust('stack');
              data.forEach(function (obj) {
                chart.guide().text({
                  position: [obj.month, obj.fee],
                  content: obj.fee,
                  style: {
                    fill: '#333',
                    fontWeight: 'bold',
                    fontSize: 10
                  },
                  offsetX: -10,
                  offsetY:-10
                });
              });
              chart.render();
          }
        })
        // 注意：需要把chart return 出来
        return chart;
          },
          fengzhuang(){
              var app=this.data.onInitChart();
              return app;
          },
          onInitChart(F2, config){
          const chart = new F2.Chart(config);
            wx.request({
              url: 'https://wx.gaotie8.cn/getliushuifee',
              success:res=>{
                  const data =res.data
                  chart.source(data, {
                    range: [0, 1],
                  });
                  chart.area().position('month*fee').color('red').adjust('stack');
                 // chart.line().position('month*fee').color('month').adjust('stack');
                  data.forEach(function (obj) {
                    chart.guide().text({
                      position: [obj.month, obj.fee],
                      content: obj.fee,
                      style: {
                        fill: '#333',
                        fontWeight: 'bold',
                        fontSize: 10
                      },
                      offsetX: -10,
                      offsetY:-10
                    });
                  });
                  chart.render();
              }
            })
            // 注意：需要把chart return 出来
            return chart;
        }

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.request({
          url: 'https://wx.gaotie8.cn/getliushuifee',
          success:res=>{
              console.log(res.data)
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