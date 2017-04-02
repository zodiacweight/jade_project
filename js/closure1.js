// Lexical Environment for cls, firstFunc, secondFunc
var myGlob = 'Globalization';
function cls(){
    // Lexical Environment for firstFunc and secondFunc
    var something = true;
    function firstFunc(){
        console.log(something);
        var first = 'first';
        function firstInner(){

        }
    }
    function secondFunc(){
        console.log(something);
        var second = 'second';
        function secondInner(){
            
        }
    }

}

var clsExp = function(){

};

clsExp();
