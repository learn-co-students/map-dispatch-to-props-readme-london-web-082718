import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick = event => {
    this.props.addItem()
  }

  render() {
    debugger
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};


// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem());
//     }
//   };
// };

//The second argument of connect will accept a function (as we've seen) or an object. If we pass in a function, mapDispatchToProps(), we must incorporate dispatch. If we pass in an object, connect handles this for us!


export default connect(
  state => ({ items: state.items }),
  { addItem }
)(App);