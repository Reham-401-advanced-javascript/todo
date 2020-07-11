import React ,{useState } from 'react';

export const PaginationContext = React.createContext();

function Pagination (props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(3);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const setItem = numberOfPages => setItemPerPage(numberOfPages);
  
  const lastIndex = currentPage * itemPerPage;
  const firstIndex = lastIndex - itemPerPage;
  const list = props.list.sort((a,b)=>{
    if (a.difficulty > b.difficulty ){
      return 1;
    }
    else {
      return -1;
    }
  });
  let itemsInTheCurrentPage = list.slice(firstIndex, lastIndex);
  

  const state = {
    currentPage,
    itemPerPage,
    itemsInTheCurrentPage,
    paginate,
    setItem,
    setCurrentPage :setCurrentPage,
    setItemPerPage : setItemPerPage,

  };
 
  return (
    <PaginationContext.Provider value={state}>
      {props.children}
    </PaginationContext.Provider>
  );
  
}

export default Pagination;