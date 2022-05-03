import React, { Component } from "react";
import "./Featured.css";

class Featured extends Component {
  render() {
    return (
      <div className="featured">
        <div className="featuredItem">
          <img
            src="https://media.istockphoto.com/photos/canberra-australian-parliament-house-illuminated-at-twilight-picture-id902414318?b=1&k=20&m=902414318&s=170667a&w=0&h=vS7PGn4eW_HOq1si81mRxOcRh90gVcxgHnoYajujvbQ="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitle">
            <h1>Canberra</h1>
            <h2>123 Properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3lkbmV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitle">
            <h1>Sydney</h1>
            <h2>123 Properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://media.istockphoto.com/photos/sunset-over-melbourne-and-yarra-river-picture-id1141854138?b=1&k=20&m=1141854138&s=170667a&w=0&h=lxsyrUPjvJk8ENRQjSZs-CEU0-XAlEcofKdexDm7qMA="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitle">
            <h1>Melbourne</h1>
            <h2>123 Properties</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Featured;
