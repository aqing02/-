// components/ebsoid/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        index:{
            type:Number,
            observer:function(val){
               let i = val<10?'0'+val:val
            //    console.log(i);
               this.setData({
                   _index:i
               })
            }
        }
        
    },

    /**
     * 组件的初始数据
     */
    data: {
        month:'',
        year:'',
        _index:'',
        list : ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月','十月','十一月','十二月']
    },

    /**
     * 组件的方法列表
     */
    methods: {
    },
    lifetimes:{
        // 在组件实例进入页面节点树时执行
        attached(){
            let {month,year} = this.data;
            this.setData({
                month: new Date().getMonth(),
                year:new Date().getFullYear()
            })
            
           
        }
    }
})
