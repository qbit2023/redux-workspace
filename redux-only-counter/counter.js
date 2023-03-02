const { createStore } = require("redux");

//initial state
const initialState = {
  count: 0,
  posts: [],
  post: {},
};
// actions and action creator
// actions(a plain js object, it's event, type prop is mandatory, payload prop is optional )
/*{
  type: "INCREAMENT";
}

{
  type: "DECREMENT";
}

{
  type: "RESET";
}

{
  type: "INCREASE_BY_AMT";
}

*/

// action creator -> a func that returns action
// increment action creator
const incrementAction = () => {
  return {
    type: "INCREAMENT",
  };
};

//decrement action creator
const decrementAction = () => {
  return {
    type: "DECCREAMENT",
  };
};

//reset action creator
const resetAction = () => {
  return {
    type: "RESET",
  };
};

//increase by amout action creator
const increaseByAmt = (anyAmt) => {
  return {
    type: "INCREASE_BY_AMT",
    payload: anyAmt,
  };
};
//reducer

const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREAMENT") {
    return {
      count: state.count + 1,
    };
  } else if (action.type === "DECCREAMENT") {
    return {
      count: state.count - 1,
    };
  } else if (action.type === "RESET") {
    return {
      count: 0,
    };
  } else if (action.type === "INCREASE_BY_AMT") {
    return {
      count: state.count + action.payload,
    };
  }
};

//store
const store = createStore(counterReducer);

//subscribe to store(event listener)
store.subscribe(() => {
  //get state tree
  const stateData = store.getState();
  console.log(stateData);
});

//dispatch(call) increment
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());

//dispatch(call) decrement
store.dispatch(decrementAction());

//
store.dispatch(increaseByAmt(5));
store.dispatch(increaseByAmt(15));
