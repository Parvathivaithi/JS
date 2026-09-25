let obj = { a: 10, b: 50, c: 30 }; 

let max=-Infinity 

let maxkey 

for(let x in obj) 

{ 

if(obj[x]>max) 

{ 

max=obj[x] 

maxkey=x 

}     

} 

console.log(maxkey)