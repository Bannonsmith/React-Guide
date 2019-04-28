import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 29},
      { name: "Manu", age: 29},
      { name: "Stephanie", age: 47}
    ],
    otherState: "some other value",
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log("Was clicked")
    // DON'T DO THIS: this.state.person[0].name = "Sam I am"
    this.setState ({
      persons: [
        {name: newName, age: 222222},
        { name: "Manu", age: 29},
        { name: "Stephanie", age: 27}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState ({
      persons: [
        {name: "Max", age: 222222},
        { name: event.target.value, age: 29},
        { name: "Stephanie", age: 27}
      ]
    })
  }
// allows the button to remove the content inside of the div
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    // inline style
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, "Max!")}
            changed={this.nameChangedHandler}> My Hobbies: Racing</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
        </div>
      );

    }

    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
  // *****This is what the above return turns into using JSX*****
  // return React.createElement("div", {className: "App"}, React.createElement("h1", null, "did this work?") )
}

export default App;
