import * as plant from './../src/js/plant.js';

describe('plant functions', () => {

  describe('storeState', () => {
    test('should create a state store that can store and retrieve state', () => {
      const stateControl = plant.storeState();
      const newState = stateControl(plant.changeState('soil')(1));
      expect(newState).toEqual({ soil: 1 });
    });
  });

describe('feed', () => {

  test("Should increase soil level by 1", () => {
    let soil = 0;
    soil = plant.feed(2);
    expect(soil).toEqual({"soil": 1});
  });
});

});