import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import * as plant from './js/plant.js';


//User Interface Logic
window.onload = function() {

  // This function has side effects because we are manipulating the DOM.
  // Manipulating the DOM will always be a side effect. 
  // Note that we only use one of our functions to alter soil. 
  // You can easily add more.
  document.getElementById('feed').onclick = function() {
    const newState = plant.stateControl(plant.blueFood);
    document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
  };

  document.getElementById('feedLittle').onclick = function() {
    const newState = plant.stateControl(plant.feed);
    document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
  };

  document.getElementById('hydrate').onclick = function() {
    const newState = plant.stateControl(plant.hydrate);
    document.getElementById('water-value').innerText = `Water: ${newState.water}`;
  };
  document.getElementById('superWater').onclick = function() {
    const newState = plant.stateControl(plant.superWater);
    document.getElementById('water-value').innerText = `Water: ${newState.water}`;
  };

  // This function doesn't actually do anything useful in this application 
  // — it just demonstrates how we can "look" at the current state 
  // (which the DOM is holding anyway). 
  // However, students often do need the ability to see the current state 
  // without changing it so it's included here for reference.
  document.getElementById('show-state').onclick = function() {
    // We just need to call stateControl() without arguments 
    // to see our current state.
    const currentState = plant.stateControl();
    document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
    document.getElementById('water-value').innerText = `Water: ${currentState.water}`;
  };
};
