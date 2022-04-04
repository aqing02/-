// pages/hello.js
// var QQMapWX = require('../qqmap-wx-jssdk');
// var qqmapsdk;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        msg:'hello world11'
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // qqmapsdk = new QQMapWX({
        //     key: 'S2QBZ-LBERX-QGL4D-ZWMNS-4PHK2-BKFHF'
        //   });
        //   this.mapCtx = wx.createMapContext('myMap')
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
    onclick(){
        // wx.showModal({
        //     title: '提示',
        //     content: '这是一个模态弹窗',
        //     success (res) {
        //       if (res.confirm) {
        //         console.log('用户点击确定')
        //       } else if (res.cancel) {
        //         console.log('用户点击取消')
        //       }
        //     }
        //   })

        // 消息提示
        // wx.showToast({
        //     title: '成功',
        //     icon: 'success',
        //     duration: 2000
        //   })

        wx.showLoading({
            title: '提交中',
        })
        setTimeout(function () {
            // wx.hideLoading()
            wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 2000
          })
          }, 2000)
        
        // 底部选择框
        // wx.showActionSheet({
        //     itemList: ['A', 'B', 'C'],
        //     success (res) {
        //       console.log(res.tapIndex)
        //     },
        //     fail (res) {
        //       console.log(res.errMsg)
        //     }
        //   })
        
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