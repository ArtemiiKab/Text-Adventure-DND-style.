let player ={
gold: 100,
life: 100
}

function getAskButtons(){
    let getButtons = document.querySelector('#button-ask');
    getButtons.innerHTML = '<button class="col" id="ask-name" onclick="askName()">Name</button><button class ="col" id="ask-rumor" onclick="askRumor()">Rumor</button><button class = "col" id="quest" onclick="askQuest()">Quest</button><button class="col" id="reward" onclick="askReward()">Reward</button><button class="col" id="back" onclick="buttonBack()">Back</button>';
    if (currentNpc === Beggar&& currentLocation !== Tavern){
        player.gold -= 5;
        talk.innerHTML += "\n\n ...You've lost 5 gold to the beggar";
     } 
     if (currentNpc === Beggar && currentLocation === Tavern){
        currentNpc = Valaisis;
        let newDisplay =  document.querySelector('#introStory');
        newDisplay.innerHTML = '<div  class = "col-6" id="storyPic2" data-text="'+currentNpc.data_text+'"></div><textarea readonly class = "col-6" id="talk">'+currentLocation.description+'</textarea>';
         displayNpc();
        talk.innerHTML += "\n\n -Hey! what are you doing here? How many times I told you not to show up at this place?";
        setTimeout(respond1, 1500);
         function respond1(){
         talk.innerHTML += '\n ...You see a giant dwarf coming through the center of tavern. After a moment his hands land on a shoulders of the beggar. You see poor person flying out of the tavern.'}
         
         buttonBack()
        }
    if (currentNpc === Rapoza && currentLocation===Port){
        currentLocation = Jail;
        buttonBack();
        document.getElementById('go-button').disabled =true;
        changeLocPic(currentLocation, currentLocation.currentSituation);
    }
    
}


function buttonBack(){
    let getButtons = document.querySelector('#choice');
    getButtons.innerHTML = '<div class ="row" id="first-button-row"><div id="button-ask"><button class="col" onclick="getAskButtons()">Ask</button></div><div id="button-look" ><button class="col" onclick="getLookButtons()">Look</button></div><div id="button-go"><button class="col" onclick="getGoButtons()" id="go-button">Go</button></div></div>';
    if(FindThief.isActive){
        getButtons.innerHTML +='<div id="button-acuse"><button class ="col" onclick ="arrest()">Arrest</button></div>'
    }
}

function askName(){
    let talk = document.querySelector("#talk");
    talk.innerHTML += '\n\n - Who are you?';
         setTimeout(respond1, 1500);
         function respond1(){
         talk.innerHTML += '\n - '+ currentNpc.name}
}

function askRumor(){
    let talk = document.querySelector("#talk");
    talk.innerHTML += '\n\n - Have anything strange happened recently?';
         setTimeout(respond2, 1500);
         function respond2(){
         talk.innerHTML += "\n - "+ currentNpc.rumor;}
         if(currentNpc === Valaisis){
             FindThief.isEvidence = true;
         }
}

function askQuest(){
    let talk = document.querySelector("#talk");
    talk.innerHTML += '\n\n -  Can I do something for you?';
    setTimeout(respond4, 1500);
    function respond4(){
        if(currentNpc.quest && currentNpc.quest.isDone===false&&currentNpc.quest.isActive===false){
         talk.innerHTML += "\n - "+ currentNpc.quest.text;
         currentQuest = currentNpc.quest;
         currentQuest.isActive = true;

            if(currentNpc === Samdarag){
            FindThief.thief = Ove;
            let getAcuseButton = document.querySelector('#choice');
            getAcuseButton.innerHTML += '<div id="button-acuse"><button class ="col" onclick ="arrest()">Arrest</button></div>';
            };
        
            if(currentNpc === Valaisis){
            talk.innerHTML += "\n ...Suddenly you feel a firing pain on your cheek and your eyes flash for a moment "; 
            talk.innerHTML += "\n You receive 8 damage from a giant dwarven hand.";
            player.health -= 8;
            };

        }else if(currentNpc.quest.isActive) {
            talk.innerHTML += "\n - I've already gave you a mission!";
            talk.innerHTML += "\n - "+ currentNpc.quest.text;
        } else {
            talk.innerHTML += "\n - I don't have any missions for you now.";
        }     
    }
}

function askReward(){
    let talk = document.querySelector("#talk"); 
    talk.innerHTML += "\n\n - Let's discuss a reward.";
         setTimeout(respond5, 1500);
         function respond5(){
             if(currentNpc === Valaisis){
                talk.innerHTML += "\n ...Suddenly you feel a firing pain on your cheek and your eyes flash for a moment "; 
                talk.innerHTML += "\n You receive 8 damage from a giant dwarven hand.";
                player.health -= 8;
             }

             if(currentQuest.isActive && currentQuest === currentNpc.quest){
            talk.innerHTML += "\n - "+ currentNpc.quest.reward;
//...........................BlackMarket rescue from jail........................................
            document.getElementById('go-button').disabled =false;
        }else{
            talk.innerHTML += "\n - A reward? For what?";
        }
    }   
}
//......................................................................................................

function getLookButtons(){
    let getButtons = document.querySelector('#button-look');
    getButtons.innerHTML = '<button class="col" id="look-person" onclick="lookPerson()">'+currentNpc.race+'</button><button class ="col" id="lookLocation" onclick="lookLocation()">'+currentLocation.name+'</button><button class="col" id="look-pocket" onclick="lookPocket()">Pocket</button><button class="col" id="back" onclick="buttonBack()">Back</button>'
}

function lookPerson(){
    let talk = document.querySelector("#talk");
//............quest special................................................................
    if(currentNpc === FindThief.thief && FindThief.isEvidence){
    FindThief.thief.outfit += " You see a blood spot covered by bondage on the leg."; 
    FindThief.isCaught = true;
    }
//............response......................................................................
    talk.innerHTML += '\n\n..... You see '+currentNpc.outfit;
}

function lookLocation(){
    let talk = document.querySelector("#talk");
    talk.innerHTML += '\n\n..... You see '+ currentLocation.description;
    if (currentLocation === Racing && currentNpc!== Intazu){
        let getBookmakerButton = document.querySelector('#choice');
        getBookmakerButton.innerHTML += '<div id="button-getBookmaker"><button class ="col" onclick ="getBookmaker()">Bookmaker</button></div>';
        
    }
}

function lookPocket(){
    let talk = document.querySelector("#talk");
    talk.innerHTML += '\n\n...You opened your pocket and counted '+ player.gold + ' gold there.';
}

//..........................................................................................................

function getGoButtons(){
    let getButtons = document.querySelector('#button-go');
    getButtons.innerHTML="";
    if(currentLocation.north){
    getButtons.innerHTML += '<button class="col" id="go-north" onclick="goNorth()">'+currentLocation.north.name+'</button>';
    }
    if(currentLocation.south){
     getButtons.innerHTML  += '<button class ="col" id="goSouth" onclick="goSouth()">'+currentLocation.south.name+'</button>';
    }
    if(currentLocation.west){
        getButtons.innerHTML  += '<button class ="col" id="goWest" onclick="goWest()">'+currentLocation.west.name+'</button>';
    }
    if(currentLocation.east){
        getButtons.innerHTML  += '<button class ="col" id="goEast" onclick="goEast()">'+currentLocation.east.name+'</button>';
    }
    getButtons.innerHTML+= '<button class="col" id="back" onclick="buttonBack()">Back</button>';
}

function goNorth(){
    buttonBack();
    if(isArrived === true){
        
        currentLocation = currentLocation.north;
        currentNpc = currentLocation.npc;
        changeLocPic(currentLocation, currentLocation.currentSituation);
        } else {
            talk.innerHTML += '\n\n You are on a ship in the middle of the ocean, there is nowhere to go...';
        };
       
}

function goSouth(){
    if (currentLocation === Port){
        talk.innerHTML += '\n\n...You can not go back on a ship until you find out what is a source of the curse';
    }else{
    currentLocation = currentLocation.south;
    currentNpc = currentLocation.npc;
    changeLocPic(currentLocation, currentLocation.currentSituation);
    };
    buttonBack();
}

function goWest(){
    currentLocation = currentLocation.west;
    currentNpc = currentLocation.npc;
    changeLocPic(currentLocation, currentLocation.currentSituation);
    buttonBack();
}

function goEast(){
    currentLocation = currentLocation.east;
    currentNpc = currentLocation.npc;
    changeLocPic(currentLocation, currentLocation.currentSituation);
    buttonBack();
}
//.............................Quest buttons and functions.........................

function arrest(){
    if (currentLocation.npc === FindThief.thief && FindThief.isEvidence && FindThief.isCaught){
        alert ("You found a thief!");
        FindThief.isActive = false;
        FindThief.isDone = true;
        Ove = Samdarag;
        currentNpc = Samdarag;
        let newDisplay =  document.querySelector('#introStory');
        newDisplay.innerHTML = '<div  class = "col-6" id="storyPic2" data-text="'+currentNpc.data_text+'"></div><textarea readonly class = "col-6" id="talk">'+currentLocation.description+'</textarea>';
        displayNpc();
        let talk = document.querySelector("#talk");
        talk.innerHTML += "\n\n - My friend! Thank you for arresting this thief! I would arrange his...leaving the city. This is your reward.";
        talk.innerHTML += "....You've received 100 gold"; 
        player.gold +=100;
        Samdarag.quest = "Everything is fine now."
        Samdarag.rumor = rumors[0];
        Viribus.rumor = rumors[0];
        rumors[1] = rumors[0];
        rumors[2] = rumors[0];
        buttonBack();
        
    } else {
        player.health -=20; 
        let talk = document.querySelector("#talk");
    talk.innerHTML += "\n\n.....The evidence didn't support your arrest. You got bitten by locals for false accusation, you've lost 20 health.";
    }
}


//..........................................this function changes textarea for tradearea....................................................
function initiateTrade(){
    let newDisplay =  document.querySelector('#introStory');
    newDisplay.innerHTML = '<div  class = "col-6" id="storyPic2" data-text="'+currentNpc.data_text+'"></div><div class = "col-6" id="market"><div class ="row"><div class = "col">Iron Sword</div><div class="col">Gives you + 1 to Attack</div><div class = "col">Price: 100 gold </div><button class ="col-2">Buy</button></div><div class ="row"><div class = "col">Iron Shield</div><div class="col">Gives you +1 AC</div><div class = "col">Price: 120 gold</div><button class ="col-2" >Buy</button></div></div>';
    displayNpc();
}
//...............................Dinosaur Racing..................................................
function getBookmaker(){
  if(player.gold > 0){
    currentNpc = Intazu;
    let newDisplay =  document.querySelector('#introStory');
    newDisplay.innerHTML = '<div  class = "col-6" id="storyPic2" data-text="'+currentNpc.data_text+'"></div><div class = "col-6" id="dino-race"><div class ="row"><div class = "col"> Thunder Claw</div><div class="col">Chance 1:3 </div><input type="number" min="10" max="'+player.gold+'" class = "col" value="10" step="10" id="input1" ><button class ="col" onclick="bet1()">Bet</button></div><div class ="row"><div class = "col">Stomper Tryke</div><div class="col">Chance 1:4 </div><input type="number" min="10" max="'+player.gold+'" class = "col" value="10" step="10" id="input2"><button class ="col" onclick="bet2()" >Bet</button></div><div class ="row"><div class = "col">Ego raptor</div><div class="col">Chance 1:2 </div><input type="number" min="10" max="'+player.gold+'" class = "col" value="10" step="10" id="input3"><button class ="col" onclick="bet3()">Bet</button></div><div class ="row"><div class = "col">Stego Go</div><div class="col">Chance 1:5 </div><input type="number" min="10" max="'+player.gold+'" class = "col" value="10" step="10" id="input4"><button class ="col" onclick="bet4()">Bet</button></div></div>';
    displayNpc();
    buttonBack();
    }else if(player.gold<=0 && BlackMarket.isActive){
    buttonBack();
    currentNpc = Intazu;
    let newDisplay =  document.querySelector('#introStory');
    newDisplay.innerHTML = '<div  class = "col-6" id="storyPic2" data-text="'+currentNpc.data_text+'"></div><textarea readonly class = "col-6" id="talk">'+currentLocation.description+'</textarea>';
    displayNpc();
    let talk = document.querySelector("#talk");
    talk.innerHTML += "\n\n - HO HO HO, I see you are a player! Don't let the small loses upset you my friend!\n I'm a fair dealer, and I could not let a good hero like you finish a day on such a note, wait here few seconds...";
    setTimeout(bringCassandra, 10000);
        function bringCassandra(){
            currentNpc = Cassandra;
            newDisplay.innerHTML = '<div  class = "col-6" id="storyPic2" data-text="'+currentNpc.data_text+'"></div><textarea readonly class = "col-6" id="talk">'+currentLocation.description+'</textarea>';
             displayNpc();
             let talk = document.querySelector("#talk");
             talk.innerHTML += "\n\n....You see bookmaker bringing a tall, thin blackhaired woman...";
        }
   
    }
}

function bet1(){
    let getMoney = document.querySelector('#input1').value;
    player.gold -= getMoney;
    let run = Math.floor(Math.random()*3);
    if(run===0){
        player.gold += getMoney*4;
        alert("You won " + getMoney*3)
    }else{
    alert("You've lost" + getMoney)
    }
   getBookmaker();
    
}

function bet2(){
    let getMoney = document.querySelector('#input2').value;
    player.gold -= getMoney;
    let run = Math.floor(Math.random()*4);
    if(run===0){
        player.gold += getMoney*5;
        alert("You won " + getMoney*4)
    }else{
    alert("You've lost" + getMoney)
    }
    getBookmaker();
}

function bet3(){
    let getMoney = document.querySelector('#input3').value;
    player.gold -= getMoney;
    let run = Math.floor(Math.random()*2);
    if(run===0){
        player.gold += getMoney*3;
        alert("You won " + getMoney*2)
    }else{
    alert("You've lost" + getMoney)
    }
    getBookmaker();
}

function bet4(){
    let getMoney = document.querySelector('#input4').value;
    player.gold -= getMoney;
    let run = Math.floor(Math.random()*5);
    if(run===0){
        player.gold += getMoney*6;
        alert("You won " + getMoney*5)
    }else{
    alert("You've lost" + getMoney)
    }
    getBookmaker();
}
//......................................................................................................