const express = require('express')
const server = express()
const { 
    pageLanding, 
    pageStudy, 
    pageGiveClasses,
    saveClasses
    
} = require('./pages.js')

//configurar nunjucks (Template engine)
const nunjucks = require ('nunjucks')//importar nunjucks
nunjucks.configure('src/views',{
    express: server,
    noCache: true,

})




//inicio das configurações do servidor
server
//receber os dados do req.body
.use(express.urlencoded({extended:true}))
//definindo a pasta public como pasta raiz para arquivos estaticos.
// css, scripts ,imagens

.use(express.static("public"))

//rotas da aplicação
.get("/", pageLanding )

.get("/study", pageStudy )

.get("/give-classes", pageGiveClasses)

.post("/save-classes", saveClasses)
//start do servidor
.listen(5500)