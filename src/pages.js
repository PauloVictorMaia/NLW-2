const Database = require('./database/db')
const { subjects,weekdays, getSubject, convertHoursToMinutes } = require('./utils/format')

function pageLanding(req, res) {
    return res.render("index.html")
}

async function pageStudy(req, res) {
    const filters = req.query
    if(!filters.subject || !filters.weekday || !filters.time) {
        return res.render("study.html", { filters, subjects, weekdays})

    }

    //converter horas em minutos
    const timeToMinutes = convertHoursToMinutes(filters.time)
    
    const query = (`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classe.proffy_id = proffys.id)
    WHERE EXISTS (
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = classes.id
        AND class_schedule.weekday = ${filters.weekday}
        AND class_schedule.time_from <= ${timeToMinutes}
        AND class_schedule.time_to > ${timeToMinutes}
    )
        AND classe.subject = '${filters.subject}'

    `)

    //caso haja erro na consulta do banco de dados

    try {
        const db  = await Database
        const proffys = await db.all(query)

        return res.render('study.html', {proffys, subjects, filters, weekdays})

    } catch (error) {
        console.log(error)
    }
    
}

function pageGiveClasses(req, res) {
    
        
    return res.render("give-classes.html", {subjects, weekdays})
}

async function saveClasses(req,res) {
        const creatyProffy = require ('./database/createProffy')
        
        const proffyValue = {
            name: req.body.name,
            avatar: req.body.avatar,
            whatsapp: req.body.whatsapp,
            bio: req.body.bio
        }

        const classValue = {
            subject: req.body.subject,
            cost: req.body.cost
        }

        const classScheduleValues = req.body.weekday.map((weekday, index) => {
            return {
                weekday,
                time_from: convertHoursToMinutes (req.body.time_from[index]),
                time_to: convertHoursToMinutes (req.body.time_to[index]) 
            }
        })

        try {
            
            const db = await Database
            const proffys = await db.all(query)
            
           proffys.map((proffy) => {
            proffy.subject = getSubject(proffy.subject)
           })

            return res.redirect("/study" + queryString)
        
        
        } catch (error) {
            console.log(error)
        }

       
        
    }

module.exports = { 
    pageLanding, 
    pageStudy, 
    pageGiveClasses,
    saveClasses
};