/**
 * Created by zhaoy on 2016/6/21.
 */
define(['app','angular-animate',"ui-bootstrap"],function (app) {
    app.controller('cotroller1',['$scope',function ($scope) {
        console.log('controller1 yes');
    }])
        .controller('cameraCtrl',['$scope',function($scope){
            console.log("camera")
            $scope.rate = 7;
            $scope.max = 5;
            $scope.isReadonly = false;

            $scope.hoveringOver = function(value) {
                $scope.overStar = value;
                $scope.percent = 100 * (value / $scope.max);
            };

            $scope.ratingStates = [
                {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'}
            ];
        }])
})