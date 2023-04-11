import * as plant from './../src/js/plant.js';

describe('plant functions', () => {

  describe('storeState', () => {
    test('should create a state store that can store and retrieve state', () => {
      const stateControl = plant.storeState();
      const newState = stateControl(plant.changeState('soil')(1));
      expect(newState).toEqual({ soil: 1 });
    });
  });

  describe('changeState', () => {
    test('should create a function that returns a new state object with the specified property changed by the specified value', () => {
      const state = { soil: 1 };
      const newState = plant.changeState('soil')(2)(state);
      expect(newState).toEqual({ soil: 3 });
    });
  });

  describe('orchid', () => {
    test('should create an orchid with the specified name and the canBloom and canCreateShade methods', () => {
      const myOrchid = plant.orchid('my orchid');
      expect(myOrchid.name).toEqual('my orchid');
      expect(myOrchid.color('pink')).toEqual('my orchid is blooming with pink color.');
      expect(myOrchid.shadeSize('large')).toEqual('my orchid is creating a shade that is large.');
    });
  });

  describe('palm', () => {
    test('should create a palm with the specified name and the canCreateShade method', () => {
      const myPalm = plant.palm('my palm');
      expect(myPalm.name).toEqual('my palm');
      expect(myPalm.shadeSize('medium')).toEqual('my palm is creating a shade that is medium.');
    });
  });

  describe('aloe', () => {
    test('should create an aloe with the specified name and the canHeal method', () => {
      const myAloe = plant.aloe('my aloe');
      expect(myAloe.name).toEqual('my aloe');
      expect(myAloe.healingCapabilities('cuts')).toEqual('my aloe ican heal cuts.');
    });
  });

  describe('feed', () => {
    test('should increase soil level by 1', () => {
      const newState = plant.stateControl(plant.feed);
      expect(newState.soil).toEqual(1);
    });
  });

  describe('blueFood', () => {
    test('should increase soil level by 5', () => {
      const state = { soil: 0 };
      const newState = plant.blueFood(state);
      expect(newState).toEqual({ soil: 5 });
    });
  });  

  describe('hydrate', () => {
    test('should increase water level by 1', () => {
      const newState = plant.stateControl(plant.hydrate);
      expect(newState.water).toEqual(1);
    });
  });

  describe('superWater', () => {
    test('should increase water level by 5', () => {
      const state = { water: 0 };
      const newState = plant.superWater(state);
      expect(newState).toEqual({ water: 5 });
    });
  });

});