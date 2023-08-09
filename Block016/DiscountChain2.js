//Define Customer refills and costs
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
};

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
};

// Calculates the total refill cost
// Return cost by multiplying refills by refill amount
function calculateRefillCost(customer) {
    const refillCost = customer.pricePerRefill * customer.refills;
    return refillCost;
}

// Calculates the subscription discount
// Subtract Refillcost by subscription
function calculateSubscriptionDiscount(refillCost, customer) {
    if (customer.subscription) {
        const discount = refillCost * 0.25;
        return discount;
    } else {
        return 0;
    }
}

// Calculates the coupon discount
// Subtract coupon code from both subscription and total cost
function calculateCouponDiscount(subscriptionDiscount, customer) {
    if (customer.coupon) {
        const discount = 10;
        return discount;
    } else {
        return 0;
    }
}

// Calculates the final amount including discounts
// Calculate final amount by subtracting refill cost by subscription cost by coupon cost.
function calculateFinalAmount(refillCost, subscriptionDiscount, couponDiscount) {
    const finalAmount = refillCost - subscriptionDiscount - couponDiscount;
    return finalAmount;
}

// Testing the functions with the three customer objects
// Define Customers refill cost
// Define Subscription discount
// Define Coupon discount
// Calculate Refill cost minus subscribe code minus coupon code.
function calculateRefillCost(customer) {
    let refillCost = customer.pricePerRefill * customer.refills;
    let subScriptionDiscount = 0;
    let couponDiscount = 0;
    if (customer.subscription) {
        subScriptionDiscount = refillCost * 0.25;
    }
    if (customer.coupon) {
        couponDiscount = 10;
    }
    return refillCost - subScriptionDiscount - couponDiscount;
}

// Testing the functions with the three customer objects
console.log("Timmy = > \"Your grand total is $" + calculateRefillCost(timmy) + "\"");
console.log("Sarah = > \"Your grand total is $" + calculateRefillCost(sarah) + "\"");
console.log("Rocky = > \"Your grand total is $" + calculateRefillCost(rocky) + "\""); 