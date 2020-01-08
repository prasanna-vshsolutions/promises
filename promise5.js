// Promise#5
// Find all records having isForceUser as true using
// PROMISE [ forceUser(personnel) ]
// & its sum of pilotingScore + shootingScore [ PROMISE [ sumOf(personnel) ]
// & its summation of all records [ PROMISE [ total(personnel) ]]?
// using filter map and reduce but both promise sumOf(...) and total(...) will use result of each other.
// CREATE 3 DIFF PROMISE and USE Promise.all()

var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];


let forceUser = (personnel)=> {
  return new Promise((resolve,reject)=> {
    let result = personnel.filter( (p) => { return p.isForceUser } )
    if(result)
    {
      resolve(result)
    }
    else
    {
      reject({message:'error'})
    }
  });
}

let sumOf = (personnel)=> {
  return new Promise((resolve,reject)=> {
    let result = personnel.map( (p) => { return p.pilotingScore + p.shootingScore })
    if(result)
    {
      resolve(result)
    }
    else
    {
      reject({message:'error'})
    }
  });
}
let total = (personnel)=> {
  return new Promise((resolve,reject)=> {
    let result = personnel.reduce( (acc,p) => { return acc + p },0 )
                                     
    if(result)
    {
      resolve(result)
    }
    else
    {
      reject({message:'error'})
    }
  });
}
Promise.all([forceUser,sumOf,total])
                   .then((result)=> {console.log(result)})
                  .catch((result)=>{console.log(resultresult)})
