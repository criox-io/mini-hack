

const {  createServer } = require('./server')



const server = createServer()

const port = 8069

server.listen(port, () => {
    console.log(`listening http://localhost:${port}`)
})