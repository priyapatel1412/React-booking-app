import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "./Header.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { DateRange, DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { format } from "date-fns";
import withParams from "../helper";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: [
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: "selection",
        },
      ],
      openDate: false,
      openOptions: false,
      options: {
        adult: 1,
        children: 0,
        room: 1,
      },
      destination: "",
    };
  }
  handleOption(name, operation) {
    this.setState((prevState) => {
      let options = { ...prevState.options };
      options[name] = operation === "i" ? options[name] + 1 : options[name] - 1;
      return { options };
    });
  }

  handleSearch = () => {
    this.props.navigate("/hotels", {
      state: {
        destination: this.state.destination,
        date: this.state.date,
        options: this.state.options,
      },
    });
  };
  render() {
    return (
      <div className="header">
        <div
          className={
            this.props.type === "list"
              ? "headerContainer listmode"
              : "headerContainer"
          }
        >
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>
          </div>
          {this.props.type !== "list" && (
            <>
              <h1 className="headerTitle">
                A lifetime of discount? It's Genius.
              </h1>
              <p className="headerDesc">
                Get rewarded for your travel - unlock instant saving of 10% or
                more with a free LeisureInn booking account
              </p>
              <button className="headerButton">Sign in / Register</button>
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faBed} className="headerIcon" />
                  <input
                    type="text"
                    className="headerSearchInput"
                    placeholder="Where are you going?"
                    onChange={(e) =>
                      this.setState({ destination: e.target.value })
                    }
                  />
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="headerIcon"
                  />
                  <span
                    className="headerSearchText"
                    onClick={() =>
                      this.setState({ openDate: !this.state.openDate })
                    }
                  >
                    {`${format(
                      this.state.date[0].startDate,
                      "MM/dd/yyyy"
                    )} to ${format(this.state.date[0].endDate, "MM/dd/yyyy")}`}
                  </span>

                  {this.state.openDate && (
                    <DateRange
                      onChange={(item) =>
                        this.setState({ date: [item.selection] })
                      }
                      minDate={new Date()}
                      showSelectionPreview={true}
                      moveRangeOnFirstSelection={false}
                      months={1}
                      ranges={this.state.date}
                      direction="horizontal"
                      preventSnapRefocus={true}
                      calendarFocus="backwards"
                      className="date"
                    />
                  )}
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span
                    className="headerSearchText"
                    onClick={() =>
                      this.setState({ openOptions: !this.state.openOptions })
                    }
                  >
                    {`${this.state.options.adult} adult ${this.state.options.children} children ${this.state.options.room} room`}{" "}
                  </span>
                  {this.state.openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button
                            disabled={this.state.options.adult <= 1}
                            className="optionCounterButton"
                            onClick={() => this.handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {this.state.options.adult}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => this.handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                          <button
                            disabled={this.state.options.children <= 0}
                            className="optionCounterButton"
                            onClick={() => this.handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {" "}
                            {this.state.options.children}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => this.handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                          <button
                            disabled={this.state.options.room <= 1}
                            className="optionCounterButton"
                            onClick={() => this.handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {this.state.options.room}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => this.handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="headerSearchItem">
                  <button className="headerButton" onClick={this.handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default withParams(Header);
