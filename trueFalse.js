// jegula hole condition false hobe:
// 1. 0, zero
// 2. empty string ""
// 3. undefined
// 4. null
// 5. NaN
// 6. false
// jegula hole truth hobe
// 1. "0"
// 2. " "
// 3. []


const name = "0";
let name;

if ( name.length ) {
    console.log("condition is true");
}
else{
    console.log("condition is false")
}