import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Movies from "./components/movies";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("Component - Did - Mount");
  }
  handleReset = () => {
    const newCounters = this.state.counters.map(ct => {
      ct.value = 0;
      return ct;
    });
    this.setState({ counters: newCounters });
  };
  handleDecrement = counter => {
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value--;
    this.setState({ counters: newCounters });
  };
  handleIncrement = counter => {
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value++;
    this.setState({ counters: newCounters });
  };
  handleDelete = counterId => {
    const newCounters = this.state.counters.filter(ct => ct.id != counterId);
    this.setState({ counters: newCounters });
  };
  render() {
    console.log("App-rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
