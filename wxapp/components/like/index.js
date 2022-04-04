// components/like/index.js
import HTTP from '../../utils/http'
const http = new HTTP
Component({
    /**
     * 组件的属性列表
     * 从外部接收的数据
     */
    properties: {
        // 给组件定义了count属性
        count:Number,
        like:Boolean,
        
    },

    /**
     * 组件的初始数据
     * 组件内部的数据
     */
    data: {
        img1:'./images/like@dis.png',
        img2:'./images/like.png',
    },
    /**
     * 组件的方法列表
     */
    methods: {
    click(e){
        let {like,count} = this.data
        this.setData({
            like:!this.data.like,
            count:like?count-1:count+1
        })
        // 触发onmylike事件 子传父
        this.triggerEvent('mylike',{
            status:like ?'dislike':'like',
            nums:like?count-1:count+1
        })
    }
    }
})
