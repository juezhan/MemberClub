/// <reference path="jquery-2.1.3.min.js" />

$('.show-detail').click(function () {

    var id = $(this).data('id'),
        tit = $(this).data('tit'),
        msg = $(this).data('msg'),
        date = $(this).data('date');


    $('#alertBody').html('<h2><em style="' + ((id > 10) ? 'width:40px;' : '') + '">' + id + '</em>' + tit + '</h2><p>' + msg + '</p>');
    $('#alertFooter').html('有效期：' + date);

    $('#alert').addClass('active');

    return false;
});
$('#alert').find('.close').click(function () {
    $('#alertBody').html('');
    $('#alertFooter').html('');
    $('#alert').removeClass('active');
});
$('.js-btn').click(function () {
    if ($(this).hasClass('disabled')) return;
    alert('js-btn Click');
});