import React, { FormEvent, useEffect, useRef, useState, useContext } from 'react';
import {CSSTransition} from 'react-transition-group';
import {StoreContext} from '../../store/';
import './modal.scss';
const Modal = () => {
    const {todoState, dispatch} = useContext(StoreContext);
    const modalRef = useRef(null);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    function clean(){
        dispatch({type: 'setShowModal', payload: false});
        dispatch({type: 'setModalData', payload: {
                title: '',
                text: '',
                id: null,
                date: ''
        }});
        setTitle('');
        setText('');
    }
    function send(e: FormEvent){
       e.preventDefault();
       const obj = {
        title,
        text,
        date: new Date().toLocaleDateString(),
        id: todoState.modalData.id || null,
       };
       if(todoState.modalData.id){
            dispatch({type: 'editNote', payload: obj});
       }
       else {
            obj.id = Date.now();
            dispatch({type: 'addNote', payload: obj});
       }
       clean();
    }
    useEffect(() => {
       if(todoState.modalData.id) {
        setTitle(todoState.modalData.title);
        setText(todoState.modalData.text);
       }

    }, [todoState.modalData])
    return (
        <CSSTransition
            nodeRef={modalRef}
            in={todoState.showModal}
            timeout={300}
            unmountOnExit
            classNames="my-modal">
                <div className="modal" ref={modalRef} onClick={() => clean()}>
                    <div className="modal__content" onClick={e => e.stopPropagation()}>
                        <h3 className="modal__title">{todoState.modalData.id ? 'Изменить' : 'Добавить' }</h3>
                        <form className="modal__form" onSubmit={e => send(e)}>
                            <input type="text" 
                                placeholder="Title" 
                                className="modal__input"
                                value={title}
                                onChange={e => setTitle(e.target.value)} 
                                required />
                            <textarea className="modal__input modal__area" 
                                placeholder="Content" 
                                value={text}
                                onChange={e => setText(e.target.value)} 
                                required ></textarea>
                            <div className="modal__control">
                                <a href="#!" className="modal__cancel" onClick={() => clean()}>Отмена</a>
                                <button className="modal__btn">{todoState.modalData.id ? 'Изменить' : 'Добавить' }</button>
                            </div>
                        </form>
                    </div>
                </div>
        </CSSTransition>
    )
}
export default Modal;