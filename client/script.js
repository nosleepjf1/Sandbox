/**
 * Created by bobnweave on 8/29/15.
 */

var multiply = function(a,b) {
    return a * b;
}

var total = function(a, b) {
    var add = a + b;
    document.write(add);
}

//var numOfCalls = 0;
//while(numOfCalls < 10) {
//
//    total(2, multiply(5, 2));
//    numOfCalls += 1;
//}


for(var numOfCalls = 0; numOfCalls < 10; numOfCalls++){
    total(2, multiply(5, 2));
    document.write(numOfCalls);
}