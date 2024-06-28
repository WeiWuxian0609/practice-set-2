// guessing game//
const maxChoice = prompt("Enter the Max number you want: ")
const random = Math.floor(Math.random()*maxChoice) + 1
let guess = prompt("Guess the number,")
while(true){
    if (guess == "quit"){
        alert("You are quitting the game!")
        console.log("Try again after sometimes! All the best for your next session!!!")
        break
    }  if(guess == random){
        alert("Congratulations!! You're successful in guessing!!!")
        console.log(`Congrats, the random number was ${random}`)
        break
    } else if(guess < random){
        guess = prompt("Hint: Your guess is too small!! Try again,")
    } else{
        guess = prompt("Hint: Your guess is too long!!!! Try again,")
    }
}