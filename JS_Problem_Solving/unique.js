let a=[1,2,1,4,2,3,5,7,9,9] 

let x=[] 

for(let i=0;i<a.length;i++) 

{ 

    if(a[i]==null) 

    continue; 

   let count=1; 

   for(let j=i+1;j<a.length;j++) 

   { 

       if(a[i]==a[j]) 

       { 

       count++ 

       a[j]=null; 

       } 

   } 

   if(count==1) 

   x.push(a[i]) 

} 

console.log(x)