"use strict";
exports.__esModule = true;
var fs = require("fs");
var Test1 = /** @class */ (function () {
    function Test1(age) {
        this.isRead = false;
        this.age = age;
    }
    Test1.prototype.getAge = function () {
        return this.age;
    };
    Test1.prototype.readFile = function () {
        var f = this.readFileCallback.bind(this);
        fs.readFile('index.js', f);
    };
    Test1.prototype.showFile = function () {
        if (this.isRead) {
            console.log("data=" + this.data);
        }
        else {
            console.log('Nothing to read');
        }
    };
    Test1.prototype.readFileCallback = function (err, data) {
        if (err)
            console.log(err);
        else {
            this.isRead = true;
            this.data = data.toString();
            console.log("Read successful");
        }
    };
    return Test1;
}());
var test = new Test1(50);
console.log(test.getAge());
setTimeout(function () { return test.showFile(); }, 5000);
test.readFile();
// test.showFile()
