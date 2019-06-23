import React, { Component } from 'react';
import Result from '../result/result.jsx';
import '../results/results.css';

const Results = ({ categoryResults = [] }) => {
  console.log(categoryResults, 'RESULTS');
  return (
     <div className='grid-container'>
       {categoryResults.map((result, i) => {
          return <Result className='grid-item' id={i} dataResult={result}/>
       })}
      </div>
  )
}

export default Results;