(function(){
var App = { 
	init: function(){ 
		console.log('Initializing Application');
	},

	bindUIActions: function(){ 
		console.log('Binding UI Actions');

		$('#myButton').click(function(){ 
			console.log('You hit the button');
		});
	},

	get: function(){ 
		console.log('Get Function')
	}
}

$(document).ready(function(){ 
	App.init();
});
}());