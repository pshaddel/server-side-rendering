const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const app = express();
const path = require('path');
const fs = require('fs');
const fsPromises = fs.promises;
// const { StaticRouter } = require('react-router-dom');
const StaticRouter = require('react-router-dom/server').StaticRouter;
const App = require('../src/App').default;

app.get('/', async (req, res) => {
    const filePath = path.resolve(__dirname, '..', 'build', 'index.html');
    const content = await fsPromises.readFile(filePath);
    const html = ReactDOMServer.renderToString(
        <StaticRouter location={req.url}>
            <App />
            {/* <p></p> */}
        </StaticRouter>
    );
    console.log(html.toString());
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
});