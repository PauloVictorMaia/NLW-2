//dados

const proffys= [
    
    {name:"Diego Fernandes",
     avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" , 
     whatsapp: "85981252992", 
     Bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões." ,
     subject:"Química",
     cost:"20",
     weekday:[0],
     time_from:[720],
     time_to:[1220]   
    },

    {name:"Paulo Victor",
     avatar:"https://avatars1.githubusercontent.com/u/67983860?s=460&u=2e1356740a95b29a4550638dfb459557fea09ad1&v=4" , 
     whatsapp: "(85) 9 8125-2992", 
     Bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões." ,
     subject:"Química",
     cost:"20",
     weekday:[0],
     time_from:[720],
     time_to:[1220]   
    },

    
]

const subjects=[
    "Artes",
    "Biologia",
    "Ciências",
    "Educação-física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
    

]

const weekdays=[
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// Request || Response
function pageGiveClasses(req,res){
    const data = req.query

    //se tiver dados(data)
    const isNotEmpty = Object.keys(data).length > 0
    
    if(isNotEmpty){

        //adicionar dados a lista de proffys
        proffys.push(data)
        return res.redirect("/study")
    }
    //se não, Mostrar a página
        return res.render("give-classes.html",{subjects,weekdays}) 
}

//servidor

const express = require ("express")
const server = express()


//configurar nunjucks(template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache:true,
})


//configurar arquivos estáticos
server.use(express.static("public"))



//rotas da aplicação
.get("/", (req, res) => {
    return res.render("index.html")
})

.get("/study", (req, res) => {
    const filters = req.query
    return res.render("study.html",{proffys,filters,weekdays})   
})

.get("/give-classes", (req, res) => {
    return pageGiveClasses(req, res);
})
//start do servidor
.listen(5500)





