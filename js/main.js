/**
 * Created by zhaoy on 2016/6/21.
 */
(function(){
    require.config({
        paths:{
            "jquery" : '../lib/js/jquery.min',
            "angular": '../lib/js/angular-1.5.3.min',
            "angular-route":'../lib/js/angular-router',
            "bootstrap": 'bootstrap',//手动启动angular
            "router": "router",
            "app":"app",
            "ui-bootstrap":"../lib/js/ui-bootstrap-tpls-1.3.3",
            "angular-animate":"../lib/js/angular-animate-1.5.3"
        },
        shim: { //引入没有使用requirejs模块写法的类库。例如underscore这个类库，本来会有一个全局变量'_'。这里shim等于快速定义一个模块，把原来的全局变量'_'封装在局部，并导出为一个exports，变成跟普通requirejs模块一样
            'angular': {
                exports: 'angular'
            },
            'angular-route': {
                deps: ['angular'],   //依赖什么模块
                exports: 'ngRouteModule'
            },
            'ui-bootstrap':{
                deps: ['angular','jquery','angular-animate'],
                exports: 'strap'
            },
            'angular-animate':{
                deps: ['angular','jquery'],
                exports: 'ngAnimate'
            }
        },
        //deps:['bootstrap'],//先加载bootstrap文件
        urlArgs: "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
    });

// require(['jquery'],function($){//测试jQuery模块是否正确加载
//     // $("body").css({'background-color':'red','opacity':0.1});
// })
    require(['angular','angular-route','router','angular-animate','ui-bootstrap'], function(angular){
        angular.bootstrap(document, ['webapp']);
    });
})();
