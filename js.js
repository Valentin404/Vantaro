(function($) {
    $(function(){
        $('.icon').on('click', function(){
            $(this).closest('.menur').toggleClass('menu-open');
        });
    });
})(jQuery);