function sumSalaries(salaries)
{
let sum = 0;
for (let value of Object.values(salaries))
{
sum += value;
}
return sum;
}
//Solution 2
function sumSalaries(salaries)
{
return Object.values(salaries).reduce((a, b) => a + b);
}

let salaries = {
"John": 100,
"Pete": 300,
"Mary": 250
};

console.log( sumSalaries(salaries) );