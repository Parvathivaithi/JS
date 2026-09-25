let k="aaabbbccccccc" 

let  a=k.split("") 

let rev="" 

let count=1 

for(let i=0;i<a.length;i++) 

{ 

    if(a[i]==a[i+1]) 

    count++ 

    else 

    { 

        rev+=a[i]+""+count 

        count=1 

    } 

} 

console.log(rev)