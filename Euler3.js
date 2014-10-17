var greatestPrimeFactor = 0;

var getGreatestPrimeFactor = function (number)
{
    var sqrtNumber = Math.ceil(Math.sqrt(number));
    
    // Biggest possible prime factor of a composite number is its square root;
    // any factor has to have an accompanying factor. 
    // The square root's accompanying factor is itself (if it is indeed a factor), so it's the
    // biggest factor we can come to without having divided out its smaller factor companion earlier.
    // Since we're dividing out factors by
    // counting up with the following function, we will necessarily divide out the smaller
    // of any factor pair (given, for example, 260, it has a factor 2; divide it out and we're left with 130).
    // We continue this recursively and will check the last remaining factor as the base case.
    
    for (var i = 2; i <= sqrtNumber; i++)
    {
        if (((number % i) === 0) && (i > greatestPrimeFactor === true))
        {
           // Below: set the greatest prime factor to whatever i is, and recursively call the function
           // with that factor (i) now divided out of "number". We will have dealt with that factor and no
           // longer need to be concerned with it given the fundamental theorem of arithmetic
           // (each number has a unique prime factorization); all the other prime factors still remain
           // within the quotient of "number" and i (which we use as the argument for the recursive call).
           
           // Also, by starting this loop at 2, counting up and dividing
           // out each factor that is found by using recursive calls,
           // there's no need to use a separate "checkPrime" function. Any factor divided
           // out will necessarily be prime.
           
           greatestPrimeFactor = i;
           return getGreatestPrimeFactor(number / i);
        }
        else if ((number % i) === 0)
        {
            return getGreatestPrimeFactor(number /i);
        }
    }
    
    // Base case: after going through the above loop, we've divided out all of the prime factors
    // and are left with variable "number"'s last prime factor:
    
    if (number > greatestPrimeFactor)
    {
        greatestPrimeFactor = number;
    }
    
    return greatestPrimeFactor;
}

alert(getGreatestPrimeFactor(prompt("Check for greatest prime factor of what number?")));
    