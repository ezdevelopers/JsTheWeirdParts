(function(global, $){
    "use strict"; 
    //the greetr function creates an object and returns the object
    //this is done so we do not have to use the 'new' keyword when
    //calling the greeter function in the application.
    //Borrwed tthis trick from jQuery
    var Greetr = function(firstName, lastName, language){
        return new Greetr.init( firstName, lastName, language );
    }
    //This sets the prototype of the greetr function to an object
    
    //This variable cannot be accessed outside this function
    //it sets the supported languages
    var supportedLangs = ['en','es'];
    
    // setup the formal greetings
    var formalGreetings = {
      en:"Greetings",
      es:'Saludos'
    }
    
    //setup the informal greetings
    var greeting = {
      en:"Hello",
      es:'Holla' 
    }

    Greetr.prototype = {
        //return the fullname of the new object created
        fullName : function(){
            return this.firstname + " " + this.lastname;
        },
        //gets the informal greeting and displays return an informal
        //greeting message
        greeting: function(){
            return greeting[this.language] + " " + this.fullName(); 
        },
        //gets the formal greeting and displays return an informal
        //greeting message
        greetFormal: function(){
            return formalGreetings[this.language] + ", " + this.fullName();   
        },
        //the greet function which chooses between a formal greeting or informal
        //greeting
        greet: function(formal){
            var msg;
            if(formal){
               msg = this.greetFormal();
            }else{
                msg = this.greeting();
            }
            if(console){
                console.log(msg);
            }
            //the this value is the object that is created, and it helps make 
            //this method chainable 
            return this;
            
        },
        //Checks if the language is supported
        validate: function(){
            if(supportedLangs.indexOf(this.language) === -1){
                throw 'Invalid language found';
            }
        },
        setLang : function(value){
            
            //sets the value of that language
            this.language = value;
            //checks if the language passed value supported
            this.validate();
            //the this value is the object that is created, and it helps make 
            //this method chainable 
            return this;
            
        },
        HTMLGreeting: function(selector, formal){
            //Checks if jQuery exists in the global object
            if(!$){
                //throws an error if jQuery is not found
                throw 'jQuery not found';
            }
            //Checks if we passed in a function or throws an error if selector
            //is not found
            if(!selector){
                throw 'No selector has been found'
            }
            
           var msg;
            if(formal){
                msg = this.greetFormal();
            }
            else{
                msg = this.greeting();
            }
            //Replaces the content of the selector with the msg
            $(selector).html(msg);
             //the this value is the object that is created, and it helps make 
            //this method chainable 
            return this;
            
        }
        
    };
    
    //the init function is a function constructor which creates the
    //the greetr function 
    Greetr.init = function(firstName, lastName, language){
        var self = this;
        self.firstname = firstName || "";
        self.lastname = lastName || "";
        self.language = language || "es";
        
        //check if the language passed is valid
        self.validate();
    }
    //the prototype of the greetr.init function is set to the prototype of 
    //the greetr function
    Greetr.init.prototype = Greetr.prototype;
    
    //We are exposing the greetr function to be available outside this function
    //and can be called from the global object
    global.Greetr = global.G$ = Greetr;
}
(window,jQuery))