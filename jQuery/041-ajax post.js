$(function () {
    $('.btn').css({
        'border': '1px solid black'
        , 'width': '150px'
        , 'padding': '10px'
    })
    $('.btn-1').click(function (e) {
        var url = 'http://s179017901.onlinehome.us/discoveryvip/';
        var myData = $('#myForm').serialize();
        console.log(myData);
        $.post(url, myData, function (data) {
            console.log(data.input1);
            console.log(data.input2);
        })
    })
    $('.btn-2').click(function (e) {
        var url = 'http://s179017901.onlinehome.us/discoveryvip/';
        var myData = $('#myForm').serialize();
        $.ajax({
            type: 'POST',
            url: url,
            data: myData,
            success: function (data) {
                $('h1').html(data.input1 + ' ' + data.input2);
            }
        })
    })
})