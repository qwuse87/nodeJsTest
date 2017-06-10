var fs = require('fs');

console.log("파일 읽기 프로세스 시작...");

// File System - reaFileSync() 사용
var data = fs.readFileSync('files/user.json');
var json2obj = JSON.parse(data);
console.log('데이터 : ' + json2obj.engname);

console.log("파일 읽기 프로세스 끝.");