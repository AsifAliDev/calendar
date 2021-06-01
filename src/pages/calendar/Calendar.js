import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import CalendarRightSide from "./calendarRightSide";
import { creatBooking, getBooking } from "../../Redux/actions/userActions";

class Calendar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      totalBooking: [],
    };
    this.callApi();
  }
  callApi = () => {
    this.props.getBooking();
  };

  handleAdd = (data) => {
    this.setState({
      totalBooking: data,
    });
    this.props.creatBooking(data);
  };
  componentDidMount() {
    this.props.getBooking();
    let data = JSON.parse(localStorage.getItem("booking"));
    if (data) {
      this.setState({
        totalBooking: data,
      });
    } else {
      this.setState({
        totalBooking: [
          { time: "10:00", data: "" },
          { time: "10:30", data: "" },
          { time: "11:00", data: "" },
          { time: "11:30", data: "" },
          { time: "12:00", data: "" },
          { time: "12:30", data: "" },
          { time: "13:00", data: "" },
          { time: "13:30", data: "" },
          { time: "14:00", data: "" },
          { time: "14:30", data: "" },
        ],
      });
    }
  }
  static getDerivedStateFromProps(props, state) {
    if (props.createBooking?.booking?.message === "Successfully fetch") {
      return {
        totalBooking: props.createBooking?.booking?.data,
      };
    }
    if (props.getBooking?.booking?.message === "Successfully created") {
      return {
        totalBooking: props.createBooking?.booking?.data,
      };
    }
  }
  logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  render() {
    console.log(this.state);
    return (
      <div className="row" style={{ margin: "0px", padding: "0px" }}>
        <div
          className="col-sm-0 col-md-2 col-lg-2 col-xl-2 left-contaner sidebar"
          style={{
            height: "100vh",
            position: "fixed",
          }}
        >
          <div style={{ marginTop: "100px" }}></div>
          <a href="/calendar" className="active">
            Calendar
          </a>
          <a className="inactive">Dashboard</a>
          <a className="" onClick={this.logout}>
            Logout
          </a>
        </div>
        <div
          className="col-sm-12 col-md-10 col-lg-10 col-xl-10"
          style={{ marginLeft: "16.66%" }}
        >
          <CalendarRightSide
            data={this.handleAdd}
            totalBooking={JSON.stringify(this.state.totalBooking)}
          />
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      creatBooking,
      getBooking,
    },
    dispatch
  );
};
const mapStateToProps = ({ createBooking }) => {
  return {
    createBooking,
    getBooking,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
