const fs= require("fs").promises;


async function cleanfile(filename)
{
    try
    {
        let data= await fs.readFile(filename, "utf-8");
        let cleand=data.replace(/\s+/g,"");
        await fs.writeFile(filename, cleand);
    }
    catch(err)
    {
        console.log(err)
    }
}
cleanfile("input.txt");