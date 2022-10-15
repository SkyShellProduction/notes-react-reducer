import { Reducer } from 'react';
import {NotesStateData, ACTIONTYPE} from '../interfaces/stateTypes';
export const todoReducer: Reducer<NotesStateData, ACTIONTYPE> = (state, {type, payload}) => {
    if(type === 'addNote') {
        return {
            ...state,
            notes: [...state.notes, payload]
        }
    }
    else if(type === 'delNote') {
        const n = state.notes.filter(c => c.id !== payload)
        return {
            ...state,
            notes: [...n]
        }
    }
    else if(type === 'editNote') {
        const idx = state.notes.findIndex(c => c.id === payload.id);
        const temp = state.notes.slice();
        temp[idx] = payload;
        return {
            ...state,
            notes: [...temp]
        }
    }
    else if(type === 'setShowModal') {
        return {
            ...state,
            showModal: payload
        }
    }
    else if(type === 'setModalData') {
        return {
            ...state,
            modalData: payload
        }
    }
    else if(type === 'setSearch') {
        return {
            ...state,
            search: payload
        }
    }
    else throw new Error(`Your action ${type} is not defined`);
}