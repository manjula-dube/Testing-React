import React, { Component } from "react";

export default class Link extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick() {
    alert("clicked");
    this.setState({ clicked: true });
  }

  render() {
    const { title, url } = this.props;
    return (
      <div className="link-container">
        <a href={url} target="_blank" onClick={() => this.handleClick()}>
          {title}
        </a>
      </div>
    );
  }
}
