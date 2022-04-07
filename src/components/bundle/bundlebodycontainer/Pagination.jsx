import React from 'react';

function Pagination({totalPost, postPerPage}) {
    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(totalPost / postPerPage); i++ ){
        pageNumber.push(i);

    }
  return (
    <div className='mainContainer'>
      <ul className="mainlistItems">
          {pageNumber.map(number =>(
              <li className="listItems">
                  <a href="#">
                      {number}
                  </a>
              </li>
          ))}
      </ul>
    </div>
  );
}

export default Pagination;
