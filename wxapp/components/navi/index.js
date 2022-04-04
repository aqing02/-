// components/navi/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: String,
        //当前是否是第一期刊
        isFirst: Boolean,
        //当前是否是最新期刊
        isLast: Boolean,
    },

    /**
     * 组件的初始数据
     */
    data: {
        disLeftSrc: './images/triangle.dis@left.png',
        leftSrc: './images/triangle@left.png',
        disRightSrc: './images/triangle.dis@right.png',
        rightSrc: './images/triangle@right.png'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onLeft() {
            if (!this.data.isLast) {
            //  将翻页的动作传父组件中
                this.triggerEvent('myLeft',{})
            }
        },
        onRight() {
            if (!this.data.isFirst) {
            // 将翻页的动作传父组件中
                this.triggerEvent('myRight',{})
            }
        }
    }
})