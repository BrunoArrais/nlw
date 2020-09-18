//servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require ('./pages')


//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true, 
})

server
//receber os dados de req.body
.use(express.urlencoded({ extended: true}))
// configurar arquivos estáticos(CSS, scripts, imagens)
.use(express.static("public"))
// rotas de aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)

// instando npm install nodemon -D
// npm install express
// npm install nunjucks

