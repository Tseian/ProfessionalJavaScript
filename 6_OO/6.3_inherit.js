/**
 * Created by tseian on 10/03/2017.
 * 对象继承
 */


function SuperType() {
    this.Superproperty = 'superType';
}


SuperType.prototype.getSuperTypeProperty = function () {
    return this.Superproperty;
};

function SubType() {
    this.Subproperty = 'subType';
}

SubType.prototype = new SuperType();
SubType.prototype.getSubProperty = function () {
    return this.Subproperty;
};

var subtype = new SubType();


//从父对象方法获取父对象的属性值
console.log(subtype.getSuperTypeProperty());

//从对象自己扩展的父对象方法总获取值
console.log(subtype.getSubProperty());

/*
 SupperType   prototype  -> SupperTypePrototype
 SubType   prototype ->SubTypePrototype -> SupperTypePrototype
 subType.prototype ->SubTypePrototype -> SupperTypePrototype
 */


/*
 借用构造含函数
 */

function Supper1() {
    this.colors = ['red', 'blue', 'green'];
}

function Sub1() {
    Supper1.call(this);
    this.favariteColor = 'yellow';
}

/*
 等同于
 function Sub1() {
 this.colors = ['red', 'blue', 'green'];
 this.favariteColor = 'yellow';
 }
 */
