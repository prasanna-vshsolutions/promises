const persons = [
  {
    name: "Joe",
    animals: [
      {species: "dog", name: "Bolt"},
      {species: "cat", name: "Billy"},
    ]
  },
  {
    name: "Bob",
    animals: [
      {species: "dog", name: "Snoopy"}
    ]
  }
];

const myPromise = (persons) => {
  return new Promise( (resolve,reject) => {
    const result = persons.filter(({animals}) => {
        return animals.some(({species}) => species == 'cat')})
  

if(result.length > 0)
      {
        resolve(result)
      } 
      else
      {
        reject({message :' Error '})
      }
  });
}

myPromise(persons).then( (result)=> {console.log(result) })
               .catch( (err) => { console.log(err)})
