console.log('working...');
console.log('jquerying');

class Tamagotchi {
	constructor(name){
		this.name = name;
		this.hunger = 5;
		this.sleepiness = 1;
		this.boredom = 1;
		this.age = 0;
		this.lifestage = 0;
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





const game = {
	time: 0,
	startGame(){
			
			
			const tamagotchi = new Tamagotchi('Iko-kun');
			console.log(tamagotchi);
			game.character = tamagotchi
			// will insert name into tamagotchi.name (this.name).
				
			// (submit).val() // set up the submit form here...

			// tamagotchi.name = tamaName

			// will start the timer(s).
				console.log('starting Tama');
	},
	character: this.character
	,
	deathMethod (){

	},
	startTimer() {
		console.log('this.startTimer called')
		this.time = setInterval(() => {
			console.log('time started');
			this.time++;

			const $timer = $('#timer')
			$timer.text(`${this.time}`)
			console.log(this);

			if (this.time === 20){

			}
		}, 1000)
		// will initialize the stats including time
	} // have one  let time be = setInterval(){
		// timer ++
		// if ________
		// if ________ as a property of game object
		// 1000 ms,
}

/*EVENT HANDLERS AND LISTENERS*/

// how to get event listeners to change values universally for the current tamagotchi that the user chose...

/// TAMA STATS that are displayed

$('form').on('submit', (e) => {
	/// pull the name from the form
	e.preventDefault();
	const tamaNameValue = $('#tamaname').val();
	console.log(tamaNameValue);
	const $h2 = $('h2')
	$h2.text(`${tamaNameValue}`)
	$('form').css('display','none')


	// run start game to instantiate the tamagotchi object
	game.startGame();
	game.startTimer();
	// check if the game.character tamagotchi can be accessed
	console.log(game.character);
})



////// ISSUE WITH STATS			
/// maybe the tamagotchi metrics stats get displayed after the tamagotchi is instantiated. The display gets changed by display: none or something

// const $hunger = $('#hunger')
// console.log($hunger);
// $hunger.text(`${game.character.tamagotchi.hunger}`)


// const $sleepiness = $('#sleepiness')
// console.log($sleepiness);
// $sleepiness.text(`${tamagotchi.sleepiness}`)

// const $boredom = $('#boredom')
// console.log($boredom);
// $boredom.text(`${tamagotchi.boredom}`)

// const $age = $('#age')
// console.log($age);
// $age.text(`${tamagotchi.age}`)

// const $lifestage = $('#lifestage')
// console.log($lifestage);
// $lifestage.text(`${tamagotchi.lifestage}`)

// const $h2 = $('h2')
// console.log($h2);
// $h2.text(`${tamagotchi.name}`)


////// PLAYER ACTIONS

// also logs time


const $feed = $('#feed')
$feed.on('click', () => {
	console.log('feed button clicked');

})

const $light = $('#light')
$light.on('click', () => {
	console.log('lights turn off or on');
})

const $play = $('#play')
$play.on('click', () => {
	console.log('playing with tama');

})

// const $start = $('#start')
// $start.on('click', () => {
// 	console.log('start button clicked')

// })

/// Eventual start handler will run startGame();


