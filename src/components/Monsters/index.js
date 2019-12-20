import React, { Component } from 'react';

class Monsters extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters } = this.state;
    return (
      <>
        {monsters.map(m => (
          <h2 key={m.id}>{m.name}</h2>
        ))}
      </>
    );
  }
}

export default Monsters;
