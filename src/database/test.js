const Database = require('./db.js')
const createProffy = require ('./createProffy.js')
Database.then(async (db) => {
    //inserir dados 
    proffyValue = {
        name: "Paulo Victor",
        avatar: "https://avatars1.githubusercontent.com/u/67983860?s=460&u=2e1356740a95b29a4550638dfb459557fea09ad1&v=4",
        whatsapp:85981252992,
        bio: "olá chupa charque",
       
    };

    classValue = {
        subject: 1,
        cost: "10",
        //o proffy_id vira pelo banco de dados
    };

    classScheduleValues = [
        //class_id vira pelo banco de dados após cadastrarmos a aula 
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },

        {
            weekday: 2,
            time_from: 720,
            time_to: 1220
        }
    ]

   // await createProffy(db, {proffyValue, classValue, classScheduleValues});


    //consultar os dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM PROFFYS")
    console.log(selectedProffys);

    //consultar as classes de um determinado professor
    //e trazer junto os dados do professor 
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classe.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

        //o horário que a pessoa trabalha, por exemplo, é das 8 as 18h
        //o horário do time_from  é 8h precisar ser menor ou igual ao solicitado.
        //time to precisa ser acima do solicitado

        const selectClassesSchedules =  await db.all(`
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = 1
            AND class_schedule.weekday = "0"
            AND class_schedule.time_from <= "1300"
            AND class_schedule.time_to > "1300"
        `)

        

})