let game = 
{ lockMode: false,
  firstCard: null,
  secondCard: null,
  techs: 
  [ 'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react' ], 
  
  cards: null,
  
  setCard: function (id) 
{ let card = this.card.filter(card => card.id === id)[0];

  if (card.flipped || this.lockMode)
{ return false; }

  if (!this.firstCard) 
{ this.firstCard = card;
  this.firstCard.flipped = true;
  return true; }

  else 
{ this.secondCard = card;
  this.secondCard.flipped = true;
  this.lockMode = true;
  return true; } },

  checkMatch: function () 
{ if (!this.firstCard || !this.secondCard) 
  { return false; }
  return this.firstCard.icon === this.secondCard.icon; }, 

  clearCards: function () 
{ this.firstCard = null;
  this.secondCard = null;
  this.lockMode = false; },

  unflipCards()
{ this.firstCard.flipped = false;
  this.secondCard.flipped = false;
  this.clearCards(); },

  checkGameOver()
{ return this.card.filter(card => !card.flipped).length == 0;},

  createCardsFromTechs: function () 
{ this.cards = [];
  this.techs.forEach((tech) => {
  this.cards.push(this.createPairFromTech(tech)); })
  this.card = this.cards.flatMap(pair => pair);
  this.shuffleCards();
  return this.card; },

createPairFromTech:function (tech) 
{ return [
{ id: this.createIdWithTech(tech),
  icon: tech,
  flipped: false, },

{ id: this.createIdWithTech(tech),
  icon: tech,
  flipped: false, }] },

createIdWithTech: function(tech) {
  return tech + parseInt(Math.random() * 1000);
},

/* Função embaralhar Cartas. */
 shuffleCards: function () 
{ let currentIndex = this.card.length;
  let randomIndex = 0;
  while (currentIndex !== 0) 
{ randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex--;
  [this.card[randomIndex], this.card[currentIndex]] = [this.card[currentIndex], this.card[randomIndex]]; 
} 
} 
} 