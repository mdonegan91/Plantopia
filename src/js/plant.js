//Business Logic
// This function stores our state.
export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const stateControlOrchid = storeState();
export const stateControlPalm = storeState();
export const stateControlAloe = storeState();

// This is a function factory. 
// We can easily create more specific functions that 
// alter a plant's soil, water, and light to varying degrees.
export const changeState = (prop) => {
return (value) => {
  return (state) => ({
    ...state,
    [prop] : (state[prop] || 0) + value
  });
};
};

// We create four functions using our function factory. 
// We could easily create many more.
export const feed = changeState("soil")(1);
export const blueFood = changeState("soil")(5);

export const hydrate = changeState("water")(1);
export const superWater = changeState("water")(5);
export const light = changeState("light")(1);

// Plant Method Compositions
export const canBloom = (plant) => ({
  color: (color) => `${plant.name} is blooming with ${color} color.`
});

export const canCreateShade = (plant) => ({
  shadeSize: (shadeSize) => `${plant.name} is creating a shade that is ${shadeSize}.`
});

export const canHeal = (plant) => ({
  healingCapabilities: (healingCapabilities) => `${plant.name} can heal ${healingCapabilities}.`
});

// Plant Function Factories
export const orchid = (name) => {
  let state = {
    name
  };
  return { ...state, ...canBloom(state), ...canCreateShade(state) };
};

export const palm = (name) => {
  let state = {
    name
  };
  return { ...state, ...canCreateShade(state) };
};

export const aloe = (name) => {
  let state = {
    name
  };
  return { ...state, ...canHeal(state) };
};