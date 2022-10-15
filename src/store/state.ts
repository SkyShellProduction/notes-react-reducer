import { NotesStateData } from "../interfaces/stateTypes";

const firstNotes = localStorage.notes ? JSON.parse(localStorage.notes) : [];
export const stateReducer: NotesStateData = {
    showModal: false,
    notes: firstNotes,
    search: '',
    modalData: {
        title: '',
        text: '',
        date: '', 
        id: null
    },
};
