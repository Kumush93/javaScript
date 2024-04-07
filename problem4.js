const MOD = 10**9 + 7;

function calculateExpression(a, b, c, d) {
    let result = ((a * b) % MOD) * ((c * d) % MOD);
    return result % MOD;
}

let a = 1;
let b = 1;
let c = 1;
let d = 1;

console.log(calculateExpression(a, b, c, d)); 
