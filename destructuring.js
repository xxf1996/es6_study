/*
变量的解构赋值
*/

test2();

/**
 * 数组解构的例子
 */
function test1(){
    /*
    解构的核心就是相同的『模式』进行一一对应；
    相当于同一层级（看成树的结构，变量树{左边}与值树{右边}）相互对应赋值；
    */
    let [a, b, c] = [1, 2, 3];
    console.log(a, b, c);
    let [d, [e, f]] = [[2, 1], ['ssr', 'sr']];
    console.log(d, e, f);
    let [g, , h] = [9, 8, 7];
    console.log(g, h);

    // ...符号相当于把后面的变量的元素展开成用逗号隔开的字面量（注意不是字符串！！！）
    let [i, ...j] = [1, 2, 9, 9];
    console.log(i, j);
}

/**
 * 可以转化为数组进行解构的例子
 */
function test2(){
    let arr = [2, 3.7, 23, 74];
    let [a, , b] = arr;
    console.log(a, b);
    let [c, d, ...e] = 'string'; // 字符串可以转化成数组进行解构
    console.log(c, d, e);
    let likeArr = {
        0: 1,
        1: 'ok',
        2: 'demo',
        3: 1.902,
        length: 4
    }; // 光是表面像数组还不能被转化成数组

    let [f, ...g] = likeArr;
    console.log(f, g);
}