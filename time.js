function timetaken(n)
{
    let sum=0
    const s=performance.now()
    for(let i=1; i<=n; i++)
    {
        sum+=i;
    }
    const e= performance.now()

    const tottime=e-s;
    return tottime;
}

console.log(timetaken(1000));