// takes 3 params: frames, frame-width, bgurl
angular.module('app')
    .directive('animator', function animator ($interval) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var width = element.width;
                var spacing = width / scope.frames;

                var xval = 0;
                scope.bgurl = attrs.bgurl;
                var url = 'url("' + attrs.bgurl + '")';
                element.find('div').css('background-image', url);

                $interval(function() {
                    element.find('div').css('background-position-x', xval + 'px');;
                    console.log(xval, width)
                    if (xval > width) {
                        xval -= +attrs.frameWidth;
                    } else {
                        xval += +attrs.frameWidth;
                    }

                }, attrs.speed);
            }
        }
    });