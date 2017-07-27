const mssql = require('mssql');
const configuration = require('./config')

let getAllcustomers = () => {
    let cn = new mssql.ConnectionPool(configuration)
    let req = new mssql.Request(cn)

    cn.connect((err) => {
        if (err) {
            console.log('Error with connection');
            console.log(err)
            return
        }
        req.query('select * from customers', (err, data) => {
            if (err) {
                console.log('Error with query');
                return
            } else {
                console.log(data);
            }
            cn.close()
        })
    })    
}

getAllcustomers()