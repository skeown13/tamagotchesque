// Starts the Functionality for ELEPHANT
function elephantInteract() {
  inquirer.prompt([
    {
      type: "list",
      name: "elephantOpt",
      message: "What would you like to do?",
      choices: ["Play", "Eat", "Sleep", "Done?"]
    }
  ]).then(function(answers) {
    if (answers.elephantOpt === "Play") {
      elephantPlay()
    } else if (answers.elephantOpt === "Eat") {
      elephantEat()
    } else if (answers.elephantOpt === "Sleep") {
      elephantSleep()
    } else if (answers.elephantOpt === "Done?") {
      elephantDone()
    }
  })
}

function elephantPlay() {
  if (elephant.bored) {
    elephant.hungry = true
  } else {
    console.log("no".red)
  }

  elephant.play(elephantPlayArray)

  elephantInteract()
}

let elephantPlayArray = [elephantTrain, elephantTrumpet, elephantCircus]

function elephantTrain() {
  console.log("                       _       __,\"\\\\  _.")
  console.log("    /\\\\     /\\\\   _.--/ `.   ,' (   \"_//\"")
  console.log(" ,''\\,\"  ,\"\"\\,\"=='(   \\.'\\\\_,(  _`-'=-'")
  console.log("' u-u `=' u-u     |l''|l  `\" |m' |m")
  console.log("Choo Choo!! Here comes the Elephant Train! Choo Choo!!".cyan)
  console.log("")
}

function elephantTrumpet() {
  console.log("        .--._   _,-';")
  console.log("   ,---(    .`-',-'")
  console.log(" /(     `--'_,'")
  console.log("(  \\ |__| |'")
  console.log("   |_|  |_|")
  console.log("Toot Toot!! My trunk makes a noise like a trumpet! Toot Toot!!".cyan)
  console.log("")
}

function elephantCircus() {
  console.log("           .-~~-. .--.")
  console.log("          /      /   \"\\")
  console.log("         /    \\ |  \\   \\")
  console.log("        |/\\    | \\_/-'\\ \\")
  console.log("        A |   /  ||   /_/")
  console.log("          |__||__||")
  console.log("         /~~~~~~~~~~\\")
  console.log("        /\\_/\\_/\\_/\\_/\\")
  console.log("       /\\/ \\/ \\/ \\/ \\/\\")
  console.log("    __/________________\\__")
  console.log("Look at me! Look at me!! I'm like one of those Circus Elephants!".cyan)
  console.log("")
}

function elephantEat() {
  if (elephant.hungry) {
    console.log("")
    console.log(" ,+.")
    console.log("((|))        ,+.")
    console.log(" )|(   ,+.  ((|))")
    console.log("((|)) ((|))  )|(")
    console.log(" `-'   )|(  ((|))")
    console.log("      ((|))  `-'")
    console.log("       `-'  ")
  } else {
    console.log("")
    console.log("We can't eat yet... We haven't even played!".red)
    console.log("")
  }

  elephant.eat()

  elephantInteract()
}

function elephantSleep() {
  if (elephant.sleepy) {
    console.log("")
    console.log(" z      ____")
    console.log("    z  /_   \\__")
    console.log("  z   /_  \\_/  \\")
    console.log("   z // \\  ___ |\\")
    console.log("         |_| |_|")
  }

  elephant.sleep()

  elephantInteract()
}

function elephantDone() {
  inquirer.prompt([
    {
      type: "list",
      name: "elephantDone",
      message: "Are you done playing with the elephant?",
      choices: ["NO!! I made a mistake. I still want to play with the elephant!", "Yes I am done playing with the elephant. BUT I would like to play with another DigitalPal.", "Yes, I'm done playing with all DigitalPals."]
    }
  ]).then(function(answers) {
    if (answers.elephantDone === "NO!! I made a mistake. I still want to play with the elephant!") {
      elephantInteract()
    } else if (answers.elephantDone === "Yes I am done playing with the elephant. BUT I would like to play with another DigitalPal.") {
      initial()
    }
  })
}