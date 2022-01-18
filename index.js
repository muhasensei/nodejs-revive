const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    const fileExtension = path.extname(filePath);
    if (!fileExtension) {
        filePath += '.html';
    }
    let contentType = 'text/html';
    switch (fileExtension) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        default:
            break;
    }

    fs.readFile(filePath, 'utf-8', (error, content) => {
        if (error) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), 'utf-8', (error, content) => {
                if (error) {
                    res.writeHead(500, {
                        'Content-Type': contentType,
                    });
                    res.end('Error');
                } else {
                    res.writeHead(200, {
                        'Content-Type': contentType,
                    });
                    res.end(content);
                }
            });
        } else {
            res.writeHead(200, {
                'Content-Type': contentType,
            });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log('Server launched on port:', PORT);
});