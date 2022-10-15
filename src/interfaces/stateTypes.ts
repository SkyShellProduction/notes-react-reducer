
import {Props} from './propsInterface';

export interface NotesStateData {
    showModal: boolean,
    notes: [] | Props[],
    search: string,
    modalData: Props
}
export type ACTIONTYPE =
| { type: "addNote", payload: Props }
| { type: "delNote", payload: number }
| { type: "setSearch", payload: string }
| { type: "editNote", payload: Props }
| { type: "setShowModal", payload: boolean }
| { type: "setModalData", payload: Props };
