import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Ex3 = () => {
  return (
    <div className="container mt-4">

      {/* Header */}
      <div className="p-5 mb-4 bg-light rounded-3">
        <h1 className="display-5 fw-bold">Let's test the grid!</h1>
      </div>

      {/* Nav */}
      <ul className="nav mb-3">
        <li className="nav-item">
          <a className="nav-link active" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <span className="nav-link disabled">Disabled</span>
        </li>
      </ul>

      {/* Grid - Now a single grey block with internal borders */}
      <div className="bg-secondary bg-opacity-25 p-0 border border-secondary mx-auto"> {/* Outer container with overall border */}
        <div className="row gx-0 text-center"> {/* gx-0 removes horizontal gutters */}
          <div className="col-6 border-end border-bottom border-secondary p-4">First col</div> {/* Right and bottom border */}
          <div className="col-6 border-bottom border-secondary p-4">Second col</div> {/* Bottom border */}
        </div>

        <div className="row gx-0 text-center">
          <div className="col-4 border-end border-bottom border-secondary p-4">col</div>
          <div className="col-4 border-end border-bottom border-secondary p-4">col</div>
          <div className="col-4 border-bottom border-secondary p-4">col</div>
        </div>

        <div className="row gx-0 text-center">
          <div className="col-2 border-end border-secondary p-4">col</div> {/* Only right border as it's the last row */}
          <div className="col-2 border-end border-secondary p-4">col</div>
          <div className="col-4 border-end border-secondary p-4">col</div>
          <div className="col-4 p-4">col</div> {/* Last cell, no right or bottom border needed from this cell */}
        </div>
      </div>


      {/* Footer */}
      <div className="mt-4 p-3 text-center fs-3 fw-bold" style={{ backgroundColor: '#d8c7c7' }}>
        Created by ABC!
      </div>
    </div>
  );
};

export default Ex3;