const fs = require("fs");

console.log("start");

function readingfile(filename)
{
    return new Promise((resolve,reject)=>{
        fs.readFile(filename, "utf-8",(err,data)=>{
            if(err)
            {
                reject(err);
            }
            else{
                resolve(data);
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
readingfile("input.txt").then(callback).catch(E);
console.log("bye");