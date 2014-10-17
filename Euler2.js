var a = 1;
var b = 2;
sum = 0;

// Below: start by adding 2 to "sum" since it's the first even Fibonacci number but
// isn't included in the following loop.
sum += 2;
while (a + b < 4000000)
{
    if ( (a+b) % 2 === 0)
        {
            sum += (a+b);
        }
    c = (a+b);
    a = b;
    b = c;
}

alert(sum);