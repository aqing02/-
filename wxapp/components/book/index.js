// components/book/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        book:{}
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        showDetail(e){
           wx.navigateTo({
             url: `/pages/bookdetail/index?id=${this.data.book.id}`,
           })
            // console.log(e.currentTarget.dataset.val)
        }
    }
})
