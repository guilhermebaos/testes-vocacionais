// Constants
const rawAnswers = document.getElementById('raw-answers')
const submitRawAnswers = document.getElementById('submit-raw-answers')


function answersByStudent(answersString='') {
    return answersString.split('\n')
}

function separateAnswers(answersArr=[]) {
    answersArr.shift()
    answersArr.forEach((string, index) => { 
        answersArr[index] = string.split('"').filter(answer => {
            if (answer.length > 0) {
                if (answer[0] != ',') {
                    return answer
                }
            }
        })
    })
    answersArr = answersArr
    return answersArr
}

function analyse() {
    let answersString = rawAnswers.value
    let answersArr = answersByStudent(answersString)
    answersArr = separateAnswers(answersArr)
    console.log(answersArr[0])
}

submitRawAnswers.addEventListener('click', analyse)
