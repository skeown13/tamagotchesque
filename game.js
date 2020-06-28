let inquirer = require("inquirer")

// The Original Constructor used as the base for all animals

function DigitalPal () {
  this.hungry = false
  this.sleepy = false
  this.bored = true
  this.day = 0

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
      this.increaseDay()
    } else {
      console.log("No way! I'm not tired.")
    }
  }
  this.increaseDay = function() {
    this.day += 1
    if (this.day === 1) {
      console.log("A new day! We've been playing for " + this.day + " day!")
    } else if (this.day > 1) {
      console.log("A new day! We've been playing for " + this.day + " days!")
    }
    console.log("What are we going to do today?")
  }
}


// Choose which ANIMAL you would like to interact with. Then gives that animal's instance of the constructor unique properties and methods.

let dog
let cat
let owl
let bunny
let elephant

inquirer.prompt([
  {
    type: "list",
    name: "pet",
    message: "Would you like a Dog Digital Pet or a Cat Digital Pet?",
    choices: ["Dog", "Cat", "Owl", "Bunny", "Elephant"]
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
      console.log("There's nothing better than soaring through the open skies!")
    }
    owl.hunt = function() {

    }

    console.log("You choose an Owl!")
    console.log(",___,")
    console.log("(O,O)")
    console.log("/)_)")
    console.log(' "" ')

    owlInteract()

  } else if (answers.pet === "Bunny") {
    bunny = new DigitalPal()

    bunny.play = function() {
      if (this.bored) {
        bunny.hungry = true
        let bunnyPlayRnd = Math.floor(Math.random() * bunnyPlayArray.length)
        console.log("Yay! Let's play!")
        bunnyPlayArray[bunnyPlayRnd]()
      } else {
        console.log("no")
      }
    }

    console.log("You choose a Bunny!")
    console.log('  (\\_/)')
    console.log(' =(^.^)=')
    console.log(' (")_(")')
    console.log('')

    bunnyInteract()

  } else if (answers.pet === "Elephant") {
    elephant = new DigitalPal()

    elephant.play = function() {
      if (this.bored) {
        elephant.hungry = true
        let elephantPlayRnd = Math.floor(Math.random() * elephantPlayArray.length)
        console.log("Yay! Let's play!")
        elephantPlayArray[elephantPlayRnd]()
      } else {
        console.log("no")
      }
    }

    console.log("You choose an Elephant!")
    console.log('  _    _')
    console.log(' /=\\""/=\\')
    console.log('(=(0_0 |=)')
    console.log(' \\_\\ _/_/')
    console.log('   /_/')
    console.log('  |/')
    console.log('')

    elephantInteract()

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
    console.log("   ||     ")
    console.log("   ||     ")
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

// Starts the Functionality for OWL
function owlInteract() {
  inquirer.prompt([
    {
      type: "list",
      name: "owlOpt",
      message: "What would you like to do?",
      choices: ["Fly", "Hunt", "Eat", "Sleep"]
    }
  ]).then(function(answers) {
    if (answers.owlOpt === "Fly") {
      owlFly()
    } else if (answers.owlOpt === "Eat") {
      owlEat()
    } else if (answers.owlOpt === "Sleep") {
      owlSleep()
    }
  })
}

function owlFly() {
  console.log("")
  console.log("__________-------____                 ____-------__________")
  console.log("\\------____-------___--__---------__--___-------____------/")
  console.log(" \\//////// / / / / / \\   _-------_   / \\ \\ \\ \\ \\ \\\\\\\\\\\\\\\\/")
  console.log("   \\////-/-/------/_/_| /___   ___\\ |_\\_\\------\\-\\-\\\\\\\\/")
  console.log("     --//// / /  /  //|| (O)\\ /(O) ||\\\\  \\  \\ \\ \\\\\\\\--")
  console.log("          ---__/  // /| \\_  /V\\  _/ |\\ \\\\  \\__---")
  console.log("               -//  / /\\_ ------- _/\\ \\  \\\\-")
  console.log("                 \\_/_/ /\\---------/\\ \\_\\_/")
  console.log("                     ----\\   |   /----")
  console.log("                          | -|- |")
  console.log("                         /   |   \\")
  console.log("                         ---- \\___|")

  owl.fly()

  owlInteract()
}

function owlEat() {
  if (owl.hungry) {
    console.log("")
    console.log("()(),~~,.")
    console.log(" xx ___; )")
    console.log("=`=     (_.")
    console.log("")
  } else {
    console.log("There's no such thing as a free meal! We must hunt our food if we want to eat...")
  }

  owlInteract()
}

function owlSleep() {
  if (owl.sleepy) {
    console.log("")
    console.log("   ...    *    .   _  .")
    console.log("*  .  *     .   * (_)   *")
    console.log("  .      |*  ..   *   ..")
    console.log("   .  * \\|  *  ___  . . *")
    console.log("*   \\/   |/ \\/{o,o}     .")
    console.log("  _\\_\\   |  / /)  )* _/_ *")
    console.log("      \\ \\| /,--\"-\"---  ..")
    console.log("_-----`  |(,__,__/__/_ .")
    console.log("       \\ ||      ..")
    console.log("        ||| .            *")
    console.log("        |||")
    console.log("        |||")
    console.log("  , -=-~' .-^- _")
    console.log("           `")
    console.log("")
  } 

  owl.sleep()

  owlInteract()
}


// Starts the Functionality for BUNNY
function bunnyInteract() {
  inquirer.prompt([
    {
      type: "list",
      name: "bunnyOpt",
      message: "What would you like to do?",
      choices: ["Play", "Eat", "Sleep"]
    }
  ]).then(function(answers) {
    if (answers.bunnyOpt === "Play"){
      bunnyPlay()
    } else if (answers.bunnyOpt === "Eat") {
      bunnyEat()
    } else if (answers.bunnyOpt === "Sleep") {
      bunnySleep()
    }
  })
}

function bunnyPlay() {
  bunny.play()

  bunnyInteract()
}

let bunnyPlayArray = [bunnyMeet, bunnyHop, bunnySwim]

function bunnyMeet() {
  console.log("")
  console.log("    \\(,%%*%,_                      -%*%%,)/")
  console.log("  %%/*(                       /)   /)   )*\\%%")
  console.log(" %% )\\|                      (/   (/    |/( %%")
  console.log("  _/ #)                    __/') ('\\__  (# \\_")
  console.log(" .) ,/                   _/  /     \\  \\_ \\, (.")
  console.log(" /)#(_,,,,,,,,,,,,,,,,,,,\\,((,,,,,,,)),/,_)#(\\")
  console.log("Oh hi there other bunny! We should play together.")
  console.log("")
}

function bunnyHop() {
  console.log("")
  console.log("             \\\\")
  console.log("        ,-~~~-\\\\_")
  console.log("       (        .\\")
  console.log("\\    / @\\___(__--'")
  console.log(" \\  /")
  console.log("Hop Hop Hippity Hop!")
  console.log("")
}

function bunnySwim() {
  console.log("")
  console.log("               _     _    O  .")
  console.log("              /_\\   /_\\")
  console.log("              \\\\\\\\  \\\\\\\\   .  O")
  console.log("              ////  ////   o")
  console.log("    o         \\\\\\\\_////  .")
  console.log("   .           \\ ___ /  o   O")
  console.log("  __  o         [o_o]   . o")
  console.log("\\/ o\\        ___/ ^ \\___ ")
  console.log("/\\__/           \\___/")
  console.log("                _/ \\_")
  console.log("             __//   \\\\")
  console.log("            /___\\/_\\/|")
  console.log("                    \\ \\")
  console.log("                     \\/")
  console.log("Well hello there fishy! Swim here often?")
  console.log("")
}

function bunnyEat() {
  if (bunny.hungry) {
    console.log("")
    console.log("         ___")
    console.log(" `-._\\ /     `~~\"--.,_")
    console.log("------>|              `~~\"--.,_")
    console.log(" _.-'/ '.____,,,,----\"\"\"~~```'")
    console.log("")
  } else {
    console.log("We can't eat yet... We haven't even played!")
  }

  bunny.eat()

  bunnyInteract()
}

function bunnySleep() {
  if (bunny.sleepy) {
    console.log("")
    console.log("z      ___     ___")
    console.log("    z /   \\   /   \\")
    console.log("     /   / \\_/ \\   \\")
    console.log("   Z \\__/\\     /\\__/")
    console.log("          \\- -/")
    console.log("     z ___/ ^ \\___")
    console.log("          \\___/")
    console.log("          _/ \\_")
    console.log("       __//   \\\\__")
    console.log("      /___\\/_\\/___\\")
    console.log("")
  }

  bunny.sleep()

  bunnyInteract()
}

// Starts the Functionality for ELEPHANT
function elephantInteract() {
  inquirer.prompt([
    {
      type: "list",
      name: "elephantOpt",
      message: "What would you like to do?",
      choices: ["Play", "Eat", "Sleep"]
    }
  ]).then(function(answers) {
    if (answers.elephantOpt === "Play") {
      elephantPlay()
    } else if (answers.elephantOpt === "Eat") {
      elephantEat()
    } else if (answers.elephantOpt === "Sleep") {
      elephantSleep()
    }
  })
}

function elephantPlay() {
  elephant.play()

  elephantInteract()
}

let elephantPlayArray = [elephantTrain, elephantTrumpet, elephantCircus]

function elephantTrain() {
  console.log("")
  console.log("                       _       __,\"\\\\  _.")
  console.log("    /\\\\     /\\\\   _.--/ `.   ,' (   \"_//\"")
  console.log(" ,''\\,\"  ,\"\"\\,\"=='(   \\.'\\\\_,(  _`-'=-'")
  console.log("' u-u `=' u-u     |l''|l  `\" |m' |m")
  console.log("Choo Choo!! Here comes the Elephant Train! Choo Choo!!")
  console.log("")
}

function elephantTrumpet() {
  console.log("")
  console.log("        .--._   _,-';")
  console.log("   ,---(    .`-',-'")
  console.log(" /(     `--'_,'")
  console.log("(  \\ |__| |'")
  console.log("   |_|  |_|")
  console.log("Toot Toot!! My trunk makes a noise like a trumpet! Toot Toot!!")
  console.log("")
}

function elephantCircus() {
  console.log("")
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
  console.log("Look at me! Look at me!! I'm like one of those Circus Elephants!")
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
    console.log("")
  } else {
    console.log("We can't eat yet... We haven't even played!")
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
    console.log("")
  }

  elephant.sleep()

  elephantInteract()
}