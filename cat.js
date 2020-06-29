// Starts the Functionality for CAT
function catInteract() {
  inquirer.prompt([
    {
      type: "list",
      name: "catOpt",
      message: "What would you like to do?",
      choices: ["Check House Condition", "Destroy Furniture", "Buy New Furniture", "Play", "Eat", "Sleep"]
    }
  ]).then(function(answers) {
    if (answers.catOpt === "Check House Condition") {
      catHouseCondition()
    } else if (answers.catOpt === "Destroy Furniture") {
      catDestroyFurniture()
    } else if (answers.catOpt === "Buy New Furniture") {
      catBuyNewFurniture()
    } else if (answers.catOpt === "Play") {
      catPlay()
    } else if (answers.catOpt === "Eat") {
      catEat()
    } else if (answers.catOpt) {
      catSleep()
    }
  })
}

function catHouseCondition() {
  if (cat.houseCondition >= 80) {
    console.log("")
    console.log("The condition of your house is at " + cat.houseCondition + "%")
    console.log("You're house is in GREAT condition. Looking good!")
    console.log("     ..    ")
    console.log(" .---''-.  ")
    console.log("/________\\")
    console.log("|   __   | ")
    console.log("|[]|  |[]| ")
    console.log("|  |' |  | ")
    console.log("'--'--'--' ")
    console.log("")
  } else if (cat.houseCondition > 50 && cat.houseCondition < 80) {
    console.log("")
    console.log("The condition of your house is at " + cat.houseCondition + "%")
    console.log("Your house is starting to look a bit beat up. Still not bad though!")
    console.log(" ________  ")
    console.log("|   __   | ")
    console.log("|[]|  |[]| ")
    console.log("|  |' |  | ")
    console.log("'--'--'--' ")
    console.log("")
  } else if (cat.houseCondition > 20 && cat.houseCondition <= 50) {
    console.log("")
    console.log("The condition of your house is at " + cat.houseCondition + "%")
    console.log("You're house is really starting to show its wear and tear. You may want to consider purchasing some new furniture soon!")
    console.log("|[]|  |[]| ")
    console.log("|  |' |  | ")
    console.log("'--'--'--' ")
    console.log("")
  } else if (cat.houseCondition <= 20) {
    console.log("")
    console.log("The condition of your house is at " + cat.houseCondition + "%")
    console.log("Your house has basically been completely destroyed. You should really spruce it up some by buying new furniture!")
    console.log("'--'--'--' ")
    console.log("")
  }

  catInteract()
}

function catDestroyFurniture() {
  console.log("")
  console.log("             ____")
  console.log("            /    \\")
  console.log("           /______\\")
  console.log("              ||")
  console.log("              ||   /\\_/\\")
  console.log("  /~~~~~~\\    ||   >^.^<.---.")
  console.log("/~ ( )( ) ~\\  ||  _'-`-'     )\\")
  console.log("(_)======(_)  || (6--\\ |--\\ (`.`-.")
  console.log(" |________|  _||_    --'  --'  ``-'")
  console.log("")

  cat.destroyFurniture()

  catInteract()
}

function catBuyNewFurniture() {
  if (cat.houseCondition <= 70) {
    console.log("")
    console.log("  ____")
    console.log(" /    \\")
    console.log("/______\\")
    console.log("   ||     ")
    console.log("   ||     ")
    console.log("   ||    /~~~~~~~~~~~~~~~\\")
    console.log("   ||  /~ ( )( )( )( )( ) ~\\")
    console.log("   ||  (_)===============(_)")
    console.log("  _||_  |_________________|")
    console.log("")
    cat.buyNewFurniture()
  } else {
    console.log("Your house is already perfect! No need to do that at this time.")
  }

  catInteract()
}

function catPlay() {
  cat.hungry = true
  cat.meow()

  cat.play(catPlayArray)

  catInteract()
}

let catPlayArray = [catBox, catHunt]

function catBox() {
  console.log("")
  console.log("Ooooo LOOK!!! A box!")
  console.log("                         ,")
  console.log("  ,-.       _,---._ __  / \\")
  console.log(" /  )    .-'       `./ /   \\")
  console.log("(  (   ,'            `/    /|")
  console.log(" \\  `-\"             \\'\\   / |")
  console.log("  `.              ,  \\ \\ /  |")
  console.log("   /`.          ,'-`----Y   |")
  console.log("  (            ;        |   '")
  console.log("  |  ,-.    ,-'         |  /")
  console.log("  |  | (   |            | /")
  console.log("  )  |  \\  `.___________|/")
  console.log("  `--'   `--'")
  console.log("")

}

function catHunt() {
  console.log("")
  console.log("On the prowl! Gonna hunt me a mouse!")
  console.log(" _._     _,-'\"\"`-._")
  console.log("(,-.`._,'(       |\\`-/|")
  console.log("    `-.-' \\ )-`( , o o)      __()()")
  console.log("          `-    \\`_`\"'-     (__)(\")")
  console.log("                          -' \"\"  '")
  console.log("")
}

function catEat() {
  if (cat.hungry) {
    console.log('( ( (')
    console.log(' ) ) )')
    console.log('>++++°>')
  } else {
    console.log("No thanks; I'm not hungry. Maybe we can play before eating.")
  }
  cat.eat()

  catInteract()
}

function catSleep() {
  
  if (cat.sleepy) {
    console.log("")
    console.log("            /\\____/\\    __")
    console.log("          .'  \"\"\"\"  `,-'  `--.__")
    console.log("     __,- :   -  -  ;  \" ::     `-. -.__")
    console.log("  ,-sssss `._  `' _,'\"     ,'~~~::`.sssss-.")
    console.log(" |ssssss ,' ,_`--'_    __,' ::  `  `.ssssss|")
    console.log("|sssssss `-._____~ `,,'_______,---_;; ssssss|")
    console.log(" |ssssssssss     `--'~{__   ____   ,'ssssss|")
    console.log("  `-ssssssssssssssssss ~~~~~~~~~~~~ ssss.-'")
    console.log("       `---.sssssssssssssssssssss.---'")
    console.log("")
    console.log("What a lovely Cat Nap! I feel refreshed and ready to go!!")
    console.log("")
  }
  
  cat.sleep()

  catInteract()
}