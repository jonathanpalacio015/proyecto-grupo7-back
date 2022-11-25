var Connection = require('tedious').Connection;
var config = {
    server: 'localhost', //actualizar con el servidor
    authentication: {
        type: 'default',
        options: {
            userName: 'luciano2', //usuario de la base de datos
            password: 'hola', // contraseña  de la base de datos
            
        }},
        options: {
            encrypt: false,
            database: 'Convocados', // base de datos
            // port: 1433,
            trustServerCertificate: false
        }
}
        
        var connection = new Connection(config);
        connection.on('connect', function (err) {
            // If no error, then good to proceed.
            if (err) {  
                console.log(err);}  
            ;   
            console.log("Connected");
            executeStatement();
        });

        connection.connect();

        var Request = require('tedious').Request;
        var TYPES = require('tedious').TYPES;

        function executeStatement() {
            request = new Request("SELECT * FROM Jugadores", function (err) {
                if (err) {
                    console.log(err);
                }
            });
var result = [];
request.on('row', function (columns) {
    columns.forEach(function (column) {
        if (column.value === null) {
            console.log('NULL');
        } else {
            result.push(column.value + " ");
        }
    });
    console.log(result);
    //result ="";
});

request.on('done', function (rowCount, more) {
    console.log(rowCount + ' rows returned');
});

// Close the connection after the final event emitted by the request, after the callback passes
request.on("requestCompleted", function (rowCount, more) {
    connection.close();

    const http = require('node:http');

    const hostname = '127.0.0.1';
    const port = 3000;

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader('Content-Type', 'application/json');

        res.end(JSON.stringify({ result }));
    });

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}) 
connection.execSql(request);  
};