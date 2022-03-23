document.addEventListener('DOMContentLoaded', function() { 
  console.log("Test")


  const deal_button = document.getElementById('deal-button');
  const dealer = document.getElementById("dealer-hand");
  const player = document.getElementById("player-hand");
  const hit_button = document.getElementById('hit-button'); 


    deal_button.addEventListener("click", function(doSomething) {
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


})
  
    
