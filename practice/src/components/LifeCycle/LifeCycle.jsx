import React from "react";

export class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  componentDidMount = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos/?_limit=10";
    const data = await fetch(url);
    const dataResponse = await data.json();
    this.setState((state) => ({ todos: state.todos.concat(dataResponse) }));
  };
  componentDidUpdate() {
    console.log(this.state.count);
  }
  componentWillUnmount() {
    console.log("Удаление");
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count % 2 === 0;
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((todo) => {
            return <li key={todo.id}>{todo.title}</li>;
          })}
        </ul>
        <button onClick={this.increment}>+</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
