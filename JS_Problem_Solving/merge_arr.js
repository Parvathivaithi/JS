let a=[1,2,3,4] 

let b=[5,6,7,8] 

let result=[] 

for(let k=0,i=0,j=0;k<a.length+b.length;k++) 

{ 

   if(i<a.length) 

   { 

   result.push(a[i]) 

   i++; 

   } 

   else if(j<b.length) 

   { 

   result.push(b[j]) 

   j++; 

   } 

} 

console.log(result)