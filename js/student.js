export default class Student {
    constructor(answers, ANSWERS_SUM) {
        this.name = capitalize(answers[2])

        let delta = 4
        for(let key in ANSWERS_SUM) {
            let total = 0
            for(let index in ANSWERS_SUM[key]) {
                index = ANSWERS_SUM[key][index]
                total += Number(answers[Number(index) + delta])
            }
            this[key] = total
        }
    }
}

function capitalize(string='') {
    if (string.length <= 2) return
    
    let stringArr = string.split(' ')
    stringArr = stringArr.map(e => {
        if (e.length <= 2) return ''
        return e[0].toUpperCase() + e.slice(1).toLowerCase()
    })
    return stringArr.reduce((prevString, string) => {
        return prevString + ' ' + string
    })
}