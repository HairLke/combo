
    class Animals {
        constructor(age, name, weight, limbAmount) {
          this.age = age;
          this.name = name;
          this.weight = weight ;
          this.limbAmount = limbAmount;
    }
        static isAnimals(obj) {
            return obj instanceof this;
          }
        
          static maxAge = 80 ;
          static maxWeight = 4000 ;
        run(speed) {
             this.speed = speed;
            console.log(`${this.name} бежит со скоростью ${this.speed}.`);
                }
        say(statement){
            this.statement=statement
            console.log( `${this.name} say ${statement}` );
            }
        eat(feed){
            this.feed = feed
            console.log(`${this.name} is eating ${this.feed}`);
            }
        }
      
      class Mammals extends Animals { 
          
      }; 
      class Birds extends Animals { 
          
      }; 
      class Fish extends Animals { 
          
      };
      class Predators extends Mammals {
       
        };
      class Whales extends Mammals { }
      
      class Primat extends Mammals { }

      const dog = new Predators(2, 'mops', 25, 4);
      console.log(dog);
      
      
      const dolphin = new Whales(15, 'White-dolphin', 150, 3);
      console.log(dolphin);
      ;
    const okuny =  new Fish(30,`okuny`,70,4);
      console.log(okuny);
      const human = new Primat (30, 'Ycr', 90, 4);
      console.log(human);
      const golub = new Birds (3, 'Columba albinucha', 90, 4);
      console.log(golub);
      console.log(Animals.isAnimals(dog));
      console.log(Animals.isAnimals(dolphin));
      console.log(Animals.isAnimals(human));
      console.log(Animals.isAnimals(golub));
      console.log(Animals.isAnimals(okuny));

      console.log( Animals.maxWeight );
      console.log(Whales.maxAge);
      console.log(dog.say(`gav`));
      console.log(dog.eat(`Felix`));
      console.log(dog.run(`30km/h`));

    
