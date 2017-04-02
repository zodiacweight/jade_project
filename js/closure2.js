/*var first = 'first',
    second = 'second',
    third = 'third';*/

function mod1(){
    // ...
}

var one=(function(val){
    var first1 = 'first',
        second1 = 'second',
        third1 = 'third';
    return{
        getValue: function(){
            return first1;
        },
        setValue: function(val){
           val = first1;     
        }
    };
}());
//console.log("data: ", one.getValue());
//var valueToChange = one.getValue(first);
var two=(function(){
    var first2 = 'first',
        second2 = 'second',
        third2 = 'third';
    return{
        setValue(val){
            val=second2;
            console.log("new value: ", val);
        }    
    };
}());

//console.log('one=>', one);
two.setValue(one.getValue());