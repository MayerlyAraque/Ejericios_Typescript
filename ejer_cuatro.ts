function esPar(numero: number): boolean {
    return numero % 2 === 0;
    }
    
    function esImpar(numero: number): boolean {
    return numero % 2 !== 0;
    }
    
    console.log("el numero 4 es par?",esPar(4)); // true
    console.log("el numero 5 es par?",esPar(5)); // false
    
    