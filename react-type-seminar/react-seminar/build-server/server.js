"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const fs = require("fs");
const path = require("path");
const express_1 = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const App_1 = require("./App");
const app = express_1.default();
const server = http.createServer(app);
const staticFiles = [
    '/static/*',
    '/asset-manifest.json',
    '/manifest.json',
    '/service-worker.js',
    '/favicon.ico'
];
staticFiles.forEach(file => {
    app.get(file, (req, res) => {
        const filePath = path.join(__dirname, '../build', req.url);
        console.log(filePath);
        res.sendFile(filePath);
    });
});
app.get('*', (req, res) => {
    const html = path.join(__dirname, '../build/index.html');
    const htmlData = fs.readFileSync(html).toString();
    const ReactApp = ReactDOMServer.renderToString(React.createElement(App_1.default));
    console.log(ReactApp);
    const renderedHtml = htmlData.replace('{{SSR}}', ReactApp);
    res.status(200).send(renderedHtml);
});
server.listen(3000);
//# sourceMappingURL=server.js.map