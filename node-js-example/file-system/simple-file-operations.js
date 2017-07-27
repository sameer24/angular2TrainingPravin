const fs = require('fs');

console.log('Asynchronous File Reading Started');

fs.readFile('package.json', (err, data) => {
    if (err) {
        console.log('Error : ' + err.message);
        return;
    }
    console.log(data.toString());
    fs.writeFile(`async-package.json`, data.toString(), () => {
        if (err) {
            console.log('Error : ' + err.message);
            return;
        }
    })
})

console.log('Asynchronous File Reading Finished');

console.log('Try to read file Synchronously');

let contents = fs.readFileSync('package.json');
console.log('Sync data'+contents.toString());

fs.writeFileSync('sync-package.json',contents.toString());