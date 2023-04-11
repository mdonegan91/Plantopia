import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import * as plant from './js/plant.js';


let olivia = plant.orchid("Olivia");
const blooming = plant.canBloom(olivia);
const shading = plant.canCreateShade(olivia);
document.getElementById('blooming-orchid').innerText = `Blooming: ${blooming.color("purple")}`;
document.getElementById('shading-orchid').innerText = `Creating shade: ${shading.shadeSize("little")}`;

let petrie = plant.palm("Petrie");
const shadingPalm = plant.canCreateShade(petrie);
document.getElementById('shading-palm').innerText = `Creating shade: ${shadingPalm.shadeSize("medium")}`;

let avery = plant.aloe("Avery");
const healing = plant.canHeal(avery);
document.getElementById('healing-aloe').innerText = `Healing: ${healing.healingCapabilities("cuts")}`;

//User Interface Logic
window.onload = function() {

  // This function has side effects because we are manipulating the DOM.
  // Manipulating the DOM will always be a side effect. 
  // Note that we only use one of our functions to alter soil. 
  // You can easily add more.

  // document.getElementById('feed').onclick = function() {
  //   const newState = oliviaStateControl(plant.blueFood);
  //   document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
  // };

  // document.getElementById('feedLittle').onclick = function() {
  //   const newState = plant.stateControl(plant.feed);
  //   document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
  // };

  // document.getElementById('hydrate').onclick = function() {
  //   const newState = plant.stateControl(plant.hydrate);
  //   document.getElementById('water-value').innerText = `Water: ${newState.water}`;
  // };
  // document.getElementById('superWater').onclick = function() {
  //   const newState = plant.stateControl(plant.superWater);
  //   document.getElementById('water-value').innerText = `Water: ${newState.water}`;
  // };

  document.getElementById('feed-orchid').onclick = function() {
    const newState = plant.stateControlOrchid(plant.feed);
    document.getElementById('soil-value-orchid').innerText = `Soil: ${newState.soil}`;
  };

  document.getElementById('water-orchid').onclick = function() {
    const newState = plant.stateControlOrchid(plant.hydrate);
    document.getElementById('water-value-orchid').innerText = `Water: ${newState.water}`;
  };

  document.getElementById('light-orchid').onclick = function() {
    const newState = plant.stateControlOrchid(plant.light);
    document.getElementById('light-value-orchid').innerText = `Light: ${newState.light}`;
  };

  document.getElementById('feed-palm').onclick = function() {
    const newState1 = plant.stateControlPalm(plant.feed);
    document.getElementById('soil-value-palm').innerText = `Soil: ${newState1.soil}`;
  };

  document.getElementById('water-palm').onclick = function() {
    const newState1 = plant.stateControlPalm(plant.hydrate);
    document.getElementById('water-value-palm').innerText = `Water: ${newState1.water}`;
  };

  document.getElementById('light-palm').onclick = function() {
    const newState1 = plant.stateControlPalm(plant.light);
    document.getElementById('light-value-palm').innerText = `Light: ${newState1.light}`;
  };

  document.getElementById('feed-aloe').onclick = function() {
    const newState2 = plant.stateControlAloe(plant.feed);
    document.getElementById('soil-value-aloe').innerText = `Soil: ${newState2.soil}`;
  };

  document.getElementById('water-aloe').onclick = function() {
    const newState2 = plant.stateControlAloe(plant.hydrate);
    document.getElementById('water-value-aloe').innerText = `Water: ${newState2.water}`;
  };

  document.getElementById('light-aloe').onclick = function() {
    const newState2 = plant.stateControlAloe(plant.light);
    document.getElementById('light-value-aloe').innerText = `Light: ${newState2.light}`;
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