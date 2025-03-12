'use strict'
/* Array.prototype.myshuffle = function(){  var newArray = [];
  var index = {};
  var lenArray = this.length;
  for (var x = (lenArray - 1);x >= 0; x--)
  {  var rand = Math.round(Math.random() * (lenArray - 1));  var key = 'key_' + rand;  if (key in index){  x++;  continue;  } else {  index[key] = this[rand];  newArray.push(this[rand]);  }  }  
return newArray; }; */

 

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}





class DurakGame{
    constructor(players_count){
        this.players_count = players_count
        this.deck = []
        this.active_suit =''
        this.attacker =[] 
        this.defender = []
        this.players =[];
        this.pl_roles=[]
       // self.suits = ['♥', '♦', '♣', '♠️']
        this.suits = ['Ch', 'B', 'K', 'P']
        this.ranks = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        this.passes = 0
        this.target = 0
        this.deck_id=[]
        this.id=''
        this.name=''
        this.usernames=[]
		this.roles=[]
		this.A()
	    void (async()=>{await this.start_game()})()
	};
	
	A(){for(let i=0;i<=this.players_count-1;i++){let a=[];this.players.push(a)}}
	
	
	
     create_deck(){
        //this.deck = [(suit, rank) for suit in self.suits for rank in self.ranks]
		
		for(let suit of this.suits){
			 
		this.ranks.forEach((rank)=>{this.deck.push([suit,rank])})
		//console.log(suit)
		}
		//console.log(this.deck)
	 }
        
     shuffle_deck(){
        //random.shuffle(self.deck)
		shuffle(this.deck);
		 //this.deck.sort(() => Math.random() - 0.5);
	 }
        

     deal_cards(){
       let cards_per_player = 6  // self.players_count
	   for(let i=0; i<=cards_per_player-1;i++){
			 
		this.players.forEach((item)=>{let ut=this.deck.pop();item.push(ut)})
		
		}
       
	   //console.log(this.players)
       return this.s()//кидаем козыря 
	 }	

    async start_game(){
        this.create_deck()//собираем колоду
        this.shuffle_deck()//тасуем карты
        this.deal_cards()//раздаем карт
        this.attacker =await this.find_lowest_trump()//определяем кто первый ходит
        this.defender = await this.get_next_player(await this.attacker)//под кого ходят
		if(await this.attacker&&await this.defender){
        for (let i=0;i<=this.players_count-1;i++){
            this.pl_roles.push(this.role_play(i))
        }
		}
	}
	
	 async game_game(){
		this.players =[];
		this.deck_back=[];
        this.cach=[[],[],[],[]];
		this.A()
        
        this.create_deck()//собираем колоду
        this.shuffle_deck()//тасуем карты
        this.deal_cards()//раздаем карт
        
	}
	
	
     s(){//console.log(this.deck)
        this.active_suit =this.deck[this.deck.length-1][0]
        let a=this.deck.pop()
        this.deck.unshift(a)
       
	 }


   async find_lowest_trump(){
       let lowest_trump = Infinity
       let lowest_trump_sublist = null
        
        for(let sublist of this.players){
            for(let card of sublist){
                let[suit, rank] = card
			    if (suit === this.active_suit){
                    let status = this.ranks.indexOf(rank)
                    if (status < lowest_trump){
                        lowest_trump = status
                        lowest_trump_sublist = sublist
					}
				}
			}
		}
        return lowest_trump_sublist
	}

   async get_next_player( current_player){
        let players = this.players//555
        let current_index = players.indexOf(current_player)
        return players[(current_index + 1) % players.length]
	}
   
    role_play(n){
		//console.log(n)
   // console.log(this.attacker)
	//console.log(this.defender)
        let na=this.attacker
        let np=this.players
        let nd=this.defender
        let a=((na[0][0]==np[n][0][0])&&(na[0][1]==np[n][0][1]))
        let b=((nd[0][0]==np[n][0][0])&&(nd[0][1]==np[n][0][1]))
        if (a!==false){
            return "attacker"
		}
        if (b!==false){
            return "defender"
		}
        else return "attacker2" 
	}
   async play_game(){
       try{await this.start_game()
      
	//return JSON.stringify(this)
	   return this}catch(error){console.error(error);}
	} 

}

//let jjj=new DurakGame(4);

//console.log(jjj.play_game())		
module.exports =DurakGame;