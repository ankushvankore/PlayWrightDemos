

//It is required for handling multiple window / tabs

/*
State:
resolve - promise fulfill -- handle using then()
reject -  promise rejected -- handle using catch()
*/

let myPromise = new Promise((resolve, reject)=>{
    console.log("Promise started...");
    let status = false ;
    if(status){
        resolve("Promise resolved");
    }
    else{
        reject("Promise reject")
    }
})

myPromise.then((result)=>{
    console.log(result );
}).catch((error)=>{
    console.log(error);    
})

console.log("-------------- Only Resolved Promise --------------");


let myPromise2 = new Promise((resolve, reject)=>{
    resolve("Second Promise resolved")
})

myPromise2.then((res)=>{
    console.log(res);
})

console.log("-------------- Only Rejected Promise ---------------");

let myPromise3 = new Promise((resolve, reject)=>{
    reject("Third promise is rejected");
})

myPromise3.catch((err)=>{
    console.log(err);    
})

console.log("------------- Promise.all()-----------");
let p1 = new Promise((resolve, reject)=>{
    resolve("p1-> Resolved!!!");
})

let p2 = new Promise((resolve, reject)=>{
    resolve("p2 -> Resolved!!!");
})

let p3 = new Promise((resolve, reject)=>{
    //resolve("P3 -> Resolved!!!");
    reject("p3 -> Rejected!!!")
})

Promise.all([p1, p2, p3]).then((res)=>{
    console.log(res);    
}).catch((err)=>{
    console.log(err);    
})

console.log("----------- Promise.race() -----------");
let p4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("p4-> Resolved!!!");
    }, 2000)
})

let p5 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("p5-> Resolved!!!");
    }, 3000)
})

let p6 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve("p6-> Resolved!!!");
        reject("p6->Rejected")
    }, 1000)
})

Promise.race([p4, p5, p6]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);    
})