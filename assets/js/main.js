$(window).scroll(function(){
    if($(window).scrollTop()){
        $('#meni').addClass('boja');
    }
    else{
        $('#meni').removeClass('boja');
    }
});