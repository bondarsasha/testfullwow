$(document).ready(function() {
    $('.slider').slick({
    dots: true,
    
    });
 });
$(document).ready(function() {
    $('.button').click(function(){
        $('.button').toggleClass('active');
        $('header ul').toggleClass('active');
    
    
    });
 });

