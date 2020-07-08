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
  console.log("Now what?")

  dogInteract()
}

function dogOutside() {
  dog.bored = true
  dog.hungry = false
  dog.goOutside()

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
  console.log("Now what?")

  dogInteract()
}

function dogPlay() {
  if (dog.bored) {
    dog.bark()
  } else {
    console.log("We're not allowed to play inside. We might break something!")
  }

  dog.play(dogPlayArray)

  dogInteract()
}

let dogPlayArray = [dogBall, dogButterfly, dogRun]

function dogBall() {
  console.log("Throw the ball! Throw the ball!! I will catch it and bring it back to you!!! And then we can do it again and AGAIN!")
  console.log("")
  console.log("                          _._  ")
  console.log("                        .'--.`.")
  console.log("' '  .                  |  .' |")
  console.log("       '      . .     .  `--`'")
  console.log("         `.'       `.'")
  console.log("")
  console.log("That was so much fun!")

}

function dogButterfly() {
  console.log("Let's chase butterflies!! That'll be fun!")
  console.log("")
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
  console.log("I wanna run!!! I betcha I can run faster that you!")
  console.log("")
  console.log("             .--~~,__")
  console.log(":-....,-------`~~'._.'")
  console.log(" `-,,,  ,_      ;'~U'")
  console.log("  _,-' ,'`-__; '--.")
  console.log(" (_/'~~      ''''(;")
  console.log("")
  console.log("Told ya so!")
  console.log("")
}

function dogEat() {
  if (dog.hungry) {
    console.log('(`"======="`)')
    console.log('(_.=======._)')
  } else if (!dog.hungry && dog.outside) {
    console.log("It's much too exciting outside to eat!!")
  } else if (!dog.hungry && dog.goInside) {
    console.log("I'm not hungry. We haven't even played yet!")
  }
  dog.eat()

  dogInteract()
}

function dogSleep() {
  if (dog.sleepy) {
    console.log("")
    console.log("                __")
    console.log("               /\\/'-,")
    console.log("       ,--'''''   /\"")
    console.log(" ____,'.  )       \\___")
    console.log("'\"\"\"\"\"------'\"\"\"`-----'")
    console.log("")
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
      console.log("i entered!")
      initial()
    }
  })
}
