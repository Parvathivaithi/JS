let a = [ 

  { name: "A", role: "admin" }, 

  { name: "B", role: "user" }, 

  { name: "C", role: "admin" } 

]; 

let admin=[] 

let user=[] 

  

for(let i=0;i<a.length;i++) 

{ 

    if(a[i].role=="admin") 

    admin.push(a[i]) 

    else if(a[i].role=="user") 

    user.push(a[i]) 

} 

  

let result={admin:admin,   user:user   } 

console.log(result)