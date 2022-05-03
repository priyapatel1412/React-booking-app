import React, { Component } from "react";
import "./PropertyList.css";

class PropertyList extends Component {
  render() {
    return (
      <div className="propertyList">
        <div className="propertyListItem">
          <img
            src="https://media.istockphoto.com/photos/minimalistic-interior-of-white-bedroom-picture-id1342056531?b=1&k=20&m=1342056531&s=170667a&w=0&h=6oCMW8MJIYydHOS2OMeopGN1XH-HyDvuvciy8CEm2P8="
            alt=""
          />
          <div className="propertyListTitles">
            <h1>Hotels</h1>
            <h2>2332 hotels</h2>
          </div>
        </div>
        <div className="propertyListItem">
          <img
            src="https://media.istockphoto.com/photos/modern-luxury-house-with-private-infinity-pool-in-dusk-picture-id1319453433?b=1&k=20&m=1319453433&s=170667a&w=0&h=LlrZ-UCCXiEgTFRT7Ls41Z7YafxEG7lr7VtTnBO8uFc="
            alt=""
          />
          <div className="propertyListTitles">
            <h1>Apartments</h1>
            <h2>232 Apartments</h2>
          </div>
        </div>
        <div className="propertyListItem">
          <img
            src="https://media.istockphoto.com/photos/luxury-resort-zanzibar-island-picture-id1299710059?b=1&k=20&m=1299710059&s=170667a&w=0&h=mKzOuuScSwRVU4MRh18R5uOMfGrcGaHhvtekpnuJlow="
            alt=""
          />
          <div className="propertyListTitles">
            <h1>Resorts</h1>
            <h2>1321 Resorts</h2>
          </div>
        </div>
        <div className="propertyListItem">
          <img
            src="https://media.istockphoto.com/photos/triangular-modern-lake-house-at-fall-picture-id1327080125?b=1&k=20&m=1327080125&s=170667a&w=0&h=MElJJ3dR0Ng3J1ux-384q4K5JC9WNJjLv6d2ttrsZlw="
            alt=""
          />
          <div className="propertyListTitles">
            <h1>Cabins</h1>
            <h2>132 Cabins</h2>
          </div>
        </div>
        <div className="propertyListItem">
          <img
            src="https://media.istockphoto.com/photos/wide-angle-real-estate-interior-shot-of-a-beautiful-trendy-aframe-picture-id1322234491?b=1&k=20&m=1322234491&s=170667a&w=0&h=aTJKqFwwM6aHtfi4rtwLRKewP_lwTCvR7u8XqNFVoPo="
            alt=""
          />
          <div className="propertyListTitles">
            <h1>Villas</h1>
            <h2>3222 Villas</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default PropertyList;
