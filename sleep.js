console.log("start");
function sleeep(secs)
{
    return new Promise((resolve)=>{    
        let start = Date.now();
        while(Date.now() - start < secs*1000);
        resolve();
    })

}

sleeep(5).then(()=>{
    console.log("Done");
});
console.log("end");