import React, { useContext, useState, useMemo, useEffect } from 'react';
import OneNote from './OneNote/OneNote';
import listIcon from '../../assets/img/list.svg';
import gridIcon from '../../assets/img/grid.svg';
import { Props } from '../../interfaces/propsInterface';
import './notes.scss';
import { StoreContext } from '../../store';
const Notes = () => {
    const [grid, setGrid] = useState(true);
    const {todoState} = useContext(StoreContext);
    //фильтрация заметок по поиску
    const filterNotes = useMemo(() => {
      return todoState.search ? todoState.notes.filter(c => c.title.toLowerCase().includes(todoState.search.toLowerCase())) : todoState.notes
    }, [todoState.search, todoState.notes]);
    //сохранение заметок в localStorage
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(todoState.notes));
    }, [todoState.notes]);
    return (
        <div className="notes">
            <div className="container">
                <div className="notes__nav">
                    <h3 className="notes__title">{filterNotes.length ? 'Все заметки' : 'Нет заметок'}</h3>
                    <button className="notes__checker" onClick={() => setGrid(!grid)}>
                        {grid ? <img src={listIcon} alt="" />
                        : <img src={gridIcon} alt="" />}
                        <span>{grid ? 'Список' : 'Сетка'}</span>
                    </button>
                </div>
                <div className={`notes__grid ${!grid ? 'column' : ''}`}>
                    {filterNotes.map((item: Props) => {
                        return (
                            <OneNote 
                                key={item.id}
                                note={item} 
                                />
                        )
                    })}
                </div> 
            </div>
        </div>
    )
}
export default Notes;