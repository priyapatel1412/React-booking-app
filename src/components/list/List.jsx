import { format } from "date-fns";
import React, { Component } from "react";
import { DateRange } from "react-date-range";
import Header from "../header/Header";
import withParams from "../helper";
import Navbar from "../navbar/Navbar";
import SearchItem from "../searchItem/SearchItem";
import "./List.css";

class List extends Component {
  constructor(props) {
    super(props);
    const { destination, date, options } = this.props.location.state;
    this.state = {
      destination: destination,
      date: date,
      options: options,
      openDate: false,
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <Navbar />
        <Header type="list" />
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="lsTitle">Search</h1>
              <div className="lsItem">
                <label>Destination</label>
                <input placeholder={this.state.destination} type="text" />
              </div>
              <div className="lsItem">
                <label>Check-in Date</label>
                <span
                  onClick={() =>
                    this.setState({ openDate: !this.state.openDate })
                  }
                >{`${format(
                  this.state.date[0].startDate,
                  "MM/dd/yyyy"
                )} to ${format(
                  this.state.date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {this.state.openDate && (
                  <DateRange
                    onChange={(item) =>
                      this.setState({ date: [item.selection] })
                    }
                    minDate={new Date()}
                    ranges={this.state.date}
                  />
                )}
              </div>
              <div className="lsItem">
                <label>Options</label>
                <div className="lsOptions">
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Min price <small>per night</small>
                    </span>
                    <input type="number" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Max price <small>per night</small>
                    </span>
                    <input type="number" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Adult</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={this.state.options.adult}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Children</span>
                    <input
                      type="number"
                      min={0}
                      className="lsOptionInput"
                      placeholder={this.state.options.children}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Room</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={this.state.options.room}
                    />
                  </div>
                </div>
              </div>
              <button>Search</button>
            </div>
            <div className="listResult">
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withParams(List);
