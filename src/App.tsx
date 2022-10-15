import React, { useReducer,MouseEvent } from "react";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Notes from "./components/Notes/Notes";
import addNoteIcon from './assets/img/add-note.svg';
import {stateReducer, todoReducer, StoreContext} from './store';
function App() {
  const [todoState, dispatch] = useReducer(todoReducer, stateReducer);
  function showModal(e: MouseEvent<HTMLAnchorElement>) {
      e.preventDefault();
      dispatch({type: 'setShowModal', payload: true});
  }
  return (
      <StoreContext.Provider value={ {todoState, dispatch} }>
        <Header/>
        <Notes />
        <Modal />
        <a href="#!" className="add__note" onClick={e => showModal(e)}>
          <img src={addNoteIcon} alt="" />
        </a>
      </StoreContext.Provider>
  );
}

export default App;
