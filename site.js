

 $('#user-form').on("submit", function(e){
	 //var pokemon = $('#pokemon').val();
     e.preventDefault();
	 var pokemon = $('#pokemon').val();

   if ($('#pokemon').val()==''){	 }

	 else {
		 $('#result').append('<li> Whoops, the pokemon you entered are not here yet </li>');
		 $('#result').append("<li>" + whatwhat + "</li>");
	 }
	 console.log("Caught submit event");
	 e.preventDefault();

});


//pictures to add on
