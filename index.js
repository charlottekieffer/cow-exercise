const userInfo = require('./information');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello my name is ${userInfo.name}, I'm from ${userInfo.campus}`,
    e : "-O",
    T : "U "
}));