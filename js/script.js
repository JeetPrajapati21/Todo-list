$(document).ready(function() {

	$('#list-items').html(localStorage.getItem('listItems'));

	$('.add-items').submit(function(event) {

		event.preventDefault();
		var item = $('#todo-list-item').val();
		if(item) {
			$('#list-items').append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'><i class='far fa-trash-alt'></i></a><hr></li>");
			localStorage.setItem('listItems', $('#list-items').html());
			$('#todo-list-item').val("");
		}
	});

	$(document).on('change', '.checkbox', function() {
	
	if($(this).attr('checked')) {
		$(this).removeAttr('checked');
	}
	else {
		$(this).attr('checked', 'checked');
	}

	$(this).parent().toggleClass('completed');

	localStorage.setItem('listItems', $('#list-items').html());
    });

    $(document).on('click', '.remove', function() {
    	
    	$(this).parent().remove();
    	localStorage.setItem('listItems', $('#list-items').html());
    });

    var clear = document.querySelector('.clearAll');
    clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
    });

    var dateElement = document.getElementById('date');
    var options = {weekday : "long", month:"short", day:"numeric"};
    var today = new Date();
    dateElement.innerHTML = today.toLocaleDateString("en-US", options);
});

