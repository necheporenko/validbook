$(document).ready(function() {
	$(".log_ajax").click(function() {
		var title = $('.title').text();
		var desc = $('.description').text();

		$.ajax({
			type: 'POST',
			url: "http://validbook.org/api/log/save",	
			dataType: 'json',
			data: { title: title, description: desc }  
			// error: function (jqXHR, textStatus, errorThrown) {
	   	//      console.log('jqXHR:');
		  //     console.log(jqXHR);
		  //     console.log(jqXHR.status);
		  //     console.log('textStatus:');
		  //     console.log(textStatus);
		  //     console.log('errorThrown:');
		  //     console.log(errorThrown);
    })
    .fail(function(jqXHR, textStatus) {
    	console.log(jqXHR);
			alert("Ошибка: " + textStatus);
		});
	});			
});
