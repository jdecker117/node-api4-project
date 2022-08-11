require('dotenv').config();

const server = require('./server');

const PORT = process.env.PORT || 9010;

server.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`)
})

console.log('test');