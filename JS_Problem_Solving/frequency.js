let a=[1,5,9,7,6,2,1,3,4,5] 

for(let i=0;i<a.length;i++) 

{ 

    if(a[i]==null) 

    continue; 

    let count=1 

    for(let j=i+1;j<a.length;j++) 

    { 

        if(a[i]==a[j]) 

        { 

            count++; 

            a[j]=null 

        } 

    } 

    console.log(a[i]+'count is'+count) 

} 