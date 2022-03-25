// Type
let greeting = 'Hello World';
let num = 9;
let a = 1;
let b = 2;
let bool = (a < b);

console.log(greeting, typeof(greeting));
console.log(num, typeof(num));
console.log(bool, typeof(bool));
console.log('---');

// Array
// var arr = new Array(3);
// var arr = new Array('Emma', 'Olivia', 'Ava');
var arr = ['Emma', 'Olivia', 'Ava'];

arr[0] = 'Emma';
arr[1] = 'Olivia';
arr[2] = 'Ava';
arr[2] = 'Isabella';

console.log(arr, typeof(arr));
console.log(arr[0], typeof(arr[0]));
console.log(arr[1], typeof(arr[1]));
console.log(arr[2], typeof(arr[2]));
console.log('---');

// If
let age = 40;

if(age >= 10 && age < 20) {
    console.log('10th');
} else if(age >= 20 && age < 30) {
    console.log('20th');
} else if(age >= 30 && age < 40) {
    console.log('30th');
} else {
    console.log('Other');
}
console.log('---');

// For
for(let i = 0; i <= 4; i++) {
    console.log(i, typeof(i));
}
console.log('---');

// Break
for(let i = 0; i <= 4; i++) {
    if(i == 3) {
        break;
    }
    console.log(i, typeof(i));
}
console.log('---');

// Continue
for(let i = 0; i <= 4; i++) {
    if(i == 3) {
        continue;
    }
    console.log(i, typeof(i));
}
console.log('---');

// For with Array
let arryNum = [2, 4, 6, 8, 10];

for(let i = 0; i <= 4; i++) {
    console.log(arryNum[i]);
}
console.log('---');

// ForEach
let arryNum2 = [2, 4, 6, 8, 10];

arryNum2.forEach(elem => console.log(elem));
console.log('---');

// For
let i = 0;

for(let i = 1; i <= 10; i++) {
    if(i === 3) {
        continue;
    } else if(i === 7) {
        break;
    } else {
        console.log(i);
    }
}
console.log('---');

// Function
function sayHello(args) {
    console.log(args);
};

sayHello('Hello World');

var hello = function() {
    console.log('Hello');
};

hello();

var cal = function(x, y) {
    console.log(x ** y)
};

cal(9, 9)

var cal2 = function(x, y) {
    return x ** y;
};

var result = cal2(10, 10);
console.log(result);

var cal3 = function(x, y, z) {
    return x + y + z;
};

var result2 = cal3(1, 2, 3)
console.log(result2);

console.log('---');

// class Student {
//     constructor(name) {
//         this.name = name;
//     }
//     avg(math, eng) {
//         console.log((math + eng) / 2);
//     }
// }

// var a001 = new Student('Emma');
// a001.avg(80, 70);
// console.log(a001.name);

// var a002 = new Student('Olivia');
// a002.avg(80, 75);
// console.log(a002.name);

// var Student = class {
//     constructor(name) {
//         this.name = name;
//     }
//     avg(math, eng) {
//         console.log((math + eng) / 2);
//     }
// };

// var a001 = new Student('Emma');
// a001.avg(80, 70);
// console.log(a001);

var Student = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    cal_avg(data) {
        var sum = 0;
        for(var i = 0; i < data.length; i++) {
            sum += data[i];
        }
        var avg = sum / data.length;
        return avg;
    }
    judge(avg) {
        var result;
        if(60 <= avg) {
            result = 'Passed';
        } else {
            result = 'Failed';
        }
        return result;
    }
}

var a001 = new Student('Emma', 25);
var data = [70, 65, 50, 90, 30];
var avg = a001.cal_avg(data);
var result = a001.judge(avg);

console.log(a001.name, a001.age, data.length, avg, result);

console.log('---');
