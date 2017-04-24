/**
 * Created by tseian on 11/03/2017.
 * 函数模仿块级作用域
 */

/**
 * 因为js没有块级作用域  所以在这个函数中，
 * 所以声明的变量都会置顶，所以这里可以alert(i)
 */
function fun1() {
    for (var i = 0; i <= 4; i++) {
        console.log(i);
    }
    console.log(i);
}


/**
 * 使用匿名函数对模仿块级作用域
 * 因为用js是函数级作用域，所以定义一个匿名且立即调用的
 * 函数相当于在函数中有了一个块级作用域
 */
function fun2() {
    (function () {
        for (var i = 0; i <= 4; i++) {
            console.log(i);
        }
    })();
    // console.log(i);//报错
}


/**
 * 同一函数中有两个同名的命名变量，
 * 函数会对后一个声明的变量视而不见
 */
function fun3() {
    for (var i = 0; i <= 4; i++) {
        console.log(i);
    }
    var i;
    console.log(i);
}







