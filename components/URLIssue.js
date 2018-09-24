import React from "react";

export default class URLIssue extends React.Component {
  state = {
    links: []
  };

  addLink(e) {
    e.key === "Enter"
      ? this.setState({ links: [...this.state.links, e.target.value] })
      : "";
  }

  render() {
    return (
      <div>
        <input
          style={{
            fontSize: "40px",
            padding: "10px"
          }}
          onKeyPress={this.addLink.bind(this)}
          type="text"
        />

        <h1>Links</h1>
        <ul>
          {this.state.links.map(link => (
            <li>
              <a href={link}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
