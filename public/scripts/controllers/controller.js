angular.module('app')
    .controller('Main', function mainController ($scope) {
        $scope.show = {
            gifs: false,
            social: false,
            sites: false,
            bio: false
        }

    });