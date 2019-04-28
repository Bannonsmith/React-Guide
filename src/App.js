import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"
import { forInStatement } from '@babel/types';

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

  deletePersonHandler = (personIndex) => {
    // bad practice to manipulate the orignal so use slice/ or spread operaor (...)to get a copy first
    // const persons= this.state.persons;
    // const persons = this.state.person.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({
      persons:persons
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
          {this.state.persons.map((person, index) => {
            return <Person 
                    click={() => this.deletePersonHandler(index)}
                    name={person.name}
                    age={person.age} />
          })}
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
