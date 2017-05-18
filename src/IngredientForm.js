import React, { Component } from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';

class IngredientForm extends Component {

  handleInputChange(e) {
    // not used, just for reference
    // console.log(e.target.value)
  }

  focus() {
    // console.log(this.nameInput.value)s
  };

  newIngredient() {
    const URL = 'http://yamagucci.herokuapp.com/api/ingredients?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNob3VoZWkueWFtYXVjaGlAbGl2ZS5jb20iLCJpYXQiOjE0OTQ5OTMxMTV9.G0ctQghRRAqaZiGSZyT5Oi-YXUUfb3UsYQpsmMaVA0k'
    axios.post(URL + '&name=' + this.nameInput.value)
      .then((response) => {
        console.log(response)
        // reset value of inptu
        this.nameInput.value = '';
        this.props.getIngredientList();
      })
      .catch((error) => {
        console.log(error)
      })
  };

  render() {
    return (
      <div>
        <input
          type="text"
          ref={input => { this.nameInput = input; }}
          onChange={(e) => this.handleInputChange(e)}
        />
        <button onClick={() => this.newIngredient()}>Create!!</button>
      </div>
    )
  }
}
export default IngredientForm;
