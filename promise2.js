
// Promise#2
// Find all records having isForceUser as true & its sum of pilotingScore + shootingScore & its summation of all records ? using filter map and reduce.
// Using nesting of Promises ie input of first promise will act as output to another.
// Promise names should be same.
// 1) find(personnel) :- find all records having isForce as true
// 2) sumOf(< output of above promise >) :- find all records having sum of polotingScore + shootingScore
// 3) totalOf(< output of above promise >) := find total of all records


var data =[ 
{ 
id:5,
name:"Luke Skywalker",
pilotingScore:98,
shootingScore:56,
isForceUser:true,

},
{ 
id:82,
name:"Sabine Wren",
pilotingScore:73,
shootingScore:99,
isForceUser:false,

},
{ 
id:22,
name:"Zeb Orellios",
pilotingScore:20,
shootingScore:59,
isForceUser:false,

},
{ 
id:15,
name:"Ezra Bridger",
pilotingScore:43,
shootingScore:67,
isForceUser:true,

},
{ 
id:11,
name:"Caleb Dume",
pilotingScore:71,
shootingScore:85,
isForceUser:true,

},

];

const myPromise = (data) =>{ 
return new Promise ( (resolve,
reject) =>{ 
const result = data.filter( (p) =>{ 
return p.isForceUser
})                                                     .map( (p) =>{ 
return p.pilotingScore + p.shootingScore
})      
                      .reduce( (acc,
p) =>{ 
return acc + p
},
0 );
      if(result){ 
resolve(result)
}else{ 
reject({ 
message:'Error'
})
}
});
}myPromise(data).then( (result)=>{ 
console.log(result)
})
               .catch( (err) =>{ 
console.log(err)
})