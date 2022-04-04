// components/music/index.js
import Behavior from '../classic_beh'
// 创建背景音频管理器
const mMgr = wx.getBackgroundAudioManager()
Component({
    /**
     * 组件的属性列表
     */
    behaviors:[Behavior],
    properties: {
        music:String,
        title:String
    },

    /**
     * 组件的初始数据
     */
    data: {
        ty:false,
        play:'./images/player@play.png',
        pause:'./images/player@pause.png',
        animation:''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        play(){
            this.setData({
                ty:!this.data.ty
            })
           this.data.ty?mMgr.pause():mMgr.play()
          
        },
        _recoverStatus(){
            if(mMgr.paused){
                this.setData({
                    ty:false
                })
                return
            }
        
            if(mMgr.src && mMgr.src === this.properties.music){
                this.setData({
                    ty:true
                })
                return
            }
        },

    },
    
    lifetimes:{
        // 当组件加载到页面上时触发的函数
        attached(){
            mMgr.src =this.data. music,
            mMgr.title = this.data.title
            this._recoverStatus()
        }
    }
   
})
