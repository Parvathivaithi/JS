  

const users = [ 

  { id: 1, username: "admin", password: "1234", role: "ADMIN" }, 

  { id: 2, username: "user", password: "abcd", role: "USER" } 

]; 

 

let result=users.map(user=>{ 

    return { 

        id:user.id, 

        username:user.username, 

        ...(user.role=="ADMIN" &&{isAdmin:true}) 

    } 

}) 

console.log(result)