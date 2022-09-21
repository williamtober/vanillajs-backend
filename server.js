const https = require('https');
// might not need fs but just for fun lets put it here.
const fs = require('fs');

const server = https.createServer((req, res) => {

    // get the request method and forward it to the appropriate function
    const method = req.method.toLowerCase();
    
    switch(method) {
        case 'get': {
            // handle get request
            break;
        } case 'post': {
            // handle post request
            break;
        } case 'put': {
            // handle put request
            break;
        } case 'delete': {
            // handle delete request
            break;
        } default: {
            // handle unknown request
            break;
        }
    }
    
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});

// processes get requets
const get = (req) => {
    switch(req.url) {
        case '/': {
            return { head : { 'Content-Type': 'text/html' }, body: '<h1>Hello World!</h1>' };
        }
    }
    return req.method === 'GET';
}

// process post requests
const post = (req) => {
    return req.method === 'POST';
}

// process put requests
const PUT = (req) => {
    return req.method === 'PUT';
}

// process delete requests
const del = (req) => {
    return req.method === 'DELETE';
}
