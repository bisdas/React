//age = 25;
//console.log(age);
//let age;


//this does not work, because age is not defined before it is used.
// (function (exports, require, module, __filename, __dirname) { age = 25;
//     ^

// ReferenceError: age is not defined
// at Object.<anonymous> (D:\_Bishnu\JS\index_hoisting.js:1:67)
// at Module._compile (module.js:653:30)
// at Object.Module._extensions..js (module.js:664:10)
// at Module.load (module.js:566:32)
// at tryModuleLoad (module.js:506:12)
// at Function.Module._load (module.js:498:3)
// at Function.Module.runMain (module.js:694:10)
// at startup (bootstrap_node.js:204:16)
// at bootstrap_node.js:625:3



function doSmth(){
    age = 27;
}

let age;
doSmth();
console.log(age);

// this works because let is declared before it is actually used. core thing is: let variables need to be declared before they're used.

