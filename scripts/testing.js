
  function buildDeck () {

    let ranks = ['1','2','3','4','5','6','7','8','9','10','11','12','13']; //13 
    // [{ "suit" :'1'},
    // {"suit":'2'},
    // {"suit":'3'},
    // {"suit":'4'},
    // {"suit":'5'},
    // {"suit":'6'},
    // {"suit":'7'},
    // {"suit":'8'},
    // {"suit":'9'},
    // {"suit":'10'},
    // {"suit":'11'},
    // {"suit":'12'},
    // {"suit":'13'}] 
    let suits = ['diamonds','clubs','hearts','spades']; //4 

    //[{"rank":'diamonds'},{"rank":'clubs'},{"rank":'hearts'},{"rank":'spades']
    //13 * 4 = 52 
    

    for (let index = 0 ; index < 13; index++) {
      //console.log(ranks[index])
      
        for (let suits_index = 0; suits_index < 4; suits_index++) {
        //console.log(suits[suits_index])
          
        let newCard = (`rank :${ranks[index]}, suit:${suits[suits_index]}`);
         console.log(newCard);
            
        }
    }
   
}
      

  buildDeck();