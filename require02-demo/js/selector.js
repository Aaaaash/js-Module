define(function(){          //define方法第一个参数为一个匿名函数，匿名函数执行后返回一个query，query也是一个函数，
    function query(selector,context){
        var s=selector,
            doc=document,
            regId=/^#[\w\-]+/,
            regCls = /^([\w\-]+)?\.([\w\-]+)/,
            regTag = /^([\w\*]+)$/,
            regNodeAttr = /^([\w\-]+)?\[([\w]+)(=(\w+))?\]/;
        var context=
            context==undefined?
            document:
            typeof context=='string'?
            doc.getElementById(context.substr(1,context,length)):
            context;
        if(regId.test(s)){
            return doc.getElementById(s.substr(1,context.length));
        }
    }
    return query;
})

/*
当一个模块依赖（a）于另一个模块（b）时，定义该模块时的第一个参数为数组，数组中的模块名（字符串类型）就是它所依赖的模块。
当有多个依赖模时，须注意回调函数的形参顺序得和数组元素一一对应。此时requirejs会自动识别依赖，且把它们都下载下来后再进行回调。
*/
