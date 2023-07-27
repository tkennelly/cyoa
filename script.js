// note: the stuff about not being able to use node in HTML is wrong. ignore the part about HTML and node not working

function start() {
    let name = prompt("What's your name?")
    alert(`Hello ${name}!`)
    let dir = prompt("You're in a room. Exits are to the north, west, and south. Which direction do you go?")
    return dir
}

function firstRoom(x) {
    if (x == "north") {
        alert("You are in a red room")
        return "red"
    } else if (x == "west") {
        alert("You are in a blue room")
        return "blue"
    } else if (x == "south") {
        alert("You are in a yellow room")
        return "yellow"
    } else {
        alert("Choose a valid destination")
        let newDir = prompt("You're in a room. Exits are to the north, west, and south. Which direction do you go?")
        firstRoom(newDir)
    }
}

function redRoom(r) {
    if (r == "fork") {
        let forkChoice = prompt("You have aquired a fork. You suddenly feel hungry. Do you want to eat or pocket the fork? Pick one (eat, pocket).")
        return forkChoice
    } else if (r == "spoon") {
        let spoonChoice = prompt("You have aquired a spoon. You saw in a movie once that spoons could be fashioned into weapons. Turn the spoon into a weapons? Pick one (weapon, keep same).")
        return spoonChoice
    } else if (r == "bucket") {
        alert("The bucket was a mimic. It eats you. YOU DIED")
        playAgain()
    }
}

function blueRoom(b) {
    switch(b) {
        case 'pizza': 
            let pizzaChoice = prompt("You find a slice of pizza. Do you want to eat it? Pick one (yes, no).")
            return pizzaChoice
            break
        case 'glowstick': 
            let glowstickChoice = prompt("You find a glowstick. Do you want to crack it or leave it? Pick one (crack, leave).")
            return glowstickChoice
            break
        case 'cork':
            alert("You find a cork. What could you possibly do with that? You become so bored you die instantly. YOU DIED")
            playAgain()
            break
    }
}

function yellowRoom(y) {
    let numY = parseInt(y)
    switch(numY) {
        case 1:
            alert("You summon all your power into a single punch and kill the monster. YOU WIN")
            playAgain()
            break
        case 10:
            alert("Your weak consecutive NORMAL punches do NOTHING! You break ALL your knuckles!! He eats you. YOU DIED")
            playAgain()
            break
    }
}

function redChoiceEnd(rc) {
    switch(rc) {
        case 'eat':
            alert("You eat the fork. Why did you do that? You die, because of course you do. YOU DIED")
            playAgain()
            break
        case 'pocket':
            alert("You now have a fork. You feel infinitely satisfied just knowing you have a fork by your side. YOU WIN")
            playAgain()
            break
        case 'socket':
            alert("You stick the fork into an electrical socket and die. I didn't even give you that option why would you do that... YOU DIED")
            playAgain()
            break
        case 'weapon':
            alert("You now have a weapon. You fight your way home through a monster you didn't even know was there before. YOU WIN")
            playAgain()
            break
        case 'keep same':
            alert("You use the regular spoon to dig your way home unharmed. YOU WIN")
            playAgain()
            break
    }
}

function blueChoiceEnd(bc) {
    switch(bc) {
        case 'yes':
            alert("You curb a hunger you didn't know you had. You go home satisfied. YOU WIN")
            playAgain()
            break
        case 'no':
            alert("Jeff walks in. You give him the pizza and give you a ride home. Shout-out to Jeff. YOU WIN")
            playAgain()
            break
        case 'crack':
            alert("OOO GLOWSTICK!! ... YOU WIN")
            playAgain()
            break
        case 'leave':
            alert("That could have been a really cool glowstick...")
            playAgain()
            break
    }
}

function playAgain() {
    let again = prompt("Would you like to play again? (yes / no).")

    if (again == 'yes') {
        playGame()
    } else if (again == 'no') {
        alert("Aight. Peace.")
    }
}

function playGame() {
    let direction = start()
    let room = firstRoom(direction)
    let choice2
    let redChoice
    let blueChoice
    if (room == "red") {
        choice2 = prompt("You are in the red room. There are three items, a fork, a spoon, and a bucket. Pick one (fork, spoon, bucket).")
        redChoice = redRoom(choice2)
    } else if (room == "blue") {
        choice2 = prompt("You are in the blue room. There are three items, a pizza, a glowstick, and a cork. Pick one (pizza, glowstick, cork).")
        blueChoice = blueRoom(choice2)
    } else if (room == "yellow") {
        choice2 = prompt("You are in the yellow room. There is a monster. Do you want to punch it one time or ten times? Pick one (1, 10).")
        yellowRoom(choice2)
    }
    
    if (redChoice) {
        redChoiceEnd(redChoice)
    } else if (blueChoice) {
        blueChoiceEnd(blueChoice)
    }
}

playGame()
