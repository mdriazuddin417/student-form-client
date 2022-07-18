import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, setPage }) => {
  const handlePageClick = (data) => {
    setPage(data.selected + 1);
  };
  return (
    <div>
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={pageCount - 1}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"pg-item"}
        pageLinkClassName={"pg-link"}
        previousClassName={"pg-item"}
        previousLinkClassName={"pg-link"}
        nextClassName={"pg-item"}
        nextLinkClassName={"pg-link"}
        breakClassName={"pg-item"}
        breakLinkClassName={"pg-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Pagination;
