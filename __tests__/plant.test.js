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

  describe('feed', () => {

    test("Should increase soil level by 1", () => {
      let soil = 0;
      soil = plant.feed(2);
      expect(soil).toEqual({ "soil": 1 });
    });
  });

});