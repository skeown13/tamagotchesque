let inquirer = require("inquirer")

function DigitalPal () {
  this.hungry = false
  this.sleepy = false
  this.bored = true
  this.age = 0

  this.feed = function() {
    if (this.hungry) {
      console.log("That was yummy!")
      this.hungry = false
      this.sleepy = true
    } else {
      console.log("No thanks! I'm full.")
    }
  }
  this.sleep = function() {
    if (this.sleepy) {
      console.log("Zzzzzzzz")
      this.sleepy = false
      this.bored = true
      this.increaseAge()
    } else {
      "No way! I'm not tired."
    }
  }
  this.play = function() {
    if (this.bored) {
      console.log("Yay! Let's play!")
      this.bored = false
      this.hungry = true
    } else {
      console.log("Not right now. Later?")
    }
  }
  this.increaseAge = function() {
    this.age += 1
    console.log("Happy Birthday to me! I am " + this.age + " old!")
  }
}


// Game Logic with Inquirer

let dog

inquirer.prompt([
  {
    type: "list",
    name: "pet",
    message: "Would you like a Dog Digital Pet or a Cat Digital Pet?",
    choices: ["Dog", "Cat"]
  }
]).then(function(answers) {
  if (answers.pet === "Dog") {
    dog = new DigitalPal()

    dog.outside = true
    dog.bark = function() {
      console.log("Woof! Woof!")
    }
    dog.goOutside = function() {
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
    let cat = new DigitalPal()

    cat.houseCondition = 100
    cat.meow = function() {
      console.log("Meow! Meow!")
    }
    cat.destroyFurniture = function() {
      if (this.houseCondition > 0) {
        this.houseCondition -= 10
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!")
        this.bored = false
        this.sleepy = true
      }
    }
    cat.buyNewFurniture = function() {
      this.houseCondition += 50
      console.log("Are you sure about that?")
    }

    console.log("You choose a Cat!")
    console.log(' /\\_/\\ ')
    console.log('(=^.^=)')
    console.log('(")(")_/ ')
    console.log('')

    // catPet()

  }
})


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
    }
  })
}

function dogInside() {
  dog.goInside()

  console.log("     ..  ")
  console.log(" .---''-.")
  console.log("/________\\")
  console.log("|   __   |")
  console.log("|[]|  |[]|")
  console.log("|  |' |  |")
  console.log("'--'--'--'")
  console.log("")
  console.log("Now what?")

  dogInteract()
}

function dogOutside() {
  dog.goOutside()

  console.log("  \\_/ ")
  console.log("--(_)--")
  console.log("  / \\ ")
  // console.log("")
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
