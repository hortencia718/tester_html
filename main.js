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

let saveEL = document.getElementById("save-el") 
let countEl = document.getElementById("counter-el") //pass an arguments
let count = 0

console.log(saveEl) //works



function increment() {
    count += 1
    countEl.textContent = count
    // console.log("count");
}

  // let saveEL = document.getElementById("save-el") //pass an argument
  // console.log(saveEL)

  
  function save() {
    let countStr = count + " - "
  

    saveEL.textContent = countStr
    countEl.textContent = 0
    count = 0
    console.log(count)

  }
    // save()

// reset the count of poeple to zero after you save the frist count 






//   let username ="per"
//   let message = "you have three new notifications"

//   let messageToUser = message + ", " + username + "!"
//   console.log(messageToUser)


// let name = "hortencia cisneros"
// let greeting ="hola, my name is "

// let myGreeting = greeting + ", " + name + "!"
// let myGreeting = greeting + name
// console.log(myGreeting)


// let points = 4
// let bonusPoints ="10"
// let bonusPoints = 4+ 10


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

