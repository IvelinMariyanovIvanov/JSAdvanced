function attachEvents() {
    
    let allBtns = $('.button');

    allBtns.on('click', function(){
        // $(this).attr('selected', true);

        // reset all selected
        allBtns.removeClass('selected');
        $(this).addClass('selected');
    });

}