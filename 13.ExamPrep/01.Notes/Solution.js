function addSticker(){
  let title =$('.title');
  let content = $('.content');  
  let stickerList = $('#sticker-list');  


  if(title.val() && content.val()){
    
    let li = $('<li>');
    li.addClass('note-content');

    let a = $('<a>');
    a.addClass('button');
    a.text('x');
    a.on('click', function(){
        li.remove();
    });

    let hr = $('<hr>');

    let h = $('<h2>');
    h.text(title.val());

    let p = $('<p>');
    p.text(content.val())

    li.append(a, h, hr, p);
    stickerList.append(li);


    title.val('');
    content.val('');
  }

}