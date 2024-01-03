const express = require('express')


const userRoute = require('./src/routes/user.route')



const app = express()


app.use('/soma', userRoute)


//ROTA
    // Method Http
        // GET - Pega uma info
        // POST - Cria uma info
        // PUT - Altera toda a info
        // PATH - Altera parte da info
        // DELETE - Apaga uma info
    // Name - Um identificador da rota
    // Function (Callback) - Responsavel por executar algum comando


/*app.get("/soma", (req, res) => {
  
})*/

app.listen(3000)