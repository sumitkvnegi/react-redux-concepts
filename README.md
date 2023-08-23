# React Redux

First install some package so that we can use redux in react :-

* redux - core library enables the redux architecture
* react-redux - simplifies connecting your react components to the redux store
* redux-thunk - allows you to write asynchronous logic in your redux actions
* @redux-devtools/extension - connects your redux application to redux dev tools

> Redux enables us to maintain a single centralized store that manages the state of your entire application. all components in your application can access this store and update or retrieve data from it as needed.

some components of react that enables this centralized approach to state management are:

1. Store
2. Actions
3. Dispatch
4. Reducers


### Store

> redux store is big container that holds all the data for your application. store is a single source of truth i.e, any component in our application can access it to retrieve and update data.

### Actions

> an action is  an object that describes what changes need to be made to the state of your application. it sends data as a action object from our application to the redux store and serves as the only way to update the store.

> action must have type (string constant) property describing the action being performed.

> an action can have payload property. the payload property respresents the data that provides additional information about the action performed.

```
function addTask(taskText) {
	return {
	type: 'ADD_TASK',
	payload: {
		id: 1,
		text: taskTest,
		completed: false
		}
	}
}
```

### Reducers

> reducer is a function that takes in the current state of an application and an action as arguments, and returns a new state based on the action.

```
const initialState = {
	count: 0
};

function counterReducer(state = initialState, action) {
	switch(action.type){
		case 'INCREMENT':
			return {...state, count: state.count + 1};
		case 'DECREMENT':
			return {...state, count: state.count - 1};
		default:
			return state;
	}
}
```

### Dispatch

> dispatch (like a mail carrier) is a function provided by store that allows you send an action to update the state of your application. when we call dispatch, the store runs an action through all of the available reducers, which in turn update the state accordingly.
