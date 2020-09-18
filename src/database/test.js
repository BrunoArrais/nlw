const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async(db) => {
    //inserir dados

    proffyValue = {
        name:"Diego Fernandes",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
        whatsapp:"999999999",
        bio:"Entusiasta das melhores tecnologias de quimica avançada.br<br><br>Apaixonado por explodir coisas em laboratorios e por mudar a vida das pessoas através de experiência. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
    }
    
    classValue = {
        subject: 1,
        cost:"20",
        //o proffy id vira pelo banco de dados.
    }
    
    classScheduleValues = [
        //class_id vira pelo banco de dados apos cadatrarmos a classe
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }

    ]

    // await createProffy(db,{proffyValue, classValue, classScheduleValues})
    
    //consulta os dados inseridos

    //TODOS OS PROFFYS
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // consultar as classes de um determinado professor
    // e trazer junto os dados do professor

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    // o horario que a pessoa trabalha, por exemplo, é das 8h - 18h
    // o horario do time_from(8h) precisa ser antes ou igual ao horario solicitado
    // o time_to precisa acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"  
    `)
    console.log(selectClassesSchedules)
})