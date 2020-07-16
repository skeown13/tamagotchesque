let inquirer = require("inquirer")
let colors = require("colors")
let fs = require("fs")

eval(fs.readFileSync("dog.js") + "")
eval(fs.readFileSync("cat.js") + "")
eval(fs.readFileSync("owl.js") + "")
eval(fs.readFileSync("bunny.js") + "")
eval(fs.readFileSync("elephant.js") + "")

// The Original Constructor used as the base for all animals

function DigitalPal () {
  this.hungry = false
  this.sleepy = false
  this.bored = true
  this.day = 0

  this.eat = function() {
    if (this.hungry) {
      console.log("")
      console.log("That was yummy!".cyan)
      console.log("")
      this.hungry = false
      this.sleepy = true
    }
  }
  this.sleep = function() {
    if (this.sleepy) {
      this.sleepy = false
      this.increaseDay()
    } else {
      console.log("")
      console.log("No way! I'm not tired.".red)
      console.log("")
    }
  }
  this.play = function(animalPlayArray) {
    if (this.bored) {
      let animalPlayRnd = Math.floor(Math.random() * animalPlayArray.length)
      console.log("")
      console.log("Yay! Let's play!".cyan)
      console.log("")
      animalPlayArray[animalPlayRnd]()
    }
  }
  this.increaseDay = function() {
    this.day += 1
    if (this.day === 1) {
      console.log("")
      console.log("A new day! We've been playing for ".green + this.day + " day!".green)
    } else if (this.day > 1) {
      console.log("")
      console.log("A new day! We've been playing for ".green + this.day + " days!".green)
    }
    console.log("What are we going to do today?".green)
    console.log("")
  }
}


// Choose which ANIMAL you would like to interact with. Then gives that animal's instance of the constructor unique properties and methods.

let dog
let cat
let owl
let bunny
let elephant

console.log("  _______                                            _            _                                         ")
console.log(" |__   __|                                          | |          | |                                        ")
console.log("    | |   __ _   _ __ ___     __ _    __ _    ___   | |_    ___  | |__     ___   ___    __ _   _   _    ___ ")
console.log("    | |  / _` | | '_ ` _ \\   / _` |  / _` |  / _ \\  | __|  / __| | '_ \\   / _ \\ / __|  / _` | | | | |  / _ \\")
console.log("    | | | (_| | | | | | | | | (_| | | (_| | | (_) | | |_  | (__  | | | | |  __/ \\__ \\ | (_| | | |_| | |  __/")
console.log("    |_|  \\__,_| |_| |_| |_|  \\__,_|  \\__, |  \\___/   \\__|  \\___| |_| |_|  \\___| |___/  \\__, |  \\__,_|  \\___|")
console.log("                                      __/ |                                               | |               ")
console.log("                                     |___/                                                |_|               ")
console.log("  /\\/| __     __                         _____    _           _   _             _   _____            _   /\\/|")
console.log(" |/\\/  \\ \\   / /                        |  __ \\  (_)         (_) | |           | | |  __ \\          | | |/\\/ ")
console.log("        \\ \\_/ /  ___    _   _   _ __    | |  | |  _    __ _   _  | |_    __ _  | | | |__) |   __ _  | |      ")
console.log("         \\   /  / _ \\  | | | | | '__|   | |  | | | |  / _` | | | | __|  / _` | | | |  ___/   / _` | | |      ")
console.log("          | |  | (_) | | |_| | | |      | |__| | | | | (_| | | | | |_  | (_| | | | | |      | (_| | | |      ")
console.log("          |_|   \\___/   \\__,_| |_|      |_____/  |_|  \\__, | |_|  \\__|  \\__,_| |_| |_|       \\__,_| |_|      ")
console.log("                                                       __/ |                                                 ")
console.log("                                                      |___/                                                  ")
console.log("")

function initial() {
  inquirer.prompt([
    {
      type: "list",
      name: "pet",
      message: "What DigitalPal would you like to play with?",
      choices: ["Dog", "Cat", "Owl", "Bunny", "Elephant"]
    }
  ]).then(function(answers) {
    if (answers.pet === "Dog") {
      dog = new DigitalPal()
  
      dog.outside = true
      dog.played = false
      dog.bark = function() {
        console.log("")
        console.log("Woof! Woof!".cyan)
      }
      dog.goOutside = function() {
        this.sleepy = false
        if (this.outside) {
          console.log("")
          console.log("We're already outside though...".red)
        } else {
          this.bark()
          console.log("Yay! I love the outdoors!".cyan)
          this.outside = true
        }
      }
      dog.goInside = function() {
        if (this.outside) {
          console.log("")
          console.log("Do we have toooo? Fine...".cyan)
          this.outside = false
        } else {
          console.log("")
          console.log("I'm already inside...".red)
          console.log("")
        }
      }
  
      console.log("")
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
        console.log("")
        console.log("Meow! Meow!".cyan)
      }
      cat.destroyFurniture = function() {
        if (this.houseCondition > 0) {
          this.houseCondition -= 10
          console.log("")
          console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!".cyan)
          console.log("")
        }
      }
      cat.buyNewFurniture = function() {
        this.houseCondition += 30
        console.log("")
        console.log("The condition of your house is now at ".magenta + cat.houseCondition + "%".magenta)
        console.log("")
      }
  
      console.log("")
      console.log("You choose a Cat!")
      console.log(' /\\_/\\ ')
      console.log('(=^.^=)')
      console.log('(")(")_/ ')
      console.log('')
  
      catInteract()
  
    } else if (answers.pet === "Owl") {
      owl = new DigitalPal()

      owl.score = 0
      owl.highscore = 0
      owl.caught = 0
  
      owl.fly = function() {
        console.log("")
        console.log("There's nothing better than soaring through the open skies!".cyan)
        console.log("")
      }
  
      console.log("")
      console.log("You choose an Owl!")
      console.log(",___,")
      console.log("(O,O)")
      console.log("/)_)")
      console.log(' "" ')
      console.log("")
  
      owlInteract()
  
    } else if (answers.pet === "Bunny") {
      bunny = new DigitalPal()
  
      console.log("")
      console.log("You choose a Bunny!")
      console.log('  (\\_/)')
      console.log(' =(^.^)=')
      console.log(' (")_(")')
      console.log('')
  
      bunnyInteract()
  
    } else if (answers.pet === "Elephant") {
      elephant = new DigitalPal()
  
      console.log("")
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
}

initial()