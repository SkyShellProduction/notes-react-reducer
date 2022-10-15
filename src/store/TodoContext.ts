import { createContext } from "react";
import { Dispatch } from 'react';
import { NotesStateData, ACTIONTYPE } from "../interfaces/stateTypes";
export const StoreContext = createContext({} as {todoState: NotesStateData, dispatch: Dispatch<ACTIONTYPE>});