const express = require('express')
const routes = require('./routes/routes')
const app = express()

app.use(express.urlencoded({
    extended: false
}))

// routes.app
app.use(routes)

app.listen(3000, ()=>{
    console.log('servidor funcionando')
})

// module.exports= app