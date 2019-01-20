import * as actionTypes from './actions';

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_CONTACTS:
      return state;
    case actionTypes.REORDER_ALL_CONTACTS:
      return {
        ...state,
        persons: action.personData
      };
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.floor(new Date()/1000),
        name: action.personData.name,
        surname: action.personData.surname,
        tel: action.personData.tel,
        email: action.personData.email,
        birth: action.personData.birth,
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson)
      };
    case actionTypes.EDIT_PERSON:
      const newPersons = state.persons.map(
        (person) => {
          if(person.id === action.personData.id) {
            return {
              ...person,
              ...action.personData,
            }
          } else {
            return person;
          }
        }
      );
      return {
        ...state,
        persons: newPersons
      };
    default :
      return state;
  }
};

export default reducer;