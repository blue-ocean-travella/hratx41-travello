import React, { Component } from 'react';
import Result from '../result/result.jsx';
import '../results/results.css';

const Results = ({ categoryResults = [], handdleAddToItenerary, currentCategory, city }) => {
  // console.log(categoryResults, 'RESULTS');
  return (
     <div className='grid-container'>
       {categoryResults.map((result, i) => (
         <Result className='grid-item' key={i} dataResult={result} handdleAddToItenerary={handdleAddToItenerary} currentCategory={currentCategory} id={i} city={city}/>
       ))}
      </div>
  );
};

export default Results;