var address = {
    init: function () {
        address.loadProvince();
        address.event();
    },
    event: function () {
        $('#ddlProvince').off('change').on('change', function () {
            var id = $(this).val();
            if (id != '') {
                address.loadDistrict(parseInt(id));
            }
            else {
                $('#ddlDistrict').html('');
            }
        });
    },
    loadProvince: function () {
        var html = '';
        $.ajax({
            url: '/Address/LoadProvince',
            type: "POST",
            dataType: "json",
            success: function (responce) {
                if (responce.status == true)
                {
                    var html = '<option value = "">--Chọn Tỉnh Thành --</option>';
                    var data = responce.data;
                    $.each(data, function (i, item) {
                        html += '<option value  ="' + item.ID + '">"' + item.Name + '" </option>'
                    });
                    $('#ddlProvince').html(html);
                }
            }
        })
    },
    loadDistrict: function (id) {
        var html = '';
        $.ajax({
            url: '/Address/LoadDistrict',
            type: "POST",
            data: { provinceID: id },
            dataType: "json",
            success: function (responce) {
                if (responce.status == true) {
                    var html = '<option value = "">--Chọn quận huyện --</option>';
                    var data = responce.data;
                    $.each(data, function (i, item) {
                        html += '<option value  ="' + item.ID + '">"' + item.Name + '" </option>'
                    });
                    $('#ddlDistrict').html(html);
                }
            }
        })
    }

}
address.init();