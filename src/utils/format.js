const subjects = [
    "Biologia",
    "Ciência",
    "Educação fisica",
    "Geografia",
    "Historia",
    "Matematica",
    "Portugues",
    "Química",
    "Física",
    "Artes",
]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
]

function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}

function convertHoursToMinutes(time){
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}