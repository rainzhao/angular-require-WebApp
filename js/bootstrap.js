/**
 * Created by zhaoy on 2016/6/21.
 */
//手动启动angularjs而不是用ng-app
define(['require','angular','angular-route','jquery','angular-animate','app','router'],function(require,angular){
    require(['domReady!'],function(document){
        angular.bootstrap(document,['webapp']);
    });
});