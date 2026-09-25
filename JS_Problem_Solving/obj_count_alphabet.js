let a = ["a", "b", "a", "c", "b", "a"]; 

let x={} 

for(let i=0;i<a.length;i++) 

{ 

    if(a[i]==null) 

    continue 

    let count=1 

    for(let j=i+1;j<a.length;j++) 

    { 

        if(a[i]==a[j]) 

        { 

      count++; 

      a[j]=null; 

        } 

    } 

    x[a[i]]=count 

     

    console.log(a[i],"count is",count) 

} 

console.log(x) 

 

 