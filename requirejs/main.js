// require.config({
//     paths:{
//         // require.config用于配置一些参数，是一个对象，其中paths表示配置文件路径，比如“jquery-1.12.3是jquery文件名，为了调用方便可以配置为jquery”
//         // jquery:'jquery.js'
//         // 如果jquery文件名已经改为jquery.js，也可以不用配置这里的路径参数
//     }
// })
require(['jquery'],function($){
    alert('jquery');
})
