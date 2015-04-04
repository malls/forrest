angular.module('app')
    .directive('animator', function animator ($interval) {
        return {
            restrict: 'E',
            templateUrl: 'animator',
            scope: {
                frames: '='
            },
            replace: true,
            link: function(scope, element, attrs) {
                var width = element.width;
                var spacing = width / scope.frames;                
                var xval = 0;
                scope.bgurl = attrs.bgurl;

                $interval(function() {
                    element.css('background-position-x', xval + 'px');;
                    element.css('border', '5px dotted pink');;
                    xval += 100;
                }, 50);
            }
        }
    });