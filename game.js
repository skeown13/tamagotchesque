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