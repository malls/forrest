angular.module('app')
    .directive('animator', function animator ($timeout) {
        return {
            restrict: 'E',
            templateUrl: 'animator',
            scope: {
                frames: '='
            },
            replace: true,
            link: function(scope, element, attrs) {
                // var element = element.find('div');
                console.log(element);
                var width = element.width;
                var spacing = width / scope.frames;                
                scope.bgurl = attrs.bgurl;

                $timeout(function() {
                    element.backgroundPositionX += 100;

                }, 50);
            }
        }
    });