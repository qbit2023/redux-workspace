const { createStore, combineReducers } = require("redux");

const initialState = {
  posts: [],
};

const usersInitialState = {
  users: [],
};

//action (action and action creator)
const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";
const ADD_USER = "ADD_USER";

//action types

// add post action creator
const addPostsAction = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};
// remove post action creator
const removePostsAction = (id) => {
  return {
    type: REMOVE_POST,
    id: id,
  };
};

const addUserAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// post reducer
const postReducer = (state = initialState, action) => {
  if (action.type === "ADD_POST") {
    return {
      posts: [...state.posts, action.payload],
    };
  } else if (action.type === "REMOVE_POST") {
    return {
      posts: state.posts.filter((post) => {
        return post.id != action.id;
      }),
    };
  } else {
    return state;
  }
};

//user reducer
const userReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};

//root reducer

const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
});

//store
const store = createStore(rootReducer);

//dispatch
store.subscribe(() => {
  const data = store.getState();
  console.log("posts: ", data.posts);
  console.log("users: ", data.users);
});

//dispatch
//dispatch add
store.dispatch(addPostsAction({ id: 1, title: "Best Course" }));
store.dispatch(addPostsAction({ id: 2, title: "Best Tutorial" }));
store.dispatch(addPostsAction({ id: 3, title: "Intro to python" }));

//dispatch remove
store.dispatch(removePostsAction(2));

// dispatch: add new user
store.dispatch(addUserAction({ name: "Ankit", email: "test@mail.com" }));
store.dispatch(addUserAction({ name: "Jaya", email: "test@mail.com" }));
