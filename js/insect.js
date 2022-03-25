var Incect = class {
    constructor(name) {
        this.name = name;
    }
    increment(args) {
        return args.repeat(10);
    }
}

debugger;

var ant = new Incect('Ants');
var args = '🐜';
var action = ant.increment(args);
console.log(ant.name, action);
