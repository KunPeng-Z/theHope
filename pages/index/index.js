//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        articleData:{},
        viewData: [
            {
                avatar:'https://s10.mogucdn.com/mlcdn/c45406/180806_3e6bkh3h9b8h8he9f0i8f2c3238a6_400x300.jpg',
                name:'123',
                time:'10',
                agree:'999',
                content:'“父母该不该为字母买房”不应该是一个值得争论的话题不应该是一个值得争论的话题不应该是一个值得争论的话题...'
            },
            {
                avatar:'https://s10.mogucdn.com/mlcdn/c45406/180806_3e6bkh3h9b8h8he9f0i8f2c3238a6_400x300.jpg',
                name:'123',
                time:'10',
                agree:'999',
                content:'“父母该不该为字母买房”不应该是一个值得争论的话题不应该是一个值得争论的话题不应该是一个值得争论的话题...'
            },
            {
                avatar:'https://s10.mogucdn.com/mlcdn/c45406/180806_3e6bkh3h9b8h8he9f0i8f2c3238a6_400x300.jpg',
                name:'123',
                time:'10',
                agree:'999',
                content:'“父母该不该为字母买房”不应该是一个值得争论的话题不应该是一个值得争论的话题不应该是一个值得争论的话题...'
            },
        ],
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function () {
        let that = this;
        wx.request({
            url: 'https://anwensf.com/api/shares/33', //仅为示例，并非真实的接口地址
            data: {
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: (res) =>{
                console.log(res);
                this.setData({
                    articleData: res.data
                })
                console.log(this.data.articleData)
            }
        })

    },

})
