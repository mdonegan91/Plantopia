import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import * as plant from './js/plant.js';

let olivia = plant.orchid("Olivia");
const blooming = plant.canBloom(olivia);
const shading = plant.canCreateShade(olivia);

let petrie = plant.palm("Petrie");
const shadingPalm = plant.canCreateShade(petrie);

let avery = plant.aloe("Avery");
const healing = plant.canHeal(avery);



//User Interface Logic
window.onload = function() {

  document.getElementById('feed-orchid').onclick = function() {
    const newState = plant.stateControlOrchid(plant.feed);
    newState.soil = newState.soil - 5 * counterWind;
    document.getElementById('soil-value-orchid').innerText = `Soil: ${newState.soil}`;
    console.log(newState.soil);
    if (newState.soil > 3) {
      document.getElementById('shading-orchid').innerText = `Creating shade: ${shading.shadeSize("little")}`;
    }
  };

  document.getElementById('water-orchid').onclick = function() {
    const newState = plant.stateControlOrchid(plant.hydrate);
    document.getElementById('water-value-orchid').innerText = `Water: ${newState.water}`;
    if (newState.water > 4) {
      document.getElementById('blooming-orchid').innerText = `Blooming: ${blooming.color("purple")}`;
    }
  };

  document.getElementById('light-orchid').onclick = function() {
    const newState = plant.stateControlOrchid(plant.light);
    document.getElementById('light-value-orchid').innerText = `Light: ${newState.light}`;
  };

  document.getElementById('feed-palm').onclick = function() {
    const newState1 = plant.stateControlPalm(plant.feed);
    newState1.soil = newState1.soil - 5 * counterWind;
    document.getElementById('soil-value-palm').innerText = `Soil: ${newState1.soil}`;
    if (newState1.soil > 4 && newState1.soil < 10) {
      document.getElementById('shading-palm').innerText = `Creating shade: ${shadingPalm.shadeSize("medium")}`;
    }
    else if (newState1.soil > 9) {
      document.getElementById('shading-palm').innerText = `Creating shade: ${shadingPalm.shadeSize("large")}`;
    }
  };

  document.getElementById('water-palm').onclick = function() {
    const newState1 = plant.stateControlPalm(plant.hydrate);
    document.getElementById('water-value-palm').innerText = `Water: ${newState1.water}`;
  };

  document.getElementById('light-palm').onclick = function() {
    const newState1 = plant.stateControlPalm(plant.light);
    document.getElementById('light-value-palm').innerText = `Light: ${newState1.light}`;
  };

  let counterWind = 0;
  document.getElementById('feed-aloe').onclick = function() {
      let newState2 = plant.stateControlAloe(plant.feed);
      newState2.soil = newState2.soil - 5 * counterWind;
      plant.stateControlAloe().soil = newState2.soil;
      document.getElementById('soil-value-aloe').innerText = `Soil: ${newState2.soil}`
  };

  document.getElementById('water-aloe').onclick = function() {
    const newState2 = plant.stateControlAloe(plant.hydrate);
    document.getElementById('water-value-aloe').innerText = `Water: ${newState2.water}`;
  };

  document.getElementById('light-aloe').onclick = function() {
    const newState2 = plant.stateControlAloe(plant.light);
    document.getElementById('light-value-aloe').innerText = `Light: ${newState2.light}`;
    if (newState2.light > 3) {
      document.getElementById('healing-aloe').innerText = `Healing: ${healing.healingCapabilities("cuts")}`;
    }
  };

  document.getElementById('wind').onclick = function() {
    let newState2 = plant.stateControlAloe();
    let newState = plant.stateControlOrchid();
    let newState1 = plant.stateControlPalm();
    newState2.soil = newState2.soil - 5 - 5 * counterWind;
    newState.soil = newState.soil - 5 - 5 * counterWind;
    newState1.soil = newState1.soil - 5 - 5 * counterWind;
    counterWind++;
    document.getElementById('soil-value-aloe').innerText = `Soil: ${newState2.soil}`;
    document.getElementById('soil-value-orchid').innerText = `Soil: ${newState.soil}`;
    document.getElementById('soil-value-palm').innerText = `Soil: ${newState1.soil}`;
    if (newState.soil < 4) {
      document.getElementById('shading-orchid').innerText = "";
    }
    if (newState1.soil < 5) {
      document.getElementById('shading-palm').innerText = "";
    }
    else if (newState1.soil > 4 && newState1.soil < 10) {
      document.getElementById('shading-palm').innerText = `Creating shade: ${shadingPalm.shadeSize("medium")}`;
    }
    return counterWind;
  }
  
  document.getElementById('show-state').onclick = function() {
    // We just need to call stateControl() without arguments 
    // to see our current state.
    const currentState = plant.stateControl();
    document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
    document.getElementById('water-value').innerText = `Water: ${currentState.water}`;
  };
};