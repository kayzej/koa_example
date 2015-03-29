(function(){
var App = { 
	init: function(){ 
		console.log('Initializing Application');
	},

	bindUIActions: function(){ 
		console.log('Binding UI Actions');

		$('#listbtn').click(function(){ 
			console.log('You hit the button');
			
			$.get('/list', function(data){
				console.log(data);
			});
		});

		// $('#form-submit').click(function(){
		// 	console.log('submitting form');

		// 	var data = $( "#testform" ).serialize(); 
		// 	console.log('posting data: ' + data );

		// 	// $.post('/insert', data, function(data){
		// 	// 	console.log('succesfully posted to server');
		// 	// }, "json");
		// });

		$('#test-form').submit(function(event){
			event.preventDefault();
			console.log('form submitted');
		});
	}
}

$(document).ready(function(){ 
	App.init();
	App.bindUIActions();
});
}());