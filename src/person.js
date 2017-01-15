// person.js
import Immutable from 'immutable';

// Actions
const LOAD   = 'my-app/person/LOAD';
const CREATE = 'my-app/person/CREATE';
const UPDATE = 'my-app/person/UPDATE';
const REMOVE = 'my-app/person/REMOVE';

// Reducer
export default function reducer(state = Immutable.Map(), action = {}) {
    switch (action.type) {
        case LOAD:
            return Immutable.fromJS(action.person);//Plain js object from server

        case UPDATE:
            return state.set('person',action.person);//Already immutable type

        // do reducer stuff
        default: return state;
    }
}

// Action Creators

function fetchPersonFromServer() {
  return fetch("http://services.odata.org/TripPinRESTierService/People('russellwhyte')");
}

export function loadPerson(name) {

  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.

  return function (dispatch) {
    return fetchPersonFromServer().then(
      response => response.json().then(
          person=>dispatch(
              updatePerson(Immutable.fromJS(person)))),
      error => console.log('Error:'+error+' getting person ' + name)
    );
  };
}

// export function loadPerson() {
//   return { type: LOAD };
// }

export function createPerson(person) {
  return { type: CREATE, person };
}

export function updatePerson(person) {
  return { type: UPDATE, person };
}

export function removePerson(person) {
  return { type: REMOVE, person };
}

//Selectors
export function getPerson (state) {
  return state.get("person");
}
