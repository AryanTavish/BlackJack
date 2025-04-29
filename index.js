

let cards = []
let sum = 0
let backJack=false;
let isAlive=false;
let message= " ";
let startGameEl=true;

//message hero 
let messageEl = document.getElementById("message-el")
console.log(messageEl)



//plaeyer
let player={
    name:"Nightshot357",
    chips: 2000,
}

//loggging player Chips and name
let playerEL=document.getElementById("player-el")
playerEL.textContent= player.name +": $" + player.chips;



//start game button 
function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    
    for (let i=0; i<cards.length;i++){
        sum+=cards[i];
    
    }
    isAlive=true;
    
    if(startGameEl===true){
        renderGame();
    }


   
}

//function to get random card
function getRandomCard(){
    let randomcard= Math.floor(Math.random()* 13)+1;
    if (randomcard===1){
        return 11;
    }else if (randomcard>10){
        return 10;
    }
    return randomcard;
}


//function to render game into startgame button
function renderGame(){
    if (sum<21){
        message="Sorry Your sum is less then 21!, Do you want to draw a new card? 🙂"
        backJack=true;
        isAlive=true;
       
    }else if (sum === 21){
    
        message="Blackjack! 🥳 ,Bonus $1000 chips  ";
        layer.chips+=1000;
        isAlive=false;
        backJack=true;
        
    }else{
        message="You lost the game!, $1000 Deducted"
        backJack=false;
        player.chips-=1000;
        isAlive=false;
    }
    messageEl.textContent = message;
    document.getElementById("sum").textContent="sum: "+sum;
    document.getElementById("cards").textContent="Cards: "+cards
    playerEL.textContent= player.name +": $" + player.chips;
    

    startGameEl=false;
        

}


//function for new card
function NewCard(){
    console.log("drawin a new card from the deck")
    startGameEl=false;
    let thirdCard=getRandomCard();;
    cards.push(thirdCard);
    sum+=thirdCard;
    if (isAlive===true && backJack===true){
        renderGame()
    }else if (isAlive===false && backJack===false){
        message="The Game has ended, please start again";
        messageEl.textContent=message;
    }else if (isAlive===false && backJack===true){
        message="The Game has ended, you have won!!! please start again";
        messageEl.textContent=message;
    }

    
    

   
    
   




}

