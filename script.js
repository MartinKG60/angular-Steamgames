angular.module("GamesInstantSearch", ["ngSanitize"])

//    .filter('replace', function () {
//        var pat = / /gi;
//        return function (text) {
//            var clean = text.replace(pat, "-");
//            var temp = clean.split("---");
//            if (temp.length > 1) {
//                clean = temp[0];
//            }
//            return clean;
//        };
//    })

.filter("jsDate", function () {
    return function (x) {
        return new Date(parseInt(x.substr(6)));
    };
})

.controller("GamesList", function ($scope, $interval) {

    //        $scope.orderByDate = function (item) {
    //            var parts = item.dateString.split('-');
    //            var date = new Date(parseInt(parts[2],
    //                    parseInt(parts[1]),
    //                    parseInt(parts[0]));
    //
    //                return date;
    //            )
    //        };

    $scope.search = "";
    $scope.games = gameList;
});

$(document).ready(function () {
    var str = $(".price").text();
    var res = str.split("€", 2);

    var string = 'a,b,c,d',
        strx = str.split('€');
    array = [];

    array = array.concat(strx);

    //console.log(array)
});