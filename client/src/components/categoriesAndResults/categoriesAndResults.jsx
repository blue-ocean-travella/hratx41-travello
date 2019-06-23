import React, { Component } from 'react';
import NavigationBar from '../navigationBar/navigationBar.jsx';
import Header from '../header/header.jsx';
import Result from '../result/result.jsx';


class CategoriesAndResults extends Component {
  constructor() {
    super()
  }

  render () {
    return (
      <>
        <div>
          <Header/>
          <NavigationBar/>
          <Result/>
        </div>
      </>
    )
  }


}

export default CategoriesAndResults;