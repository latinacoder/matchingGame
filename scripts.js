//1. making the card flip when we click it

//1a. make a list of all memory card elements using cards.forEach
//1b. store this list inside a constant named cards by looping through this list and adding an event listener
//1c. declare flipCard() function in order to Access the classlist of the memory card and toggle the flip class. 
        //what toggle does: if the class is there, remove it, if not, add it.
        //go to elements inside console to check if on click, the memory-card div class in the body change to memory-card flip. 
        //go back to styles.css and create a .memory-card.flip class in order to style the flipped card.
        //now we use only styles.css to style the 3d flipped effect flipped of each flipped card. 


//2. storing cards so that when the player clicks a card, they have to know if its the first or second card clicked. We must create matching logic.
//2a. declare a variable names hasFlippedCard = False
//if hasFlippedCard is false, this means the player is clicking the FIRST card.
    //if hasFlippedCard is true, then player is clicking SECOND card.

    const cards = document.querySelectorAll('.memory-card'); //(1b)

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    
    function flipCard(){ //(1c)
        if (lockBoard) return; //only flip card if the board is not locked (lockBoard = false)
        this.classList.add('flip');
        if (this === firstCard) returnl
    
        if (!hasFlippedCard){ 
            //first click
            hasFlippedCard = true;
            firstCard = this;
            return;
        }
            
        //second click (using refactoring to make code cleaner)
        hasFlippedCard = false;
        secondCard = this;
    
        //do cards match? use HTML data attribute
        // console.log(firstCard.dataset.framework);
        // console.log(secondCard.dataset.framework);
    
        checkForMatch();
        }
    
        function checkForMatch(){
            let isMatch = firstCard.dataset.framework === secondCard.dataset.framework; //condition for turnary operation
    
            isMatch ? disableCards() : unflipCards();  //ternary operation acts as an if else statement
        }
    
        function disableCards(){
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
        }
    
        function unflipCards(){ // not a match -- unflip cards by removing flip class from card
            lockBoard = true; // if not a match, lock board and only unlock it if the card is flipped
            setTimeout(() => { //adding time so that there is enough time available between flipping
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
    
            lockBoard = false;
        }, 1300);
    }
    
        function resetBoard(){ 
            [hasFlippedCard, lockBoard] = [false, false];  //using ES6 destructuring assignment to keep code short
            [firstCard, secondCard] = [null, null];
        }
    
        (function shuffle(){
            cards.forEach(card => {
                let randomPos = Math.floor(Math.random() *12);
                card.style.order = randomPos;
            })
        })();
    cards.forEach(card => card.addEventListener('click', flipCard))  // (1a). Listen for a click event. When event is fired, excecute flipCard function.