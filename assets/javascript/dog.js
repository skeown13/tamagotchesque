// Starts the Functionality for DOG
function dogInteract() {
  inquirer.prompt([
    {
      type: "list",
      name: "dogOpt",
      message: "What would you like to do?",
      choices: ["Go Inside", "Go Outside", "Play", "Eat", "Sleep", "Done?"]
    }
  ]).then(function(answers) {
    if (answers.dogOpt === "Go Inside") {
      dogInside()
    } else if (answers.dogOpt === "Go Outside") {
      dogOutside()
    } else if (answers.dogOpt === "Play") {
      dogPlay()
    } else if (answers.dogOpt === "Eat") {
      dogEat()
    } else if (answers.dogOpt === "Sleep") {
      dogSleep()
    } else if (answers.dogOpt === "Done?") {
      dogDone()
    }
  })
}

function dogInside() {
  dog.bored = false
  dog.hungry = true
  dog.goInside()

  console.log("   .-------------.")
  console.log("  /_/_/_/_/_/_/_/ \\")
  console.log(" //_/_/_/_/_/_// _ \\")
  console.log("/_/_/_/_/_/_/_/|/ \\|\\")
  console.log(" |             || ||")
  console.log(" |    Dog      || ||")
  console.log(" |   House     || ||")
  console.log(" |_____________||_||")
  console.log("")
  console.log("Now what?".green)
  console.log("")

  dogInteract()
}

function dogOutside() {
  dog.bored = true
  dog.hungry = false
  dog.goOutside()

  console.log("")
  console.log("  \\_/ ")
  console.log("--(_)--")
  console.log("  / \\ ")
  console.log("         _               ")
  console.log("       (\\_/)      _     ")
  console.log("      (-(_)-)   (\\_/)   ")
  console.log("       (/_\\)   (-(_)-)  ")
  console.log("         |      (/_\\)   ")
  console.log("       (\\|/)     |      ")
  console.log("        \\|/    (\\|     ")
  console.log("         |      \\|      ")
  console.log("")
  console.log("Now what?".green)
  console.log("")

  dogInteract()
}

function dogPlay() {
  if (dog.bored) {
    dog.bark()
    dog.played = true
  } else {
    console.log("")
    console.log("We're not allowed to play inside. We might break something!".red)
    console.log("")
  }

  dog.play(dogPlayArray)

  dogInteract()
}

let dogPlayArray = [dogBall, dogButterfly, dogRun]

function dogBall() {
  console.log("Throw the ball! Throw the ball!! I will catch it and bring it back to you!!! And then we can do it again and AGAIN!".cyan)
  console.log("")
  console.log("                          _._  ")
  console.log("                        .'--.`.")
  console.log("' '  .                  |  .' |")
  console.log("       '      . .     .  `--`'")
  console.log("         `.'       `.'")
  console.log("")
  console.log("That was so much fun!".cyan)
  console.log("")

}

function dogButterfly() {
  console.log("Let's chase butterflies!! That'll be fun!".cyan)
  console.log("                       __   __")
  console.log("                      (()\\o/())")
  console.log(" __   __               \\_ I _/")
  console.log("(  \\,/  )  ___   ___    (/I\\)")
  console.log(" \\_ | _/  ( @ \\Y/ @ )")
  console.log(" (_/ \\_)   \\__+|+__/")
  console.log("            {_/ \\_}")
  console.log("")

}

function dogRun() {
  console.log("I wanna run!!! I betcha I can run faster that you!".cyan)
  console.log("")
  console.log("             .--~~,__")
  console.log(":-....,-------`~~'._.'")
  console.log(" `-,,,  ,_      ;'~U'")
  console.log("  _,-' ,'`-__; '--.")
  console.log(" (_/'~~      ''''(;")
  console.log("")
  console.log("Told ya so!".cyan)
  console.log("")
}

function dogEat() {
  if (dog.hungry && dog.played) {
    console.log("")
    console.log('(`"======="`)')
    console.log('(_.=======._)')
    dog.eat()
  } else if (!dog.hungry && dog.outside) {
    console.log("")
    console.log("It's much too exciting outside to eat!!".red)
    console.log("")
  } else if (!dog.played) {
    console.log("")
    console.log("I'm not hungry. We haven't even played yet!".red)
    console.log("")
  } else if (!dog.outside && !dog.hungry) {
    console.log("")
    console.log("We just ate! It would be silly to eat again so soon.".red)
    console.log("")
  }

  dogInteract()
}

function dogSleep() {
  if (dog.sleepy) {
    dog.played = false

    console.log("")
    console.log("                __")
    console.log("               /\\/'-,")
    console.log("       ,--'''''   /\"")
    console.log(" ____,'.  )       \\___")
    console.log("'\"\"\"\"\"------'\"\"\"`-----'")
  }
  
  dog.sleep()

  dogInteract()
}

function dogDone() {
  inquirer.prompt([
    {
      type: "list",
      name: "dogDone",
      message: "Are you done playing with the Dog?",
      choices: ["NO!! I made a mistake. I still want to play with the puppy!", "Yes I am done playing with the dog. BUT I would like to play with another DigitalPal.", "Yes, I'm done playing with all DigitalPals."]
    }
  ]).then(function(answers) {
    if (answers.dogDone === "NO!! I made a mistake. I still want to play with the puppy!") {
      dogInteract()
    } else if (answers.dogDone === "Yes I am done playing with the dog. BUT I would like to play with another DigitalPal.") {
      initial()
    }
  })
}
