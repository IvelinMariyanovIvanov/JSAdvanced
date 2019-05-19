function attachEvents() {
	let allLi = $("#items").children();
	let allTowns = [];

	allLi.on('click', function(){
		let li = $(this);

		if(li.attr('data-selected') === 'true'){

			$(this).removeAttr('data-selected', false);
			$(this).css('background-color', '');
			allTowns.splice(li.text(), 1);
		} else {		
			
			$(this).attr('data-selected', true);
			$(this).css('background-color', '#DDD');
			allTowns.push(li.text());
		}
		
	});

	$("#showTownsButton").on('click', function(){
		$("#selectedTowns").text(allTowns.join(', '));

		console.log(allTowns);
	});
}