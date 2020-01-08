const family =[{"name":"Jack", "age": 26},
{"name":"Jill", "age": 22},
{"name":"James", "age": 5 },
{"name":"Jenny", "age": 2 },
{"name":"Jenny", "age": 1 } ];

const showName = (family) => {
  return new Promise( (resolve,reject) => 
  {     setTimeout(() => {
        resolve({result:'showName'});
    }, 1000);
      const result =  family.filter((n) =>
                      {  
                        if(n.name.endsWith('ny'))
                             return n.name;
                      });
                      
      if(result)
      {
        resolve(result)
      }
      else
      {
        reject({message:'Error'})
      }
      
  });
}


const showAge= (family) => {
  return new Promise( (resolve,reject) => 
  {   setTimeout(() => {
        resolve({result:'showAge'});
    }, 1000);
      const result =  family.filter((n) => n.age > 3);

      if(result)
      {
        resolve(result)
      }
      else
      {
        reject({message:'Error'})
      }
      
  });
}

const showNameAge = (family) => {
  return new Promise( (resolve,reject) => 
  {   setTimeout(() => {
        resolve({result:'showNameAge'});
    }, 1000);
      const result =  family.filter((n) =>
                      {  
                       return (n.name.startsWith('Ja'))
                             
                      });
                      
      if(result)
      {
        resolve(result)
      }
      else
      {
        reject({message:'Error'})
      }
      
  });
}
 Promise.race([showName, showAge,showNameAge])
                 .then( (result)=> {console.log(result) })
                 .catch( (err) => { console.log(err)})
