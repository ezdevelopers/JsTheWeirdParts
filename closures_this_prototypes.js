//Lesson on Javascript Closures

function greet(whattosay) {
    return function (name) {
        console.log(whattosay + " " + name);
    };
}

var sayHi = greet("Hi");
sayHi("Eze");

//same values are stored in i
function forLoop() {
    var arr = [];
    
    for (var i = 0; i < 3 ; i++){
        arr.push(
            function() {
                console.log(i);
            }
        );
    }
    return arr;
}

var ls = forLoop();
ls[0]();
ls[1]();
ls[2]();


//different value are stored in i
function forLoop2() {
    var arr = [];
    
    for (var i = 0; i < 3 ; i++){
        arr.push(
            (function(j) {
                return function(){
                    console.log(j);
                };
            }(i))
        );
    }
    return arr;
}

var ls2 = forLoop2();
ls2[0]();
ls2[1]();
ls2[2]();


//the `This` variable
var person = {
    firstname:"Eze",
    lastname:"Emmanuel",
    changeName:function(){
        this.firstname = "Ezechukwu";
        var changeSurname = function(){
            this.lastname = "Emereuwaonu";
            console.log('Something happened');
        }
        changeSurname();  
    },
    
    changeNameTwo:function(){
        var self = this;
        self.firstname = "Ezechukwu";
        var changeSurname = function(){
            self.lastname = "Emereuwaonu";
            console.log('Something happened');
        }
        changeSurname();  
    }
}
console.log(person);
person.changeNameTwo();
console.log(person);


//objects, prototypes, prototypal inheritance
var human = {
    firstname:"Eze",
    lastname:"Emmanuel",
    fullName : function(){
    return this.firstname + " " + this.lastname;
}
    
}
 
var girl = {};

girl.__proto__ = human;


function Human(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

Human.prototype.fullName = function(){
    return this.firstname + " " + this.lastname;
}

var boy = new Human("Eze","Emmanuel");
