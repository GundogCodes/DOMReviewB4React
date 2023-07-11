//Constants
document.getElementById('incrementAmount').defaultValue = 0
//Cached Variables
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')

//State Variables
let count = document.getElementById('count')
let incrementVal = document.getElementById('incrementAmount')
//Event Listeners
plus.addEventListener('click', handlePlusClick)
minus.addEventListener('click', handleMinusClick)
//Functions
function handlePlusClick(){
    let addingAmount = parseInt(incrementVal.value)
    let currentCount = parseInt(count.innerText)
    console.log(currentCount)
    currentCount = currentCount+ addingAmount
    if(currentCount<0){
        count.style.color = 'red'
    } else if(currentCount>0){
        count.style.color ='white' 
    }
    count.innerText = currentCount
}

function handleMinusClick(){
    let minusAmount = parseInt(incrementVal.value)
    let currentCount = parseInt(count.innerText)
    console.log(currentCount)
    currentCount = currentCount- minusAmount
    if(currentCount<0){
        count.style.color = 'red'
    } else if(currentCount>0){
        count.style.color ='white' 
    }
    count.innerText = currentCount
}