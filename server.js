const https = require('https');

const state = {
    // global state
    time : null,
    error : [
        // exampel of incident
        // { code: 404, message: 'Not Found', timestamp : null, endpoint : null },
    ],

}

const server = https.createServer((req, res) => {

    // get the request method and forward it to the appropriate function
    const method = req.method.toLowerCase();
    
    switch(method) {
        case 'get': {
            // handle get request
            const response = get(req);
            res.writeHead(200, response.head);
            res.end(response.body);

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


server.listen(3000, async () => {

    setInterval(() => {
        state.time = new Date();
        console.clear();
        console.log(`Server is listening on port 3000.  [${state.time.toLocaleTimeString()}]`);
        
    }, 1000);
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
