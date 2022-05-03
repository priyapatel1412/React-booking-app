import React, { Component } from "react";
import Featured from "../featured/Featured";
import FeaturedProperties from "../featuredProperties/FeaturedProperties";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import withParams from "../helper";
import MailList from "../mailList/MailList";
import Navbar from "../navbar/Navbar";
import PropertyList from "../propertyList/PropertyList";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.params);
  }
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h1 className="homeTitle">Homes guests love</h1>
          <FeaturedProperties />
          <MailList />
          <Footer />
        </div>
      </div>
    );
  }
}

export default withParams(Home);
