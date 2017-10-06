var pokemon = [
    {
		"name": "Sweet Soy Chicken Wings",
		"amount": "16",
    "type": "stir-fried",
		"ingredients": [
		{"name":"salt ","amount": "1 tspoon, "},
		" soysauce, ",
    "Chicken Wings, ",
    "sugar" ]},

  {
			"name": "Potatoes with Chicken Wings",
			"count": "8",
	    "type": "stir-fried",
			"materials": [
			"salt, ",
			"soysauce, ",
	    "sugar, ",
      "red skin potatoes" ]},
  {
      "name": "Other materials:",
      "materials": [
        "basil leaf 1, ",
        " sesame 1 scoop"
      ]
		}];

 $('#user-form').on("submit", function(e){
	 //var food = $('#food').val();
     e.preventDefault();
	 var foodname = $('#food').val();
	 if ($('#food').val()==''){
		 $('#result').append("<br />Here are the foods provided:<br />" + food[0].name + "");
		 $('#result').append("<br />amount: " + food[0].amount + "");
		 $('#result').append("<br />type: " + food[0].type + "");
		 $('#result').append("<br />ingredients: " + food[0].ingredients[0].name + food[0].ingredients[0].amount + food[0].ingredients[1] + food[0].ingredients[2] + food[0].ingredients[3] + "");
		 $('#result').append("<br />" + food[1].name + "");
		 $('#result').append("<br />amount: " + food[1].count + "");
		 $('#result').append("<br />type: " + food[1].type + "");
		 $('#result').append("<br />ingredients: " + food[1].materials[0] + food[1].materials[1] + food[1].materials[2] + food[1].materials[3] + "");
		 $('#result').append("<br />" + food[2].name + "");
		 $('#result').append("<br />ingredients: " + food[2].materials[0] + food[2].materials[1] + "");
	 }
	 else {
		 $('#result').append('<li> Whoops, the pokemon you entered are not here yet </li>');
		 $('#result').append("<li>" + whatwhat + "</li>");
	 }
	 console.log("Caught submit event");
	 e.preventDefault();

});


//pictures to add on
