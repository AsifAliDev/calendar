// @flow
import * as React from "react";
import "../../App.css";
import { Button, Modal, Table, Dropdown } from "react-bootstrap";

class calendarRightSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      currentBooking: {},
      timing: [],
      today: new Date(),
      fromTime: "",
      toTime: "",
      description: "",
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      timing: JSON.parse(props.totalBooking),
    };
  }

  handleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      fromTime: "",
      toTime: "",
      description: "",
    });
  };
  getDate = (today) => {
    let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let todaysDate = `${day[today.getDay()]}, ${today.getMonth()} ${
      month[today.getMonth()]
    } ${today.getFullYear()}`;
    return todaysDate;
  };
  handleFromTime = (data, index) => {
    this.setState({
      fromTime: data.time,
      toTimingStartIndex: index,
      toTime: "",
    });
  };
  handleToTime = (data, index) => {
    this.setState({
      toTime: data.time,
      toTimingEndIndex: index,
    });
  };
  handleChange = (data) => {
    this.setState({
      [data.target.name]: data.target.value,
    });
  };
  addAppointment = () => {
    let {
      isModalOpen,
      fromTime,
      toTime,
      description,
      toTimingStartIndex,
      toTimingEndIndex,
      timing,
    } = this.state;
    if (fromTime && toTime && description) {
      if (timing[toTimingStartIndex].data) {
        alert("Appoinment already exist");
      } else {
        timing[toTimingStartIndex].data = {
          fromTime,
          toTime,
          description,
          totalSloat: [
            toTimingStartIndex,
            toTimingStartIndex + toTimingEndIndex + 1,
          ],
        };
        this.props.data(timing);
        this.setState({
          isModalOpen: !isModalOpen,
          fromTime: "",
          toTime: "",
          description: "",
        });
      }
    } else {
      alert("Some Fields are missing");
    }
  };
  allRow = (data) => {
    if (data) {
      let toBeExecute = data[1] - data[0];
      if (toBeExecute >= 1) {
        for (let i = data[0]; i < data[1]; i++) {
          setTimeout(() => {
            if (document.getElementById(`${i}`)) {
              document.getElementById(`${i}`).style.backgroundColor = `skyblue`;
              document.getElementById(`${i}`).style.color = `white`;
              document.getElementById(`${i}`).style.border = "none";
            }
          }, 500);
        }
      }
    }
  };

  render() {
    let { isModalOpen, today, fromTime, toTime, timing, toTimingStartIndex } =
      this.state;
    let timeSloat = (timing || []).map((data, index) => {
      if (index !== timing.length - 1) {
        this.allRow(data.data?.totalSloat);
        return (
          <tr
            key={index}
            style={{
              width: "100%",
              border: "skyblue",
              height: "100px",
            }}
          >
            <td style={{ width: "15%" }}>{data && data.time}</td>
            <td
              style={{
                width: "85%",
                backgroundColor: data.data?.description ? "skyblue" : "white",
              }}
              id={index}
            >
              {data.data?.fromTime ? (
                <>
                  <br />
                  <div>
                    {data.data?.fromTime} {" -"} {data.data?.toTime}
                  </div>
                </>
              ) : null}
              {data.data?.description ? (
                <div style={{ fontWeight: "800" }}>
                  {data.data?.description}
                </div>
              ) : null}
            </td>
          </tr>
        );
      }
    });

    let fromTimeDropdown = timing.map((data, index) => {
      return (
        <Dropdown.Item
          key={index}
          onClick={() => this.handleFromTime(data, index)}
        >
          {data.time}
        </Dropdown.Item>
      );
    });
    let availableTime = timing.slice(toTimingStartIndex + 1);
    let toTimeDropdown = availableTime.map((data, index) => {
      return (
        <Dropdown.Item
          key={index}
          onClick={() => this.handleToTime(data, index)}
        >
          {data.time}
        </Dropdown.Item>
      );
    });
    return (
      <div className="container">
        <div className="calendar-heading">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
              <div className="header-text">Calendar</div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6"></div>
          </div>
        </div>
        <div style={{ float: "right", height: "70px", marginTop: "10px" }}>
          <button
            onClick={this.handleModal}
            type="button"
            class="btn btn-primary"
            style={{ width: "100px" }}
          >
            Add
          </button>
        </div>
        {isModalOpen ? (
          <Modal.Dialog>
            <Modal.Header closeButton onClick={this.handleModal}>
              <Modal.Title>Add Appointment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container">
                <div>Date</div>
                <div>{this.getDate(today)}</div>
                <br />
                <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <div>From</div>
                    <div>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          {fromTime ? fromTime : "From Time"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>{fromTimeDropdown}</Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <div>To</div>
                    <div>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          {toTime ? toTime : "To Time"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>{toTimeDropdown}</Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
                <br />
                <div>Description</div>
                <div>
                  <textarea
                    type="text"
                    style={{ width: "100%" }}
                    rows="4"
                    name="description"
                    onChange={this.handleChange}
                    value={this.state.description}
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.addAppointment}>
                Add Appointment
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        ) : (
          <div>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>{"Name"}</th>
                </tr>
              </thead>
              <tbody>{timeSloat}</tbody>
            </Table>
          </div>
        )}
      </div>
    );
  }
}
export default calendarRightSide;
