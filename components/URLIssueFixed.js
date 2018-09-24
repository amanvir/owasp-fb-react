import React from "react";

export default class URLIssueFixed extends React.Component {
  state = {
    links: []
  };

  addLink(e) {
    const userSuppliedURL = e.target.value;
    const parsed = new URL(userSuppliedURL);
    if (parsed.protocol !== "https:") {
      return;
    }

    e.key === "Enter"
      ? this.setState({ links: [...this.state.links, userSuppliedURL] })
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
