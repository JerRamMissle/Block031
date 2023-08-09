const budget = 100;
const price1 = 50;
const price2 = 46;
function sumOfGifts(gift1, gift2) {
    return gift1 + gift2;
}
const giftTotal = sumOfGifts(price1, price2)

function addTax(giftTotal) {
    return giftTotal + (giftTotal * 0.08);
}
const giftsWithTax = addTax(giftTotal);
function holidayShopping(budget, giftsWithTax) {
    return budget > giftsWithTax;
}
console.log(holidayShopping(budget, giftsWithTax));



