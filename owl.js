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
    } else if (answers.owlOpt === "Hunt") {
      owlHunt()
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

function owlHunt() {
  let rndHunt = Math.floor(Math.random() * 2)
  
  owl.hungry = true

  if (owl.bored) {
    if (rndHunt === 0) {
      console.log("")
      console.log("Missed!".red)
      console.log("")
      console.log("                    _   _")
      console.log("                   :o`.'o`")
      console.log("                   `-':`-'")
      console.log("                      :      ,-.")
      console.log("                  ,..-Y--..,;   ;.")
      console.log("                .`          :     `.")
      console.log("  _           .'             '-   O;.")
      console.log(",' `.        ;     __          __    `'@")
      console.log("`.   `-.,_,..    ,'..`.      ,'..`. ..-'")
      console.log("  ;         \"---+ dXXb `----+ dXXb '")
      console.log("                  qXXp        qXXp")
      console.log("                   ''          ''")
      console.log("Haha!! You can't catch me! I'm a mouse on wheels!!".cyan)
      console.log("")
    } else if (rndHunt === 1) {
      owl.score++
      owl.caught++

      console.log("")
      console.log("Success!".green)
      console.log("")
      console.log("                         ____    .-.")
      console.log("                     .-\"`    `\",( __\\_")
      console.log("      .-==:;-._    .'         .-.     `'.")
      console.log("   .'      `\"-:'-/          (  \\} -=a  .)")
      console.log("   /            \\/       \\,== `-  __..-'`")
      console.log("'-'              |       |   |  .'\\ `;")
      console.log("                  \\    _/---'\\ (   `\"`")
      console.log("                 /.`._ )      \\ `;")
      console.log("                 \\`-/.'        `\"`")
      console.log("                  `\"\\`-.")
      console.log("                     `\"`")
      console.log("")

      if (owl.score === 1) {
        console.log("You have caught ".cyan + owl.score + " rodent!".cyan)
      } else if (owl.score > 1) {
        console.log("You have caught ".cyan + owl.score + " rodents!".cyan)
      }
      console.log("")
    }
  } else {
    console.log("")
    console.log("There's no need to hunt! We already have full bellies.".red)
    console.log("")
  }
  

  owlInteract()
}

function owlEat() {
  if (owl.hungry && owl.caught > 0) {
    owl.bored = false
    owl.sleepy = true
    owl.caught--

    console.log("")
    console.log("()(),~~,.")
    console.log(" xx ___; )")
    console.log("=`=     (_.")
    console.log("")
  } else {
    console.log("")
    console.log("There's no such thing as a free meal! We must hunt our food if we want to eat...".red)
    console.log("")
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

    if (owl.score > owl.highscore) {
      owl.highscore = owl.score
      console.log("Your hunting score today was ".magenta + owl.score + ". Congratulations! That's a New Highscore!!".magenta)
    } else {
      console.log("Your hunting score today was ".magenta + owl.score + ". You're Highscore is ".magenta + owl.highscore + ". Try going for a New Highscore tomorrow!".magenta)
    }

    owl.score = 0
    owl.caught = 0
    owl.bored = true
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