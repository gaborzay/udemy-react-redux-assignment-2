import {ADD_PERSON, DELETE_PERSON} from '../actions';

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (ADD_PERSON):
      return {
        ...state,
        persons: state.persons.concat(action.payload.newPerson)
      };
    case (DELETE_PERSON):
      const updatedPersons = state.persons.filter(
        person => person.id !== action.payload.personId
      );

      return {
        ...state,
        persons: updatedPersons
      };
  }

  return state;
};

export default reducer;