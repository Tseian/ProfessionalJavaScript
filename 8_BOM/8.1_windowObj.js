/**
 * Created by tseian on 11/03/2017.
 * window 对象
 */


/**
 * 定义全局变量和给window定义属性的
 * 区别: 定义window属性可以直接用delete删除
 * 而定义全局变量则不行
 */

// var age = 1;
//
// console.log(this.age);
//
// window.name = 'ian';
//
// console.log(delete window.name); //true
//
// console.log(delete window.age);  //false

/**
 * 直接查询使用未经定义的属性会报错
 * 但是去window对象查询某一未被定义的属性会等于uundefine
 */





// prompt('what is your  name ?', 'Ian');


/**
 *windows location对象
 * 既是window的属性也是document的属性
 */

// console.log(window.location);

/**
 * assign方法调用相当于location.href='http:..'     window.location='http:..'
 */

/**
 *location的属性
 * hash 值
 * search参数
 * port端口
 * hostname
 * protocol 协议
 * 当当前的window.location的属性发生改变  会立即刷新当前页面
 */


/**
 * navigator 对象
 * 浏览器的属性，平台属性等等
 */

// console.log(navigator.appCodeName);
// console.log(navigator.plugins);
// console.log(navigator.appName);
// console.log(navigator.appVersion);
// console.log(navigator.cpuClass);
// console.log(navigator.platform);
// console.log(navigator.cookieEnabled);

/**
 * screen对象
 */





