import React, { useState } from 'react';
import './BoardTable.scss';

const BoardTable = ({ data }) => {
    let GET_POSTS_SVC_URL = "//localhost:18080/posts/";

    // 페이징 구현
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem  = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    
    // Table Rows Render
    const renderTableRows = () => {
        return currentItems.map((item) => (
          <tr key={item.SERIAL_NO}>
            <td>{item.SERIAL_NO}</td>
            <td>{item.REQ_DATE}</td>
            <td>{item.REQ_TIME}</td>
            <td>
              <a href={`//localhost:18080/posts/${item.SERIAL_NO}`}>
                {item.REQ_CONTENTS}
              </a>
            </td>
            <td>{item.REQ_USER_NAME}</td>
            <td>{item.COMPLETE_REQ_DATE}</td>
            <td>{item.PRCS_COMPLETE_DATE}</td>
          </tr>
        ));
      };

    // Page Number Render
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
          pageNumbers.push(
            <li
              key={i}
              className={currentPage === i ? 'active' : ''}
              onClick={() => setCurrentPage(i)}
            >
              {i}
            </li>
          );
        }
        return pageNumbers;
      };

      return (
        <div className="board">
          <table className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>요청 일자</th>
                <th>요청 시각</th>
                <th>요청 내용</th>
                <th>요청자</th>
                <th>납기일자</th>
                <th>완료일자</th>
              </tr>
            </thead>
            <tbody>{renderTableRows()}</tbody>
          </table>
          <ul className="pagination">{renderPageNumbers()}</ul>
        </div>
      );
};

export default BoardTable;