
function wait1(t1)
{
    return new Promise((resolve) => {
        setTimeout(resolve, t1*1000);
    })
}
function wait2(t2)
{
    return new Promise((resolve) => {
        setTimeout(resolve, t2*1000);
    })
}
function wait3(t3)
{
    return new Promise((resolve) => {
        setTimeout(resolve, t3*1000);
    })
}


function chainem(t1,t2,t3)
{
    let start =  Date.now();
    return wait1(t1).then(()=>wait2(t2)).then(()=>wait3(t3)).then(()=>
    {
        end=Date.now();
        return end-start;
    })
}
function final(totaltime)
{
    console.log(totaltime);
}
chainem(1,2,5).then(final);