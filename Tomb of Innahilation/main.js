function displayNpc(){
    let getPicture = document.querySelector('#storyPic2');
    getPicture.style.background = 'url("./img/npc/'+currentNpc.name+'.jpg")';
    getPicture.style.justifyContent = "center";
    getPicture.style.backgroundSize = "100%";
    getPicture.style.backgroundRepeat = "no-repeat";
 
    getPicture.onmouseover = function(){
        getPicture.style.backgroundSize = "110%";
    };
    getPicture.onmouseout = function(){
        getPicture.style.backgroundSize = "100%";
    } 
}


function changeLocPic( currentLocation, locationReview){
    
    //add locations where you want to generate random npc
    if(currentLocation === Port){
      currentLocation.npc =  randomNpc();
      currentNpc=currentLocation.npc;
      if(FindThief.isDone===false && BlackMarket.isActive===false){
          currentNpc = Rapoza
      }

      
    } else if (currentLocation === Market){
        currentLocation.npc = randomMerchant();
        currentNpc=currentLocation.npc;
        
    } else if (currentLocation === Tavern){
        currentLocation.npc = randomBarNpc();
        currentNpc = currentLocation.npc;
    } else if (currentLocation === Racing){
        currentLocation.npc = randomNpc();
        currentNpc=currentLocation.npc;
    }
        
    
    //add backgroundloc
    let newBackground = document.querySelector('.container-fluid');
    newBackground.style.background = 'url("./img/locations/'+currentLocation.name+'.jpg")';

    newBackground.style.backgroundPosition = "center center";
    newBackground.style.backgroundSize = "cover";
    newBackground.style.backgroundRepeat = "no-repeat";
    newBackground.style.backgroundAttachment = "fixed";
    //adds npc picture and textarea
    let newDisplay =  document.querySelector('#introStory');
    newDisplay.innerHTML = '<div  class = "col-6" id="storyPic2" data-text="'+currentNpc.data_text+'"></div><textarea readonly class = "col-6" id="talk">'+locationReview+'</textarea>';
   
    displayNpc();
//......................................quests shinanigans...............................................
    let talk = document.querySelector("#talk");
    if (currentLocation === Tavern && currentLocation.npc === Beggar && FindThief.isActive){
        talk.innerHTML += "\n\n A beggar is asking you to come close to him...";
    }else if(currentNpc === Rapoza && currentLocation === Port){
        talk.innerHTML += "\n\n Stop! You are under arrest for stealing a dragon-cows from local farmers, selling shadow grass and riding a horse while being naked in a Tavern. You would be put in jail and judged according to a local laws. Can you say anything for your defence?";
        document.getElementById('go-button').disabled =true;
    }
}


// function below starts the game
function startGame(){
    currentNpc = Sindra;
    currentLocation = Boat;
    let getButtons = document.querySelector("#choice");
    changeLocPic(currentLocation, currentLocation.currentSituation);
    getButtons.innerHTML = '<div class ="row" id="first-button-row"><div id="button-ask"><button class="col" onclick="getAskButtons()">Ask</button></div><div id="button-look"><button class="col" onclick="getLookButtons()">Look</button></div><div id="button-go"><button class="col" onclick="getGoButtons()" id="go-button">Go</button></div></div>';
    //function below is a sailing time  
    setTimeout(say, 1000); //half a minute = 30 000
    function say(){
    isArrived = true;
    let talkFinish = document.querySelector("#talk");
    talkFinish.innerHTML += '\n\n ....Suddenly you fill a strong push, barely catching the nearest barrell you prevent yourself from falling.  It seems that ship has arrived to port Nyanzaru. You can get to the port by going north...';
    }
 }






























































