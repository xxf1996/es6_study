/*
let 和 const 命令
*/
test6();

/**
 * let与var变量提升的差异
 */
function test1(){
    let c;
    console.log(c); // let定义的变量但没有赋值时，默认值也是undefined
    console.log(a); // var定义的变量存在提升，即先给一个undefined的默认值（没有定义前）
    console.log(b); // let定义的变量不存在提升，即没有定义之前是不存在的
    var a = 1;
    let b = 2;
}

/**
 * let和var定义变量的作用域范围差异；
 * 块级作用域的作用；
 */
function test2(){
    {
        var a = 1; // 块级作用域对于var定义的变量无效（即相当于在该块级作用域外层定义的）
        let b = 2; // let定义的变量只作用于当前作用域（包括块级作用域）及其子作用域
    }// 块级作用域，相当于一个立即执行函数

    console.log(a);
    console.log(b); // 该层作用域相当于上面的块级作用域的父级作用域，因此无法访问到
}

/**
 * 块级作用域的场景，以及块级作用域对var和let的差异
 * @param {number} idx: 执行案例的索引
 */
function test3(idx){
    let fn1 = ()=>{
        if(true){ // if命令大括号内相当于块级作用域
            var a = 1;
            let b = 2;
        }
        console.log(a);
        console.log(b);
    };

    let fn2 = ()=>{
        for(var c = 0; c < 4; c++){ // for的小括号内相当于块级作用域
        
        }
    
        for(let d = 0; d < 4; d++){
    
        }

        console.log(c);
        console.log(d);
    };

    let fn3 = ()=>{
        let i = 0;
        while(i < 2){ // while命令大括号内部也相当于块级作用域
            var a = i++;
        }
        console.log(a);
        i = 0;
        while(i < 2){
            let b = i++;
        }
        console.log(b);
    };

    let fn4 = ()=>{ // 单句语法不能使用let声明变量
        //if(true) let a = 1;
        console.log(a);
    };

    let fn5 = ()=>{
        /*
        for语句的小括号相当于一个块级作用域；
        大括号相当于另一个块级作用域；
        而大括号的块级作用域相当于位于小括号作用域的内部（父子关系）；
        */
        for(let i = 0; i < 2; i+=a){ 
            var a = 1;
        }

        for(let  i = 0; i < 2; i+=b){
            let b = 1;
        }
    };

    let fn6 = ()=>{//对于for语句两层块级作用域的模拟
        {
            let j = 0;
            {
                var b = 1;
            }
            j+=b;
        }

        {
            let i = 0;
            {
                let a = 1;
            }
            i+=a;
        }
    };

    let fn7 = ()=>{// 无论多少层块级作用域对于var声明的变量来说都相当于没有
        {
            {
                {
                    {
                        {
                            {
                                {
                                    {
                                        {
                                            var a = "区区块级作用域怎能困住我big var！";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        console.log(a);
    }

    let fn = {
        1: fn1,
        2: fn2,
        3: fn3,
        4: fn4,
        5: fn5,
        6: fn6,
        7: fn7
    };

    fn[idx]();
}

/**
 * const声明的特点
 * @param {number} idx: 执行案例的索引
 */
function test4(idx){
    /*
    const声明的变量不能改变地址指向，但是可以改变地址所存的内容
    */
    let fn1 = ()=>{
        const a = 123; // 当const声明的变量是基本类型时，改变变量的值就相当于改变地址指向
        a = 0;
    }

    let fn2 = ()=>{
        const b = {
            'name': 'xxf',
            'other': 'ok'
        };

        b.other = "not ok"; // 当const声明的变量是复合类型（如对象）时，改变该对象的属性并不会改变地址指向
        b = {}; // 但是赋值另一个对象时就相当于改变了地址指向！
    }

    let fn = {
        1: fn1,
        2: fn2
    };

    fn[idx]();
}

/**
 * let不能在同一作用域内重复声明同一个变量！（const也一样）
 * 而var可以
 */
function test5(){
    var b = 1;
    var b = 'xiu';
    console.log(b);
    let a = 1;
    let a = 'zuosi';
}

/**
 * let在块级作用域内声明变量时，变量会绑定到该层作用域；
 * 然后不受其他作用域的影响；
 * 即使外层（父级）作用域存在变量名相同的变量，在这层作用域内相当于没有该变量名的变量；
 * 所以未遇到let声明之前，该变量无法被访问！
 */
function test6(){
    let a = 123;
    console.log(a);
    { // 暂时性死区（temporal dead zone）
        a = 'zuosi';
        let a;
    }
}