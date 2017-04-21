/*
Focus on the following tasks that card games have
in common:
1. Game setup
2. shuffling and dealing
3. detecting winners

NOTES:
  Game logic and game state live in 'CardGame' object

  There's interplay between Dealer and CardGame, and dealer
  is similar to a bot that can manipulate other objects in
  the application by doing things like shuffling, dealing, etc.

  CardGame tells dealer what to do

  Dealer asks players to do things like 'play'
    Dealer inherits from player, so dealer can play as well
    Dealer also can ask CardGame if someone has won, and what to do next if this has occured

  Players decide what to do next via a 'PlayStrategy' object
    which has limited access to state of CardGame via asking
    what the CardGame's current state is.

*/

/*
  Flow:
    1. Start CardGame
      CardGame class initializes the entities needed for a game
    2. CardGame tells dealer to shuffle and deal cards
    3. Dealer shuffles and deals cards
    4. Players are given 'strategy' options to inform their move
    5. After all players and dealer play, Dealer asks CardGame to see if a win has occured
    6. Dealer asks CardGame who is next Player and round continues until all players have played.
    7. When all players have played, Dealer asks CardGame to begin next round.

*/


/*
 a CardGame class is going to provide blueprint in which
 game logic is stored

*/

class CardGame() {
 /*

   Dealer dealer
   players = []
   Deck deck
 */

 startGame();

/*
  depending on which game is selected, we can generate a value
  for each hand. E.g., Texas Hold'em vs. Blackjack
*/
 evaluateHand(hand);

/*

  This showGameState fn gets 'bound or binded' to a player object; a player object is passed in and decorated with a function allowing to look at things like other player's cards, size of the deck.

  show the state of the current game to a player or dealer. For example, if I'm playing online allow me
  to see which cards for each player are currently visible,
  Texas hold'em, allow me to see the community cards, black
  jack, allow me to see the visible cards and therefore choose
  strategy based on this information
*/
 showGameState(player);

 /*
    tell dealer what to do next, based on game state

 */
determineNextPlayer()


/*
  tell Dealer what to do next, based on game state
*/
beginNextRound()


/*
  collections hands, values them, applies game rules in some
    way to determine if win has occured
*/
  determineWin()

}

class Card(suit, rank) {
  /*
    suit
    rank
  */
  suit
  rank
}

/*
  deck operations common
  to card games
*/
class Deck {
  size()
  shuffle()
  takeCardfromTop()
  insertCardOnTop(card)
  insertCardOnBottom(card)
  insertCardRandomly(card)
}


/*
inherits from deck, has rules on how to
create this kind of card deck
*/
class StandardDeck() {
  initialize()
}

/*
  operations common to hands of
  cards
*/
class Hand() {
  size()
  addCardToHand()
  show()
}

class Player {
  Hand hand
  PlayStrategy strategy;
  showHand()
  play()
}


class PlayStrategy() {
  //allow player to take a look at game state before making a play
  showGameState() -> reference Game.showGameState callback

  //perform a game action
  play()
}

/*
  Dear class is inherited from player

*/
class Dealer (game, deck) {

  //CardGame stores game logic and the game's current state,
  //Delaer consults this to decide hat to do
  CardGame cardGame;

  Deck deck;

  //iterate thru players and ask them to play
  playRound()


  startGame()

  determineNextPlayer() -> cardGame.determineNextPlayer
  beginNextRound() -> cardGame.beginNextRound
  shuffle() -> Deck.shuffle
  deal()
  hit(player)
  stay(player)

}







