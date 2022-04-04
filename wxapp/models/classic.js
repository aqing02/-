//models/classic.js
//数据模型层
import HTTP from '../utils/http'
import config from '../config'
// 通过继承http类获取pm方法，可以通过this.pm来调用
export default class ClassicModel extends HTTP{
    // 获取最新期刊数据
    getLatest(){
        return  this.pm({
            url:`${config.baseUrl}getLatest`
        })
    }
    updatezan(status,nums,index){
        return this.pm({
            url:`${config.likeurl}`,
            data:{
                nums,
                status,
                index
            }
        })
    }
    // 根据当前期刊号判断当前是否是第一期期刊
   isFirst(index){
       return index === 1
   }
    // 根据当前期刊号判断是否是最后一期
    isLast(index){
        // 从全局作用域中获取最新的期刊号
        let lastIndex = wx.getStorageSync('lastIndex')
        return index === lastIndex
    }
    getClassic(index,status){
        return this.pm({
            url:`${config.getClassic}`,
            data:{
                index,
                status
            }
        })
    }
    audio(url){
        return this.pm({
            url:`${config.musicurl}`,
            data:{
                url
            }
        })
    }
    getLike(index){
        
    }
}