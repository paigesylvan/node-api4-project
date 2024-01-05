const express = require('express');

const server = express();


server.use(express.json());

server.get('/about', (req, res) => {
    res.json('This is the about page.')
})



const port = process.env.PORT || 9000

server.listen(port, () => {
    console.log(`port ${port} is working correctly`)
});