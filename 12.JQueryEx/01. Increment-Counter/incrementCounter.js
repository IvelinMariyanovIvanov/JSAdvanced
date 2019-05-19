function increment(selector) {
    
    let container = $(selector);

    let textArea = $('<textarea>');
    textArea.addClass('counter');
    textArea.attr('value', 0);
    textArea.attr('disabled', true);
    textArea.text(0);

    let incrementBtn = $('<button>');
    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');
    incrementBtn.text('Increment');
    incrementBtn.on('click', incrementFunc);

    let addBtn = $('<button>');
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');
    addBtn.text('Add');
    addBtn.on('click', addFunc);

    let ul = $('<ul>');
    ul.addClass('results');

    container.append(textArea, incrementBtn, addBtn, ul);

    function incrementFunc(){
        let count = Number($('textarea').val());
        count++;

        $('textarea').val(count);
    };

    function addFunc(){
        let textValue = $('textarea').val();
        let ul = $('ul');
        let li = $('<li>');
        li.text(textValue);

        ul.append(li);
    }
}
