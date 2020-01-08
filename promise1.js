// ** Problem statement name **
// Promise #1
// Create 3 seperate promises 
// Promise name 
// 1) displayDogs(data) :=Select only the dogs from animals?   
// 2) multiplyby7(<output of above promise>) :=  Translate their ages into dog years (multiply them by seven) ?
// 3) sumofAges(<output of above promise>) :=  sum all of the dogs ages in dog years ?
// Perform nesting of promises such data output of first promise should act as input to other promise and so on


const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
];


const myPromise = (data) => {
  return new Promise( (resolve,reject) => {
      const result = data.filter( (animal) => {return animal.type ==='dog'})
                         .map( (a) => { return a.age  * 7})
                         .reduce( (acc,p) => { return acc + p },0 )
                       
      if(result > 0)
      {
        resolve(result)
      } 
      else
      {
        reject({messae :' Error '})
      }
  });
}

myPromise(data).then( (result)=> {console.log(result) })
               .catch( (err) => { console.log(err)})
