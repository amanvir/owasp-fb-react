import React from "react";

export default class BasicComponent extends React.Component {
  state = {
    text: "Hello world!"
  };

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          style={{
            fontSize: "40px",
            padding: "10px"
          }}
          onChange={this.handleChange.bind(this)}
          type="text"
        />

        <h1>{this.state.text}</h1>
      </div>
    );
  }
}
