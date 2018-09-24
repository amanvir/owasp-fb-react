import React from "react";
import purify from "dompurify";

export default class DOMPurifyExample extends React.Component {
  state = {
    text: "<b>Hello world!</b>"
  };

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  sanitize(input) {
    return { __html: purify.sanitize(input) };
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

        <h1 dangerouslySetInnerHTML={this.sanitize(this.state.text)} />
      </div>
    );
  }
}
