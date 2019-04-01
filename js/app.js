console.log('working...');
console.log('jquerying');

class Tamagotchi {
	constructor(name){
		this.name = name;
		this.hunger = 5;
		this.sleepiness = 1;
		this.boredom = 1;
		this.age = 0;
		this.stage = 0;
	}
	sleep(){
		console.log('sleepiness going down');
	}
	eat(){
		console.log('hunger going down');
	}
	play(){
		console.log('boredom going down');
	}
}

const tamagotchi = new Tamagotchi('Iko-kun');
console.log(tamagotchi);


const tamaArray = []; /*is an array of objects containing tamagotchi details*/

tamaArray.push(tamagotchi)

const game = {
	time: 0,
	startGame(){
		
	},

	chooseTama(){
		console.log(tamaArray);
	},

	deathMethod (){

	},

	updateStats() {

	}
}

game.chooseTama();

/*EVENT HANDLERS AND LISTENERS*/








