// module.exports = () => {
//     return 10 + 44
// }

function calculate(a, b){
    console.log('**********************');
    console.log(__dirname );
    console.log(__filename);
    console.log('**********************');
    
    return a + b;
};

let z = 17;

module.exports = {
    calculate,
    z
}