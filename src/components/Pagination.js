import React from 'react'

export default function Pagination(props) {
    const { goToNextPage, goToPreviousPage } = props;
    return (
        <div>
            {goToPreviousPage && <button onClick={goToPreviousPage}>Previous Page</button>}
            {goToNextPage && <button onClick={goToNextPage}>Next Page</button>}
        </div>
    )
}
