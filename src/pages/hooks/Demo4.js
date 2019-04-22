import React, { useReducer } from 'react'

const initialState = {
  firstName: '',
  lastName: '',
  favoriteColor: '',
};

function registrationReducer(state = initialState, action) {
  switch (action.type) {
    case 'setFirstName':
      return { ...state, firstName: action.payload };
    case 'setLastName':
      return { ...state, lastName: action.payload };
    case 'setFavoriteColor':
      return { ...state, favoriteColor: action.payload };
    default:
      return state;
  }
}

const Demo4 = () => {
  const [state, dispatch] = useReducer(registrationReducer, initialState);

  return (
    <div className="demo-section hooks-demo-4">
      <h3>Demo 4 - The Reducer Hook</h3>
      <p>The reducer hook is used by importing <code>useReducer</code> from React. The <code>useReducer</code> method
        takes a reducer and the intial state as arguments and then returns an array of two elements: the first is
        the state variable, and the second is the dispatch function.</p>
      <p>The reducer hook lets you write code that is very similar to how things work in Redux.</p>
      <div className="state-data">
        <h4>State Data:</h4>
        <div className="left-indent">First Name: {state.firstName}</div>
        <div className="left-indent">Last Name: {state.lastName}</div>
        <div className="left-indent">Favorite Color: {state.favoriteColor}</div>
      </div>
      <form id="useReducerForm" onSubmit={e => e.preventDefault()}>
        <label htmlFor="firstName4">First Name</label>
        <input
          type="text"
          id="firstName4"
          value={state.firstName}
          onChange={e => dispatch({ type: 'setFirstName', payload: e.target.value })}
        />
        <label htmlFor="lastName4">Last Name</label>
        <input
          type="text"
          id="lastName4"
          value={state.lastName}
          onChange={e => dispatch({ type: 'setLastName', payload: e.target.value })}
        />
        <label htmlFor="favoriteColor4">Favorite Color</label>
        <select
          id="favoriteColor4"
          value={state.favoriteColor}
          onChange={e => dispatch({ type: 'setFavoriteColor', payload: e.target.value })}
        >
          <option value="" disabled>Please select</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Yellow">Yellow</option>
        </select>
      </form>
    </div>
  );
}

export default Demo4;
