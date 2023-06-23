const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 1;

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        count: state.count + 1
      };
    case 'SUBTRACT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

const createStore = (reducer) => {
  let state = reducer(undefined, {}); // Initialize the state with the initial reducer call
  const listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action); // Update the state by calling the reducer with the current state and action
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    };
  };

  dispatch({}); // Trigger the initial state update

  return { getState, dispatch, subscribe };
};

const store = createStore(reducer);

const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');
const reset = document.querySelector('[data-key="reset"]');

const subtractHandler = () => {
  store.dispatch({ type: 'SUBTRACT' });
};

const addHandler = () => {
  store.dispatch({ type: 'ADD' });
};

const resetHandler = () => {
  store.dispatch({ type: 'RESET' });
};

subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);
reset.addEventListener('click', resetHandler);

const render = () => {
  const state = store.getState();
  number.value = state.count;

  subtract.disabled = state.count <= MIN_NUMBER;
  add.disabled = state.count >= MAX_NUMBER;

  console.log('Current state:', state); // Logging the state to the console
};

store.subscribe(render);

// Initial rendering
render();

