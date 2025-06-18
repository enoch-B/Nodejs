function delayFn(time){
 return new Promise((resolve)=>setTimeout(resolve,time))
} 

   console.log("Promise created, but not resolved yet");
 delayFn(1000).then(()=>{
    console.log("1 second later promise resolved")
});
console.log("end")


function dividefn(a,b){
    return new Promise((resolve,reject)=>{
        if(b===0){
            reject("Cannot divide by zero");
        }else{
            resolve(a/b);
        }
    });
}

dividefn(10,0).then(result=>{result,"res"}).catch(error=>{console.log(error,"err")});