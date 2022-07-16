const clog = (data) => {
    console.log(data);
    return;
}

// const http = require('http')

// const HOSTNAME = process.env.HOSTNAME || 'localhost';
// const PORT = process.env.PORT || 3000;

// const server = http.createServer((request, response) => {
//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'text/plain');
//     response.end('hello pawan');
// });

// server.listen(PORT, HOSTNAME, () => {
//     console.log(`server is running at http://${HOSTNAME}:${PORT}/`);
// })

// console.log(__dirname);
// console.log(__filename);

// const fs = require('fs')

// fs.readFileSync('text.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.err(err);
//         return;
//     }
//     console.log(data);
// })

// console.log('log from outside') //this line will be executed first because of aSynchronous nature
//reading file takes time that's why


// const {readFile, readFileSync} = require('fs')

// try {
//     const data = readFileSync('text.txt', 'utf8');
//     console.log(data)
// } catch (err) {
//     console.error(err);
// }

// console.log('log from outside')



// const { writeFile, writeFileSync } = require('fs');

// const newContent = " this is some new content ";

// writeFile('text.txt', newContent, {flag: "a"}, (err) => {
//     if(err) {
//         console.eror(err);
//         return;
//     }
//     console.log('content written')
// })



//synchronously

// const { appendFileSync } = require('fs');

// const newContent = "\nthis is some more new content ";

// try {
//     const write = appendFileSync('text.txt', newContent, {flag: "a"})
//     console.log("content written succesfully!");
// } catch (err) {
//     console.log(err);
// }



//rename

// const { rename } = require('fs');

// rename('text.txt', 'hello.txt', (err) => {
//     if(err) (
//         clog(err)
//     )
//     clog("file has been renamed");
// })




//deletion

// const { unlink } = require('fs');

// unlink('hello.txt', (err) => {
//     if(err) (
//         clog(err)
//     )
//     clog("file has been deleted!");
// })



//--- import Export

// import { add } from './add.js';

// const sum = add(45, 5);
// clog(sum);


const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    let path = './';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        default:
            res.setHeader('Location', '/');
            res.statusCode = 301;
            clog('redirect kr diya gya hai to homepage');
            break;
    }

    fs.readFile(path, (err, data) => {
        if(err) {
            clog(err);
            res.end(data);
        }
        res.end(data);
    })
})

server.listen(PORT, () => {
    clog(`server is listening on PORT  ${PORT}`);
});