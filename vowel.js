function countv(str)
{
    const vow=["a","e","i","o","u"]
    const x = str.toLowerCase()
    let count=0;
    for(let c of x)
    {
        if(vow.includes(c))
        {
            count++;
        }
    }
    return count;
}

console.log(countv("Aeioiedraeiou"));