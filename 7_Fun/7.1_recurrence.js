/**
 * Created by tseian on 10/03/2017.
 * js 函数递归
 */

/**
 *正确的递归方式
 */

// function recurrence(num) {
//     if (num <= 1) {
//         return 1;
//     } else {
//         return num * arguments.callee(num - 1);
//     }
// }
//
// console.log(recurrence(3));
//
//
// /**
//  * 错误的递归方式
//  */
//
// function recurrence1(num) {
//     if (num <= 1) {
//         return 1;
//     } else {
//         return num * recurrence1(num - 1);
//     }
// }
// console.log(recurrence1(3));


function result() {
    var results = [];
    for (var i = 0; i < 10; i++) {
        results[i] = (function (i) {
            return i;
        })(i);
    }
    return results;
}
var r = result();
console.log(r);