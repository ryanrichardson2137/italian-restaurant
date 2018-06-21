$(document).ready(function(){
    
    $(".fa-times").click(function(){
        $("#navbar").addClass('hide');
        $("#navbar").removeClass('show')
        $("#menu").show();
    });
    $("#menu").click(function(){
        $("#navbar").removeClass('hide');
        $('#navbar').addClass('show');
        $("#menu").hide();
    });
});