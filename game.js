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

let dog = new DigitalPal()

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