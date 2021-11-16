function fizzbizz(x) {
    let format= [ ];
    if ( x < 0 ){
        return "Parameter must be a positive number";
    }
    else{
        for ( let i=1; i <=x; i++ ){
            if ( i%5===0 && i%3===0){
                format.push(String("FizzBuzz"))
            }
            else{
                if ( i%5===0){
                    format.push(String("Buzz"))
                }
                else{
                    if ( i%3===0){
                        format.push(String("Fizz"))
                    }
                    else{
                        format.push(String(i))
                    }
                }
            }
        }
        console.log (format);
    }
}

fizzbizz (30);