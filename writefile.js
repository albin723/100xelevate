const fs = require("fs");

console.log("start");

function writingfile(filename)
{
    return new Promise((resolve,reject)=>{
        fs.writeFile(filename, "hellohowareyou",(err)=>{
            if(err)
            {
                reject(err);
            }
            else{
                resolve("written successfully");
            }
        })
    })
}
function E(err)
{
    console.log("error is:",err);
}
function callback(data)
{
    console.log(data);
}
writingfile("output.txt").then(callback).catch(E);
console.log("bye");