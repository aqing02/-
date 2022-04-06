// components/search/index.js
import Search from '../../models/search'
import Book from '../../models/book'
const book = new Book()
const search = new Search()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        more: {
            type: String,
            observer() { //more的值发生改变时触发
                // console.log('加载下一页数据')
                // 判断是否正在等待响应的数据，如果正在加载等待，就不能再发送请求
                if (this.data.isLoading) {
                    wx.showToast({
                        title: '正在加载数据，请稍后',
                    })
                    return
                }
                // 判断全部的数据是否加载完成
                if (this.data.total>this.data.booklist.length) {
                    // 在发送请求后，禁止再次发送请求
                    this.data.isLoading = true
                    book.query(this.data.q, this.data.booklist.length, this.data.pageSize).then(data => {
                        // console.log(data)
                        this.setData({
                            booklist: this.data.booklist.concat(data.books),
                            q:this.data.q
                        })
                        // 请求成功以后，允许发送下一次请求
                    })
                }

            }
        }, //是否加载下一页数据
    },

    /**
     * 组件的初始数据
     */
    data: {
        show: true,
        q: '',
        hot: '',
        start: 0,
        total: 0, //查询的总记录条数
        pageSize: 10,
        booklist: [],
        isSearch: true, //显示词条显示隐藏
        noneResult: false, //没有记录时
        booksearch: wx.getStorageSync(search.key), //历史搜索词条
        isLoading: false //设置滚动状态锁
    },

    /**
     * 组件的方法列表
     */
    methods: {
        back() {
            // console.log('返回')
            this.triggerEvent('back', this.data.show)
        },
        onClear() {
            this.setData({
                q: '',
                isSearch: true,
                noneResult: false
            })
        },
        onSearch(e) {
            this.setData({
                q: e.detail.value || e.currentTarget.dataset.val
            })
            book.query(this.data.q, this.data.start, this.data.pageSize).then(data => {
                console.log(data)
                this.setData({
                    booklist: data.books,
                    isSearch: !this.data.isSearch,
                    noneResult: data.total === 0,
                    total: data.total
                })
                // 搜索成功后，将搜索词条缓存到历史数据中
                search.addToHistory(this.data.q)

            })
        },

    },
    lifetimes: {
        attached() {
            // 获取热门搜索词条
            search.gethot().then(data => {
                // console.log(data.hot)
                this.setData({
                    hot: data.hot
                })
            })
            // 获取历史搜索词条
            this.setData({
                booksearch: search.getHistory()
            })

        },
    },

})