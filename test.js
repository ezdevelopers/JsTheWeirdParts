var p = G$("John", "Doe");

//create a click handler to run a function when the login button is clicked
$("#login").click(function(){
    //hide the content in the logindiv container
   $("#logindiv").hide();
    //set the language to the option in the select box
   p.setLang($("#lang").val());
    //run the method on the greetr function called HTMLGreeting
   p.HTMLGreeting("#greeting");
})