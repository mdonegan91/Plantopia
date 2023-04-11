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

  describe('feed', () => {

    test("Should increase soil level by 1", () => {
      let soil = 0;
      soil = plant.feed(2);
      expect(soil).toEqual({ "soil": 1 });
    });
  });

});