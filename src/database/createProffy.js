module.exports = async function(db, {proffyValue, classeValue, classScheduleValues}){ //asyncfuncion para usar o await na função
    //inserir dados na tabela de proffys
    
   const insertedProffy =  await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUE (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"



        );   
   `) //await serve para que a linha de código seja executada antes de passar para a próxima

   const proffy_id = insertedProffy.lastID

      //inserir dados na tabela classes
      const insertedClass = await db.run(`
            INSERT INTO classes(
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classValues.subject}",
                "${classValues.cost}",
                "${proffy_id}"



            );
      `)

      const class_id = insertedClass.lastID


      //Inserir tabela class_schedule
                const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
                    return db.run(`
                        INSERT INTO class_schedule (
                            class_id,
                            weekday,
                            time_from,
                            time_to
                        ) VALUE (
                            "${class_id},
                            "${classScheduleValue.weekday}",
                            "${classScheduleValue.time_from}",
                            "${classScheduleValues.time_to}"

                        );                   
                        `)
                })

     //aqui vou executar todos os db.runs() das class_schedule
                
                await Promise.all(insertedAllClassScheduleValues)
    
}