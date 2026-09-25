let a =[1,2,3,5,9] 

let result=[] 

let n=1 

for(let i=0;i<a.length;i++) 

{ 

  while(n<a[i]) 

    { 

    result.push(n) 

    n++; 

    } 

    n++; 

} 

console.log(result) 