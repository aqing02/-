// pages/book-detail/index.js
import CommentsModel from '../../models/comments'
const comment = new CommentsModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    book: {},
    comment:[],
    like:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
          id:options.id
      })
      Promise.all([comment.detailbook(options.id),
        comment.getComments(options.id),
        comment.getLike(options.id)
    ]).then(res=>{
        this.setData({
            book:res[0],
            comment:res[1],
            like:res[2]
        })
        console.log(res)
    })
      
  },
  addpl(e){
    console.log(e)
  },
  onComment(e){
      console.log(e)
    let com = e.detail.value || e.currentTarget.dataset.val
    console.log(com,this.data.id)
    comment.addComments(this.data.id,com).then(res=>{
        console.log(res)
        if(res.affectedRows>0){
            wx.showToast({
              title: '评论成功！',
            })
            comment.getComments(this.data.id).then(res=>{
                this.setData({
                    comment:res
                })
            })
        }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})