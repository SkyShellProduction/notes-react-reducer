import React, {useState, MouseEvent, useContext} from 'react';
import {Props} from '../../../interfaces/propsInterface';
import './one-note.scss';
import { StoreContext } from '../../../store/';
interface Data {
    note: Props;
}
const OneNote = (props: Data) => {
    const {note } = props;
    const [reverseClass, setReverseClass] = useState(false);
    const {dispatch} = useContext(StoreContext);
    //удаляет заметку
    function del (e: MouseEvent<HTMLAnchorElement>, id: number | null) {
        e.preventDefault();
        setReverseClass(true);
        setTimeout(() => {
            if(id) {
                dispatch({type: 'delNote', payload: +id});
            }
        }, 300);
    }
    //устанавливает данные в модалку для редактирования 
    function setModal(e : MouseEvent<HTMLAnchorElement>, obj: Props) {
        e.preventDefault();
        dispatch({type: 'setShowModal', payload: true});
        dispatch({type: 'setModalData', payload: obj});
    }
    return (
        <div className={`notes__item ${reverseClass ? 'reverse' : ''}`}>
            <h3 className="notes__name">{note.title}</h3>
            <span className="notes__date">{note.date}</span>
            <p className="notes__descr">
                {note.text}
            </p>
            <div className="notes__control">
                <a href="#!" className="notes__edit" onClick={e => setModal(e, note)}>
                    <img src="@/assets/img/edit.svg" alt="" />
                    редактировать
                </a>
                <a href="#!" className="notes__delete" onClick={e => del(e, note.id)}>
                    <img src="@/assets/img/delete.svg" alt="" />
                    удалить
                </a>
            </div>
         </div>
    )
}
export default OneNote;