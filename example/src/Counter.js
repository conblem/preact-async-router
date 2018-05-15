import { Component } from "preact";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <button onClick={this.onClick}>+</button>
        <br />
        {this.state.count}
      </div>
    );
  }
}

export default Counter;
