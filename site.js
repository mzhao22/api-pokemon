

 $('#user-form').on("submit", function(e){
	 var pokemon = $('#pokemon').val();
  $.ajax({
    type: "GET",
    url: 'https://pokeapi.co/api/v2/pokemon/' + input + '&maxResults=20',
    dataType: "html",
    success: function (results){
     var data = JSON.parse(results);
     if (Array.isArray(data.items)) {
      console.log(data.items);
      parseData(data);
    } else {
      console.log('single object: ');
  // console.log(data);
      }
    }
  });
  e.preventDefault();
});



   if ($('#pokemon').val()==''){	 }

	 else {
		 $('#result').append('<li> Whoops, the pokemon you entered are not here yet </li>');
		 $('#result').append("<li>" + whatwhat + "</li>");
	 }
	 console.log("Caught submit event");
	 e.preventDefault();

});
