import React, { useContext, useRef, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import searchIcon from '../../assets/img/search.svg';
import backIcon from '../../assets/img/back.svg';
import closeIcon from '../../assets/img/close.svg';
import { StoreContext } from "../../store/";
import './header.scss';

const Header = () => {
    const [show, setShow] = useState(true);
    const {todoState, dispatch} = useContext(StoreContext);
    const notesRef = useRef(null);
    const formRef = useRef(null);
    const nodeRef = show ? notesRef : formRef;
    return(
        <header className="header">
            <SwitchTransition mode="out-in">
                <CSSTransition
                    key={show.toString()}
                    timeout={200}
                    nodeRef={nodeRef}
                    classNames="fade">
                        {show ? 
                            <div className="header__notes" ref={notesRef}>
                                <h2 className="header__title">Заметки</h2>
                                <button className="header__search" onClick={() => setShow(false)}>
                                    <img src={searchIcon} alt="" />
                                </button>
                            </div>
                        :
                            <form className="header__form" ref={formRef}>
                                <a href="#!" className="back" onClick={() => {setShow(true); dispatch({type: 'setSearch', payload: ''})}}>
                                    <img src={backIcon} alt="" />
                                </a>
                                <input type="text" 
                                    className="header__input" 
                                    placeholder="Search..."  
                                    value={todoState.search}
                                    onChange={e => dispatch({type: 'setSearch', payload: e.target.value})}/>
                                <a href="#!" className="back" onClick={() => dispatch({type: 'setSearch', payload: ''})}>
                                    <img src={closeIcon} alt="" />
                                </a>
                            </form> }
                </CSSTransition>
            </SwitchTransition>
        </header>
    )
}
export default Header;