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

function getSubject(subjectNumber){
    const position = +subjectNumber -1
    return subjects[position]

}

 function convertHoursToMinutes(Time){
        const [hour,minutes] = time.split(":")
        return Number()(hour * 60) + minutes    
    }

module.exports ={
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}