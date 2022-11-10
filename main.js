let result = ["yes", "no", "yes", "no", "yes", "no", "maybe"];
let ye = 0;
let no = 0;
let may = 0;
for (let i = 0; i < result.length; i++){
    if (result[i].includes("yes")){
        ye = ye + 1;
    } else if (result[i].includes("no")){
        no = no + 1;
    } else {
        may = may + 1;
    }
} 
let adult = 0;
let child = 0;
 
let age = ["1", "18", "35"];
for (let i = 0; i < age.length; i++){
    if (age[i] >= 18){
        adult = adult + 1 
    } else {
        child = child + 1;
    }
} 
let cost0 = 0;
let cost20 = 0;
let cost50 = 0;
 
 
let prices = ["1", "20", "30", "40", "50"];
for (let i = 0; i < prices.length; i++){
    if (prices[i] < 20){
        cost0 = cost0 + 1;
    } else if (prices[i] >= 20 && prices[i] <= 49){
        cost20 = cost20 + 1;
    } else {
        cost50 = cost50 + 1;
    }
} 
 
function add2(){
    for (let i = 0; i < prices.length; i++){
        prices[i] = prices[i] + 2;
    }
} 
 
function plus5precent(){
    for (let i = 0; i < prices.length; i++){
        prices[i] = prices[i] * 1.05;
    }
} 
 
function minus20percent(){
    for (let i = 0; i < prices.length; i++){
        prices[i] = prices[i] * 0.8;
    }
} 