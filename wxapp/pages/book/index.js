// pages/book/index.js
import Book from '../../models/book'
let book = new Book()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bookdata:'',
        show:true,
        more:'',//是否加载下一页数据
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 获取热门书籍
        book.getHotList().then(data=>{
            // console.log(data)
            this.setData({
                bookdata:data
            })
        }); 
    },
    search(){
        this.setData({
            show:!this.data.show
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
        this.setData({
            more:new Date().toString()
        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})