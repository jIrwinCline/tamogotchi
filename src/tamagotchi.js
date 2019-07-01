export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 100;
    this.happyLevel = 100;
    this.energyLevel = 100;
  }

  setLevel() {
    setInterval(() => {
      this.foodLevel--;
      this.happyLevel--;
    }, 1000)
  }

  didYourPetDie() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }
  isYourPetDepressed() {
    if (this.happyLevel > 0) {
      return false;
    } else {
      return true;
    }
  }
  isYourPetExhausted() {
    if (this.energyLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.foodLevel += 10;
    this.happyLevel += 5;
    if (this.foodLevel >= 100) {
      this.foodLevel = 100;
    }
    if (this.happyLevel >= 100) {
      this.happyLevel = 100;
    }
  }


}
