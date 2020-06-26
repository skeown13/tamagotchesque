let inquirer = require("inquirer")

// The Original Constructor used as the base for all animals

function DigitalPal () {
  this.hungry = false
  this.sleepy = false
  this.bored = true
  this.age = 0

  this.eat = function() {
    if (this.hungry) {
      console.log("That was yummy!")
      this.hungry = false
      this.sleepy = true
    }
  }
  this.sleep = function() {
    if (this.sleepy) {
      this.sleepy = false
      this.increaseAge()
    } else {
      console.log("No way! I'm not tired.")
    }
  }
  this.increaseAge = function() {
    this.age += 1
    console.log("Happy Birthday to me! I am " + this.age + " old!")
  }
}


// Choose which ANIMAL you would like to interact with. Then gives that animal's instance of the constructor unique properties and methods.

let dog
let cat
let owl

inquirer.prompt([
  {
    type: "list",
    name: "pet",
    message: "Would you like a Dog Digital Pet or a Cat Digital Pet?",
    choices: ["Dog", "Cat", "Owl"]
  }
]).then(function(answers) {
  if (answers.pet === "Dog") {
    dog = new DigitalPal()

    dog.outside = true
    dog.bark = function() {
      console.log("Woof! Woof!")
    }
    dog.goOutside = function() {
      this.sleepy = false
      if (this.outside) {
        console.log("We're already outside though...")
      } else {
        console.log("Yay! I love the outdoors!")
        this.outside = true
        this.bark()
      }
    }
    dog.goInside = function() {
      if (this.outside) {
        console.log("Do we have to? Fine...")
        this.outside = false
      } else {
        console.log("I'm already inside...")
      }
    }
    // Would like to add a function later that has an array in it of multiple different play options. So when play is called you get a random different play each time (play with ball, chase butterfly, something else....)
    dog.play = function() {
      if (this.bored) {
        let dogPlayRnd = Math.floor(Math.random() * dogPlayArray.length)
        console.log("Yay! Let's play!")
        dogPlayArray[dogPlayRnd]()
      } else {
        console.log("We're not allowed to play inside. We might break something!")
      }
    }

    console.log("You choose a Dog!")
    console.log('  _____  ')
    console.log('(| . . |)')
    console.log(' ( (Y) ) ')
    console.log(' (")_(")_/')
    console.log('')

    dogInteract()

  } else if (answers.pet === "Cat") {
    cat = new DigitalPal()

    cat.houseCondition = 100
    cat.meow = function() {
      console.log("Meow! Meow!")
    }
    cat.destroyFurniture = function() {
      if (this.houseCondition > 0) {
        this.houseCondition -= 10
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!")
      }
    }
    cat.buyNewFurniture = function() {
      this.houseCondition += 30
      console.log("The condition of your house is now at " + cat.houseCondition + "%")
    }

    cat.play = function() {
      cat.hungry = true
      let catPlayRnd = Math.floor(Math.random() * catPlayArray.length)
      cat.meow()
      catPlayArray[catPlayRnd]()
    }

    console.log("You choose a Cat!")
    console.log(' /\\_/\\ ')
    console.log('(=^.^=)')
    console.log('(")(")_/ ')
    console.log('')

    catInteract()

  } else if (answers.pet === "Owl") {
    owl = new DigitalPal()

    owl.fly = function() {

    }
    owl.hunt = function() {

    }

    console.log("You choose an Owl!")
    console.log(",___,")
    console.log("(O,O)")
    console.log("/)_)")
    console.log(' "" ')

    owlInteract()

  }
})

// Starts the Functionality for DOG
function dogInteract() {
  inquirer.prompt([
    {
      type: "list",
      name: "dogOpt",
      message: "What would you like to do?",
      choices: ["Go Inside", "Go Outside", "Play", "Eat", "Sleep"]
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
  dog.play()

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

// Starts the Functionality for CAT
function catInteract() {
  inquirer.prompt([
    {
      type: "list",
      name: "catOpt",
      message: "What would you like to do?",
      choices: ["Check House Condition", "Destroy Furniture", "Buy New Furniture", "Play", "Eat", "Sleep"]
    }
  ]).then(function(answers) {
    if (answers.catOpt === "Check House Condition") {
      catHouseCondition()
    } else if (answers.catOpt === "Destroy Furniture") {
      catDestroyFurniture()
    } else if (answers.catOpt === "Buy New Furniture") {
      catBuyNewFurniture()
    } else if (answers.catOpt === "Play") {
      catPlay()
    } else if (answers.catOpt === "Eat") {
      catEat()
    } else if (answers.catOpt) {
      catSleep()
    }
  })
}

function catHouseCondition() {
  if (cat.houseCondition >= 80) {
    console.log("")
    console.log("The condition of your house is at " + cat.houseCondition + "%")
    console.log("You're house is in GREAT condition. Looking good!")
    console.log("     ..    ")
    console.log(" .---''-.  ")
    console.log("/________\\")
    console.log("|   __   | ")
    console.log("|[]|  |[]| ")
    console.log("|  |' |  | ")
    console.log("'--'--'--' ")
    console.log("")
  } else if (cat.houseCondition > 50 && cat.houseCondition < 80) {
    console.log("")
    console.log("The condition of your house is at " + cat.houseCondition + "%")
    console.log("Your house is starting to look a bit beat up. Still not bad though!")
    console.log(" ________  ")
    console.log("|   __   | ")
    console.log("|[]|  |[]| ")
    console.log("|  |' |  | ")
    console.log("'--'--'--' ")
    console.log("")
  } else if (cat.houseCondition > 20 && cat.houseCondition <= 50) {
    console.log("")
    console.log("The condition of your house is at " + cat.houseCondition + "%")
    console.log("You're house is really starting to show its wear and tear. You may want to consider purchasing some new furniture soon!")
    console.log("|[]|  |[]| ")
    console.log("|  |' |  | ")
    console.log("'--'--'--' ")
    console.log("")
  } else if (cat.houseCondition <= 20) {
    console.log("")
    console.log("The condition of your house is at " + cat.houseCondition + "%")
    console.log("Your house has basically been completely destroyed. You should really spruce it up some by buying new furniture!")
    console.log("'--'--'--' ")
    console.log("")
  }

  catInteract()
}

function catDestroyFurniture() {
  console.log("")
  console.log("             ____")
  console.log("            /    \\")
  console.log("           /______\\")
  console.log("              ||")
  console.log("              ||   /\\_/\\")
  console.log("  /~~~~~~\\    ||   >^.^<.---.")
  console.log("/~ ( )( ) ~\\  ||  _'-`-'     )\\")
  console.log("(_)======(_)  || (6--\\ |--\\ (`.`-.")
  console.log(" |________|  _||_    --'  --'  ``-'")
  console.log("")

  cat.destroyFurniture()

  catInteract()
}

function catBuyNewFurniture() {
  if (cat.houseCondition <= 70) {
    console.log("")
    console.log("  ____")
    console.log(" /    \\")
    console.log("/______\\")
    console.log("   ||")
    console.log("   ||")
    console.log("   ||    /~~~~~~~~~~~~~~~\\")
    console.log("   ||  /~ ( )( )( )( )( ) ~\\")
    console.log("   ||  (_)===============(_)")
    console.log("  _||_  |_________________|")
    console.log("")
    cat.buyNewFurniture()
  } else {
    console.log("Your house is already perfect! No need to do that at this time.")
  }

  catInteract()
}

function catPlay() {
  cat.play()

  catInteract()
}

let catPlayArray = [catBox, catHunt]

function catBox() {
  console.log("")
  console.log("Ooooo LOOK!!! A box!")
  console.log("                         ,")
  console.log("  ,-.       _,---._ __  / \\")
  console.log(" /  )    .-'       `./ /   \\")
  console.log("(  (   ,'            `/    /|")
  console.log(" \\  `-\"             \\'\\   / |")
  console.log("  `.              ,  \\ \\ /  |")
  console.log("   /`.          ,'-`----Y   |")
  console.log("  (            ;        |   '")
  console.log("  |  ,-.    ,-'         |  /")
  console.log("  |  | (   |            | /")
  console.log("  )  |  \\  `.___________|/")
  console.log("  `--'   `--'")
  console.log("")

}

function catHunt() {
  console.log("")
  console.log("On the prowl! Gonna hunt me a mouse!")
  console.log(" _._     _,-'\"\"`-._")
  console.log("(,-.`._,'(       |\\`-/|")
  console.log("    `-.-' \\ )-`( , o o)      __()()")
  console.log("          `-    \\`_`\"'-     (__)(\")")
  console.log("                          -' \"\"  '")
  console.log("")
}

function catEat() {
  if (cat.hungry) {
    console.log('( ( (')
    console.log(' ) ) )')
    console.log('>++++°>')
  } else {
    console.log("No thanks; I'm not hungry. Maybe we can play before eating.")
  }
  cat.eat()

  catInteract()
}

function catSleep() {
  
  if (cat.sleepy) {
    console.log("")
    console.log("            /\\____/\\    __")
    console.log("          .'  \"\"\"\"  `,-'  `--.__")
    console.log("     __,- :   -  -  ;  \" ::     `-. -.__")
    console.log("  ,-sssss `._  `' _,'\"     ,'~~~::`.sssss-.")
    console.log(" |ssssss ,' ,_`--'_    __,' ::  `  `.ssssss|")
    console.log("|sssssss `-._____~ `,,'_______,---_;; ssssss|")
    console.log(" |ssssssssss     `--'~{__   ____   ,'ssssss|")
    console.log("  `-ssssssssssssssssss ~~~~~~~~~~~~ ssss.-'")
    console.log("       `---.sssssssssssssssssssss.---'")
    console.log("")
    console.log("What a lovely Cat Nap! I feel refreshed and ready to go!!")
    console.log("")
  }
  
  cat.sleep()

  catInteract()
}