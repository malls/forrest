angular.module('app')
    .service('Colors', function Colors() {
        'use strict';

        function random256() {
            return Math.floor(Math.random() * 257);
        }

        function numberToHex (number) {
        var hex = number.toString(16);
        var str = hex + ""; 
        if (str.length === 1){
            return "0" + hex;
        } 
        return hex;
        }

        function random() {
            return '#' + numberToHex(random256()) + numberToHex(random256()) + numberToHex(random256());
        }

        return {
            random: random
        }
    });