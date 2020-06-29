let inquirer = require("inquirer")
let fs = require("fs")

eval(fs.readFileSync("dog.js") + "")
eval(fs.readFileSync("cat.js") + "")

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
  this.play = function(animalPlayArray) {
    if (this.bored) {
      let animalPlayRnd = Math.floor(Math.random() * animalPlayArray.length)
      console.log("Yay! Let's play!")
      animalPlayArray[animalPlayRnd]()
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

    console.log("You choose a Bunny!")
    console.log('  (\\_/)')
    console.log(' =(^.^)=')
    console.log(' (")_(")')
    console.log('')

    bunnyInteract()

  } else if (answers.pet === "Elephant") {
    elephant = new DigitalPal()

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
  if (bunny.bored) {
    bunny.hungry = true
  } else {
    console.log("no")
  }

  bunny.play(bunnyPlayArray)

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
  if (elephant.bored) {
    elephant.hungry = true
  } else {
    console.log("no")
  }

  elephant.play(elephantPlayArray)

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