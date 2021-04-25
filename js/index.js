// Constants
const rawAnswers = document.getElementById('raw-answers')   // Textarea
const submitRawAnswers = document.getElementById('submit-raw-answers')  // Submit Button


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
    console.log(answersArr[0])
}

submitRawAnswers.addEventListener('click', analyse)
