const http = require('http');

const state = {
    // global state
    time : null,
    err : {
        get : {
            // exmaple
            // "/notrealpath" :  { code: 404, message: 'Not Found', timestamp : new Date()},
        }, 
        post : {

        },
        put : {

        },
        del : {

        }
    },

    // state functions
    // RHTML = RESPOND HTML
    rhtml : (res, body) => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(body);
    }

}


const server = http.createServer((req, res) => {

    // get the request method and forward it to the appropriate function
    const method = req.method.toLowerCase();

    switch(method) {
        case 'get': {
            // handle get request
            get(req ,res);
                
            
            
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
        console.log(`Server is listening on port 3000.  [${state.time.toLocaleTimeString()}]\n `);
        console.log(`ERRORS \n    GET`);
        Object.keys(state.err.get).forEach((key) => {
            console.log(`        ${key} : ${state.err.get[key].code} ${state.err.get[key].message} [${state.err.get[key].timestamp.toLocaleTimeString()}]`);
        });


        
    }, 1000);
});

// processes get requets
const get = async (req, res) => {
    switch(req.url) {
        case '/': {
            state.rhtml(res, '<html><body><h1>Hello World</h1></body></html>');
            break;
        } default : {
            state.err.get = {...state.err.get, [req.url] : { code: 404, message: 'Not Found', timestamp : new Date()}};
            state.rhtml(res, '<html><body><h1>Not Found</h1></body></html>');
            break;
        }
    }
}



// process post requests
const post = (req) => {
    return req.method === 'POST'
}

// process put requests
const PUT = (req) => {
    return req.method === 'PUT'
}

// process delete requests
const del = (req) => {
    return req.method === 'DELETE'
}
