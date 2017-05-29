var fs = require('fs');

fs.watchFile('files/style.css', function(cur, prv){
	console.log('파일이 변경되었습니다.');
});