import { CREATED_PERSON, DELETED_PERSON,
    LOADED_PEOPLE, UPDATED_PERSON } from "./types";


export const loadPeople = people => {

    return { type: LOADED_PEOPLE, payload: people };
};

export const createPerson = person => {
    return { type: CREATED_PERSON, payload: person };
};

export const deletePerson = id => {
    return { type: DELETED_PERSON, payload: id }
}

export const updatePerson = newValues => {
    return { type: UPDATED_PERSON, payload: newValues }
}