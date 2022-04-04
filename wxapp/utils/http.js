//utils/http.js
export default class HTTP{
   
    // ajax({url,method='get',data={},callback}){//统一使用请求后台数据的方法
    //     wx.request({
    //       url,
    //       method,
    //       data,
    //       success:res=>{
    //         //  获取请求的状态码
    //         // 只有code是以2开头的才表示请求成功
    //         let code = res.statusCode.toString();
    //         if(code.startsWith('2')){
    //             // 判断callback是否为空
    //             callback && callback(res.data)
    //         }else{
    //             this._showErr(`请求失败,错误代码:${code}`);
    //         }
    //       },
    //       fail:err=>{
    //         //   callback(res)
    //         //   显示错误信息
    //         this._showErr(err)
    //       }
    //     })
    // }
    // Promise版本
    pm({url,method='get',data={}}){
        return new Promise((resolve,reject)=>{
            wx.request({
            url,
            method,
            data,
            success:res=>{
                // resolve(res.data)
              //  获取请求的状态码
              // 只有code是以2开头的才表示请求成功
              let code = res.statusCode.toString();
              if(code.startsWith('2')){
                  // 判断callback是否为空
                  resolve(res.data)
              }else{
                  this._showErr(`请求失败,错误代码:${code}`);
              }
              
            },
            fail:err=>{
              //   callback(res)
              //   显示错误信息
              this._showErr(err)
            }
          })
        })
    }
    
    // 处理错误信息的方法
    _showErr(err){
        wx.showToast({
          title: `错误代码${err}`,
          icon:'none',
          duration:2000
        })
    }
}