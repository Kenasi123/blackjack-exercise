document.addEventListener('DOMContentLoaded', function() { 
  console.log("Test")


  const deal_button = document.getElementById('deal-button');
  const dealer = document.getElementById("dealer-hand");
  const player = document.getElementById("player-hand");
  const hit_button = document.getElementById('hit-button'); 


    deal_button.addEventListener("click", function() {
      let dealerOrPlayer = "dealer";
      
      //const dealer = document.getElementById("dealer-hand");
      //const player = document.getElementById("player-hand");
      
  
        for (let index = 0;index < 4 ; index++) {
          let card = document.createElement("img");
          card.src = "images/2_of_clubs.png"; 
        

        if (dealerOrPlayer == "dealer" ) {
            dealer.appendChild(card); 
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
    let dealerOrPlayer = "dealer";

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
   
    function buildDeck () {
 
      const cardDeck = new Array(); 
   
      let ranks = ['1','2','3','4','5','6','7','8','9','10','11','12','13'];
       
       let suits = ['diamonds','clubs','hearts','spades']; //4 
       
   
       for (let index = 0 ; index < 13; index++) {
         //console.log(ranks[index])
         
           for (let suits_index = 0; suits_index < 4; suits_index++) {
           //console.log(suits[suits_index])
       
           let newCard = { Key : ranks[index], Values : suits[suits_index] };
   
               cardDeck.push(newCard);
           
          console.log(cardDeck);    
           //console.log(newCard)
   
           }
       }
    }
    buildDeck();
    
       
      //return buildDeck;
     // build deck function 
    
  //buildDeck(); //calls the build deck function when the window is refreshed 
  
  // deal_button.addEventListener("click", function() {

  //   //buildDeck();
  //   //let newCard = [];
  //   dealerHand = [];
  //   playerHand = []; 

  //  // buildDeck.splice(-1) takes from the last

  //     for (let i = 0; i < newCard.length - 1; i++){ 
    
  //           b.splice(i, 1); 
  //       }
  //       console.log(newCard);
  // })

}) // window function  
  
 



  
    
