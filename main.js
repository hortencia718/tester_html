// document.getElementById("counter-el").innerText =5

// let count = 0

//  count =count + 1
// let myAge = 49
// let humanDogRatio =7
// let myDogAge = myAge * humanDogRatio
// console.log(count)

// create a counter as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count


let countEl = document.getElementById("counter-el") //pass an arguments
console.log(countEl) //works

  let count = 0

function increment(){
    count = count + 1
    countEl.innerText = count
    // console.log("count");
}

let saveEL = document.getElementById("save-btn") //pass an argument
console.log(saveEL)


function save(){
console.log(count)
}
save()

// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
// }
// countdown()

// function fortyTwo(){
//     console.log(42)
// }
// fortyTwo()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function totalLaps(){
// //   let  sum = lap1 + lap2 +lap3
//     // console.log(sum)
//     console.log(lap1+ lap2 +lap3)

// }
// totalLaps()

// let lapsCompleted = 0
// // create a function that increments the laps completed variable with one
//  function lapsDone(){
//    lapsCompleted = lapsCompleted + 1
 
//  }
//  lapsDone()
//  lapsDone()
//  lapsDone()
//  console.log( lapsCompleted)

// steps to getting the count 
// create the count starting at 0
// listen for clicks on the increment add event listener
// increment the count variable when the button is clicked
// change the count-el in the html to reflect the new count

