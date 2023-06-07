$(Document).ready(function(){

    $("body").mousemove(function (e) { 
        var top =$(window).scrollTop() - $(this).offset().top +event.clientY
        var left =$(window).scrollLeft() - $(this).offset().left +event.clientX
        
       setTimeout(function(){
        $(".cursor_area").prepend('<div class="cursor"></div>');
        $(".cursor").css({"left":left - 30, "top":top - 30})
       })
    setInterval(function(){
        $(".cursor").eq(30).remove();
    },5000)
    })
    });
    
    
    
    
    
    