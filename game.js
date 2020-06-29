let inquirer = require("inquirer")
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
