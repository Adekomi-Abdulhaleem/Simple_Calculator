//////////////////////////////////////////
// get all values first

// numbers first
const numberOne = document.getElementById('number-one')
const numberTwo = document.getElementById('number-two')
const numberThree = document.getElementById('number-three')
const numberFour = document.getElementById('number-four')
const numberFive = document.getElementById('number-five')
const numberSix = document.getElementById('number-six')
const numberSeven = document.getElementById('number-seven')
const numberEight = document.getElementById('number-eight')
const numberNine = document.getElementById('number-nine')
const numberTen = document.getElementById('number-one')

// extra numbers
const dot = document.getElementById('dot')
const numberTenZero = document.getElementById('number-ten-zero')
const numberHundredZero = document.getElementById('number-hundred-zero')
const numberThousandZero = document.getElementById('number-thousand-zero')

// operators
const addValue = document.getElementById('add-value')
const substractValue = document.getElementById('substract-value')
const multiplyValue = document.getElementById('multiply-value')
const divideValue = document.getElementById('divide-value')

// the makeItWorks
const getAnswer = document.getElementById('get-answer')
const cancelLastValue = document.getElementById('cancel-last-value')
const clearAllValue = document.getElementById('clear-all-value')
var answerDisplaySection = document.getElementById('answer-display-section')

//////////////////////////////////////////



//////////////////////////////////////////
// defining each button's function

// all numbers 
numberOne.addEventListener('click', () => {
    answerDisplaySection.value += numberOne.value
    // checkImage()
})
numberTwo.addEventListener('click', () => {
    answerDisplaySection.value += numberTwo.value
})
numberThree.addEventListener('click', () => {
    answerDisplaySection.value += numberThree.value
})
numberFour.addEventListener('click', () => {
    answerDisplaySection.value += numberFour.value
})
numberFive.addEventListener('click', () => {
    answerDisplaySection.value += numberFive.value
})
numberSix.addEventListener('click', () => {
    answerDisplaySection.value += numberSix.value
})
numberSeven.addEventListener('click', () => {
    answerDisplaySection.value += numberSeven.value
})
numberEight.addEventListener('click', () => {
    answerDisplaySection.value += numberEight.value
})
numberNine.addEventListener('click', () => {
    answerDisplaySection.value += numberNine.value
})

// others numbers 

dot.addEventListener('click', () => {
    answerDisplaySection.value += dot.value
})
numberTenZero.addEventListener('click', () => {
    answerDisplaySection.value += numberTenZero.value
})
numberHundredZero.addEventListener('click', () => {
    answerDisplaySection.value += numberHundredZero.value
})
numberThousandZero.addEventListener('click', () => {
    answerDisplaySection.value += numberThousandZero.value
})

// operators

addValue.addEventListener('click', () => {
    answerDisplaySection.value += addValue.value
})
substractValue.addEventListener('click', () => {
    answerDisplaySection.value += substractValue.value
})
multiplyValue.addEventListener('click', () => {
    answerDisplaySection.value += multiplyValue.value
})
divideValue.addEventListener('click', () => {
    answerDisplaySection.value += divideValue.value
})

// makeItWorks

getAnswer.addEventListener('click', () => {
    answerDisplaySection.value = eval(answerDisplaySection.value)
})
cancelLastValue.addEventListener('click', () => {
    answerDisplaySection.value = answerDisplaySection.value.substr(0, answerDisplaySection.value.length - 1)
})
clearAllValue.addEventListener('click', () => {
    answerDisplaySection.value = ''
})
//////////////////////////////////////////




//////////////////////////////////////////
// Image changer
var input = document.querySelectorAll('input')
input.forEach( item => {
    item.addEventListener('click', event => {
        checkImage()
    })
})

var image = document.querySelector('.image-show img')
let active = false 
function checkImage() {
    if (answerDisplaySection.value == '') {
        image.src = '../Simple_Calculator/oju-close-removebg-preview.png'
    }
    else {
        image.src = '../Simple_Calculator/ojuopened-removebg-preview.png'    
    }
}
//////////////////////////////////////////