import { Tamagotchi } from './../src/tamagotchi.js'

describe('Tamagotchi', function() {
  let snarly = new Tamagotchi("Snarly");

  beforeEach(function() {
    jasmine.clock().install();
    snarly.setLevel();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
    snarly.didYourPetDie();
  });


  it('should have a name and food, energy, and happiness levels of 100 when it is created', function() {

    expect(snarly.name).toEqual("Snarly");
    expect(snarly.foodLevel).toEqual(100);
    expect(snarly.happyLevel).toEqual(100);
    expect(snarly.energyLevel).toEqual(100);
  });

  it('should have a food and happy level of 97 after 3000 milliseconds', function() {
    jasmine.clock().tick(3000);
    expect(snarly.foodLevel).toEqual(97);
    expect(snarly.happyLevel).toEqual(97);
  });

  it('should die if the food level drops to zero', function() {
    snarly.foodLevel = 0;
    expect(snarly.didYourPetDie()).toEqual(true);
  });

  it('should get hungry if 100 seconds pass without feeding', function() {
    jasmine.clock().tick(100001);
    expect(snarly.didYourPetDie()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    snarly.foodLevel = 100;
    snarly.happyLevel = 100;
    jasmine.clock().tick(80000);
    snarly.feed();
    expect(snarly.foodLevel).toEqual(30);
    expect(snarly.happyLevel).toEqual(25);
  });

  it('should be depressed if the happiness level drops to zero', function() {
    snarly.happyLevel = 0;
    expect(snarly.isYourPetDepressed()).toEqual(true);
  });

  it('should be exhausted if the energy level drops to zero', function() {
    snarly.energyLevel = 0;
    expect(snarly.isYourPetExhausted()).toEqual(true)
  });

})
