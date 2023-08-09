//Unit Tests
//1. A function called "multiplication" that returns the product of the two input numbers.

//expects multiplication(5, 4) t0 be equal to 20
//expects multiplication(5, 'a') to be an error
//expects multiplication(5, 8) to be a number


//2. A function called "concatOdds" takes two arrays of integers as arguments.
// It should return a single array that only contains the odd numbers, in ascending order,
//from both of the arrays.

//expects concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be [-1, 1, 3, 9, 15]
//expects concatOdds([-1, 1, 3, 9, 15]['tacos', chicken', 7, 4]) to be an error

//Functional Tests
//1. A shopping cart checkout feature that allows a user to check out as a guest
//(without an account), or as a logged-in user. They should be allowed to do either,
// but should be asked if they want to create an account or log in if they check out as a guest.

//When a user inputs the correct login and password it should log them into their account
//when a user inputs the correct login and incorect password it should prompt the user for the correct password
//when a user inputs the wrong password too many times it should prompt the user if they want to change their password
//when a user is in check out it should check if the user is logged into their account
//when a user is in check out and if the user did not log in to an account it should prompt the user to continue as guest or log into account