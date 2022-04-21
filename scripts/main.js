document.addEventListener('DOMContentLoaded', function() { 

  // declared my buttons 
  const deal_button = document.getElementById('deal-button');
  const dealer = document.getElementById("dealer-hand");
  const player = document.getElementById("player-hand");
  const hit_button = document.getElementById('hit-button'); 
 
//adds a click function to deal button 
    deal_button.addEventListener("click", function() {
      let dealerOrPlayer = "dealer";
      
// when deal is click 4 images show
        for (let index = 0;index < 4 ; index++) { 
        
          let card = document.createElement("img");
          card.src = "images/2_of_clubs.png";  // pulls a card image
        

        if (dealerOrPlayer == "dealer" ) {
            dealer.appendChild(card);  // if dealer o
        } else { 
            player.appendChild(card); 
        } 

        if(index == 1) {
           dealerOrPlayer = "player";
        }
        }
    })
 
    // adds function to the hit button
    hit_button.addEventListener("click", function() {
    //let dealerOrPlayer = "dealer";

      for (let index = 0; index < 2;index++) {
        let card = document.createElement("img");
        card.src = "images/2_of_clubs.png"; 

        if (index == 0 ) {
          dealer.appendChild(card); 
      } else { 
          player.appendChild(card); 
        } 
      }
    })

    //Create a function buildDeck returns a new array with 52 card objects. 
    //There are 4 suits: diamonds, clubs, hearts and spades. 
    //For each suit there is a rank from 1 to 13. 
    // set this to constant variable 
   
    let ranks = ['1','2','3','4','5','6','7','8','9','10','11','12','13'];
     
    let suits = ['diamonds','clubs','hearts','spades'];
    
    function buildDeck () {
 
   // nested for loop for every rank four suits are added to that rank 
    for (let index = 0 ; index < 13; index++) {
      //console.log(ranks[index])
      
        for (let suits_index = 0; suits_index < 4; suits_index++) {
        //console.log(suits[suits_index])
    
        const newCard = { Key : ranks[index], Values : suits[suits_index] };

            cardDeck.push(newCard);
            
        //console.log(newCard)

        }
    let cardDeck = new realDeck; // use this through out the function
      } 
    }
    buildDeck();
    console.log(cardDeck);   
    

   let playerHand = []
   let dealerHand = []
   
    deal_button.addEventListener("click", function() {
    
    // adds a card to the player hand after click   
    const player = document.getElementById("player-hand");
   
    for (let index = 0; index < 1;index++) {
      let card = document.createElement("img");
      card.src = "images/king_of_hearts.png"; 
      player.appendChild(card); 
      //dealer.remove(card)
      cardDeck.pop();
    }
    
    //dealer.remove(card)
    
    const dealer = document.getElementById("dealer-hand");
    
    for(let index = 0; index > 3;index++) {
      let card = document.createElement("img");
      card.src = "images/king_of_hearts.png"; 
      dealer.removeChild(card);
      } 
      //cardDeck.pop();
      
    
    //dealDeck();
    console.log(cardDeck);
  }) 

    // getCardImage function () { 

    //   const cardDeck = [
    //     {rank: "2", suit: "spades"}
    //     {rank: "2", suit: "spades"}
    //     {rank: "2", suit: "spades"}
        

    //   ]



  //}


    // deal_button.addEventListener("click", function(buildDeck) {
    //   const cardDeck = buildDeck.cardDeck;
    //   const dealer = document.getElementById("dealer-hand");
    
    //  dealer.append(cardDeck.pop());
      
    //    buildDeck();

    // })

  
    
       
      //return buildDeck;
     // build deck function 
    
  //buildDeck(); //calls the build deck function when the window is refreshed 
  
  // deal_button.addEventListener("click", function() {

  //   const dealer = document.getElementById("dealer-hand");

  //   dealer.append(cardDeck.pop());

  //   //buildDeck();
  //   //let newCard = [];
   
  //   playerHand = []; 

  //  // buildDeck.splice(-1) takes from the last

  //     for (let i = 0; i < newCard.length - 1; i++){ 
    
  //           b.splice(i, 1); 
  //       }
  //       console.log(newCard);
  //})

}) // window function  
  
 



  
    

