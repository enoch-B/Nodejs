 const fs = require('fs')
function person(name,callfn){
    console.log(`Hello ${name}`);
    callfn();
}

function address(){
    console.log('How are you');

}
person('Henok Birhanu', address)


//callback hell 

fs.readFile('input.txt','utf8',(err,data)=>{
    if(err){
        console.error('Error reading file',err)
        return 
    }
     console.log(data)
})