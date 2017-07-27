const fs = require('fs');

fs.mkdir('junk', (err) => {
    if (err) {
        console.log('Error..' + err.message);
        return;
    }
    fs.readFile('./package.json', (err, data) => {
        if (err) {
            console.log('Error..' + err.message);
            return;
        }
        fs.writeFile('./junk/package.json', data.toString());
    })
})

fs.unlink('./junk/package.json', (err) => {
    if (err) {
        console.log('Error..' + err.message);
        return;
    }
    console.log('File Removed Successfully');
    fs.rmdir('junk', (err) => {
        if (err) {
            console.log('Error..' + err.message);
            return;
        }
        console.log('Junk DIR Removed Successfully');
    })
})