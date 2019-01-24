define(function(require, exports, module) {
    var $ = require("jquery");

    $.ajaxSetup({
        dataFilter: function (data, type) {
            console.log(JSON.stringify(data, null, 2));

            return data;
        }
    });

});