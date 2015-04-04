angular.module('app')
    .directive('box', ['Colors', function box (Colors) {
        return {
            restrict: 'E',
            templateUrl: 'box',
            transclude: true,
            link: function(scope, element, attrs) {
                element.find('div').css('border-color', Colors.random());;
            }
        }
    }]);