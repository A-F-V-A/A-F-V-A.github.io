avabogados.function = new Object()

avabogados.function.goUp = () =>{
    $('body, html').animate({
        screenTop: '0px'
    },300)
}

avabogados.function.controlScroll = function(){
    if($(this).scrollTop() > 0){
        $('.arrou').slideDown(300)
    }else{
        $('.arrou').slideUp(300)
    }
}


