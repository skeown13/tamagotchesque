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
      console.log("Zzzzzzzz")
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
        console.log("Yay! Let's play!")
        dogBall()
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

function dogBall() {
  console.log("Throw the ball! Throw the ball!! I will catch it and bring it back to you!!! And then we can do it again and AGAIN!")
  console.log("")
  console.log("  _._  ")
  console.log(".'--.`.")
  console.log("|  .' |")
  console.log(" `--`'")
  console.log("")
  console.log("That was so much fun!")

}

function dogEat() {
  if (dog.hungry) {
    console.log('(`"======="`)')
    console.log('(_.=======._)')
  } else {
    console.log("It's much too exciting outside to eat!!")
  }
  dog.eat()

  dogInteract()
}

function dogSleep() {
  dog.sleep()

  dogInteract()
}

// Starts the Functionality for CAT