import React, { Component } from "react";
import Image from "../Image.png";

class Person extends Component {
  state = {
    fullName: "Taieb Trabelsi",
    bio: "Good code is its own best documentation",
    imgSrc: <img src={Image} className="event" alt=""></img>,
    profession: "Web Developer",
    timer: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>{this.state.timer}</h1>
        <h1 className="prenom"> {this.state.fullName} </h1>
        <p className="info">{this.state.bio}</p>
        {this.state.imgSrc}
        <h2 className="prenom">{this.state.profession}</h2>
      </div>
    );
  }
}
export default Person;
