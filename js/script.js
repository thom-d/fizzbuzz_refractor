  // Functions to do things
  function processUserInput(){
    // Time delay function
    setTimeout(function(){
      
      //clear fields
    
           $('#alert p').remove();
     $('#results li').remove();
      $("#results").css('display', 'none');
       $("#alert").css('display', 'none');
      
      //make sure takes a Number

      var userInput = Number( $("#userInputTextfield").val() );
      var counter = 1;
      var countString = '';
      
      //set up condition

      if ( isNaN(userInput) || userInput < 10 || userInput > 100 ) {
          $('#alert').html('<p>Please enter a valid number between 10 and 100</p>').fadeIn(500);  // Inserts rendered content with tags
         // OR 
          //$('p#specialParagraph').text('Please enter a valid number between 10 and 100');  // Inserts text ONLY INTO selected html tags
         $("#userInputTextfield").val('');
         
      } else{
        
       $('#alert').html('<p id="thanks">Thank You!</p>').fadeIn(500);

      // Display initial userInput
      $("#results").append("<li class='choice'>Number : " + userInput +"</li>");

      while ( counter <= userInput ) {
          if ( counter % 3 == 0 && counter % 5 == 0 ) {
              countString += "<li class='fizzbuzz'>FizzBuzz</li>";
          } else if ( counter % 3 == 0 ) {
              countString += "<li class='fizz'>Fizz</li>";
          } else if ( counter % 5 == 0 ) {
              countString += "<li class='buzz'>Buzz</li>";
          } else {
              countString += "<li>"+counter+"</li>";
          }
          counter++;
      }

      // Add the results to the page
      $("#results").append(countString).fadeIn(500);
        
        $("#userInputTextfield").val('');

  }  // End of processUserInput
      
},200); 
  }
  // UI Bindings and Event Handlers
  $("#userButton").on("click", processUserInput );
              
$(document).keydown(function(e) {

     var keycode = (event.which);
  if(keycode == '13'){
    processUserInput();
  }
});

