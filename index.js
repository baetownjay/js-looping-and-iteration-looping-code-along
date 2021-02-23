// Code your solutions in this file
function changeDiv(text){
    const locationoo = document.querySelector("body")
    locationoo.innerText = text
}
  
function writeCards(arrayOfNames, event){
    let array10 = []
    for (let i = 0; i < arrayOfNames.length; i++){
        array10.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${event} gift!`)
    } return array10
}
function countDown(positiveInt){
    while (positiveInt >= 0){
        console.log(positiveInt)
        positiveInt -=1
    }
}
// let arr1 = ['Jason', "Astrid", 'Xhiloh', "Bane"]

// changeDiv(writeCards(arr1, "birthday"));
// debugger

