const fs = require('fs');
const { isGeneratorFunction } = require('util/types');

// !    Write File
// fs.writeFile('data.txt','Hello this is parvathi',(err)=>{
//     if(err){
//         console.log("Our code is not process");
        
//     }
//     console.log("File write successfully");
    
// })

// !  Append File 

// fs.appendFile('data.txt','I am a SAP BTP Software Developer in Ladera Technology',(err)=>{
//     if(err)
//     {
//         console.log(err);
        
//     }
//     console.log("Append Successfully");
    
// })

// !  Read File 

// fs.readFile('data.txt','utf-8',(data,err)=>{
//     if(data)
//     {
//         console.log(data);
        
//     }
//     else if(err)
//     {
//         console.log(err);
        
//     }
// })



// ! HTTP module server creation 
// const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.write("Hii This is Parvathi");
//     res.end();

// })

// server.listen(4004,()=>{
//     console.log("Server Started");
    
// })

// !  Routing 
// const http = require('http');

// const server = http.createServer((req,res)=>{

//     if(req.method==='GET' && req.url ==='/home')
//     {
//         res.write("This is the Home Page");
//         res.end();
//     }
//     else if(req.method ==='GET' && req.url ==='/about')
//     {
//         res.write("This is the About Page");
//         res.end();
//     }
//     else{
//         res.write("404 Not Found");
//         res.statusCode=404;
//         res.end()
//     }
// })
// server.listen(2000,()=>{
//     console.log("Server Running");
    
// })



// !  Event Emitter

// const EventEmitter = require('events')

// const event = new EventEmitter();

// event.on("Paru",(name)=>{
//     console.log('This is from',name);
    
// })

// event.emit("Paru","Parvathi")

// event.emit("Paru","Ramila")

// event.once("Rammu",(name)=>{
//     console.log("This is from",name);
// })
// event.emit("Rammu","Ramila")
// event.emit("Rammu","Keeri")


// !  STREAM 

// const readStream = fs.createReadStream('data.txt');

// readStream.on("data",(chunk)=>{
//     console.log(chunk.toString());
    
// })

// const read = fs.createReadStream("data.txt");
// const write = fs.createWriteStream("data2.txt");

// read.pipe(write)

// !  Buffer

const buffer = Buffer.from("Hii this is Parvathi");

console.log(buffer);;
console.log(buffer.toString());;
console.log(buffer.length);


