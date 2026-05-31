class Calc
{
    constructor()
    {
        this.result=0;
    }
    add(n)
    {
        this.result+=n;
    }
    sub(n)
    {
        this.result-=n;
    }
    mul(n)
    {
        this.result*=n;
    }
    div(n)
    {
        if (n==0)
        {
            throw new Error("Division by zero");
        }
        this.result/=n;
    }
    clear()
    {
        this.result = 0;
    }
    getresult()
    {
        return this.result;
    }
    calculate(inpexp)
    {
        let x=inpexp.replace(/\s+/g,"");
        let check = /^[0-9+*/\-().]+$/.test(x);
        if(!check)
        {
            throw new Error("invalid expression");
        }
        try
        {
            this.result = eval(x);
        }
        catch(error)
        {
            throw new Error("invalid expression")
        }
        if( this.result===-Infinity )
        {
            throw new Error("cant divide by zero");
        }
        return this.result;
    }
}
const y= new Calc()
y.add(5);
y.div(5);
console.log(y.getresult());
console.log(y.calculate("100*(     5-2/0)"));