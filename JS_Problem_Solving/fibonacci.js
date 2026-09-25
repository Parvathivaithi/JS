let a1=0; 

let a2=1; 

let n=10 

let result=[] 

result.push(a1) 

for(let i=1;i<=n-2;i++) 

{ 

    let a3=a1+a2; 

    result.push(a3) 

    a1=a2 

    a2=a3 

} 

console.log(result) 