const express = require('express')
const app = express()

const morgan = require('morgan')

// VARIABLES
const PORT = process.env.PORT || 3000

const v1UsersRoute = require('./v1/routes/users.js')
const v1PostsRoute = require('./v1/routes/post.js')

// MIDDLEWARES
app.use(express.json())
app.use(morgan('dev'))


//ROUTES
app.use('/api/v1/users', v1UsersRoute)
app.use('/api/v1/posts', v1PostsRoute)

//LISTEN
app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`)
    console.log("Todo esta Bien !!!!")
})

//test 