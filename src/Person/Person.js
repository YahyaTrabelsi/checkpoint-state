import React, { Component } from "react";
import Image from "../Image.jpg";

class Person extends Component {
  state = {
    fullName: "Yahya Trabelsi",
    bio: "Good code is its own best documentation. As you’re about to add a comment, ask yourself, “How can I improve the code so that this comment isn’t needed?” Improve the code and then document it to make it even clearer, The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time",
    imgSrc: <img src={Image} className="event" alt=""></img>,
    profession: "Web Developer",
    timer: 0
  };

  componentDidMount (){
   setInterval(() => {
       this.setState({timer: this.state.timer +1})
   })}
  
  
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
