import * as plant from './../src/js/plant.js';

describe('feed', () => {

  test("Should increase soil level by 1", () => {
    let soil = 0;
    soil = plant.feed(2);
    expect(soil).toEqual({"soil": 1});
  });
});