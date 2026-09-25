let obj = { name: "John", age: "25", city: "Chennai" }; 

let result={} 

for(let x in obj) 

{ 

    result[obj[x]]=x  

} 

 console.log(result) 