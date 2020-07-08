// Starts the Functionality for BUNNY
function bunnyInteract() {
  inquirer.prompt([
    {
      type: "list",
      name: "bunnyOpt",
      message: "What would you like to do?",
      choices: ["Play", "Eat", "Sleep", "Done?"]
    }
  ]).then(function(answers) {
    if (answers.bunnyOpt === "Play"){
      bunnyPlay()
    } else if (answers.bunnyOpt === "Eat") {
      bunnyEat()
    } else if (answers.bunnyOpt === "Sleep") {
      bunnySleep()
    } else if (answers.bunnyOpt === "Done?") {
      bunnyDone()
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

function bunnyDone() {
  inquirer.prompt([
    {
      type: "list",
      name: "bunnyDone",
      message: "Are you done playing with the bunny?",
      choices: ["NO!! I made a mistake. I still want to play with the bunny!", "Yes I am done playing with the bunny. BUT I would like to play with another DigitalPal.", "Yes, I'm done playing with all DigitalPals."]
    }
  ])
}