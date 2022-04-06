//models/book.js
import HTTP from '../utils/http'
import config from '../config'
// 通过继承http类获取pm方法，可以通过this.pm来调用
export default class BookModel extends HTTP{
    // 获取热门书籍
    getHotList(){
        return  this.pm({
            url:`${config.baseUrl}getHotList`
        })
    }
    gethot(){
        return this.pm({
            url:`${config.baseUrl}getHot`
        })
    }
    // q:查询条件
    // start：从第几条记录开始显示
    // pageSize：页面大小
    query(q,start,pageSize){
        return this.pm({
            url:`${config.baseUrl}query`,
            data:{
                q,
                start,
                pageSize
            }
        })
    }   
}