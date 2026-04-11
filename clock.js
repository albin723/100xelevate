function clockstart()
{
    let now= new Date();
    let hours24=now.getHours().toString().padStart(2,"0");
    let mins=now.getMinutes().toString().padStart(2,"0");
    let secs=now.getSeconds().toString().padStart(2,"0");

    console.log(hours24,":",mins,":",secs);
    let hours12 = (hours24 % 12).toString().padStart(2,"0");
    let ampm="am";
    if( hours24 >= 12)
    {
        ampm = "pm";
    }
    
    console.log(hours12,":",mins,":",secs,"  ",ampm);


    setTimeout(clockstart,1000);
    
}


clockstart();