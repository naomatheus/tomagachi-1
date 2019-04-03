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
	timer: null,
	lighton: true,
	isAlive: true,
	character: null,
	startGame(){
			
			const tamagotchi = new Tamagotchi('Iko-kun');
			console.log(tamagotchi);
			this.character = tamagotchi
			// will insert name into tamagotchi.name (this.name).
				
			// (submit).val() // set up the submit form here...

			// tamagotchi.name = tamaName

			// will start the timer(s).
				console.log('starting Tama');
	},
	ageTama () { /*debugger;*/ // logic should be redone here. 
		console.log("ageTama");
		if (this.character.age === 3 /*=== 0*/){ 
			console.log("3");
			const $tamabody = $('#tamabody') 
			$tamabody.prop('src','https://github.com/naomatheus/tomagachi-1/blob/master/tamause2.gif?raw=true')
			this.displayStats();
		}
		 if (this.character.age === 5 /*=== 0*/){
		 	console.log("5");
			const $tamabody = $('#tamabody') 
			$tamabody.prop('src','https://github.com/naomatheus/tomagachi-1/blob/master/tamause3.gif?raw=true')
			this.displayStats();
		}
		if (this.character.age === 7 /*=== 0*/ ){
			console.log("7");
			const $tamabody = $('#tamabody') 
			$tamabody.prop('src','https://github.com/naomatheus/tomagachi-1/blob/master/tamause4.gif?raw=true')
			this.displayStats();
		}	
	},
	displayStats() {
	// the hunger statistic
		$hunger = $('#hunger')
		// console.log($hunger);
		$hunger.text(`${this.character.hunger}`)
	// the sleep statistic	
		$sleepiness = $('#sleepiness')
		// console.log($sleepiness);
		$sleepiness.text(`${this.character.sleepiness}`)

	// the boredom statistic
		$boredom = $('#boredom')
		// console.log($boredom);
		$boredom.text(`${this.character.boredom}`)

	// the age statistic
		$age = $('#age')
		// console.log($age);
		$age.text(`${this.character.age}`)

	// the lifestage statistic
		$lifestage = $('#lifestage')
		// console.log($lifestage);
		$lifestage.text(`${this.character.lifestage}`)
	},
	deathMethod (){
		if(this.character.hunger === 10 || this.character.sleepiness === 10 || this.character.boredom === 10) {
			this.isAlive = false
		}

	},
	stopTimer() {
		if(!this.isAlive){
			const $tamabody = $('#tamabody') 
			$tamabody.prop('src','https://github.com/naomatheus/tomagachi-1/blob/master/tamadead.gif?raw=true')
			clearInterval(this.timer)
			// add here a remove all imagery command
			// add here a new div that covers up the entire container. 
		}
	},

	// ,
	startTimer() {
		console.log('this.startTimer called')
		this.timer = setInterval(() => {
			game.deathMethod();
			game.stopTimer()
			console.log('time started');

			const $timer = $('#timer')
			$timer.text(`${this.time}`)
			// console.log(this);

			if (this.time % 10 === 0){
				this.character.hunger++
				game.displayStats();
				if (this.character.hunger === 10){
					this.deathMethod();
					return
				}
			}
			if (this.time % 10 === 0){
				this.character.sleepiness++
				game.displayStats()
				if(this.character.sleepiness === 10){
					this.deathMethod();
					return
				}
			}
			if (this.time % 10 === 0){
				this.character.boredom++
				if (this.character.boredom === 10){
					this.deathMethod();
					// return
				}
			}
			if (this.time % 10 === 0){
				this.character.age++
				game.displayStats();
				// game.ageTama();
			}
			if (this.time % 10 === 0){
				this.character.lifestage++
				game.displayStats();
			}
			this.time++;
			game.ageTama();
			
		}, 1000)
		// will initialize the stats including time
	 // have one  let time be = setInterval(){
		// timer ++
		// if ________
		// if ________ as a property of game object
		// 1000 ms,
	}, 
	// think about how to make this more DRY (one method that calls multiple decrements on call);
	decrementHunger() {/*controls players ability to decrease negative stats (feed the creature, etc)*/ 
		if (this.character.hunger !== 0){
		this.character.hunger--
		}
	},
	decrementSleepiness(){
		if (this.character.sleepiness){
		this.character.sleepiness--
		}
		// if (game.lighton === false){
		// 	this.character.sleepiness--
		// } else if (game.lighton === true){

		// } 
		// while the light is off...decrement sleepiness by 1

		// how to track if the light is off or not...

		// I think there needs to be a Light off state
			// if the light off state is true, then decrementSleepiness
		// perhaps even a depressed button status for the light off button...
	},
	decrementBoredom(){
		if (this.character.boredom !== 0){
		this.character.boredom--
		}
	}

}

/*EVENT HANDLERS AND LISTENERS*/


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
	// run starting the time
	game.startTimer();
	// initialize the dynamic stats displays
	game.displayStats();
	// check if the game.character tamagotchi can be accessed
	console.log(game.character);
})



////// RESOLVED ISSUE WITH STATS			
// the tamagotchi metrics stats get displayed after the tamagotchi is instantiated. The display gets changed by jquerying

/// STATIC STATS ////
		let $hunger = $('#hunger')
		console.log($hunger);
		$hunger.text(`0`)

		let $sleepiness = $('#sleepiness')
		console.log($sleepiness);
		$sleepiness.text('0')


		let $boredom = $('#boredom')
		console.log($boredom);
		$boredom.text('0')

		let $age = $('#age')
		console.log($age);
		$age.text('0');

		let $lifestage = $('#lifestage');
		console.log($lifestage);
		$lifestage.text('0')
/// STATIC STATS ////

////// PLAYER ACTIONS

const $feed = $('#feed')
$feed.on('click', () => {

	console.log('feed button clicked');
	game.decrementHunger();
	game.displayStats();
})

const $light = $('#light')
$light.on('click', () => {

	


/// LATER implementation of light functionality
	if (game.lighton === true){
		const $container = $('.container')
		$container.css('background-color', 'black')
		const $timer = $('#timer')
		$timer.css('color','white')
		game.lighton = false;
	}
	else if (game.lighton === false ){
		const $container = $('.container')
		$container.css('background-color','#6861C5')
		const $timer = $('#timer')
		$timer.css('color','black')
		game.decrementSleepiness();
		game.displayStats();
		game.lighton = true;
	}	// stop timer
		// console.log('light turned off');
		// game.lighton = false
		// clearInterval(this.time)
	// 	return
	// } else if (game.lighton === false){
	// 	// begin timer
	// 	game.lighton = true
	// 	console.log('light turned on');
	// 	// game.startTimer();
	

	
})

const $play = $('#play')
$play.on('click', () => {
	game.decrementBoredom();
	game.displayStats();
	console.log('playing with tama');

})

/// Eventual start handler will run startGame();


