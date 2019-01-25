define(function (require, exports, module) {
    var $ = require("jquery");

    $.ajaxSetup({
        dataFilter: function (data, type) {
            if (type === 'json' && data) {
                var jsonData = JSON.parse(data);
                if (jsonData.href && jsonData.href.startsWith('https://sandbox.api.kbb.com/vrs/data/makes')) {
                    data = [];
                    for (var i = 0; i < jsonData.items.length; i++) {
                        data.push({
                            value: jsonData.items[i].makeId,
                            text: jsonData.items[i].makeName
                        });
                    }
                }

                data = JSON.stringify(data);
            }

            return data;
        }
    });

});