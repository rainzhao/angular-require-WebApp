/**
 * Created by zhaoy on 2016/6/21.
 */
define(["app","controllers",'angular-animate',"ui-bootstrap"],
    function(app) {
        return app.run([
            '$rootScope',
            '$state',
            '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;//将state和$stateParams赋值给根作用域，方便调用
                $rootScope.$stateParams = $stateParams;
            }
        ])
            .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $uiViewScrollProvider) {
                //用于改变state时跳至顶部
                $uiViewScrollProvider.useAnchorScroll();
                // 默认进入先重定向
                $urlRouterProvider.otherwise('/home');
                $stateProvider
                    .state('home', {
                        //abstract: true,
                        url: '/home',
                        views: {
                            '': {
                                templateUrl: 'templates/home.html',
                                controller: 'cotroller1'
                            }

                        }
                    })
                    .state('search',{
                        url:'/search',
                        views:{
                            '':{
                                templateUrl: 'templates/search.html'
                                // controller: function($scope,$state){
                                //     var a = document.getElementsByClassName('input')[0];
                                //     a.onclick = function(){
                                //         $state.go("home");//强制跳转
                                //         console.log("123")
                                //     }
                                // }
                            }
                        }
                    })
                    .state('personalcenter',{
                        url:'/personalcenter',
                        views:{
                            '':{
                                templateUrl: 'templates/personalcenter.html'
                            }
                        }
                    })
                    .state('gift',{
                        url:'/gift',
                        views:{
                            '':{
                                templateUrl: 'templates/gift.html'
                            }
                        }
                    })
                    .state('invite',{
                        url:'/invite',
                        views:{
                            '':{
                                templateUrl: 'templates/invite.html'
                            }
                        }
                    })
                    .state('about',{
                        url:'/about',
                        views:{
                            '':{
                                templateUrl: 'templates/about.html'
                            }
                        }
                    })
                    .state('camera',{
                        url:'/camera',
                        views:{
                            '':{
                                templateUrl: 'templates/camera.html',
                                controller: 'cameraCtrl'
                            }
                        }
                    })
            })
    });