// pages/classic/index.js
// import config from '../../config'
// import Http from '../../utils/http'
// let http = new Http();
import Classic from '../../models/classic'
let cls = new Classic()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        classicData: null,
        img: '',
        index: '',
        isFirst: null,
        isLast: null,
        status: '',
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 获取最新的期刊数据
        cls.getLatest().then(data => {
            // 将最新期刊数据存到全局作用域中
            wx.setStorageSync(`classic_${data.index}`, data)
            // 将最新期刊号存到全局作用域中
            wx.setStorageSync('lastIndex', data.index)
            this.setData({
                // 数据绑定
                classicData: data,
                img: data.image,
                index: data.index,
                isFirst: cls.isFirst(data.index),
                isLast: cls.isLast(data.index)
            })
        })

        
        // wx.request({
        //   url: `${config.baseUrl}getLatest`,
        //   success:({data})=>{
        //     console.log(data)
        //   },
        //   fail:()=>{
        //   }
        // })
    },
    onMyLike(e) {
        let {
            status,
            nums
        } = e.detail
        let index = this.data.classicData.index
        // console.log(status,nums,index)
        cls.updatezan(status, nums, index).then(data => {
            let cd = wx.getStorageSync('classic_'+this.data.classicData.index)
            // 刷新缓存
            if(cd){
                cd.fav_nums = nums;
                cd.like_status = status === 'like' ? 1:0
                wx.setStorageSync('classic_'+this.data.classicData.index, cd)
            }
        })
    },
    onNext() {
        this._updateClassic('next')
    },
    onPrev() {
        this._updateClassic('prev')
    },
    _updateClassic(nextOrPrev) {
        //尝试从storage中获取期刊数据
        let index = nextOrPrev === 'next' ?
            this.data.classicData.index + 1 : this.data.classicData.index - 1
        // console.log(index)
        let classicData = wx.getStorageSync(`classic_${index}`)
        // console.log(classicData)
        if (!classicData) {
            // 如果全局作用域中没有记录就往后台请求数据
            cls.getClassic(this.data.classicData.index, nextOrPrev).then(data => {
                // 将请求到的数据缓存到全局作用域中
                wx.setStorageSync(`classic_${data.index}`, data)
                this.setData({
                    classicData: data,
                    isFirst: cls.isFirst(data.index),
                    isLast: cls.isLast(data.index)
                })
            })
        } else {
            // 当读取到缓存的数据时，点赞的次数和喜欢的状态必须再次的读取数据库

            this.setData({
                classicData: classicData,
                isFirst: cls.isFirst(classicData.index),
                isLast: cls.isLast(classicData.index)
            })

        }

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
        // 页面隐藏后清除本地缓存
        // wx.clearStorage()
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