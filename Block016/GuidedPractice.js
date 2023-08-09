const budget = 50;
const giftPrice1 = 20;
const giftPrice2 = 25;
function calculateTotalCost(giftPrice1, giftPrice2) {
    const salesTaxRate = 0.08;
    const totalCost = (giftPrice1 + giftPrice2) * (1 + salesTaxRate);
    return totalCost;
}

function checkBudget(budget, giftPrice1, giftPrice2) {
    const totalCost = calculateTotalCost(giftPrice1, giftPrice2);
    return totalCost <= budget;
}

console.log(checkBudget(50, 20, 25)); // true
console.log(checkBudget(100, 50, 46)); // false
console.log(checkBudget(500, 230, 230)); // true
console.log(checkBudget(200, 140, 50)); // false



