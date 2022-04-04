// 定义组件公共行为
import config from '../../config'
export default Behavior({
    properties: {
        // 获取图片路径
        img:{
            type:String,
            observer:function(val){
                // console.log(val)
                if(val && val.length > 0){
                    let src = `${config.imgurl}${val}`
                    this.setData({
                        src
                    })
                }
            }
        },
        content:String,
        
        // hd为true就隐藏，false就显示
        
    },
    data:{
        src:'',
    },
    methods:{
        deal(){
            // 图片加载报错时的处理函数
            this.setData({
                src:this.data.src
            })
        }
    }
})