//PRACTICE

/*
1. 
const --> data type of the objects
nameOfObj --> name of the object
= --> initializer
{} --> curly brackets that denote this data is an obj
prop: value --> key value pair that each obj has

const nameOfObj = {
    name: 'object'
}
*/

//2. 

const me = {}

me.name = "Benjamin Karasik";
me.age = 22;
me.email = "karasik.benjamin28@gmail.com";

console.log(me.name);

me['age'] = 43;
console.log(me.age);

me['place of residence'] = "NYC";

console.log(me['place of residence']);


//3.

const monster = {
    name: "Slimer",
    color: "greenish",
    type: "plasm or ghost or something"
 }

 console.log(monster['name']);
 monster.type = "creature";
 monster.age = 6;

 console.log(monster)

 monster.introduce = function () {
     console.log(`I am a monster and my name is ${this.name}. I am ${this.color} and my type is a ${this.type}.`)
 }

 monster.introduce()

 //4.

const adventurer = {

    name: "John the Adventurer",
    sword: "small sword",
    
    //Method that uses random calculator to choose which type of sword the adventurer will get
    whichSword: function(){
        let swordChooserCalculator = Math.floor(Math.random() * 10);
        if(swordChooserCalculator % 2 ===0){
            this.sword = "big sword"
        }
        else{
            this.sword = "small sword"
        }
        console.log(this.sword)
    },
    
    //Method to calculate the amount of damage adventurer can deal
    //checks property of sword and bases attack off of that, bigger the sword, 
    //higher chance for greater the attack
    hitPoints: function (){
        if (this.sword === "small sword"){
            return  Math.floor(Math.random() * 5)
        }
        else if(this.sword === "big sword"){
            return Math.floor(Math.random() * 15)
        }
    },
    lifePoints: 25,
    //Method that takes in opponent obj and subtracts their lifepoints by adventurer's attack points
    attack : function(opponent){
        opponent.lifePoints = opponent.lifePoints - this.hitPoints()

    },
    wins: 0
    
};

const ogre = {
    name: "Bob the Ogre",
    hitPoints: function (){
        return Math.floor(Math.random() * 8)
    },
    lifePoints: 40,
    attack : function(opponent){
        opponent.lifePoints -= this.hitPoints()
    },
    wins: 0
};

const game = {
    rounds: 1,

    //Method: called after a player wins a round
    //Resets both character's lifepoints and moves to next round
    nextRound: function(adventurer, ogre){
        adventurer.lifePoints = 25
        ogre.lifePoints = 40
        this.rounds++;
    },

    //Method: This is run n amount of times per round. Each "fight" has the adventurer pick a new sword which defines their hit points for that attack
    //Logs to the console the attacks and character remaining life points. 
    //Both players attack each other -- adventurer always attacks first since his life points are lower
    fight: function(){
        adventurer.whichSword();
        console.log(`For this attack, ${adventurer.name} has chosen the ${adventurer.sword}`)
        adventurer.hitPoints();
        adventurer.attack(ogre);
        console.log(`${adventurer.name} has attacked ${ogre.name}. ${ogre.name}'s health has dropped to ${ogre.lifePoints}`)
        ogre.attack(adventurer);
        console.log(`${ogre.name} has attacked ${adventurer.name}. ${adventurer.name}'s health has dropped to ${adventurer.lifePoints}`)
    },

    //Method: Main function that emulates a "fight" between adventurer and ogre. 
    //Runs for 4 rounds
    //conditional: whoever's life points hit 0 or negatives, the other character wins the round
    //calls nextRound() 
    start: function(adventurer, ogre){
        while(this.rounds < 5){

            if(adventurer.lifePoints === 0 || adventurer.lifePoints < 0) {
                ogre.wins++;
                console.log(`${ogre.name} has beaten ${adventurer.name} and won round: ${this.rounds}. He now has ${ogre.wins} win(s)`)
                this.nextRound(adventurer, ogre)
                
            }
            else if(ogre.lifePoints === 0 || ogre.lifePoints < 0){
                adventurer.wins++;
                console.log(`${adventurer.name} has beaten ${ogre.name} and won round: ${this.rounds}. He now has ${adventurer.wins} win(s)`)
                this.nextRound(adventurer, ogre)

            }
            if(this.rounds < 5){
            this.fight();
            
            }
        }
    }
}
console.log(game.start(adventurer, ogre))

//Cat Combinator

const cat1 = {
    name: 'Mr. Whiskers',
    breed: 'Siamese',
    age: 2
}

console.log(cat1['age'])
console.log(cat1.breed)

const cat2 = {
    name: 'Cutiepi',
    breed: 'siamese',
    age: 12
}


const cat3 = {
    name: "Mittens", age: 9, breed: "Tabby"
 }
const cat4 = { name: "Fluffy", age: 8, breed: "Siamese" }

const cat5 = { name: "Apollo", age: 5, breed: "Shorthair" }

const cat6 = { name: "Venus", age: 10, breed: "Ragdoll" }


 function combineCats (mama, papa){

    console.log(mama)
    console.log(papa)

    //Unable to do extra credit because breed returns null always
    // const kitten = {
    //         age: 1, 
    //         name: mama.name.slice(0, (mama.name.length/2)) + papa.name.slice((papa.name.length/2 + 1) ,papa.name.length),
    //         breedChooser: function(){
    //             if(mama.breed.toLowerCase() ===papa.breed.toLowerCase()){
    //                 this.breed = mama.breed;
    //             }
    //             else{
    //                 this.breed = `${mama.breed}-${papa.breed}`
    //             }
    //         },
    //         breed: ''
    //     };
    //     return kitten
    //};
    return {
        age: 1, 
        name: mama.name.slice(0, (mama.name.length/2)) + papa.name.slice((papa.name.length/2 + 1) ,papa.name.length),
        breed: `${mama.breed}-${papa.breed}`              
    };
}
    console.log(baby.name())
    console.log(baby.breed())


 console.log(combineCats(cat1, cat2));
//Cat Brain Bender

let cat7 =combineCats(cat3, cat4);
console.log(cat7 )
let cat8 = combineCats(cat5, cat6);
console.log(cat8 )
let cat9 = combineCats(cat7, cat8);
console.log(cat9 )
