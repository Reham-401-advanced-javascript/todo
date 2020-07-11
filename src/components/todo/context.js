import React, {useContext} from 'react';
import { PaginationContext }  from '../contex/context';

const Pagination = ({allItem}) => {
  const nuberOfPage = [];
  const pagination = useContext(PaginationContext);

  let numberOfItems=Math.ceil(allItem / pagination.itemPerPage);
   
  for (let i = 1; i <= numberOfItems; i++) {
    nuberOfPage.push(i);
  }

  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item">
          <p onClick={pagination.currentPage > 1 ? () => pagination.paginate(pagination.currentPage--): () => pagination.paginate(pagination.currentPage)} className="page-link" href="#" tabIndex="-1">Previous</p>
        </li>
        {nuberOfPage.map(number => (
          <li key={number} className='page-item'>
            <p onClick={() => pagination.paginate(number)}  className='page-link'>
              {number}
            </p>
          </li>
        ))}
        <li className="page-item">
          <p onClick={ nuberOfPage.length !== pagination.currentPage ? () => pagination.paginate(pagination.currentPage++): () => pagination.paginate(pagination.currentPage)} className="page-link" href="#">Next</p>
        </li>
      </ul>
    </nav>

  );
};

export default Pagination;