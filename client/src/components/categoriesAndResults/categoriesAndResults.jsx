import React, { Component } from 'react';
import NavigationBar from '../navigationBar/navigationBar.jsx';
import Header from '../header/header.jsx';
import Results from '../results/results.jsx';
import '../categoriesAndResults/categoriesAndResults.css';

class CategoriesAndResults extends Component {
    constructor(props) {
      super(props)
      this.state = {
        currentCategory:'topSpots',
      }
      this.changeCategory = this.changeCategory.bind(this);
    }

    changeCategory (category) {
      this.setState({
        currentCategory: category,
      })
    }

    render() {
      const category = this.state.currentCategory;
      console.log(this.props.results[`${category}`]);
      return (
        <div>
          <div className='headerAndNavigationBar'>
            <Header city={this.props.results.city}/>
            <NavigationBar onCategoryChange={this.changeCategory}/>
          </div> 
          <div className='main-content-results'>
            <Results categoryResults={this.props.results[`${category}`]} handdleAddToItenerary={this.props.handdleAddToItenerary} currentCategory={this.state.currentCategory}/>
          </div>
        </div>
      )  
    }    
}

export default CategoriesAndResults;