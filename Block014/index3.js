//declare countdown values
//increment countdown by 1 decending
//log your countdown response
const CountDown = [1, -1, 2, -3, 5, -8, 13];
console.log(CountDown.length - 1)
for (let i = CountDown.length - 1; i >= 0; i--) {
    console.log(CountDown[i]);
}