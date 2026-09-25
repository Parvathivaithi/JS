let a = [1,2,4,5,62,1,3,4,1,5];  

  

for(let i=0;i<a.length;i++)  

{  

    if(a[i]==null)  

    continue;  

    for(let j=i+1;j<a.length;j++)  

    {  

        if(a[i]==a[j])  

        {  

           a[j]=null  

         }  

    }  

}  

  

let x=[]   

for(let i=0;i<a.length;i++)  

  

{  

    if(a[i]!=null)  

    x.push(a[i])  

}  

console.log(x)