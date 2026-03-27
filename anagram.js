function isanagram(s1, s2)
{
    if (srt(s1)==srt(s2))
    {
        return true;
    }
    return false;
}
function srt(x)
{
    return x.toLowerCase().split("").sort().join("");
}
console.log(isanagram("Listen","silent"));
