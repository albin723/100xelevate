const fs=require("fs").promises;

console.log("hi");
async function writingfile(filename)
{
    try{
        await fs.writeFile(filename,"helloyou,,,");
        console.log("byeinside");
        
    }
    catch(err)
    {
        console.log(err);
    }
        
}
writingfile("output.txt");
console.log("byeoutside");