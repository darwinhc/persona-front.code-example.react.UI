import {
    CREATED_PERSON,
    LOADED_PEOPLE,
    DELETED_PERSON,
    UPDATED_PERSON
} from './types';

const initialState = null;

const personReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATED_PERSON:
            return [...state, action.payload];
        case LOADED_PEOPLE: 
            return action.payload;
        case DELETED_PERSON:
            return state.filter(person => person.id !== action.payload);
        case UPDATED_PERSON:
            return [
                ...state.filter(person => person.id !== action.payload.id),
                action.payload
            ];
        default: return state;
    }
}

export default personReducer;