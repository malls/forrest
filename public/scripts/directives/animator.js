angular.module('app')
    .directive('animator', function animator ($timeout) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var width = element.width;
                var spacing = width / scope.frames;                
                var xval = 0;
                scope.bgurl = attrs.bgurl;
                var url = 'url("' + attrs.bgurl + '")';
                element.css('background-image', url);;

                $timeout(function() {
                    element.css('background-position-x', xval + 'px');;
                    xval += 100;
                }, 50);
            }
        }
    });