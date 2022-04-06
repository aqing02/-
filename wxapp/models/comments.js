//models/comments.js
import HTTP from '../utils/http'
import config from '../config'
// 通过继承http类获取pm方法，可以通过this.pm来调用
export default class CommentsModel extends HTTP {
    // 获取热评
    getComments(bid) {
        return this.pm({
            url: `${config.baseUrl}getBookComments`,
            data: {
                bid
            }
        })
    }
    // 根据id查询书籍详情
    detailbook(bid){
        return this.pm({
            url:`${config.baseUrl}getBookDetail`,
            data:{
                bid
            }
        })
    }
    // 根据id获取点赞次数
    getLike(bid){
        return this.pm({
            url:`${config.baseUrl}getBookLike`,
            data:{
                bid
            }
        })
    }
    addComments(bid,comment){
        return this.pm({
            url:`${config.baseUrl}postComment`,
            data:{
                bid,
                comment
            }
        })
    }
}