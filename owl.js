// Starts the Functionality for OWL
function owlInteract() {
  inquirer.prompt([
    {
      type: "list",
      name: "owlOpt",
      message: "What would you like to do?",
      choices: ["Fly", "Hunt", "Eat", "Sleep", "Done?"]
    }
  ]).then(function(answers) {
    if (answers.owlOpt === "Fly") {
      owlFly()
    } else if (answers.owlOpt === "Eat") {
      owlEat()
    } else if (answers.owlOpt === "Sleep") {
      owlSleep()
    } else if (answers.owlOpt === "Done?") {
      owlDone()
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

function owlDone() {
  inquirer.prompt([
    {
      type: "list",
      name: "owlDone",
      message: "Are you done playing with the owl?",
      choices: ["NO!! I made a mistake. I still want to play with the owl!", "Yes I am done playing with the owl. BUT I would like to play with another DigitalPal.", "Yes, I'm done playing with all DigitalPals."]
    }
  ]).then(function(answers) {
    if (answers.owlDone === "NO!! I made a mistake. I still want to play with the owl!") {
      owlInteract()
    } else if (answers.owlDone === "Yes I am done playing with the owl. BUT I would like to play with another DigitalPal.") {
      initial()
    }
  })
}