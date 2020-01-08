// ** Problem statement name **
// Promise#6
// Race between two promises,if the promise has less timeout.
// Choice is u any example with settimeout function


var p1 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 500, 'one'); 
});
var p2 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 1000, 'two'); 
});

Promise.race([p1, p2]).then(function(value) {
  console.log(value); // "two"
  // Both resolve, but p2 is faster
});