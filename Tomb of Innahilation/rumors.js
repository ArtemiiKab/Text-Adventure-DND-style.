let rumors=[
  "A strange curse is wakining dead from the graves. Seems like local government doesn't know how to stop it.", 
  "There is a thief  who constantly steals from drunken sailors in the Tavern...",
  "There is a thief  who constantly steals from drunken sailors in the Tavern...",
  "I don't spread any rumors traveler...",
  "Some say, there is something beneath Dinosour racing, something shady is going on."
]
let rumor;
let randomRumor = function() {
    let randomNpcNumber = Math.floor(Math.random()*3);
    switch(randomNpcNumber){
         case 0:
         rumor = rumors[0];
         break;
         case 1: 
         rumor = rumors[1];
         break; 
         case 3:
        rumor = rumors[2];
        break;
     }
     return rumor
}

