var num=0;

$('#user-form').on('submit', function(e) {
  var pokename = $('#poke').val();
    $.ajax({
      type: "GET",
      url: 'https://pokeapi.co/api/v2/pokemon/' + pokename,
      dataType: "JSON",
      success: function (result){
      var data = JSON.parse(result);
      if (Array.isArray(result)) {
      console.log(result);
        parseData(result);
      }
      else {
        console.log('single object:');
        console.log(result);
        }
      }
    });

  function parseData(arr) {
    for( var x=0; x < arr.abilities.length; x++){
      $('#result').append("<li id="+"id" + x +">" + (x+1) + "." +
          "<li id=ability" + x + ">" + arr.abilities[x].ablity.name + "</li>");
        }
  }
  e.preventDefault();
  });
