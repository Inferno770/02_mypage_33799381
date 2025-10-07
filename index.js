var http = require("http");
const port = 8000;

http.createServer(function (req, res) {
    console.log(req);
    res.writeHead(200, { "Content-Type": "text/html" });
    
    res.end(`<!DOCTYPE html>
<html>
<head>
    <title>MyPage</title>
    <meta charset="UTF-8">
</head>
<body>
    <h1>Welcome to My Web Page</h1>
    <h2>About Me</h2>
    <p>Hello, My name is Muhammad Ahmad. Im a student at Goldsmiths University, studying Computer Science.</p>
</body>
</html>`);
}).listen(port, function () {
    console.log(`Node server is running on port ${port}...`);
});
