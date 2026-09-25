let  a= "madam" 

let temp=a; 

let rev="" 

for(let i=a.length-1;i>=0;i--) 

{ 

    rev=rev+a.charAt(i) 

} 

if(rev==temp) 

console.log("palindrome") 

else 

console.log("not palindrome") 