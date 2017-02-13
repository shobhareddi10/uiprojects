$(document).ready(function() {
    console.log( "ready!" );

    $('.siginplace').click(function(){
        //window.location.href = "views/login.html";
        $("#loginContainer").css("display", "block");
        $("#heroBannerArea").css("display", "none");
    });

    $('#loginCloseBtn').click(function(){
        $("#loginContainer").css("display", "none");
        $("#heroBannerArea").css("display", "block");

    });



});