import React from "react";

export default class DangerouslySet extends React.Component {
  state = {
    text: "<b>Hello world!</b>"
  };

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  danger(input) {
    return { __html: input };
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

        <h1 dangerouslySetInnerHTML={this.danger(this.state.text)} />
      </div>
    );
  }
}
