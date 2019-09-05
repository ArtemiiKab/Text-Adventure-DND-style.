function Npc(name, race, data_text, outfit, rumor, quest, isTrade){
this.name = name;
this.race = race;
this.data_text = data_text;
this.outfit = outfit;
this.rumor = rumor;
this.quest = quest;
this.isTrade = isTrade;
}

let currentNpc;



//global
let Sindra = new Npc ("Sindra Sylvane, the expedition leader.", "Human", "Lady Sindra Sylvane - the sponsor and a leader of the expedition to the island", "a young female human, covered in black light-weight clothes with a silver mask on a face.", rumors[0], MainQuest, false);
let City = new Npc ("...everyone seems too busy to respond.", "Port", "Port Nyanzaru - a giant port fulled with various individuals. Sailers, merchants, beggars are all gathered in a giant twister of voices, bodies and scales...", "Port Nyanzaru - a giant port fulled with various individuals. Sailers, merchants, beggars are all gathered in a giant twister of voices, bodies and scales...", "Spending an hour listeting to the crowd you've heard that" +randomRumor(), false, false );
//merchants
let Samdarag = new Npc ("Samdarag the merchant.","Human", "Samdarag is the biggest merchant on an island", "a middle-aged male man, wearing national sand clothes in light colors.", rumors[2], FindThief, true );
let Ove = new Npc ("Ove the merchant.", "Halfling", "Ove is a small merchant that was pushed to live here due to Imperial expansion on his lands", " a young male halfling with wide opened eyes and few spots on his shirt.",  rumors[2] + " My friend Samdarag suffered the most from it. You should find him on the Market", false, true );

//tavern inhabitants
let Beggar = new Npc ("Beggar","Human", "Just one of the many others, who lost too much to leave a decent life", " a thin to bone male man covered in dirty closes of different types and shapes, his skin is almost pale white and a mouth is dry from dehydration.", randomRumor(), false, false );
let Viribus = new Npc ("Viribus Razzortail, a sorcerer.", "Dragonborn", "Usually it is quite rare to meet a dragonborn in person, but on this island exist a big society of this half dragon race creatures. Magicaly gifted, they could be stubborn as hell.", " a middle-aged dragonborn male. Wearing expensive fansy violet cloak with bronze clasp.", rumors[3] + " I was robbed by this creature one time, but Samdarag suffered alot more. You should find him on the Market. He never enters a tavern anymore.", false, false);
let Valaisis = new Npc ("Valaisis Firebeard, the pitfight champion.", "Dwarf", "Dwarfs are short but huge in shoulders. Loud, mostly drunk and incredibly strong. They leave to their believes and tradition", " a mountain of muscles, tattoos and blood. He is an experienced fighter if you saw one.", rumors[2] + "I've almost catched him last night! He tried to steal from one of the guys, but I stabbed him in a leg. Unfortunatelly he kept his face hidden, so I could not regonize the bastard. He is probably in a port now, trying to escape. Try to look for him there.", "", false)
let Jacob = new Npc ("Jakob the bartender.","Bartender", "He poors, you drink. You share a story, he listens.","The fire in his eyes held a more literal meaning than could be said for most. The swirling, flickering orbs of yellow and orange peered out from his grizzled face", randomRumor() , DrinkingContest, false)
// Bookmaker 
let Intazu = new Npc ("Intazu, the great deal maker.", "Bookmaker", "This races started as a royal tradition, but with a help of time and...illigal business, now - everyone could particepate or bet.", " an elder, tough man, with eyes that can see through anyone.", randomRumor(),false,false)
let Cassandra = new Npc ("Cassandra Lanyra, you can call me Cass.","Woman", "Some girls play toys, some girls play boys", " a beautiful human female, with dark skin, ritualistic tattos over all her face and body.", randomRumor(), false,false)

//Blackmarket quest 
let Rapoza = new Npc ("Rapoza, the cheif officer of local militia.", "Tiefling", "Tieflings are usually known as half-demons, beasts that could not be trusted. But sometimes they appear different. Sometimes.", " a thin, but muscular tiefling female, is it red shin and dark horns, or something visious in her eyes, that makes you feel uncomfortable.", rumors[4], BlackMarket, false)







//..........................................Random npc placements......................................
let randomNpc = function(){
    let randomNpcNumber = Math.floor(Math.random()*6);
   switch(randomNpcNumber){
        case 0:
        currentNpc = City;
        break;
        case 1:
        case 2:
        currentNpc = Beggar
        break;
        case 3: 
        currentNpc = Viribus;
        break;
        case 4:
        currentNpc = Ove;
        break;
        case 5:
        currentNpc = Viribus;
        break;
    }
    return currentNpc
}

let randomMerchant = function(){
    let randomNpcNumber = Math.floor(Math.random()*2);
   switch(randomNpcNumber){
        case 0:
        currentNpc = Ove;
        break;
        case 1: 
        currentNpc = Samdarag;
        break; 
    }
    return currentNpc
}

let randomBarNpc = function(){
    let randomNpcNumber = Math.floor(Math.random()*2);
   switch(randomNpcNumber){
        case 0:
            if(FindThief.isActive){
        currentNpc = Beggar;
            } else { currentNpc = Ove;
        }
        break;
        case 1: 
        currentNpc = Viribus;
        break; 
    }
    return currentNpc
}
//........................random quest npc choice.............................................
let randomThief = function(){
    let randomNpcNumber = Math.floor(Math.random()*2);
   switch(randomNpcNumber){
        case 0:
        FindThief.thief = Ove;
        break;
        case 1: 
        FindThief.thief = Viribus;
        break; 
    }
    return FindThief.thief;
}
