function Location (name, description, currentSituation, npc, north, south, west, east){
this.name = name;
this.description = description;
this.currentSituation = currentSituation;
this.npc = npc;
this.north = north;
this.south = south;
this.west = west;
this.east = east
}


let currentLocation;
let isArrived = false;


let Boat = new Location ("Wooden boat", "a small dirty boat with a cargo of few old boxes, two wooden barrels, and a nearly broken table ", " You are sailing on a ship to the port Nyanzaru. A young women enters your room, her face is covered by black hood.", Sindra, "", false, false, false);
let Port = new Location ("Port Nyanzaru", "Port Nyanzaru - a giant port fulled with various individuals. Sailers, merchants, beggars are all gathered in a giant twister of voices, bodies and scales...", "You are standing in the middle of the port Nyanzaru. There is a market to the north, and your ship to the south.", City, "", Boat, false, "");
let Market = new Location("Market Nyanzaru", "a busy place, covered in dirt, tons of various products and merchants", "You've made your way through the crowded streets to the main market. A huge-sized man looks at you with curiosity. There is a port to the south.", Samdarag, false, Port, "", false );
let Tavern = new Location ("Tavern Thundering Lizzard", " a loud, noizy mess, full of drunken sailors, local magiciants, musiciants and Adventurers like you...", "You enter the tavern and see a crowded place, a few musicians play folky tunes, a tall barmen working on a drinks, and something that looks like a pitfight club in the corner.", Valaisis, false, false, Port, false );
let Racing = new Location ("Dinosaur Racing", "... roars, screaming people, cheers and cries, you see a man standing on a chair, taking bets. This place was designed for winning or losing all.", "...ROAR!...SCREAM!....You are standing in the middle of screaming and chearing crowd! The next race would start in a few moments, do you wanna make a bet?", Samdarag, false, false, false, Market );
let Jail = new Location ("Nyanzaru Jail", "a dirty, ratted places, kinda like most of the jails are", "...You've been drugged and put in a cellar for a night. It is dark, cold, and smelly..You couldn't sleep and spended hours walking and counting long seconds. In the morning you've found a chief officer standing in front of your cellar.", Rapoza, Port, false, false, false);
Boat.north = Port;
Port.north = Market;
Port.east = Tavern;
Market.west = Racing;




    
    