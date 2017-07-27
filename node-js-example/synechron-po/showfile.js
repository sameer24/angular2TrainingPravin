const fs = require('fs');

class ShowFile {
    constructor() { }
    displayFileContent(request,response,filePath) {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                response.write('Error aali aahe re bho');
                response.end();
            }
            response.write(data);
            response.end();
        })
    }
}

module.exports = new ShowFile();