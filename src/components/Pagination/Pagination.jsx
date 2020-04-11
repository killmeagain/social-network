import React from 'react';

const Pagination = props => {
    const { 
        pageSize, 
        currentPage, 
        totalCount, 
        paginationCounter, 
        changePage, 
        setPaginationCouterIncrement, 
        setPaginationCouterDecrement
     } = props;

    //  Скопировал значение счетчика пагинации в переменную
    let counter = paginationCounter; 
    // Количество страниц
    let pages = Math.ceil(totalCount / pageSize);
    // Массив номеров страниц
    let paginationCounterArray = [];
    // Добавление номеров страниц в массив
    for (let i = 0; i < 4; i++) paginationCounterArray.push(++counter);

    // обработчики
    let handlerButtonDownClick = () => setPaginationCouterDecrement();
    let handlerButtonNextClick = () => setPaginationCouterIncrement();
    let handlerButtonCurrentPageClick = page => changePage(page);

    // Массив с кнопками
    let paginationElementsArray = paginationCounterArray.map(page => {
        return (
            <li className="pagination__item">
                <button onClick={() => handlerButtonCurrentPageClick(page)} type="button" className={`pagination__link ${page === currentPage && "pagination__link_active"}`}>{page}</button>
            </li>
        )
    });

    return (
        <div className="pagination">
            <ul className="pagination__list">
                <li className="pagination__item">
                    <button onClick={ handlerButtonDownClick } type="button" className="pagination__link pagination__link_down"></button>
                </li>
                {paginationElementsArray}
                <li className="pagination__item">
                    <button onClick={ handlerButtonNextClick } type="button" className="pagination__link pagination__link_next"></button>
                </li>
            </ul>
            <p className="pagination__description">Количество страниц - {pages} </p>
        </div>
    )
}

export default Pagination;