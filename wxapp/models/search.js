//models/search.js
import HTTP from '../utils/http'
import config from '../config'
// 通过继承http类获取pm方法，可以通过this.pm来调用
export default class SearchModel extends HTTP {
    // 定义历史数组的key
    key = 'words'
    // 获取热门词条
    gethot() {
        return this.pm({
            url: `${config.baseUrl}getHot`
        })
    }
    getHistory() {
        return wx.getStorageSync(this.key) || []
    }
    // 添加历史词条
    addToHistory(word) {
        // 不能缓存空字符串
        // 缓存规则
         
        // 词条重复时，这个词条放到最前面
        // 当输入的词条没有查到数据时，不进行缓存
        if (word.trim().length > 0) {
            // 获取存放历史搜索词条的数组
            const words = this.getHistory()
            let index = words.findIndex(w => w == word)
            if (index >= 0) { // 词条不能重复
                words.splice(index, 1)
            } else {// 最多缓存10个词条，当添加新词条时，数组末尾的词条会删除 
                if (words.length >= 10) {
                    words.pop()
                }
            }
            // 将搜索词条放到历史数组的最前面
            words.unshift(word)
            // 覆盖原来的历史数组
            wx.setStorageSync(this.key, words)
        }
    }

}