import React, { Component } from 'react';
import Result from '../result/result.jsx';
import '../results/results.css';

const Results = ({ categoryResults = [], handdleAddToItenerary, currentCategory }) => {
  console.log(categoryResults, 'RESULTS');
  return (
     <div className='grid-container'>
       {categoryResults.map((result, i) => {
          return <Result className='grid-item' id={i} dataResult={result} handdleAddToItenerary={handdleAddToItenerary} currentCategory={currentCategory}/>
       })}
      </div>
  )
}

export default Results;