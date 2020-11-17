import * as fs from 'fs';
class Test1 {
    private age: number;
    private data: string;
    private isRead: boolean = false;
    constructor(age: number) {
        this.age = age;
    }
    getAge() {
        return this.age;
    }
    readFile() {
        let f = this.readFileCallback.bind(this);
        fs.readFile('index.js', f);
    }
    showFile() {
        if (this.isRead) {
            console.log("data=" + this.data);
        } else {
            console.log('Nothing to read');
        }
    }
    readFileCallback(err: any, data: any) {
        if (err) console.log(err)
        else {
            this.isRead = true;
            this.data = data.toString();
            console.log("Read successful");
        }
    }
}

let test: Test1 = new Test1(50);
console.log(test.getAge());
setTimeout(() => test.showFile(), 5000);
test.readFile();
// test.showFile()
