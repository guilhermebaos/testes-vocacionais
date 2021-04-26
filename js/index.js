import Student from './student.js'


// Test answer constants
const ANSWERS_SUM = {
    'Criatividade': [15, 16, 45],
    'Altruísmo': [2, 30, 31],
    'Estética': [7, 20, 21],
    'Estimulação Intelectual': [1, 23, 38],
    'Êxito': [13, 17, 44],
    'Independência': [5, 21, 40],
    'Prestígio': [6, 28, 33],
    'Direção': [14, 24, 37],
    'Economia': [3, 22, 39],
    'Segurança': [9, 19, 42],
    'Ambiente': [12, 25, 36],
    'Relação com os Superiores': [11, 18, 43],
    'Relação com os Colegas': [8, 27, 34],
    'Variedade': [4, 29, 32],
    'Género de Vida': [10, 26, 35]
}


// HTML Constants
const rawAnswers = document.getElementById('raw-answers')   // Textarea
const submitRawAnswers = document.getElementById('submit-raw-answers')  // Submit Button
const resultsTable = document.getElementById('results')


// Separates the answer by student
function answersByStudent(answersString='') {
    return answersString.split('\n')
}

// Separates every students' answers (into an array of arrays)
const answersRegEx = /(?<="),(?=")/
function getAnswers(answersArr=[]) {
    // For now, we discard the column headers (first row)
    answersArr.shift()

    // Separate the strings into arrays and delete the leading and ending ""
    let separetedAnswers
    answersArr = answersArr.map(string => {
        separetedAnswers = string.split(answersRegEx)
        separetedAnswers = separetedAnswers.map(answer => {
            return answer.slice(1, answer.length - 1)
        })
        return separetedAnswers
    })
    return answersArr
}

// Analyse the results
function analyse() {
    let answersString = rawAnswers.value
    let answersArr = answersByStudent(answersString)

    answersArr = getAnswers(answersArr)
    console.log(answersArr[1])
    let students = answersArr.map(e => new Student(e, ANSWERS_SUM))
    showResults(students)
}


// Column Headers
function tableHeaders() {
    let headerRow = resultsTable.insertRow(0)
    headerRow.innerHTML = `<th>Nome do Aluno</th>`

    let thString = ``
    for(let key in ANSWERS_SUM) {
        thString += `<th>${key}</th>`
    }
    headerRow.innerHTML += thString
}


// Add the students' answers to the table
function addAnswersToTable(nextRow, student) {
    let tdString = `<td>${student.name}</td>`
    for(let key in ANSWERS_SUM) {
        tdString += `<td>${student[key]}</td>`
    }
    nextRow.innerHTML += tdString
}


function showResults(students) {
    console.log(students[1])
    tableHeaders()

    let nextRow, answers
    for(let rowIndex in students) {
        rowIndex = Number(rowIndex)
        
        nextRow = resultsTable.insertRow(rowIndex + 1)
        addAnswersToTable(nextRow, students[rowIndex])
    }
}

submitRawAnswers.addEventListener('click', analyse)
