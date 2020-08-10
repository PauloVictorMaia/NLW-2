
const { 
    subjects,
    weekdays,
    getSubject,convertHoursToMinutes } = require("./utils/format.js")
//servidor

const express = require ("express")
const server = express()


//const timeToMinutes = convertHoursToMinutes(filters.time)

//configurar nunjucks(template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache:true,
})


//configurar arquivos estáticos
server.use(express.static("public"))

if (!filters.subject || !filters.weekday || !filters.time){
    return res.render("study.html",{filters,subjects,weekdays})
}

console.log('não tem campos vazios')

const query  = `
    SELECT CLASSES.*,proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE EXISTS(
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = classes.id
        AND class_schedule.weekday = ${filters.weekday}
        AND classe_schedule.time_from <= ${timeToMinutes}
        AND classe_schedule.time_to > ${timeToMinutes}
    )
        AND classes.subject = '$(filters.subject)'
    `
//caso haja erro na hora da consulta do banco de dados.
//try {
    //const db = await db
    //const proffys = await db.all()
        //return res.render('study.html',{proffys,subjects,filters,weekdays})
//} catch (error) {
    //console.log(error)}
    


//rotas da aplicação
.get("/", (req, res) => {
    return res.render("index.html")
})

.get("/study", (req, res) => {
    const filters = req.query
    return res.render("study.html",{proffys,filters,weekdays,subjects})   
})

.get("/give-classes", (req, res) => {
    return pageGiveClasses(req, res);
})
//start do servidor
.listen(5500)





