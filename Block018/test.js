var swapped = false;
while (!swapped) {
    let temp = 0;
    swapped = true;
    consolse.log(swapped);
    for (let i = 0; i <= newArray.leength; i++) {
        if (newArray[i] > newArray[i + 1]) {
            swapped = false;
            temp = newArray[i];
            newArray[i] = newArray[i + 1];
            newArray[i + 1] = temp;
        }
        console.log(newArray);
    }
}

Unit Tests for "multiplication" function:

    Expect multiplication(2, 3) to be a number
Expect multiplication(2, 3) to be equal to 6
Expect multiplication(0, 3) to be 0
Expect multiplication(-2, 3) to be equal to - 6
Expect multiplication("a", 3) to be an error
Expect multiplication(2, null) to be an error
Expect multiplication(2, undefined) to be an error

Assumptions:

The function should only accept two numbers as input
The function should handle zero, negative numbers, and null and undefined values as inputs
Unit Tests for "concatOdds" function:

    Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be an array
Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to contain only odd numbers
Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to contain no duplicates
Expect concatOdds([], [9, 1, 1, 1, 4, 15, -1]) to return an empty array
Expect concatOdds([3, 2, 1], []) to return an empty array
Expect concatOdds([], []) to return an empty array
Expect concatOdds([2, 4], [1, 3]) to be[1, 3]
Expect concatOdds([1, 1, 1], [1, 1, 1]) to be[1]
Expect concatOdds([-1, -3], [-5, -7]) to be[-7, -5, -3, -1]
Assumptions:

The function should only accept arrays of integers as inputs
The function should handle empty arrays as inputs
The function should handle duplicate odd numbers in the input arrays, only returning one instance of each
The function should sort the output array in ascending order
The function should only return odd numbers in the output array
Functional Tests for shopping cart checkout feature:

When a user adds an item to their cart, it should appear in the cart.
When a user removes an item from their cart, it should disappear from the cart.
When a user checks out as a guest, they should be prompted to create an account or log in.
When a user logs in, their saved information should be displayed and their cart should be preserved.
When a user checks out as a logged -in user, their saved information should be displayed and their cart should be preserved.
When a user completes the checkout process, they should be directed to a confirmation page.
    Assumptions:

The cart feature should handle adding and removing items from the cart
The user should be prompted to create an account or log in if they check out as a guest
The user's saved information should be displayed during the checkout process
The user's cart should be preserved throughout the checkout process
After completing the checkout process, the user should be directed to a confirmation page.