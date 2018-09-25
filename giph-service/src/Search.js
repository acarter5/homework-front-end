import React from 'react';
import './Search.css';

var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button onClick={(e)=>props.handleSearch(e.currentTarget.previousElementSibling.value)} className="btn hidden-sm-down">
      SEARCH
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
