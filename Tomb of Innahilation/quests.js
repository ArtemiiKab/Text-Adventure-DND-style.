function Quest (isActive, text, isDone, reward){
    this.isActive = isActive;
    this.text = text;
    this.isDone = isDone;
    this.reward = reward
}

let FindThief = new Quest (false, "There is a thief who steals from drunken sailors in the Tavern. I want you to find him and arrest. Ask locals and tavern.... customers for rumors. Valaisis should know something more about the thief, he is a pitfighter champion in the Tavern.", false, "100 gold if you can find and arrest him.")
FindThief.thief;

let BlackMarket = new Quest (false, "There are rumors about a new blackmarket opened near Dinosaur Races. I want you to investigate this rumors and find the main figure behind the illigal business. This is a hidden and carefull society. I publicly arrested you, so you could have a chance to gain their trust. You should start investigation by speaking to Bookmaker on a Races. Try to bring his interest to your persona. Spend enough gold.", false, "If you find the blackmarket and his owner... I would think about releasing you from all accusations." )



let DrinkingContest = new Quest (false, "HA, we run an everyweek drinking contest now! Yo can participate if you are capable of drinking like a dwarf.", false, "Drink 10 Goblin Vodkas and if you survive, you'll get 100 gold.")


let MainQuest = new Quest (false, "You need to find the source of the strange undead curse. Moreover, I want you to stop it, dispel, destroy, just stop it.", false, "If you succeed and return, you will be rewarded with 1000gold pieces and magic rare item" )
let currentQuest = MainQuest;
